export const answerRobot = () => {
    let answers = [
        "I'll be back.",
        "Я думаю, это начало прекрасной дружбы",
        "Цигель-цигель, ай-лю-лю.",
        "Да пребудет с тобой Сила!",
        "Обожаю запах напалма по утрам"
    ];

    let min = 0;
    let max = answers.length;

    return answers[Math.round(min - 0.5 + Math.random() * max)];
};