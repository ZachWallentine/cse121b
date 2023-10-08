/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Zachary Wallentine'
let currentYear = '2023'
let profilePicture = 'C:\Users\Zach Wallentine\Documents\cse121b\w02-task\images\profilePicture.jpeg'


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('#image');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = currentYear;
imageElement.setAttribute('src', profilePicture);




/* Step 5 - Array */
let favFood = ['Pizza','Apples','Brownies'];
foodElement.innerHTML = favFood;
favFood.push('Popcorn');
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;





