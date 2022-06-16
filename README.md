# GuardianBot

<div align="center">
  <br />
  <p>
    <img src="https://tchereau.fr/images/guardianbot.png" width="248" alt="guardianbot" />
  </p>
</div>


## About

GuardianBot is a little bot made in javascript with node js
this bot have some commands

- ban
    this command will send the banner hammer to an user (use unban to unban the user)
- kick
    this one will an user of your choise from the discord
- exclude
    will exclude for a moment an user
- pp
    this last will send the profile picture of the chosen user
- restart
    it will restart the bot (work only if the bot is started with forever)
- update
    the bot do a ```git pull``` then it restart himself (it also need forever)
- help
    should I need to explain this one ?

## Install

Node.js v16.15.0 or newer is required.

```bash
git clone git@github.com:tchereau/GuardianBot.git
cd GuardianBot
npm i
cp .env.example .env
# if you want to be able to use restart and update
npm --location=global i forever
```

The last thing to get up the bot is to configure the dot env

```basic
# bot token
token=""
# define your prefix
prefix=""
# define log channel
logsChannel=""
# define admin id
adminID=""
# define activity
activity="some activity"
```

```token``` is where you put the token of your bot, this one could be a real bot, or the token of a discord user to make a selfbot, in this case you should define the variable selfbot to ```"true"```

```prefix```is how you will call a commands, for example ```!!duck``` you should put ```!!``` in ```prefix```

```LogsChannel``` is where you want to put your logs, here you have to past the id of this channel

```adminID``` is your id discord, it used when you restart or update the bot 

```activity``` it define the activity of the bot

## Dependencies

[Discord.JS](https://github.com/discordjs/discord.js) 
[Discord.JS-selfbot-v13](https://github.com/aiko-chan-ai/discord.js-selfbot-v13) 
[dotenv](https://github.com/motdotla/dotenv) 

Thanks to them :)