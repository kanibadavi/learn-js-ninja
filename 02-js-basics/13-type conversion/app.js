let name = "kani";
let num = 25;
let num2 = "25";
let num3 = 100;// truthy value
let num4 = 0;//falsy value

name= Number(name);
num = String(num);
num2= Number(num2);
num3= Boolean(num3);
num4= Boolean(num4);

console.log(name, typeof name,num, typeof num, num2, typeof num2, num3, typeof num3, num4, typeof num4);