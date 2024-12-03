const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");

const storyParts = {
    1: {
        text: "Você segue o som e encontra uma caverna escura. Há pegadas na entrada. Entrar na caverna ou voltar pelo caminho?",
        choices: [
            { text: "Entrar na caverna", next: 4 },
            { text: "Voltar pelo caminho", next: 5 }
        ]
    },
    2: {
        text: "Você segue o caminho e encontra uma bifurcação. Há sinais de vida à esquerda e um silêncio misterioso à direita. Para onde ir?",
        choices: [
            { text: "Esquerda", next: 6 },
            { text: "Direita", next: 7 }
        ]
    },
    3: {
        text: "Você sobe em uma árvore alta. Lá de cima, você vê algo brilhante ao longe e fumaça subindo no horizonte. O que você faz?",
        choices: [
            { text: "Descer para pegar o objeto brilhante", next: 8 },
            { text: "Ir em direção à fumaça", next: 10 },
            { text: "Ficar na árvore e observar mais", next: 9 }
        ]
    },
    4: {
        text: "Você entra na caverna e encontra duas passagens: uma iluminada por cristais e outra escura. Qual você escolhe?",
        choices: [
            { text: "Caminho iluminado", next: 11 },
            { text: "Caminho escuro", next: 12 }
        ]
    },
    5: {
        text: "Ao voltar pelo caminho, você encontra uma velha senhora oferecendo dois itens: uma poção ou uma chave. Qual você escolhe?",
        choices: [
            { text: "Poção", next: 13 },
            { text: "Chave", next: 14 }
        ]
    },
    6: {
        text: "Você segue à esquerda e encontra um grupo de viajantes amigáveis. Eles oferecem comida e informações sobre a floresta.",
        choices: [
            { text: "Aceitar ajuda e seguir com eles", next: 15 },
            { text: "Agradecer e continuar sozinho", next: 16 }
        ]
    },
    7: {
        text: "Ao virar à direita, você ouve um rugido e percebe que entrou no território de um urso. Fugir ou tentar se esconder?",
        choices: [
            { text: "Fugir", next: 17 },
            { text: "Se esconder", next: 18 }
        ]
    },
    8: {
        text: "O objeto brilhante é uma moeda mágica que brilha intensamente. Você sente um poder estranho emanando dela.",
        choices: [
            { text: "Guardar a moeda", next: 19 },
            { text: "Jogá-la no riacho próximo", next: 20 }
        ]
    },
    9: {
        text: "Enquanto observa, você percebe que a fumaça vem de uma cabana. Parece perigoso, mas interessante.",
        choices: [
            { text: "Descer e investigar", next: 21 },
            { text: "Ficar onde está", next: 22 }
        ]
    },
    10: {
        text: "Você segue em direção à fumaça e encontra uma vila escondida. Os moradores parecem desconfiados, mas amigáveis.",
        choices: [
            { text: "Tentar falar com eles", next: 23 },
            { text: "Voltar para a floresta", next: 24 }
        ]
    },
    // Expandindo desfechos
    11: { text: "O caminho iluminado leva você a um salão cheio de cristais mágicos. Você se sente em paz e encontra um artefato raro.", choices: [] },
    12: { text: "No caminho escuro, você cai em uma armadilha e é capturado por um grupo de criaturas misteriosas.", choices: [] },
    13: { text: "A poção cura todas as suas feridas, mas você sente que algo mudou em você.", choices: [] },
    14: { text: "A chave abre uma porta secreta que leva a uma biblioteca antiga cheia de segredos.", choices: [] },
    15: { text: "Os viajantes ajudam você a sair da floresta em segurança, mas você nunca descobre os mistérios dela.", choices: [] },
    16: { text: "Você continua sozinho e encontra um lago cristalino, onde pode descansar antes de seguir viagem.", choices: [] },
    17: { text: "Você foge e consegue escapar do urso, mas se perde ainda mais na floresta.", choices: [] },
    18: { text: "Você se esconde e o urso passa sem notar. Você encontra um mapa deixado por outros viajantes.", choices: [] },
    19: { text: "A moeda mágica lhe concede visões de um tesouro escondido na floresta.", choices: [] },
    20: { text: "Ao jogar a moeda no riacho, uma ponte mágica aparece, levando você a um novo lugar.", choices: [] },
    21: { text: "Na cabana, você encontra um velho sábio que oferece ajuda para sair da floresta.", choices: [] },
    22: { text: "Você fica na árvore e eventualmente percebe que a fumaça desaparece. A floresta está em silêncio novamente.", choices: [] },
    23: { text: "Os moradores explicam que a vila está protegida por magia. Você é convidado a viver com eles.", choices: [] },
    24: { text: "Você decide voltar para a floresta, mas sente que perdeu uma grande oportunidade.", choices: [] },
};

function makeChoice(choice) {
    const part = storyParts[choice];
    storyText.textContent = part.text;

    choicesDiv.innerHTML = "";
    part.choices.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => makeChoice(option.next);
        choicesDiv.appendChild(button);
    });
}
