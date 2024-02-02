import {
    chatIcon,
    eyeIcon,
    penIcon,
    giftIcon,
    phoneIcon,
    supportIcon,
} from "assets/svg";

export type FeatureCardImageConfig = {
    chat: string;
    eye: string;
    feature: string;
    phone: string;
    pen: string;
    support: string;
};

export const featureCardImageConfig: FeatureCardImageConfig = {
    chat: chatIcon,
    eye: eyeIcon,
    feature: giftIcon,
    phone: phoneIcon,
    pen: penIcon,
    support: supportIcon,
};
