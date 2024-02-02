import {
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4,
} from "assets/img/SliderImgs";

export type ParamsClasses = {
    main: string;
    second: string;
    ghost: string;
    hide: string;
};

export type SizeParams = keyof ParamsClasses;

type ElementsPosition =
    | "left-0"
    | "left-[10%]"
    | "left-1/2"
    | "right-[10%]"
    | "right-0";

export const elementsPosition: ElementsPosition[] = [
    "left-1/2",
    "right-[10%]",
    "right-0",
    "left-0",
    "left-[10%]",
];

export default [
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4,
    // sliderImg1,
    // sliderImg2,
    // sliderImg3,
    // sliderImg4,
];
