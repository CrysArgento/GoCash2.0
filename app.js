// Configura Firebase con tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyB9jM7U0Bo20_99g65Zt6b2QJ83HvIzO_4",
          authDomain: "gocash-2e170.firebaseapp.com",
          projectId: "gocash-2e170",
          storageBucket: "gocash-2e170.appspot.com",
          messagingSenderId: "1036177032838",
          appId: "1:1036177032838:web:bee2d1549c6049afd3b307",
          measurementId: "G-NVW189XH5E"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Función para enviar mensajes
  function sendMessage(roomNumber) {
    const messageInput = document.getElementById(`message${roomNumber}`);
    const messageText = messageInput.value;
    const chatRef = firebase.database().ref(`sala${roomNumber}`);
    chatRef.push().set({
      text: messageText
    });
    messageInput.value = '';
  }
  
  // Función para mostrar mensajes en el chat
  function displayChat(roomNumber) {
    const chatDiv = document.getElementById(`chat${roomNumber}`);
    const chatRef = firebase.database().ref(`sala${roomNumber}`);
    chatRef.on('child_added', (snapshot) => {
      const message = snapshot.val();
      const messageElement = document.createElement('p');
      messageElement.innerText = message.text;
      chatDiv.appendChild(messageElement);
    });
  }
  
  // Llama a la función para mostrar mensajes en cada sala
  displayChat(1);
  displayChat(2);
  displayChat(3);
  