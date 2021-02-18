document.getElementById('submit').addEventListener('click',displayComment);
function displayComment(){
var name = document.getElementById('name').value;
var comment = document.getElementById('comment').value;
var someone = document.querySelector('.commenter')
someone.textContent = name +" Said:";
               
var hiscomment = document.querySelector('.hiscomment');
hiscomment.textContent = comment;
document.getElementById('name').value="";
document.getElementById('comment').value="";
document.getElementById('email').value=""
}