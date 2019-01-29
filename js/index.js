// Your code goes here

const colors = ["red", "yellow", "blue", "green", "purple", "orange", "black"];


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  
const html = document.querySelector('html');
const btn = document.querySelector('.btn');
const nav = document.querySelector('nav');


html.addEventListener('mouseover', e => {
  console.log(`This is my event: ${e.type}`);
  e.target.style.color = "gray";
  e.target.style.font = "Fira Sans";
//    e.target.style.background = "rgb(240, 230, 230)";
});

html.addEventListener('mouseout', e => {
  console.log(`This is my event: ${e.type}`);
  e.target.style.color = "black";
//   e.target.style.background = "white";
});

html.addEventListener('keydown', e => {
    console.log(`This is my event: ${e.type}`);

    e.target.style.background = colors[getRandomInt(7)];

});

html.addEventListener('keyup', e => {
    console.log(`This is my event: ${e.type}`);

    e.target.style.background = "white";

});


nav.addEventListener('click', e => {
    console.log(`This is my event: ${e.type}`);
    e.target.style.color = "#609";
  //   e.target.style.background = "white";
  });





btn.addEventListener('click', e => {
  console.log(`Work button fired a click event!`);
  // ALL about stopping events from bubbling
  e.stopPropagation();

  e.target.title = "Thank you! Thank you! Thank you!";
 
});


btn.addEventListener('mouseover', e => {
  console.log(`Work button fired a click event! ${e.target}`);
  // ALL about stopping events from bubbling
  e.stopPropagation();

//   e.target.syle.size = "200%";
  e.target.title = "You know you want to!";
//   TweenMax.to(e.currentTarget, 1, {
//     width:200,
//     ease:Bounce.easeOut
//   });
});

btn.addEventListener('mouseout', e => {
  console.log(`Work button fired a click event!`);
  // ALL about stopping events from bubbling
  e.stopPropagation();
  TweenMax.to(e.currentTarget, 1, {
    width:120,
    ease:Bounce.easeOut
  });
});


// const formSubmit = document.querySelector('.form-submit');
// formSubmit.addEventListener('click', e => {
//   console.log(`Work button fired a click event!`);
//   // stops the original behavior of HTML elements
//   e.preventDefault();
// });