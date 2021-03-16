const socket = io();
const message = document.getElementById('message');
const send_msg = document.getElementById('send_msg');
const chatBox = document.getElementById('chatbox');
const send_name = document.getElementById('send_name');
const name_field = document.getElementsByName('username');
const tlacitko = document.getElementsByClassName('tlacitko');

const {username, mistnost}=Qs.parse(location.search,{
    ignoreQueryPrefix: true
});


send_msg.addEventListener('click', function(e){
    if (message.value){
        socket.emit('chat', myName+': ' + message.value);

    }
});



socket.on('chat', message => {
    console.log(message);

    chatBox.innerHTML += `<div>${message}</div>`;
});
