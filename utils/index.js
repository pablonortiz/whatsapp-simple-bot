const fs = require('fs');
const mime = require('mime-types');
const { MessageMedia } = require('whatsapp-web.js');

const makeSticker = async (client, message) => {
	const mediaPath = '../downloaded-media/';

	const media = await message.downloadMedia();

	if (!fs.existsSync(mediaPath)) {
		fs.mkdirSync(mediaPath);
	}

	const extension = mime.extension(media.mimetype);
	const filename = new Date().getTime();
	const fullFileName = mediaPath + filename + '.' + extension;

	// Save File
	try {
		fs.writeFileSync(fullFileName, media.data, { encoding: 'base64' });
		MessageMedia.fromFilePath((filePath = fullFileName));
		client.sendMessage(message.from, new MessageMedia(media.mimetype, media.data, filename), {
			sendMediaAsSticker: true,
			stickerAuthor: 'Bash',
			stickerName: 'Para vos bb <3',
		});
		fs.unlinkSync(fullFileName);
	} catch (err) {
		console.log('Error', err);
	}
};

module.exports = { makeSticker };
