/**
 * The profile of the bot
 */
declare class Profile {
    name: string;
    description: string;
    direct: boolean;
    group: boolean;
}

/**
 * A message received by the bot
 */
declare class Message {
    chatId: string;
    text: string;
}

/**
 * Calculate the MD5 hash of a string
 */
declare function md5(text: string): string;

/**
 * Send a message to a chat
 */
declare function sendMessage(chatId: string, text: string): void;

/**
 * Update the profile of the bot
 */
declare function updateProfile(profile: Profile): void;

/**
 * Called when a message is received in direct chat
 */
declare function onDirectMessage(message: Message): void;
