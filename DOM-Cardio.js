// Make a div
const myDiv = document.createElement('div');
console.log(myDiv);
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two three" in them
const one = document.createElement('li');
const two = document.createElement('li');
const three = document.createElement('li');

one.textContent = 'one';
two.textContent = 'two';
three.textContent = 'three';

myList.appendChild(one);
myList.appendChild(two);
myList.appendChild(three);

// two.insertAdjacentElement('afterbegin' myList);
// three.insertAdjacentElement('afterbegin' myList);

// put that list into the above wrapper
// myList.appendChild(myDiv);
// document.body.appendChild(myList);
myDiv.insertAdjacentElement('afterbegin', myList);

// create an image
const myImage = document.createElement('img');

// set the width to 250
myImage.width = 250;
// const width = 250;

// set the source to an image
myImage.src = `https://source.unsplash.com/random`;

// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'cute puppy';
console.log(myImage);
// Append that image to the wrapper
myDiv.appendChild(myImage);
// myDiv.insertAdjacentElement('afterbegin', myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHtml = document.createElement('div');

myHtml.innerHTML = `
<div class="theDiv">
<p>this is P one.</p>
<p>this is P two.</p>
</div>
`;
// put this div before the unordered list from above
myDiv.insertAdjacentElement('afterbegin', myHtml);

// add a class to the second paragraph called warning
const theDiv = document.querySelector('.theDiv');
console.log(theDiv.children);
theDiv.children[1].classList.add('warning');
// remove the first paragraph
const firstP = document.querySelector('p');
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} feet tall and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button">
  &times; Delete
</button>
    </div>
`;
  return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
// Have that function make 4 cards
let myCards = generatePlayerCard('luke', 35, 6);
console.log(myCards);
myCards += generatePlayerCard('bre', 29, 5.2);
myCards += generatePlayerCard('merlajean', 65, 5.5);
myCards += generatePlayerCard('steve', 66, 6);

newDiv.innerHTML = myCards;
// append those cards to the div
// newDiv.appendChild(myCards);
// put the div into the DOM just before the wrapper element
// document.body.appendChild(newDiv);
myDiv.insertAdjacentElement('beforebegin', newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// make out delete function
function deleteCard() {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
