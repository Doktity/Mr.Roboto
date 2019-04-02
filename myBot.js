const Discord = require("discord.js");		//Pour utiliser la librairie discord.js
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new Discord.Client();		//Pour créer un nouveau client discord
const nb_image = 10;				// Nombre d'images pour le générateur de valeur aléatoire
const streamOptions = { seek : 0, volume : 5};
const config = require("./config.json");


/*Fonction Aléatoire pour avoir des images random */
function alea(){
	return Math.floor(Math.random() * nb_image);
}


/* Quand la console est prête */
client.on('ready', async () => {
	client.user.setActivity("$aled", {type: "WATCHING"})
});

let prefixe = "$";
/*let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
if(!prefixes[message.guild.id]){
		prefixes[message.guild.id] = {
			prefixes: config.prefixe
		};
	}
	
	let prefixe = prefixes[message.guild.id].prefixes;*/

client.on("message", (message) => {
	
	let video = ["yoshi", "https://www.youtube.com/watch?v=1FHGoAR5Q-c", "cowboy", "https://www.youtube.com/watch?v=yBLdQ1a4-JI",
		    "evilmorty", "https://www.youtube.com/watch?v=Me6_L5vMWPE", "tortue", "https://www.youtube.com/watch?v=dhvSAz3uFPo"];

	/* Fonction pour lire un fichier audio */
	function audio(param){
		const channel = message.member.voiceChannel;
		let i;
		if (!channel) {
			for(i = 0; video[i] != param || i != video.length; i++);
			if(i == img_texte.length) {
				return message.reply('Mauvais argument, essayez en un autre !');
			}
			return message.reply(video[i+1]);
		}
		if (message.guild.voiceConnection) {
			return message.reply('Je suis déjà dans une conversation vocal là !');
		}
		channel.join()
			.then(connection => {
				const dispatcher = connection.playFile("./video/" + param + ".mp3");
				dispatcher.on('end', () => {
					channel.leave();	
				});
			});
	}
	
	
	let img_texte = ["you", "yousoro", "joie", "La joie", "triste", "La tristesse", "dance", "DANCE",
			 "party", "LA FETE", "jojo", "SONO CHI NO SADAME", "triggered", "QU'AS TU DIS ?!",
			 "smug", "hehehe", "rover", "woof woof"]
		
	
	function image(param){
		let i;
		for(i = 0; img_texte[i] != param || i != img_texte.length; i++);
		if(i == img_texte.length) {
			return message.reply('Mauvais argument, essayez en un autre !');
		}
		message.channel.send(img_texte[i+1], {
			file : "./image/img_" + param + alea() + ".jpg"
		});
	}
	
	
	function gif(param){
		let i;
		for(i = 0; img_texte[i] != param || i != img_texte.length; i++);
		if(i == img_texte.length) {
			return message.reply('Mauvais argument, essayez en un autre !');
		}
		message.channel.send(img_texte[i+1], {
			file : "./image/img_" + param + alea() + ".gif"
		});
	}
	
//-----------------------------------------------------------------------------------------------------------------------//
	
	/* Pour que les commandes soient comprises en minuscule ou en majuscule, on transforme le message en minuscule */
	msg = message.content.toLowerCase();
	
	let banlist = ["roux", "r o u x", "r0ux", "r.o.u.x"]; // Les mots B A N N I S
	//var banlist = JSON.parse(fs.readFile("./banlist.json", 'utf-8'));
	
//--------------------------------------------------- LES INTÉRACTIONS SIMPLES---------------------------------------------//
	
	/* Bannissement du mot " roux " */
	/* Quand on trouve le mot à l'intérieur du message on le détruit */
	let trouver = false;
	for (var i in banlist){
		if(msg.includes(banlist[i])){
			trouver = true;
		}
	}
	if (trouver && message.guild.id === "383920747195924490"){ // Bannir uniquement sur le serveur des conios
		message.delete();
			message.reply(" ce mot est bannit. ")
				.then(msg => msg.delete(10000));
	}
	
	/* Ajout d'un mot banni */
	/*if (msg.startsWith(prefixe + "addban")) {
		let mot = arg[0];
		fs.writeFile("./banlist.json", JSON.stringify(mot, null, 2), (err) => {
			if (err) throw err;
			message.reply("le mot a bien été enregistré.");
		});
	}*/
	
	/* Le ping pong */
	if (msg.startsWith(prefixe + "ping")) {
  		message.channel.send("pong!");
	}


	/* Le gateau */
	if (msg.startsWith(prefixe + "gateau")) {
		message.channel.send("au chocolat");
	}

	
	/* Eric Tan */
	if (msg.startsWith(prefixe + "tan")) {
		message.channel.send("HENRI TAN !! Nan je déconne évidemment je m'appelle Eric Tan.");
	}
	
	
	/* Les 2000 */
	if (msg.startsWith(prefixe + "2000")){
		message.channel.send("LES 2000 SONT DEBILES", {
			tts: true
		});
	}

	
	/* Les 1999 */
	if (msg.startsWith(prefixe + "1999")) {
		message.channel.send("Les 1999, ces dieux :heart:", {
			file : "./image/img_1999.gif"
		});
	}
	
	
	/* Les 1998 */
	if (msg.startsWith(prefixe + "1998")) {
		message.channel.send("Les 1998, c'est des Thugs :sunglasses:", {
			file : "./image/img_1998.gif"
		});
	}
	
	
	/* Quand quelqu'un est pas content */
	if (msg.startsWith(prefixe + "pascontent")) {
		message.channel.send("", {
			file : "./image/img_gohan1.gif"
		});
	}
	
	/*ERIC*/
	if (msg.startsWith(prefixe + "eric")) {
		message.channel.send("", {
			file : "./image/eric.png"
		});
	}
	
	/*BEN*/
	if (msg.startsWith(prefixe + "ben")) {
		message.channel.send("", {
			file : "./image/ben.png"
		});
	}
	
	/*pierre*/
	if (msg.startsWith(prefixe + "pierre")) {
		message.channel.send("", {
			file : "./image/Pierre.png"
		});
	}
	
	/* Quand quelqu'un est nul */
	if (msg.startsWith(prefixe + "naze")) {
		message.channel.send("gros naze", {
			file : "./image/img_naze.jpg"
		});
	}
	
//-------------------------------------------------LES COMMANDES AUDIO----------------------------------------------//
	/* invoquer un fichier audio */
	if(msg.startsWith(prefixe + "audio")) {
		const args = message.content.slice(prefixe.length).trim().split(/ +/g);
		let mp3 = args[1];
		if (mp3 == undefined) {
			return message.reply('Passez un argument après avoir appelé la fonction ! ($audio **argument**)');
		}
		audio(mp3);
	}
	
	
	/* Pour que le bot sorte du channel */
	if (msg.startsWith(prefixe + "sort")) {
		const channel = message.member.voiceChannel;
		if (!channel) {
			return message.reply("JE PEUX PAS SORTIR je suis coincé !");
		}
		channel.leave();
	}
	
	
	if (message.content.startsWith(prefixe + "play")) {
		const args = message.content.slice(prefixe.length).trim().split(/ +/g);
		let musique = args[1];
		const channel = message.member.voiceChannel;
		const streamOptions = { seek: 0, volume: 0.5 };
		if (musique == undefined) {
			return message.reply('Passez un argument après avoir appelé la fonction ! ($play **argument**)');
		}
		if (!channel) {
			return message.reply('Faut être dans un channel vocal!');
		}
		if (message.guild.voiceConnection) {
			return message.reply('Je suis déjà dans une conversation vocal là !');
		}
		channel.join()
			.then(connection => {
				const stream = ytdl(musique, { filter: 'audioonly' });
				const dispatcher = connection.playStream(stream, streamOptions);
				dispatcher.on('end', () => {
					channel.leave();
				});
			});
	}

	
//-------------------------------------------------LES IMAGES ALÉATOIRES-------------------------------------------------//
	
	/* Images aléatoires */
	if(msg.startsWith(prefixe + "image")) {
		const args = message.content.slice(prefixe.length).trim().split(/ +/g);
		let img = args[1];
		if (img == undefined) {
			return message.reply('Passez un argument après avoir appelé la fonction ! ($image **argument**)');
		}
		image(img);
	}
	
	
	/* Gifs aléatoires */
	if(msg.startsWith(prefixe + "gif")) {
		const args = message.content.slice(prefixe.length).trim().split(/ +/g);
		let gf = args[1];
		if (gf == undefined) {
			return message.reply('Passez un argument après avoir appelé la fonction ! ($gif **argument**)');
		}
		gif(gf);
	}


//-------------------------------------------Les autres trucs un peu plus compliqué-----------------------------------------//
	
	/* voir l'avatar des gens */
	if(message.content.startsWith(prefixe + "avatar")) { //IF for the command.
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
	if(message.content.startsWith(prefixe + "emote")) { //IF for the command.
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
	if (msg.startsWith(prefixe + "aled")) {
		fs.readFile("./aled.txt", (err, data) => {
			message.channel.send(data);
		});
	}
	
});

client.on('message', message => {
	if (message.content.startsWith('coucou') || message.content.startsWith('bonjour') || message.content.startsWith('salut')) {
		let user = message.member.user;
		message.channel.send('COUCOU ' + user);
	}
});


/* Le login pour se connecter avec le robot */
client.login(process.env.BOT_TOKEN);
