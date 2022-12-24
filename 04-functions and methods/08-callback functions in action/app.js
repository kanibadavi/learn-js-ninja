const ul = document.querySelector('.people');
const people = ["kani", "sara", "zahra"];

let html = "";
people.forEach(person => {
html += `<li>${person}</li>`;
})

console.log(html);
ul.innerHTML = html;