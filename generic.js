body = document.getElementById('body');

let paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = 'Hey I\'m red!';
body.appendChild(paragraph);

let text = document.createElement('h3');
text.style.color = 'blue';
text.textContent = "I'm a blue h3!";
body.appendChild(text);

let div = document.createElement('div');
let title = document.createElement('h1');
let para = document.createElement('p');
title.textContent = "I'm in a div";
para.textContent = "ME TOO!";
div.style.cssText = "border: black solid; background: pink";
div.append(title, para);
body.appendChild(div);