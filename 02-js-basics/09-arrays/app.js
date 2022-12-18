const names = ['kani','sara','fateme'];
console.log(names[1]);
names[1] = "zahra";
console.log(names);
console.log(names.length);

//array methods
//join
const joining = names.join("-");
console.log(joining);

//indexOf 
const whichIndex =names.indexOf("kani")
console.log(whichIndex);

//concat
const concatanating = names.concat(['ali','mohamad'])
console.log(concatanating);

//push and pop
const adding  = names.push("amir");
console.log(adding);
console.log(names);
const poping = names.pop();
console.log(names);