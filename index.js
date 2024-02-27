const randomNumber = num => {
    return Math.floor(Math.random() * num);
}

const collectiveSuccess = {
    feelings : ['bad', 'sad', 'Nothing great was ever', 'down'],
    reactions : ['remember where you come', 'doing great ', 'create', 'try to not give up'],
    nextSteps : ['will come', 'will make you proud', 'come with enthusiasm', 'perfect', 'gives you a quality life']
}

let behaviors = [];

const asciiArt = [
    `
     |\_/|       
    / @ @ \       
   ( > º < )     
     >>x<<       
    /  O  \,
    
    (\_/)
   (='.'=)
   (")_("),
    .--.                    
    '--' ,
    /\                
   /__\,
   (^._.^),
     ____
   <(o.o )>   
    `
]

for(let prop in collectiveSuccess){
    let optIdx = randomNumber(collectiveSuccess[prop].length)

    switch(prop){
        case 'feelings' : 
            behaviors.push(`If never you feel "${collectiveSuccess[prop][optIdx]}"`)
            break;
        case 'reactions' :
            behaviors.push(`Just ${collectiveSuccess[prop][optIdx]}`)
            break;
        case 'nextSteps' : 
            behaviors.push(`And the result ${collectiveSuccess[prop][optIdx]}`)
            break;
        default : 
            behaviors.push(`Nothing to say`);
    }
}

console.log(behaviors);

