export function treatsTitleLength(elementIdentifier, largestTextLength) {
    var _a, _b;
    const mainText = document.querySelector(elementIdentifier);
    const mainTextLength = ((_a = mainText === null || mainText === void 0 ? void 0 : mainText.textContent) === null || _a === void 0 ? void 0 : _a.length) || largestTextLength;
    if (mainTextLength > largestTextLength) {
        let finalText = ((_b = mainText === null || mainText === void 0 ? void 0 : mainText.textContent) === null || _b === void 0 ? void 0 : _b.substring(0, largestTextLength)) + '...';
        return finalText;
    }
}
export default { treatsTitleLength };
//# sourceMappingURL=treatsTextLength.js.map