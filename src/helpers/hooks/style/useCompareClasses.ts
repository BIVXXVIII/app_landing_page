import { addStylePrefix } from "./addStylePrefix";

type HookProps = {
    desktopClasses?: string;
    tabletClasses?: string;
    mobileClasses: string;
};

export const useCompareClasses = ({
    desktopClasses,
    tabletClasses,
    mobileClasses,
}: HookProps) => {
    const descopResult =
        desktopClasses && desktopClasses.length > 0
            ? `${addStylePrefix(desktopClasses, "lg")} `
            : "";
    const tabletResult =
        tabletClasses && tabletClasses.length > 0
            ? `${addStylePrefix(tabletClasses, "md")} `
            : "";
    return `${descopResult}${tabletResult}${mobileClasses}`;
};
