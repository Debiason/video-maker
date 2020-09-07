const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = asKAndReturnSearchTerm()
    content.prefix = asKAndReturnPrefix()

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