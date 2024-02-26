// Motivational Subject

const subjects = ['Quality questions', 'Life', 'Never', 'Nothing great was ever', 'Quality'];
const verbs = ['is', 'achieved ', 'create', 'is', 'gives'];
const objects = ['a habit', 'up', 'without enthusiasm', 'perfect', 'a quality life'];

const randomly = (array1, array2, array3) => {
    let sub = array1[Math.floor(Math.random() * array1.length)];
    let ver = array2[Math.floor(Math.random() * array2.length)];
    let obj = array3[Math.floor(Math.random() * array2.length)];

    return `${sub} ${ver} ${obj}`;

}

console.log(randomly(subjects, verbs, objects));

