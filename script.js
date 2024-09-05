document.addEventListener('DOMContentLoaded', () => {
    const usernameContainer = document.getElementById('username-container');
    const chatContainer = document.getElementById('chat-container');
    const usernameInput = document.getElementById('username-input');
    const startChatButton = document.getElementById('start-chat');
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    let username = '';

    function startChat() {
        username = usernameInput.value.trim();
        if (username) {
            usernameContainer.style.display = 'none';
            chatContainer.style.display = 'flex';
        }
    }

    // Handle the 'Start Chat' button click
    startChatButton.addEventListener('click', startChat);

    // Handle 'Enter' key press on username input
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            startChat();
        }
    });

    function addMessage(message) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const timestamp = `${hours}:${minutes}`;

        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        // Add user avatar
        const avatarElement = document.createElement('div');
        avatarElement.classList.add('avatar');
        avatarElement.textContent = username.charAt(0).toUpperCase(); // Placeholder for avatar initials

        // Add message bubble
        const bubbleElement = document.createElement('div');
        bubbleElement.classList.add('bubble');
        bubbleElement.textContent = message;

        // Add timestamp
        const timestampElement = document.createElement('div');
        timestampElement.classList.add('timestamp');
        timestampElement.textContent = timestamp;

        bubbleElement.appendChild(timestampElement);
        messageElement.appendChild(avatarElement);
        messageElement.appendChild(bubbleElement);
        chatBox.appendChild(messageElement);

        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message);
            messageInput.value = ''; // Clear the input
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
