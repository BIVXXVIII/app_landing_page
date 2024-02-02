import { LinkIdValue } from ".";

const useScrollTo = (id: LinkIdValue) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
    }
    window.scrollTo({ behavior: "smooth", top: 0 });
};
export default useScrollTo;
