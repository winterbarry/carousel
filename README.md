# Image Carousel Slider

A simple, responsive image carousel built with **HTML**, **CSS**, and **JavaScript**. Users can navigate through a set of slides using **left/right arrows** or view their position using navigation **dots**.

## Features

- Smooth left/right slide transitions  
- Navigation arrows to go forward or back  
- Dots to indicate and control current slide  
- Responsive layout with image scaling  
- Easy to customize and extend  

## Project Structure

carousel-project/
│
├── index.html        # Main HTML file with the carousel structure
├── style.css         # Styles for layout, transitions, and responsiveness
├── index.js          # JavaScript for interactivity (slide movement, dots)
├── /images           # Folder containing your .jpg or .png slide images

## How It Works

- `currentIndex` tracks which slide is currently visible.
- The container of slides (`.carousel-slides`) moves left or right by changing its `translateX` style.
- Clicking the right arrow increments `currentIndex` (go to next slide).
- Clicking the left arrow decrements `currentIndex` (go to previous slide).
- The `updateDots()` function highlights the active navigation dot.

## Setup Instructions

1. Clone or download the project files.
2. Place your `.jpg` images in the same folder (or inside an `images/` folder).
3. Open `index.html` in your browser to see it in action.
4. Optionally, run on a local server (like Live Server in VS Code) for smoother testing.

## Technologies Used

- HTML5  
- CSS3   
- JavaScript

## License

This project is open-source and free to use. No license is required.

## Image Credits

- [Photo by Chevanon Photography](https://www.pexels.com/photo/adorable-animal-blur-cat-312418/) on Pexels
- [Photo by Pixabay](https://www.pexels.com/photo/animal-cat-face-close-up-414630/) on Pexels
- [Photo by Victor Freitas](https://www.pexels.com/photo/man-doing-barbell-exercise-685527/) on Pexels
