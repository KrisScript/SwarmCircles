import { Positioning } from "./Positioning";

let resX: number;
let resY: number;

function getRandomWidth() {
  let minWidth = 0;
  let maxWidth = Math.floor(window.innerWidth  - 150);
  return Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
}

function getRandomHeight() {
  let minHeight = 64;
  let maxHeight = Math.floor(window.innerHeight  - 150);
  return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
}

export const getPosition = (circles: Positioning[]) => {

  // Save old position to compare with new one
  let oldX = resX;
  let oldY = resY;

  // Get new position
  resX = getRandomWidth();
  resY = getRandomHeight();

  // Check if new position is not the same as old one
  if (oldX === resX && oldY === resY) {
    getPosition(circles);
  }

  // Check if new position is not too close to other circles
  circles.forEach((circle) => {
    if (Math.abs(circle.resX - resX) < 150 && Math.abs(circle.resY - resY) < 150) {
      getPosition(circles);
    }
  });

  return {resX, resY};
};