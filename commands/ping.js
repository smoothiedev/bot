exports.run = (client, message) => {
      message.channel.send({embed: {
		  color: 3447003,
  description: "Pong"
    }
	});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'ping'
};