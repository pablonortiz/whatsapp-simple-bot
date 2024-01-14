
# Simple WhatsApp Bot




## Installation

**Node v.14.0.0** is needed to run

After installing the project dependencies with

```bash
  npm i
```

All should be set to start using the bot


## Usage

To use the bot you **must have a WhatsApp number available**

1. Run the following command:
```bash
  npm run start
```
2. In the WhatsApp app of the device that you will be using as a bot go to Settings > Linked devices.
3. Scan the QR code that is being shown in the console.
4. Done! Now try sending an image to your bot as to make a sticker from that image.


## Features

- [x]  Sticker Maker
- [ ]  Audio type converter
- [ ]  Video type converter

## Developed

### Sticker Maker

> [!NOTE]  
> This feature was developed **before** WhatsApp introduced their new "Add sticker" feature.

One of the bot key features is the creation of stickers from images, to use it you only have to send the bot the image that you desire to make a sticker from.

![](https://github.com/pablonortiz/whatsapp-simple-bot/blob/main/featuresDemos/demoStickerMaker.gif)

## Planned

### Audio type converter

When sending audio files to the bot a message will be shown asking for what file type you wish the audio to be converted to, after answering the audio will be converted and sent to the user.

### Video type converter

As with the audio converter feature, when sending a video file to the bot a message will be shown asking for what file type you wish the video to be converted to, after answering the video will be converted and sent to the user
