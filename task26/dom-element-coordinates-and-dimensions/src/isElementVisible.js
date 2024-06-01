export function isElementVisible(element) {
    if (!element) return false; 
   
    
    const offsetWidth =  element.offsetWidth;
    const offsetHeight=  element.offsetHeight;
    
    if (offsetWidth || offsetHeight) {
        return true;
    }
    else {
        return false;
    }
}
