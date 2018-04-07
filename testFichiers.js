/* Eric Tan */
client.on("message", (message) => {
	if (message.content.startsWith("$Tan") || message.content.startsWith("$tan")){
		message.channel.send("HENRI TAN !! ");
	}
});
