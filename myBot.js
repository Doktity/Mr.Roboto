const Discord = require("discord.js");		//Pour utiliser la librairie discord.js
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new Discord.Client();		//Pour créer un nouveau client discord
const nb_image = 10;				// Nombre d'images pour le générateur de valeur aléatoire
const streamOptions = { seek : 0, volume : 5};

/*Fonction Aléatoire pour avoir des images random */
function alea(){
	return Math.floor(Math.random() * nb_image);
}

/* Quand la console est prête */
client.on("ready", () => {
	  console.log("I am ready!");
});


client.on("message", (message) => {
	
	/* Pour que les commandes soient comprises en minuscule ou en majuscule, on transforme le message en minuscule */
	msg = message.content.toLowerCase();

	let prefixe = '$';
	
	
	/* Le ping pong */
	if (msg.startsWith(prefixe + "ping")) {
  		message.channel.send("pong!");
	}


	/* Le gateau */
	if (msg.startsWith("$gateau")) {
		message.channel.send("au chocolat");
	}

	
	/* Eric Tan */
	if (msg.startsWith("$tan")) {
		message.channel.send("HENRI TAN !! Nan je déconne évidemment je m'appelle Eric Tan.");
	}

	
	/* Images aléatoires de Watanabe You */
	if (msg.startsWith("$you")) {
		message.channel.send("", {
			file : "./image/img_you" + alea() + ".jpg"
		});
	}

	
	/* Quand quelqu'un est nul */
	if (msg.startsWith("$nul")) {
		message.channel.send("gros naze", {
			file : "./image/img_naze.jpg"
		});
	}

	
	/* Images aléatoires quand on est content */
	if (msg.startsWith("$joie")) {
		message.channel.send("La joie", {
			file : "./image/img_joie" + alea() + ".jpg"
		});
	}
	
	
	/* Les 2000 */
	if (msg.startsWith("$2000")){
		message.channel.send("LES 2000 SONT DEBILES", {
			tts: true
		});
	}

	
	/* Les 1999 */
	if (msg.startsWith("$1999")) {
		message.channel.send("Les 1999, ces dieux :heart:", {
			file : "./image/img_1999.gif"
		});
	}
	

	/* La dance */
	if (msg.startsWith("$dance")) {
		message.channel.send("DANCE", {
			file : "./image/img_dance" + alea() + ".gif"
		});
	}


	/* La fête */
	if (msg.startsWith("$party")) {
		message.channel.send("LA FETE", {
			file : "./image/img_party" + alea() + ".gif"
		});
	}


	/* Les 1998 */
	if (msg.startsWith("$1998")) {
		message.channel.send("Les 1998, c'est des Thugs :sunglasses:", {
			file : "./image/img_1998.gif"
		});
	}


	/* Images aléatoires quand on est triste */
	if (msg.startsWith("$triste")) {
		message.channel.send("La tristesse", {
			file : "./image/img_triste" + alea() + ".jpg"
		});
	}
	

	/* Images aléatoires quand on est JOJO */
	if (msg.startsWith("$jojo")) {
		message.channel.send("SONO CHI NO SADAME", {
			file : "./image/img_jojo" + alea() + ".jpg"
		});
	}
	

	/* Quand quelqu'un est pas content */
	if (msg.startsWith("$pascontent")) {
		message.channel.send("", {
			file : "./image/img_gohan1.gif"
		});
	}

	
	/* Analyste */
	if (msg.startsWith("$analyste")) {
		message.channel.send("Je suis analyste financier, je ne peux pas aller au Yemen !", {
			file : ""
		});
	}


	/* voir l'avatar des gens */
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


	/* Emote sur des gens */
	if(message.content.startsWith("$emote")) { //IF for the command.
	    if(message.mentions.users.first()) { //Check if the message has a mention in it.
		  let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
		  res = alea();
		  if (res === 0){
		  	message.channel.send('**Attention **' + user + '** devient sérieux !**', {
				file : "./image/img_instinct1.gif"
			});
		  }else if (res === 1){
		  	message.channel.send(user + ', ce dieu :heart:', {
				file : "./image/img_dieu1.jpeg"
			});
		  }else if (res === 2){
		  	message.channel.send(user + ' PGM fortnite :sunglasses:', {
				file : "./image/img_bambi.png"
			});
		  }else if (res === 3){
		  	message.channel.send("***Mais qui est cet homme magnifique ??? Mais c'est ***" + user + "*** :ok_hand: ***", {
				file : "./image/img_wow1.gif"
			});
		  }else if (res === 4){
		  	message.channel.send("***L'incroyable ***" + user + "*** entre en scène ! ***", {
				file : "./image/img_wow2.gif"
			});
		  }else if (res === 5){
		  	message.channel.send("**La puissance de **" + user + "** est incroyable ! Elle dépasse 9000 unités !! **", {
				file : "./image/img_emote5.gif"
			});
		  }else if (res === 6){
		  	message.channel.send("**Un peu bête mais **" + user + "** est surtout inventif :yum:**", {
				file : "./image/img_emote6.gif"
			});
		  }else if (res === 7){
		  	message.channel.send("**On ne peut nier que **" + user + "** est débile, mais on l'aime quand même :heart: **", {
				file : "./image/img_emote7.gif"
			});
		  }else if (res === 8){
		  	message.channel.send("**Un vrai pro de la dance ce **" + user, {
				file : "./image/img_emote8.gif"
			});
		  }else if (res === 9){
		  	message.channel.send("**Personne ne peut embêter **" + user + "** sans en subir les conséquences ! **", {
				file : "./image/img_emote9.gif"
			});
		  };
	    } else {
		  message.reply("La personne mentionnée n'est pas trouvée :("); //Reply with a mention saying "Invalid user."
	    }
	}
	
	
	/* Pour obtenir les commandes */
	if (msg.startsWith('$aled')) {
		message.author.sendMessage("Je viens t'aider !\n$ping -> renvoi pong\n$gateau -> renvoi un délicieux gateau au chocolat\n$joie -> renvoi une image joyeuse\n$triste -> renvoi une triste image\n$dance -> renvoi un gif de danse\n$party -> renvoi un gif festif\n$emote + le tag de quelqu'un -> renvoi un gif avec la mention du tag\n$avatar + le tag de quelqu'un -> renvoi l'avatar de la personne mentionnée\n$jojo -> renvoi une image JOJO\n$pascontent -> renvoi un gif qui montre ta colère\n$nul -> renvoi une image qui te nargue à la gueule\n$analyste -> renvoi un même interdit au Yemen\n");
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
	if (message.content.startsWith('coucou') || message.content.startsWith('bonjour') || message.content.startsWith('salut')) {
		let user = message.member.user;
		message.channel.send('COUCOU ' + user);
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
