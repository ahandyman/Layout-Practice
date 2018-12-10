// console.dir(document);

// alert(1);

// console.log(document.title);
//
// console.log(document.all);
//
// console.log(document.all[5]);
// document.all[11].textContent = "heel";
// var bodyColor = document.body;
// bodyColor.style.backgroundColor ="lightblue";
//
// // GET ELEMENT BY ID
//
// var headerTitle = document.getElementById('title');
// // console.log(headerTitle);
// headerTitle.textContent = "hello";
// headerTitle.style.color = "#00ff99";
//
// // GET ELEMENTS BY CLASSNAME
// var firstWord = document.getElementsByClassName('uppercase');
// for (var i = 0; i < firstWord.length; i++) {
//   firstWord[i].style.color="yellow";
// }
// // firstWord
// // console.log(firstWord);
// // firstWord[1].textContent="djalsdfjldskj";
//
// var menu = document.getElementsByClassName('hamburger');
// for (var i = 0; i < menu.length; i++) {
//   menu[i].style.backgroundColor="lightblue";
//   menu[i].cursor="crosshair";
// }

// create Element
// create new div
var newDiv = document.createElement('div');

newDiv.className="hello";

newDiv.id = 'hello1';

newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('Hello World from Ramon');

// add text to div
newDiv.appendChild(newDivText);

// put it below class="group1"
var container = document.querySelector('.keyPoints .group1');

var p = document.querySelector('.group1 .one')

container.insertBefore(newDiv, p);
newDiv.style.fontSize='30px';
newDiv.style.width='50%';
console.log(newDiv);

// var menu = document.getElementsByClassName('hamburger');
// menu.style.backgroundColor="lightblue";


//
var menu = document.getElementsByClassName('hamburger');
for (var i = 0; i < menu.length; i++) {
  menu[i].style.backgroundColor="lightblue";
  menu[i].cursor="crosshair";
}



function openNav() {
    document.getElementsByClassName("sidenav").style.width = "100px";
    document.getElementsByClassName("grou1").style.marginLeft = "100px";
}
