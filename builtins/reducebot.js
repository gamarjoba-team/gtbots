updateProfile({
    name: "Reduce Bot",
    description: "This bot remove one by one symbols from original message",
    direct: true,
    groups: false
});

onDirectMessage(function (message) {
    var s = message.text;
    while (s.length > 0) {
        sendMessage(message.chatId, s);
        s = s.slice(0, -1); // remove last symbol
    }
});
