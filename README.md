# Etch-a-Sketch
## About
This as an Etch-a-Sketch game designed using HTML CSS and Javascript. Inspired by [The Odin Project](https://www.theodinproject.com).
## How it Works.
Once you load the webpage, The default canvas is loaded unto the screen. This happens since the ```createGrid()``` function is called as the page is being loaded.
* createGrid():
Use a for-loop to create divs in a container. Initaialize a counter and create a div as long as the counter is less than the number of divs (grid cells) you want to create. [See lines 64-77](main.js)
* Rainbow button:
What this basically does is that it randomly selects an rgb() color everytime you hover over a div in the canvas. since rgb has 3 arguments/values ranging from 0-255 each you basically have to just get 3 sets of random numbers within that range to get random color. [See line 44](main.js).
* Clear button: 
This button changes the background color of all divs inside the container to white. [See line 58](main.js).
* Grid Toggle:
For every div element in the container, if the border style is equal to none, it gives it a black border and if not, it takes away the border. Therefore, if the value is True it makes it False and if the value is False, it makes it True.
* Eraser:
This button changes the background color of any div you hover over to white. [See lines 34-39](main.js)
* Default Pen:
This button changes the background color of any div you hover over to black. [See lines 48-53](main.js)
* Slider:
Every time you move the slider, all the divs in the container are deleted and a new grid is created with the updated value of the slider(This made me really marvel at the speed of computers. When you slide it all the way up the computer actually creates 64*64 divs). [see lines 14-21](main.js)
* Color Picker:
The value of the color picker is a string value representing a color. I stored this value in variable and added an event listener which assigns this value to any div I hover (over).
## Definitions/words you might not know
* Grid: A grid (in this case) is a perfect square made up of perfect squares.
### [View Live](https://www.somtojf.github.io/Etch-a-Sketch)