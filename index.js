const randomNumber = num => {
    return Math.floor(Math.random() * num);
}

const collectiveSuccess = {
<<<<<<< HEAD
    feelings : ['bad', 'sad', 'Nothing great was ever achieve', 'down'],
    reactions : ['remember where you come', 'doing great ', 'create', 'never give up'],
    nextSteps : ['tell youserlf ', 'will make you proud', 'come with enthusiasm', 'will be perfect', 'gives you a quality life']
=======
    feelings : ['bad', 'sad', 'Nothing great was ever', 'down'],
    reactions : ['remember where you come', 'doing great ', 'create', 'try to not give up'],
    nextSteps : ['will come', 'will make you proud', 'come with enthusiasm', 'will be perfect', 'gives you a quality life']
>>>>>>> f0cf711d610c4a41469c131dde3039999efeafc2
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
<<<<<<< HEAD

for(let prop in collectiveSuccess){
    let optIdx = randomNumber(collectiveSuccess[prop].length);
=======
>>>>>>> f0cf711d610c4a41469c131dde3039999efeafc2

for(let prop in collectiveSuccess){
    let optIdx = randomNumber(collectiveSuccess[prop].length);
    
    switch(prop){
        case 'feelings' : 
            behaviors.push(`If you ever feel like "${collectiveSuccess[prop][optIdx]}"`)
            break;
        case 'reactions' :
<<<<<<< HEAD
            behaviors.push(`Then Just "${collectiveSuccess[prop][optIdx]}"`)
            break;
        case 'nextSteps' : 
            behaviors.push(`Just tell yourself "${collectiveSuccess[prop][optIdx]}"`)
=======
            behaviors.push(`Just "${collectiveSuccess[prop][optIdx]}"`)
            break;
        case 'nextSteps' : 
            behaviors.push(`And the result "${collectiveSuccess[prop][optIdx]}"`)
>>>>>>> f0cf711d610c4a41469c131dde3039999efeafc2
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

