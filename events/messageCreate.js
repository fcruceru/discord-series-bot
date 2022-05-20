const { updatesChannelId } = require("../config.json");

module.exports = {
	name: "messageCreate",
	execute(message) {
		console.log(
			`${message.author} in #${message.channel.name} typed a message: ${message.content}.`,
		);
		if (message.content.includes("@MP")) {
			let chapter = message.content.substring(
				message.content.search(/chapter-\d{4}/) + 8,
				message.content.length - 1,
			);
			console.log(`Got new MP chapter: ${chapter}`);

			// Send message to correct channel
			const updatesChannel =
				message.client.channels.cache.get(updatesChannelId);
			let url = message.content.substring(
				message.content.search(/https?:\/\//),
				message.content.length,
			);
			updatesChannel.send(`New MP Chapter **${chapter}** out: ${url}`);
		}
	},
};
