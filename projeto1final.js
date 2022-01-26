//Prompt sync
var prompt = require('prompt-sync')();

//Variáveis
const perguntas = [`
    Você lembra que ainda não comeu nada desde a noite passada. Você considera dar uma breve pausa e
passar no refeitório, porém, lembra que seu colega de pesquisa havia lhe mandado uma mensagem urgente.
Você decide comer?`,
`   Você se dirige ao laboratório para encontrar seu colega e nota que o setor se econtra estranhamente 
vazio. Ao chegar no laboratório você encontra seu colega em desespero, frente a frente com uma criatura 
negra e disforme. Você puxa seu colega para longe da criatura e pensa para onde correr e imagina que a 
ponte de comando seja o lugar mais seguro. O caminho mais direto pode não ser a melhor ideia caso a 
criatura seja rápida demais, mas Você toma o caminho mesmo assim?`,
`   Você chega a ponte de comando e encontra a porta barricada. O comandante abre a porta e lhe informa 
que a criatura desabilitou a maioria dos sistemas da nave. Ele lhe entrega um código de segurança que 
pode ser usado para armar a auto destruição e lançar os módulos de escape. Você da meia volta e se 
depara com a criatura. Corre na sua direção e enxerga duas opções, passar por debaixo dela ou pular por 
cima. Você desliza por debaixo dela?`,
`   Você passa pela criatura e por cima dos ombros a vê devorar todos na sala de comando. Você corre em 
direção à sala de engenharia mas seu colega sugere que você pegue uma amostra da substância. É apenas 
um pequeno desvio e a amostra tem valor incalculável. Você pensa em pegar a amostra e correr para a 
armar a auto-destruição, mas seu colega sugere se separar para ganhar tempo. Você aceita?`,
`   Com a amostra em mãos você chega na sala da engenharia e prepara a auto destruição. Mas quanto tempo
colocar na contagem regressiva para que todos possam escapar? Se é que existe mais alguém vivo. Você 
arma o sistema e coloca 5 minutos?`];
let contadorperguntas = 0;
let nome = '';
let sim = 0;
let resposta = '';

//Introdução

nome = prompt(`Qual o seu nome? `);
console.log(`-----------------------------------------------`);
console.log(`
   Olá ${nome}! Seja bem vindo à EAV (Earth Alliance Vessel) Yamato. Uma das maiores naves 
de pesquisa da Aliança orbitando o planeta da colônia New Eden.
    A tripulação está em euforia pois o que pode se tornar a maior descoberta da história da humanidade 
acaba de ser trazida abordo. Durante a exploração de um asteróide que veio de um distante setor da 
galáxia,o time de exloração Alpha se deparou com uma substância com propriedades milagrosas.
    Testes preliminares indicam que a substância tem potencial para curar qualquer doença e garantir a 
vida eterna para a humanidade.`);
console.log(`-----------------------------------------------`);

//Laço de perguntas
while (contadorperguntas < 5){

    do{
        console.log(`${perguntas[contadorperguntas]}
        `);
        resposta = prompt('Sim ou Não? ');

        if (resposta.toLowerCase() != 's' && resposta.toLowerCase() != 'n' && resposta.toLowerCase() != 'nao' && resposta.toLowerCase() != 'sim'){
            console.log('Resposta inválida. Responda sim ou não.');
            console.log('--------------------------------------------------------')
        }
    }while (resposta.toLowerCase() != 's' && resposta.toLowerCase() != 'n' && resposta.toLowerCase() != 'nao' && resposta.toLowerCase() != 'sim');
    console.log(`---------------------------------------------------------------------`);
    contadorperguntas++;

    if (resposta.toLowerCase() == 's' || resposta.toLowerCase() == 'sim'){
        sim++;
    }
}

// Finais

if (sim == 5){
    console.log(`
    Seu colega pega o código de acesso do módulo de escape, lhe empurra para dentro, fecha a escotilha
e digita o código, iniciando o processo de lançamento. Da janela do módulo de escape emergencial você
da um último adeus ao seu querido colega, que se tornou seu salvador, com a amostra em mãos você
descende ao planeta, deixando para trás a enorme EAV Yamato e a terrível experiência que se passou,
rumo à segurança da colônia New Eden.`);
}else if (sim == 4){
    console.log(`
    Seu colega pega o código de acesso do módulo de escape, lhe empurra para dentro fazendo com que 
você derrube a amostra, fecha a escotilha e digita o código, iniciando o processo de lançamento.
Da janela do módulo de escape emergencial você da um último adeus ao seu querido colega, que se tornou
seu salvador, deixando para trás a enorme EAV Yamato e a terrível experiência que se passou, rumo à
segurança da colônia New Eden.`);
}else if (sim == 3){
    console.log(`
    Seu colega pega o código de acesso do módulo de escape, coloca a mão sobre seus ombros, se preparando
para te empurrar para dentro, quando inúmeros tentáculos negros atravessam seu corpo. A criatura te
alcança e absorve seu corpo enquanto a contagem de auto destruição chega ao fim.`);
}else if (sim == 2 || sim == 1){
    console.log(`
    Seu colega pega o código de acesso do módulo de escape, lhe empurra para dentro fazendo com que
você derrube a amostra. O modulo se desprende da enorme EAV Yamato e você descende em direção ao planeta.
Algo está errado pois a nave não se auto destrói. A criatura se mostrou mais inteligente do que você
imaginava.`);
}else{
    console.log(`
    Você corre o mais rápido que consegue, a massa negra de dentes e pseudópodes no seu encalço. O modulo
de escape apenas a poucos metros de distância, quando uma dor se espalha pelo seu corpo, sangue
escorrendo pela sua face. A criatura absorve seu corpo e espera paciente enquanto a enorme EAV Yamato
descende em direção ao planeta, em direção à colônia New Eden.`);
}