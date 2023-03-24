gtnode.updateProfile({
    name: "MD5 Bot",
    description: "This bot calculated MD5 hash value for each given message",
    direct: true,
    groups: false
});

gtnode.onDirectMessage(function (message) {
    if (message.text === "") {
        gtnode.sendMessage(message.chatId, "Your message is empty");
    } else {
        gtnode.sendMessage(message.chatId, gtutils.md5(message.text));
    }
});
