# Boilerplate Handler Classes

Boilerplate created to facilitate the creation of commands with classes for the discord.js library.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install foobar.

```bash
npm install
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
