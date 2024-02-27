const randomNumber = num => {
    return Math.floor(Math.random() * num);
}

const collectiveSuccess = {
    feelings : ['bad', 'sad', 'Nothing great was ever achieve', 'down'],
    reactions : ['remember where you come', 'doing great ', 'create', 'never give up'],
    nextSteps : ['tell youserlf ', 'will make you proud', 'come with enthusiasm', 'will be perfect', 'gives you a quality life']
}

let behaviors = [];

const asciiArt = [
    `
     |\_/|       
    / @ @ \       
   ( > º < )     
     >>x<<       
    /  O  \ `,

    `
    (\_/)
   (='.'=)
   (")_(")`,
   `
    .--.                    
    '--' `,
    `
     /\                
    /__\
   (^._.^)`,
   `
     ____
   <(o.o )>   
    `
]

console.log(asciiArt[randomNumber(asciiArt.length)]);

for(let prop in collectiveSuccess){
    let optIdx = randomNumber(collectiveSuccess[prop].length);

    switch(prop){
        case 'feelings' : 
            behaviors.push(`If you ever feel like "${collectiveSuccess[prop][optIdx]}"`)
            break;
        case 'reactions' :
            behaviors.push(`Then Just "${collectiveSuccess[prop][optIdx]}"`)
            break;
        case 'nextSteps' : 
            behaviors.push(`Just tell yourself "${collectiveSuccess[prop][optIdx]}"`)
            break;
        default : 
            behaviors.push(`Nothing to say`);
    }
}

formatArray = array => {
    const formatted = behaviors.join('\n');
    console.log(formatted);
}

formatArray(behaviors)

