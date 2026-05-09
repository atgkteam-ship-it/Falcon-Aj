export async function sendMessageToAI(message) {
  return {
    success: true,
    reply: 'Falcon AI response: ' + message
  };
}
