module.exports = {
	name: "messageCreate",
	execute(message) {
		console.log(
			`${message.author} in #${message.channel.name} typed a message: ${message.content}.`,
		);
	},
};
