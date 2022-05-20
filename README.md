# discord-series-bot
Tiny Discord bot that gets series updates from different Discord servers and other sources and posts them into a specified Discord channel.

## Requirements
- Ensure you have at least Node 16.6 running
- The Discord Bot Application must have ``bot`` and ``applications.commands`` scopes as per the [discord.js guide](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links).

## Setup
2. Run ``npm i`` in project directory
3. Add ``config.json`` file with ``token`` (Discord Bot Token), ``updatesChannelId`` (Discord channel to post series updates to) and ``readsChannelId`` (Discord channel to get series updates from)
4. Run ``node .``
