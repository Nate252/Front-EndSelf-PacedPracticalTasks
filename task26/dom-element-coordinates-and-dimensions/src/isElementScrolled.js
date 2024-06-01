export function isElementScrolled(element) {
    let result = {
        scrollTop: null,
        scrollLeft: null,
        isScrolled: null
    };
    
    if (!element) {
        return result;
    }
    result.isScrolled = false;
    

    let scrollLeft = element.scrollLeft;
    let scrollTop = element.scrollTop;
    if (scrollLeft || scrollTop) {
        result.scrollTop = scrollTop;
        result.scrollLeft = scrollLeft;
        result.isScrolled = true;
    }

    
    return result;
}