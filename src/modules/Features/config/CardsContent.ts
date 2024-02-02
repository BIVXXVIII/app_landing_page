import { FeatureCardImgID } from "../components/FeatureCard";

type CardInfo = {
    title: string;
    children: string;
    imgID: FeatureCardImgID;
    orientation: "left" | "center" | "right";
};

type CardsContent = {
    "free chat": CardInfo;
    "unlimited features": CardInfo;
    "ui design": CardInfo;
    "mobile versions": CardInfo;
    graphics: CardInfo;
    support: CardInfo;
};

export const cardContent: CardsContent = {
    "free chat": {
        title: "Full free chat",
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquid?",
        orientation: "center",
        imgID: "chat",
    },
    "unlimited features": {
        title: "unlimiter features",
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquid?",
        orientation: "left",
        imgID: "feature",
    },
    "ui design": {
        title: "awsome ui design",
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquid?",
        orientation: "left",
        imgID: "pen",
    },
    "mobile versions": {
        title: "iso & androind version",
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquid?",
        orientation: "right",
        imgID: "phone",
    },
    graphics: {
        title: "retina ready greaphics",
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquid?",
        orientation: "right",
        imgID: "eye",
    },
    support: {
        title: "24/7 support by real pepole",
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquid?",
        orientation: "center",
        imgID: "support",
    },
};
