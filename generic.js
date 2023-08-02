body = document.getElementById('body');

let paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = 'Hey I\'m red!';
body.appendChild(paragraph);

let text = document.createElement('h3');
text.style.color = 'blue';
text.textContent = "I'm a blue h3!";
body.appendChild(text);