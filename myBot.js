const Discord = require("discord.js");		//Pour utiliser la librairie discord.js
const client = new Discord.Client();		//Pour créer un nouveau client discord
const nb_image = 5;				// Nombre d'images pour le générateur de valeur aléatoire

/*Fonction Aléatoire pour avoir des images random */
function alea(){
	return Math.floor(Math.random() * nb_image);
}

/* Quand la console est prête */
client.on("ready", () => {
  console.log("I am ready!");
});

/* Le ping pong */
client.on("message", (message) => {
  if (message.content.startsWith("$ping")) {
    message.channel.send("pong!");
  }
});

/* Le gateau */
client.on("message", (message) => {
	if (message.content.startsWith("$Gateau") || message.content.startsWith("$gateau")){
		message.channel.send("au chocolat");
	}
});

/* Eric Tan */
client.on("message", (message) => {
	if (message.content.startsWith("$Tan") || message.content.startsWith("$tan")){
		message.channel.send("HENRI TAN !! Nan je déconne évidemment que je m'appelle Eric Tan.");
	}
});

/* Images aléatoires de Watanabe You */
client.on("message", (message) => {
	if (message.content.startsWith("$you")) {
		message.channel.send("", {
			file : "./image/img_you" + alea() + ".jpg"
		});
	}
});

/* Quand quelqu'un est nul */
client.on("message", (message) => {
	if (message.content.startsWith("$nul")) {
		message.channel.send("gros naze", {
			file : "./image/img_naze.jpg"
		});
	}
});

/* Images aléatoires quand on est content */
client.on("message", (message) => {
	if (message.content.startsWith("$joie")) {
		message.channel.send("La joie", {
			file : "./image/img_joie" + alea() + ".jpg"
		});
	}
});

/* Les 2000 */
client.on("message", (message) => {
	if (message.content.startsWith("$2000")){
		message.channel.send("LES 2000 SONT DEBILES");
	}
});

/* Les 1999 */
client.on("message", (message) => {
	if (message.content.startsWith("$1999")) {
		message.channel.send("Les 1999, ces dieux :heart:", {
			file : "./image/img_1999.gif"
		});
	}
});

/* Les 1998 */
client.on("message", (message) => {
	if (message.content.startsWith("$1998")) {
		message.channel.send("Les 1998, c'est des Thugs :sunglasses:", {
			file : "./image/chat_thug.gif"
		});
	}
});

/* Interaction dans un channel audio */
client.on('message', message => {

  if (message.content.startsWith('$faitpeterleson')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.member.channels;
    //  .filter(function (channel) { return channel.type === 'voice' })
      //.first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
   // let args = message.content.split('http://www.youtube.com/*')
    // On rejoint le channel audio
    voiceChannel.join()
      .then(connection => console.log ('connection') {
        // On démarre un stream à partir de la vidéo youtube
       /* let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()*/
          })
      })
  }

})

/* Le login pour se connecter avec le robot */
client.login(process.env.BOT_TOKEN);
