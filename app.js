document.addEventListener('DOMContentLoaded', function () {
  const chatWindow = document.getElementById('chatWindow');
  const messageInput = document.getElementById('messageInput');
  const senderNameInput = document.getElementById('senderName');
  const sendMessageButton = document.getElementById('sendMessage');

  function addMessage(text, sender, isUser = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'me text-primary' : 'them text-secondary'}`;
    
    // Add sender name
    const senderSpan = document.createElement('span');
    senderSpan.className = 'sender';
    senderSpan.textContent = `${sender}: `;
    
    // Add message text
    const textSpan = document.createElement('span');
    textSpan.className = 'text';
    textSpan.textContent = text;
    
    messageDiv.appendChild(senderSpan);
    messageDiv.appendChild(textSpan);
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
  }

  sendMessageButton.addEventListener('click', function () {
    const message = messageInput.value.trim();
    const senderName = senderNameInput.value.trim() || 'Anonymous';
    
    if (message !== '') {
      addMessage(message, senderName); // User's message
      messageInput.value = '';

      // Simulate bot response
      setTimeout(() => {
        addMessage('This is an automated response!', 'Bot', false); // Bot's message
      }, 1000);
    }
  });

  // Allow pressing Enter to send message
  messageInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      sendMessageButton.click();
    }
  });
});
