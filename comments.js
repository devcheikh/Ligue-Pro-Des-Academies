
document.addEventListener('DOMContentLoaded', () => {
    // Only run if we are on a page with a specific ID that needs comments (u17 or u19)
    // We can detect this by checking if the script tag has a data-context or just by page filename/url?
    // Let's assume the HTML will contain a container `<div id="comments_container" data-context="u17"></div>`

    const container = document.getElementById('comments_container');
    if (!container) return;

    const contextId = container.getAttribute('data-context') || 'general';

    // Inject Comments HTML Structure
    container.innerHTML = `
        <div class="comments-section">
            <div class="comments-header">
                <h3 class="comments-title"><i class='bx bx-conversation'></i> Commentaires</h3>
            </div>
            
            <div class="comment-form">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
                    <div class="form-group" style="margin: 0;">
                        <input type="text" id="commentUsername" class="form-input" placeholder="Votre Nom / Pseudo" maxlength="30" style="margin: 0;">
                    </div>
                    <div class="form-group" style="margin: 0;">
                        <input type="email" id="commentEmail" class="form-input" placeholder="Email (optionnel)" style="margin: 0;">
                    </div>
                </div>
                <div class="form-group">
                    <textarea id="commentContent" class="form-textarea" placeholder="Votre commentaire sur le championnat..." maxlength="500"></textarea>
                </div>
                <button id="postCommentBtn" class="btn-primary" style="width: 100%;">
                    <i class='bx bx-send'></i> Publier
                </button>
            </div>

            <div class="comments-list" id="commentsList">
                <p style="text-align:center; opacity:0.5;">Chargement des commentaires...</p>
            </div>
        </div>
    `;

    const list = document.getElementById('commentsList');
    const btn = document.getElementById('postCommentBtn');
    const nameInput = document.getElementById('commentUsername');
    const emailInput = document.getElementById('commentEmail');
    const contentInput = document.getElementById('commentContent');

    // Pre-fill if known
    if (localStorage.getItem('lpa_user_name')) nameInput.value = localStorage.getItem('lpa_user_name');
    else if (localStorage.getItem('chat_username')) nameInput.value = localStorage.getItem('chat_username');

    if (localStorage.getItem('lpa_user_email')) emailInput.value = localStorage.getItem('lpa_user_email');

    // Render single comment
    function renderComment(c) {
        const div = document.createElement('div');
        div.className = 'comment-item';
        div.innerHTML = `
            <div class="comment-avatar">${c.username.charAt(0).toUpperCase()}</div>
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">${escapeHtml(c.username)}</span>
                    <span class="comment-date">${new Date(c.created_at).toLocaleDateString()} ${new Date(c.created_at).toLocaleTimeString()}</span>
                </div>
                <div class="comment-text">${escapeHtml(c.content)}</div>
            </div>
        `;
        // Prepend or append? Newest first -> Prepend.
        // If we are loading initial list (fetched reverse chronologically), we append.
        // If it's a new realtime comment, we prepend.
        // Actually getComments returns newest on top.
        return div;
    }

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

    // Load Comments
    getComments(contextId).then(comments => {
        list.innerHTML = '';
        if (comments.length === 0) {
            list.innerHTML = '<p style="text-align:center; opacity:0.5;">Soyez le premier à commenter !</p>';
        } else {
            comments.forEach(c => {
                list.appendChild(renderComment(c));
            });
        }
    });

    // Subscribe
    subscribeToComments(contextId, (newComment) => {
        // Remove empty message if exists
        const emptyMsg = list.querySelector('p');
        if (emptyMsg) emptyMsg.remove();

        // Prepend new comment
        list.prepend(renderComment(newComment));
    });

    // Post Comment
    btn.addEventListener('click', async () => {
        const user = nameInput.value.trim();
        const email = emailInput.value.trim();
        const text = contentInput.value.trim();

        if (!user || !text) {
            alert("Merci de remplir votre nom et le message.");
            return;
        }

        // Disable btn
        btn.disabled = true;
        btn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Envoi...';

        const result = await sendComment(contextId, user, text, email);

        btn.disabled = false;
        btn.innerHTML = '<i class="bx bx-send"></i> Publier';

        if (result) {
            contentInput.value = '';
        } else {
            // Error handled in data.js but let's ensure UI reflects
        }
    });

});
