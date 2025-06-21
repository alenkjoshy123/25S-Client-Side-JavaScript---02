
/**
 * page-color-changer.js
 * 
 * This script controls the RGB background color changer interface.
 * It uses three range sliders to adjust the red, green, and blue values
 * of the page background color.
 */

// Constants for DOM elements
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const htmlElement = document.querySelector('html');

/**
 * Updates the background color based on slider values
 */
function updateBackgroundColor() {
    // Get current values from sliders
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    
    // Create RGB color string
    const bgColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    
    // Apply the new color to the HTML element
    htmlElement.style.backgroundColor = bgColor;

    //console log the new background color
    console.log(`Background color updated to: ${bgColor}`);
}

// Event listeners for all sliders
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

// Initialize the background color on page load
updateBackgroundColor();