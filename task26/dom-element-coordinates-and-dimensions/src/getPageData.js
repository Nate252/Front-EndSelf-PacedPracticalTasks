export function getPageData() {
   const windowHeight = document.documentElement.clientHeight;
   const windowWidth = document.documentElement.clientWidth;
   const documentHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
const documentWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
);
   const currentScrollFromTop = window.scrollY;
   const currentScrollFromLeft = window.scrollX;

    return {
        windowHeight,
        windowWidth,
        documentHeight,
        documentWidth,
        currentScrollFromTop,
        currentScrollFromLeft
    };
}