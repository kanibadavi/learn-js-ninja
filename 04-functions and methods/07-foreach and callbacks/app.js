let people = ["kani","sara","zahra"];

const logPerson = (person , index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson)