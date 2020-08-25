import backgroundImg from "@/assets/grass.png";
import foodImg from "@/assets/foods.png";
import splatImg from "@/assets/blood-splat-icon.png";
import redXImg from "@/assets/red_X.png";
import splatSound from "@/assets/splatsound.wav";

export const foods = new Image();
export const background = new Image();
export const bloodSplat = new Image();
export const redX = new Image();
export const splat = new Audio(splatSound);
foods.src = foodImg;
background.src = backgroundImg;
bloodSplat.src = splatImg;
redX.src = redXImg;
background.src = backgroundImg;

// // var backgroundMusic = new Audio("Spring_In_My_Step_-_Silent_Partner.wav");
