const webhookUrl =
  "https://discord.com/api/webhooks/1143361330791858206/Z8jxGJHDP8ohI8_LJCCOuwuq5NvFjOhPZzSg8vyMhBKN71NVe_qcqyBCqZ5ZYoRXZRPl";
const { EmbedBuilder, WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient({url: webhookUrl });

const embed = new EmbedBuilder()
	.setTitle('Apex Gaming Events')
	.setColor(0x00FFFF);

embed.addFields(
    {name: "Friday Modern", value: "<t:16490000:f>"},
    {name: "Friday Modern", value: "<t:16490000:f>"}
    )

webhookClient.send({
	username: 'Apex Gaming',
	avatarURL: 'https://i.imgur.com/AfFp7pu.png',
	embeds: [embed],
});