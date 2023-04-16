require('dotenv').config();
const { default: axios } = require('axios');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('insult')
        .setDescription('Ready to be roasted?'),
        async execute(interaction) {
            var insultObj = await axios.get(process.env.INSULT_URL)
                .then((response) => {
                    return response.data.insult
                })
                .catch((error) => console.log(error));
            await interaction.reply(insultObj);
        }
}