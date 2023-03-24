# Built-in GTNode Bots
All bots written in javascript.

Used https://github.com/dop251/goja interpreter with additional functions.

## Internal API

## gtnode object
- `gtnode.updateProfile({name, description, direct, groups})` - update bot profile (WIP)
- `gtnode.sendMessage(chatId, text)` - send message to chat (WIP)
- `gtnode.onDirectMessage(func(message))` - register callback for new messages (WIP)
- `gtnode.onWebhook(name, func(chatId, content))` - register callback for new webhooks (WIP)
- `gtnode.onGroupChatJoin(func(chatId))` - register callback for hello message (WIP)

## gtutils object
- `gtutils.md5(text)` - calculate md5 hash (WIP)
