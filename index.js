const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start(){
    const content = {}

    content.searchTerm = asKAndReturnSearchTerm()
    content.prefix = asKAndReturnPrefix()

    await robots.text(content)

    function asKAndReturnSearchTerm() {
        return readline.question('Digite um termo de pesquisa da Wikipedia:')
    }

    function asKAndReturnPrefix(){
        const prefixes = ['Quem é', 'o que é', 'A história de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes,'Escolha uma opção:')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return selectedPrefixText
    }
 console.log(content)
}

start()