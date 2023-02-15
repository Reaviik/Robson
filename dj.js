import {r0bsom} from "./discord.js";
import DisTube, { Queue } from "distube";
import { SpotifyPlugin } from '@distube/spotify'
import { SoundCloudPlugin } from '@distube/soundcloud'
import { YtDlpPlugin } from '@distube/yt-dlp'

const prefix= '?';

const distube = new DisTube.default(r0bsom, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    plugins: [
      new SpotifyPlugin({
        emitEventsAfterFetching: true
      }),
      new SoundCloudPlugin(),
      new YtDlpPlugin()
    ]
  })
// message.channel.send(`🎵 **Tocando agora:**\r\`\`\`diff\r+ Faixa: \r+ Duração: \r+ Visualizações: \r\`\`\``)

r0bsom.on('messageCreate', async message => {
    if (message.author.bot) { return; }
    if (!message.guild) { return; }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //Ping//
    if(command === "play" || command === "p"){
        distube.play(message, args.join(" "));
        message.react("✅");
        message.channel.send(`⏱ **Caregando Faixa:**\r\`\`\`diff\r+ Faixa: \r\`\`\``);
    }
    if(command === "?a"){
        try{
        var membros = message.guild.memberCount;
        console.log(message)
        message.channel.send(message.guildId);

        }catch{
            return;
        }
    }
});
