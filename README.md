# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![Desktop view](./design/desktop-preview.jpg)

### Links

- Solution URL: [github.com](https://github.com/duclairdeugoue/fmc-news-homepage)
- Live Site URL: [newsapp.ducsoft.com](https://newsapp.ducsoft.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<picture>
  <source media="(min-width: 768px)" srcset="./assets/images/image-web-3-desktop.jpg" sizes="">
  <img src="./assets/images/image-web-3-mobile.jpg" alt="">
</picture>
```

```css
.header nav.open {
  display: none;
  position: fixed;
  right: 0;
  /* left: 0; */
  top: 0;
  bottom: 0;
  width: 75vw;
  padding: 1.25rem;
  background-color: white;
  z-index: 999999;
}
```

## Author

- Website - [ducsoft.com](https://www.ducsoft.com)
- Frontend Mentor - [@duclairdeugoue](https://www.frontendmentor.io/profile/duclairdeugoue)
- Twitter - [@duclairdeugoue](https://www.twitter.com/duclair.deugoue)
