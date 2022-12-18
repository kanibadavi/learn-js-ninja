const title = "hello world";
const author = "kani badavi";
const likes = 23;

//concatanation way
const result = "this blog is " + title + " book, by " + author + " with " + likes + " likes " ;
console.log(result);

//template string way
const result2 = `this blog is ${title} book, by ${author} with ${likes} likes`;
console.log(result2);

//creating HTML templates
const html = `
<h1>this blog is ${title} book, </h1>
<p> by ${author} </p>
<span> with ${likes} likes</span>
`
console.log(html);