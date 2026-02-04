
document.addEventListener('DOMContentLoaded', () => {
    // Inject Chat HTML
    const chatHTML = `
        <div class="chat-widget-container">
            <button class="chat-toggle-btn" id="chatToggle">
                <i class='bx bx-message-rounded-dots'></i>
            </button>
            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <div class="chat-title">
                        <i class='bx bx-football'></i> Fan Zone
                    </div>
                    <i class='bx bx-x chat-close' id="chatClose"></i>
                </div>
                <div class="chat-messages" id="chatMessages">
                    <div class="chat-message other">
                        <span class="chat-username">Ligue Pro</span>
                        Bienvenue dans le chat officiel !
                    </div>
                </div>
                <div class="chat-input-area">
                    <input type="text" class="chat-input" id="chatInput" placeholder="Message..." maxlength="200">
                    <button class="chat-send" id="chatSend">
                        <i class='bx bx-send'></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // Elements
    const toggleBtn = document.getElementById('chatToggle');
    const closeBtn = document.getElementById('chatClose');
    const chatWindow = document.getElementById('chatWindow');
    const messagesContainer = document.getElementById('chatMessages');
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');

    let username = localStorage.getItem('chat_username');

    // UI Toggles
    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            scrollToBottom();
            input.focus();
        }
    });

    closeBtn.addEventListener('click', () => chatWindow.classList.remove('active'));

    // Send Message
    async function handleSend() {
        const content = input.value.trim();
        if (!content) return;

        if (!username) {
            username = prompt("Choisissez un pseudo pour le chat :");
            if (!username) return;
            localStorage.setItem('chat_username', username);
        }

        // Optimistic UI update (optional, but Supabase Realtime is fast so maybe wait?)
        // Let's rely on Realtime for now to confirm receipt, but show spinner?
        // Actually, better to show immediately as pending? 
        // For simplicity, we send and wait for the subscription to echo it back OR just append it.
        // If we append it and then subscription comes, we might duplicate.
        // Standard pattern: Send, and ignore your own message in subscription by ID?
        // Or simpler: clear input, wait for subscription. Supabase is fast ~100ms.

        // Let's just clear input
        input.value = '';

        // Attempt send
        const result = await sendMessage(username, content);
        if (!result) {
            alert("Erreur: Impossible d'envoyer le message.");
        }
    }

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    // Render Message
    function appendMessage(msg) {
        if (!msg) return;

        const isSelf = msg.username === username;
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${isSelf ? 'self' : 'other'}`;
        msgDiv.innerHTML = `
            <span class="chat-username">${msg.username}</span>
            ${escapeHtml(msg.content)}
        `;
        messagesContainer.appendChild(msgDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Helper: Escape HTML to prevent XSS
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function (m) { return map[m]; });
    }

    // Load initial messages
    getRecentMessages(50).then(msgs => {
        // Clear default msg if we have real ones? Or keep it?
        if (msgs && msgs.length > 0) {
            messagesContainer.innerHTML = '';
            msgs.forEach(appendMessage);
        }
    });

    // Subscribe
    subscribeToMessages((newMsg) => {
        appendMessage(newMsg);
    });
});
