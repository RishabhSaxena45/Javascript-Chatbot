let mic = document.getElementById('mic');
let middle = document.querySelector('#middle');
let chatuser = document.querySelector('chatuser');
let chatrobo = document.querySelector('chatrobo');
let inner = document.querySelector('#inner');

let intro = ["Hello, I am Rishabh Robo", "Hi, I am a Robo", "Hello, My name is Pappu"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like to play cricket"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function usermsg(message){
    let output = '';
    output +=  `<div class="chatuser">${message}</div>`;
    inner.innerHTML += output;
    return inner;
}

function chatmsg(message){
    let output = '';
    output +=  `<div class="chatrobo">${message}</div>`;
    inner.innerHTML += output;
    return inner;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Sorry I dont understand';
    if(message.includes('Who are you?')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('Fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('How are you' || 'How are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('Tell me something about you' || 'Tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('Pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('Thank you' || 'Thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('Talk to you' || 'Talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('Who am I?')){
        let finalresult = 'Rishabh Saxena';
        speech.text = finalresult;
    }
    if(message.includes('What are my hobbies?')){
        let finalresult = 'You love to play cricket with class.';
        speech.text = finalresult;
    }
    if(message.includes('Who is my favourite cricketer?')){
        let finalresult = 'Rohit sharma goes big down the ground';
        speech.text = finalresult;
    }
    if(message.includes('Hello')){
        let finalresult = 'Hello , How may I assist you?';
        speech.text = finalresult;
    }

    window.speechSynthesis.speak(speech);
    middle.appendChild(chatmsg(speech.text))

}


recognition.onresult=function(e){
    let resultindex = e.resultIndex;
    let trans = e.results[resultindex][0].transcript;
    middle.appendChild(usermsg(trans));
    chatbotvoice(trans);
    console.log(trans);
}

mic.addEventListener('click' , ()=>{
    recognition.start();
    console.log("Activated");
})
