var responses = [ // taken from https://d23.com/how-to-say-i-am-groot-in-different-languages/
    "I am Groot.",
    "Jeg er Groot.",
    "Ich bin Groot.",
    "Je s'appelle Groot.",
    "O wau ‘o Groot.",
    "Sono Groot.",
    "Ego sum Groot",
    "Jestem Groot",
    "Eu sou Groot",
    "O a‘u o Groot",
    "Yo soy Groot",
    "Mimi ni Groot"
];

gtnode.updateProfile({
    name: "Groot Bot",
    description: "This bot is Groot.",
    direct: true,
    groups: false
});

gtnode.onDirectMessage(function (message) {
    var response = responses[Math.floor(Math.random() * responses.length)];
    gtnode.sendMessage(message.chatId, response);
});
