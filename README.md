# Built-in GTNode Bots
All bots written in JavaScript (ECMAScript 5.1).

## Available functions

### API
- `updateProfile({ name, description, direct, groups })` - update bot profile
- `sendMessage(chatId, text)` - send message to chat

### Events
- `onDirectMessage(func(message))` - register callback for new messages
- `onWebhook(name, func(chatId, content))` - register callback for new webhooks (not implemented yet)
- `onGroupChatJoin(func(chatId))` - register callback for hello message (not implemented yet)

### Utils
- `md5(text)` - calculate md5 hash
