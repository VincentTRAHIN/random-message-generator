const start = [
    "Rappelle-toi que", 
    "N'oublie jamais que", 
    "Garde à l'esprit que", 
    "Il est important de se souvenir que"
];
const mid = [
    "chaque pas", 
    "chaque effort", 
    "chaque défi", 
    "chaque jour"
];
const end = [
    "te rapproche de ton objectif.", 
    "est une victoire en soi.", 
    "forge ta réussite.", 
    "fait de toi une meilleure version de toi-même."
];
const greetings = [
    "Tu es capable de grandes choses !", 
    "Crois en toi !", 
    "Tu es plus fort(e) que tu ne le penses !", 
    "Ne lâche rien !"
];

function generateMotivationalMessage() {
    const messageStart = Math.floor(Math.random() * start.length);
    const messageMid = Math.floor(Math.random() * mid.length);
    const messageEnd = Math.floor(Math.random() * end.length);
    const messageGreetings = Math.floor(Math.random() * greetings.length);
    
    const phrase = `${start[messageStart]} ${mid[messageMid]} ${end[messageEnd]} ${greetings[messageGreetings]}`;
    
    return phrase;
}

console.log(generateMotivationalMessage());