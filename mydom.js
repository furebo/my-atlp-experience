
var containerr  = document.createElement('div');
containerr.classList.add('container');

//var body = document.getElementsByTagName('body');

document.body.appendChild(containerr);

secondDiv = document.createElement('div');
secondDiv.classList.add('secondDiv');
containerr.appendChild(secondDiv);

var heading2 = document.createElement('h2');
heading2.classList.add('title');
var textnode = document.createTextNode('This is the title of the blog');
heading2.appendChild(textnode);
secondDiv.appendChild(heading2);

var paragraph = document.createElement('p');
paragraph.classList.add('description');
var blogdescr = "This new article is for developpers who are using javascript and node.js in their daily life of programming!";
var descriptionTextNode = document.createTextNode(blogdescr);
var span = document.createElement('span');
var anchor = document.createElement('A');
var afr = "africa.html";
anchor.setAttribute('href',afr);
var anchorText = document.createTextNode('...Continue Reading...');
anchor.appendChild(anchorText);
span.appendChild(anchor);
paragraph.appendChild(descriptionTextNode);
paragraph.appendChild(span);

secondDiv.insertBefore(paragraph, secondDiv.childNodes[1]);

var image = document.createElement('IMG');
image.classList.add('blogNewImage');
image.src="blogimages/didace.jpg";
secondDiv.insertBefore(image, null);

