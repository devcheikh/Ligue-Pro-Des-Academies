
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
                <div class="chat-input-area" style="flex-direction: column; gap: 5px;">
                    <div style="display: flex; gap: 5px; width: 100%;">
                        <input type="email" class="chat-input" id="chatEmail" placeholder="Email (optionnel)" style="flex: 1; font-size: 11px; padding: 5px 10px; height: auto;">
                    </div>
                    <div style="display: flex; gap: 5px; width: 100%;">
                        <input type="text" class="chat-input" id="chatInput" placeholder="Message..." maxlength="200" style="flex: 1;">
                        <button class="chat-send" id="chatSend">
                            <i class='bx bx-send'></i>
                        </button>
                    </div>
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
    const emailInput = document.getElementById('chatEmail');
    const sendBtn = document.getElementById('chatSend');

    let username = localStorage.getItem('chat_username');
    if (localStorage.getItem('lpa_user_email')) {
        emailInput.value = localStorage.getItem('lpa_user_email');
    }

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
        const email = emailInput.value.trim();
        if (!content) return;

        if (!username) {
            username = prompt("Choisissez un pseudo pour le chat :");
            if (!username) return;
            localStorage.setItem('chat_username', username);
        }

        // Clear input
        input.value = '';

        // Attempt send
        const result = await sendMessage(username, content, email);
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
