const socket = io();
const message = document.getElementById('message');
const send_msg = document.getElementById('send_msg');
const chatBox = document.getElementById('chatbox');
const send_name = document.getElementById('send_name');
const name_field = document.getElementsByName('username');
const tlacitko = document.getElementsByClassName('tlacitko');
const mistnosti = document.getElementById('mistnost');

const {username, mistnost}=Qs.parse(location.search,{
    ignoreQueryPrefix: true
});

socket.emit('connection', {username, mistnost});

mistnosti.innerHTML= 'Nacházíš se v  místnosti: ' + mistnost;

send_msg.addEventListener('click', function(e){

    //e.preventDefault();
    if (message.value){
        socket.emit('chat', username+': ' + message.value);
    }
});



socket.on('chat', msg => {
    console.log(msg);

    chatBox.innerHTML += `<div>${msg}</div>`;
});


