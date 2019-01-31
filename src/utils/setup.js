const input = require("readline-sync")
const fs = require("fs")

let baseConfig = fs.readFileSync("./src/utils/setup_base.txt", "utf8")


(async function () {
    console.log("Iniciando a configuração automática .. CTRL+C se você quiser confiruar manualmente")

    const token = input.question("Insira o token do seu bot: ")
    const firebase_key = input.question("Insira a key da sua aplicação firebase: ")
    const firebase_domain = input.question("Insira o dominio da sua aplicação firebase: ")
    const firebase_url = input.question("Insira a url da sua aplicação firebase: ")
    const firebase_id = input.question("Insira o id da sua aplicação firebase: ")
    const firebase_storage = input.question("Insira o storage da sua aplicação firebase: ")
    const firebase_sender_id = input.question("Insira o sender id da sua aplicação firebase: ")

    baseConfig = baseConfig
        .replace("{{DISCORD_TOKEN}}", token)
        .replace("{{FIREBASE_KEY}}", firebase_key)
        .replace("{{FIREBASE_DOMAIN}}", firebase_domain)
        .replace("{{FIREBASE_URL}}", firebase_url)
        .replace("{{FIREBASE_ID}}", firebase_id)
        .replace("{{FIREBASE_STORAGE}}", firebase_storage)
        .replace("{{FIREBASE_SENDER_ID}}", firebase_sender_id)

    fs.writeFileSync("../.env", baseConfig)
    console.log("Nunca passe seu token para ninguém!")
    console.log("A configuração foi finalizada com sucesso")
    await settings.close()
}())
