"use strict";
Array.from(document.getElementsByClassName('publishedVideos--innerContainer--videosList--video')).forEach(element => {
    const defaultData = element.querySelector('.publishedVideos--innerContainer--VideosList--infosContainer');
    const options = element.querySelector('.publishedVideos--innerContainer--videosList--optionsContainer');
    element.addEventListener('mouseover', () => {
        defaultData === null || defaultData === void 0 ? void 0 : defaultData.classList.add('hide');
        options === null || options === void 0 ? void 0 : options.classList.remove('hide');
    });
    element.addEventListener('mouseout', () => {
        defaultData === null || defaultData === void 0 ? void 0 : defaultData.classList.remove('hide');
        options === null || options === void 0 ? void 0 : options.classList.add('hide');
    });
});
//# sourceMappingURL=publishedVideos.js.map