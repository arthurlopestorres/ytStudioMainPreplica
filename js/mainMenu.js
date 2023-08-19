"use strict";
const menuOptions = Array.from(document.querySelectorAll('.mainMenu--options--option'));
menuOptions.forEach(element => {
    element.addEventListener('click', () => {
        menuOptions.forEach(element => {
            const iconNotSelected = element.querySelector('.mainMenu--options--option--icon');
            const iconSelected = element.querySelector('.mainMenu--options--option--icon--iconSelected');
            iconNotSelected === null || iconNotSelected === void 0 ? void 0 : iconNotSelected.classList.remove('hidden');
            iconSelected === null || iconSelected === void 0 ? void 0 : iconSelected.classList.add('hidden');
            element.classList.remove('selected');
        });
        const iconNotSelected = element.querySelector('.mainMenu--options--option--icon');
        const iconSelected = element.querySelector('.mainMenu--options--option--icon--iconSelected');
        iconNotSelected === null || iconNotSelected === void 0 ? void 0 : iconNotSelected.classList.add('hidden');
        iconSelected === null || iconSelected === void 0 ? void 0 : iconSelected.classList.remove('hidden');
        element.classList.add('selected');
    });
});
//# sourceMappingURL=mainMenu.js.map