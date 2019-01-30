// Your code goes here

const colors = ["red", "black", "yellow", "blue", "green", "purple", "orange"];


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


const html = document.querySelector('html');
const btn = document.querySelector('.btn');
const nav = document.querySelector('nav');
const p = document.querySelector('p');


p.addEventListener('copy', e => {
    e.target.title = "YOU COPYRIGHT INFRINGING SON OF (OR DAUGHTER OF) A BITCH!!!!";
    e.target.style.background = colors[getRandomInt(2)];
    for (i = 0; i < 3000; i++){
        e.target.style.background = "black";
        console.log("son of a ");
        e.target.style.background = "red";
    }
} );



html.addEventListener('scroll', e => {
  console.log(`This is my event: ${e.type}`);
  e.target.style.background = "pink";
  e.target.title= "I like it when you scroll me! :0";
//    e.target.style.background = "rgb(240, 230, 230)";
});

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