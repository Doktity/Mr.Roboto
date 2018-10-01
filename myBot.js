const Discord = require("discord.js");		//Pour utiliser la librairie discord.js
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new Discord.Client();		//Pour créer un nouveau client discord
const nb_image = 5;				// Nombre d'images pour le générateur de valeur aléatoire
const streamOptions = { seek : 0, volume : 5};

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
		message.channel.send("HENRI TAN !! Nan je déconne évidemment je m'appelle Eric Tan.");
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
		if (message.content.substr("$2000".lenght)=="1"){
			message.channel.send("Les 2000 sont beaux");
		}else{
			message.channel.send("LES 2000 SONT DEBILES");
		}
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

/* La dance */
client.on("message", (message) => {
	if (message.content.startsWith("$dance")) {
		message.channel.send("DANCE", {
			file : "./image/img_dance" + alea() + ".gif"
		});
	}
});


/* La fête */
client.on("message", (message) => {
	if (message.content.startsWith("$party")) {
		message.channel.send("LA FETE", {
			file : "./image/img_party" + alea() + ".gif"
		});
	}
});


/* Les 1998 */
client.on("message", (message) => {
	if (message.content.startsWith("$1998")) {
		message.channel.send("Les 1998, c'est des Thugs :sunglasses:", {
			file : "./image/img_1998.gif"
		});
	}
});


/* Images aléatoires quand on est triste */
client.on("message", (message) => {
	if (message.content.startsWith("$triste")) {
		message.channel.send("La tristesse", {
			file : "./image/img_triste" + alea() + ".jpg"
		});
	}
});

/* Images aléatoires quand on est JOJO */
client.on("message", (message) => {
	if (message.content.startsWith("$jojo") || message.content.startsWith("$JOJO")) {
		message.channel.send("SONO CHI NO SADAME", {
			file : "./image/img_jojo" + alea() + ".jpg"
		});
	}
});

/* Quand quelqu'un est pas content */
client.on("message", (message) => {
	if (message.content.startsWith("$pascontent")) {
		message.channel.send("", {
			file : "./image/gohan.gif"
		});
	}
});

/* Mathis*/
client.on("message", (message) => {
	if (message.content.startsWith("$mathis")) {
		message.channel.send("Mathis ce dieu :heart:", {
			file : "./image/téléchargement.jpeg"
		});
	}
});

/* Clément*/
client.on("message", (message) => {
	if (message.content.startsWith("$clément")) {
		message.channel.send("Clément PGM Fortnite :sunglasses:", {
			file : "./image/bambi.png"
		});
	}
});

/*Benjamin*/ 
client.on("message", (message) => { 
	if (message.content.startsWith("$benjamin")) { 
		message.channel.send("***Mais qui est cet homme magnifique ??? Mais c'est Ben :ok_hand: ***", { 
			file : "./image/wow.gif" 
		});
	}
});

/* voir l'avatar des gens */
client.on("message", (message) => {
	if(message.content.startsWith("$avatar")) { //IF for the command.
	    if(message.mentions.users.first()) { //Check if the message has a mention in it.
		  let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
		  let output = user.username + user.discriminator /*Username and Discriminator*/ +
		  "\nAvatar URL: " + user.avatarURL; /*The Avatar URL*/
		  message.channel.sendMessage(output); //We send the output in the current channel.
	    } else {
		  message.reply("La personne mentionnée n'est pas trouvée :("); //Reply with a mention saying "Invalid user."
	    }
	}
});


// J'AI TENTER DES TRUCS MES CA FONCTIONNE PAS :'(


/* Interaction dans un channel audio */
/*client.on('message', message => {
	if (message.content.startsWith('$faitpeterleson')) {
	// On récupère le premier channel audio du serveur
  		let voiceChannel = message.member.channels;
     		.filter(function (channel) { return channel.type === 'voice' });
		.first();
  		// On récupère les arguments de la commande 
 	 	// il faudrait utiliser une expression régulière pour valider le lien youtube
   		let args = message.content.split('http://www.youtube.com/*');
   		// On rejoint le channel audio
    		voiceChannel.join();
      		.then(function (connection) {
        		// On démarre un stream à partir de la vidéo youtube
       			let stream = YoutubeStream(args[1]);
        		stream.on('error', function () {
          			message.reply("Je n'ai pas réussi à lire cette vidéo :(");
          			connection.disconnect();
        		});
        		// On envoie le stream au channel audio
        		// Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        		connection
          		.playStream(stream);
          		.on('end', function () {
            			connection.disconnect();
          		});
      		})
 	}
});*/


client.on('message', message => {
	if (message.content.startsWith('$coucou bot')) {
		let user = message.member.user;
		message.channel.send('COUCOU ' + user);
	}
});


client.on('message', message => {
	if (message.content.startsWith('$ALED')) {
		message.author.sendMessage("$ping -> renvoi pong\n$Gateau ou $gateau -> renvoi un délicieux gateau au chocolat\n");
	}
});



client.on('message', message => {
	if (message.content.startsWith('$play')) {
		console.log('Got a song request!');
		const channel = message.member.voiceChannel;
		if (!channel) {
			return message.reply('Please be in a voice channel first!');
		}
		channel.join()
			.then(connection => {
				const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' });
				const dispatcher = connection.play(stream);
				message.channel.send("je suis la" + dispatcher);
				dispatcher.on('end', () => {
					channel.leave();
				});
			});
	}
});


/* Le login pour se connecter avec le robot */
client.login(process.env.BOT_TOKEN);
