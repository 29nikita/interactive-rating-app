# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

<img width="959" alt="screenshot-first" src="https://user-images.githubusercontent.com/71252906/221370435-a6b7ba8d-3127-4084-84bf-b0082dfb0656.png">
<img width="959" alt="screenshot-second" src="https://user-images.githubusercontent.com/71252906/221370437-27f1ce06-e47d-4055-bf8e-1f3722b567af.png">
<img width="960" alt="screenshot-third" src="https://user-images.githubusercontent.com/71252906/221370415-9f0b0aa2-e243-44fe-ab61-964ae149daec.png">

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript

### What I learned

 This project helped me to revisit the CSS flexbox properties and some vanilla js concepts like functions, setTimeout and DOM manipulation. 

```css
body{
    background-color: hsl(216, 12%, 8%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```
```js
let ratingEl = document.querySelector(".card-rating-num");

for(let i=1; i<=5; i++){
    ratingEl.innerHTML+='<span id="card_rating'+i+'" class="card-rating-circle">'+i+'</span>';
}
```
## Author

- Website - [Nikita](https://www.your-site.com)
- Frontend Mentor - [@29nikita](https://www.frontendmentor.io/profile/29nikita)

## Acknowledgments

Used this (https://www.frontendmentor.io/solutions/interctiveratingapp-B-EYpkM9_a) solution for the inspiration to complete this project.
