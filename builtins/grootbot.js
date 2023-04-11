var responses = [ // taken from https://d23.com/how-to-say-i-am-groot-in-different-languages/
    "Ben Groot'um",
    "Ego sum Groot",
    "Eu sou Groot",
    "I am Groot",
    "Ich bin Groot",
    "Ik ben Groot",
    "Io sono Groot",
    "Jag är Groot",
    "Je s'appelle Groot",
    "Je suis Groot",
    "Jeg er Groot",
    "Jestem Groot",
    "Mimi ni Groot",
    "O a‘u o Groot",
    "O wau ‘o Groot",
    "Olen Groot",
    "Sono Groot",
    "Soy Groot",
    "Yo soy Groot",
    "Én vagyok Groot",
    "אני גרוט",
    "أنا جروت",
    "मैं ग्रूट हूँ",
    "我是格鲁特",
    "私はグルートです",
    "나는 그루트입니다"
];

updateProfile({
    name: "Groot Bot",
    description: "This bot is Groot",
    direct: true,
    groups: false
});

onDirectMessage(function (message) {
    var response = responses[Math.floor(Math.random() * responses.length)];
    sendMessage(message.chatId, response);
});
