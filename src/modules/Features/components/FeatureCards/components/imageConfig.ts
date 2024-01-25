import chat from "assets/svg/chat.svg";
import eye from "assets/svg/eye-scanner 1.svg";
import gift from "assets/svg/present.svg";
import phone from "assets/svg/phone-feature.svg";
import pen from "assets/svg/pen.svg";
import support from "assets/svg/support.svg";

export type FeatureCardImageConfig = {
    chat: string;
    eye: string;
    feature: string;
    phone: string;
    pen: string;
    support: string;
};

export const featureCardImageConfig: FeatureCardImageConfig = {
    chat: chat,
    eye: eye,
    feature: gift,
    phone: phone,
    pen: pen,
    support: support,
};
