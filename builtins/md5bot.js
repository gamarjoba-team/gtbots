updateProfile({
    name: "MD5 Bot",
    description: "This bot calculated MD5 hash value for each given message",
    direct: true,
    groups: false
});

onDirectMessage(function (message) {
    if (message.text === "") {
        sendMessage(message.chatId, "Your message is empty");
    } else {
        sendMessage(message.chatId, md5(message.text));
    }
});
