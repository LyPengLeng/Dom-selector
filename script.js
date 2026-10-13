const title = document.getElementById("title");
console.log(title);
console.log(title.textContent);

const sub_title = document.getElementsByClassName("sub_title");
console.log(sub_title[1]);
console.log(sub_title[0].textContent);
console.log(sub_title[1].textContent);

const des = document.getElementsByTagName("p");
console.log(des);
console.log(des[3].textContent);

const result = document.getElementById("Output");
result.textContent = "Output data";

const result1 = document.getElementById("Output1");
result1.innerHTML = "<i>Em text</i>";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sum = document.getElementById("sum");

sum.textContent = Number(num1.textContent) + Number(num2.textContent);

const new_title = document.querySelector("#title");
const new_s_title = document.querySelector(".sub_title");
const new_des = document.querySelector("p");

console.log(new_title.textContent);
console.log(new_s_title.textContent);
console.log(new_des.textContent);

















































