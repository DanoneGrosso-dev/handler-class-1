# Boilerplate Handler Classes

Boilerplate created to facilitate the creation of commands with classes for the discord.js library.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install the packages.
```bash
git clone https://github.com/leduardo99/handler-class
```

```bash
npm install
```
## Manual Installation
You can choose to manually configure the bot. Just create a file called **.env** at the root of your project and put the environment variables below.
```env
DISCORD_TOKEN=NDQWCmReCyz0Uf7TX0nw32-3XZNDJQc5AsQDWihYXWNr2.COBpA5idy52C9
FIREBASE_KEY=NDQWCmReCyz0Uf7TX0nw32-3XZNDJQc5AsQDWihY
FIREBASE_DOMAIN=your-app.firebaseapp.com
FIREBASE_URL=https=//your-app.firebaseio.com
FIREBASE_ID=your-app
FIREBASE_STORAGE=your-app.appspot.com
FIREBASE_SENDER_ID=000000000000
```

## Boot Modes

There are two ways for you to start the bot. In development mode and in production mode. The **development** mode you use environment varivables locally, since in the **production** mode you use the server environment variables, I advise you to use the [Heroku](https://heroku.com/) hosting platform.

#### Production Mode
```bash
npm start
```
#### Dev Mode
```bash
npm run dev
```

## Method getSettings()

```js
async getSettings() {
        var data = ''
        await this.database.ref('Settings').once('value')
            .then(snapshot => {
                data = snapshot.val()
            })
            .catch(err => {
                this.logger.log(`Erro ao retornar os dados do banco de dados: ${err}`, 'error')
            })
        return data
    }
```
Note that the default reference for the settings is **Settings**, use this as a base.

## Notes
All code was based on the Firebase platform, using the Realtime database. It will be necessary to create an account on the [platform](https://firebase.google.com) and create a database in it.

## License
[MIT](https://choosealicense.com/licenses/mit/)
