export function treatTextLength(elementIdentifier, textMaxLength) {
    const textElements = document.querySelectorAll(elementIdentifier);
    textElements.forEach(element => {
        var _a, _b;
        let elementTextLength = (_a = element === null || element === void 0 ? void 0 : element.textContent) === null || _a === void 0 ? void 0 : _a.length;
        if (elementTextLength > textMaxLength) {
            let finalText = ((_b = element === null || element === void 0 ? void 0 : element.textContent) === null || _b === void 0 ? void 0 : _b.substring(0, textMaxLength)) + '...';
            element.textContent = finalText;
        }
    });
}
export default { treatTextLength };
//# sourceMappingURL=treatsTextLength.js.map