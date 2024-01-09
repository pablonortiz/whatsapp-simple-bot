const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { makeSticker } = require('./utils');

const client = new Client({
	authStrategy: new LocalAuth({
		clientId: 'client-one',
	}),
});

client.on('qr', (qr) => {
	qrcode.generate(qr, { small: true });
});

client.on('message', (msg) => {
	if (msg.hasMedia) makeSticker(client, msg);
});

client.on('ready', () => {
	console.log('Client ready!');
});

client.initialize();
