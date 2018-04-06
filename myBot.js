const Discord = require("discord.js");
const client = new Discord.Client();
const nb_image = 5;

function alea(){
	return Math.floor(Math.random() * nb_image);
}

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("$ping")) {
    message.channel.send("pong!");
  }
});

client.on("message", (message) => {
	if (message.content.startsWith("$Gateau") || message.content.startsWith("$gateau")){
		message.channel.send("au chocolat");
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("$picture")) {
		message.channel.send("", {
			file : "./image/image" + alea() + ".jpg"
		});
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("$nul")) {
		message.channel.send("gros naze", {
			file : "./image/naze.jpg"
		});
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("$joie")) {
		message.channel.send("La joie", {
			file : "./image/joie" + alea() + ".jpg"
		});
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("$2000")){
		message.channel.send("LES 2000 SONT DEBILES");
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("$1999")) {
		message.channel.send("Les 1999, ces dieux :heart:", {
			file : "./image/1999.gif"
		});
	}
});

client.login(process.env."NDI2NDcyMDM3MzE4NTI0OTQz.Dakwsw.gVywgSqe_qYHmIfMTQmbFTD53BQ");
