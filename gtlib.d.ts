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
declare function updateProfile(profile: { name: string, direct: boolean, description: string, groups: boolean }): void;

/**
 * Called when a message is received in direct chat
 */
declare function onDirectMessage(fn: (message: { chatId: string, text: string }) => void): void;
