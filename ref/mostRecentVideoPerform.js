"use strict";
const collapseArrow = document.getElementsByClassName('mRecentVideoPerform--container--metrics--arrow-collapseArrow')[0];
const expandArrow = document.getElementsByClassName('mRecentVideoPerform--container--metrics--arrow-expandArrow')[0];
const arrowClickArea = document.getElementsByClassName('mRecentVideoPerform--container--metrics--arrow');
function collapseExpandDataWrapper() {
    const dataWrapper = document.getElementsByClassName('mRecentVideoPerform--container--dataWrapper')[0];
    if (!collapseArrow.classList.contains('hide')) {
        collapseArrow.classList.add('hide');
        expandArrow.classList.remove('hide');
        if (dataWrapper.classList.contains('showFlex')) {
            dataWrapper.classList.remove('showFlex');
        }
        dataWrapper.classList.add('hideFlex');
    }
    else {
        expandArrow.classList.add('hide');
        collapseArrow.classList.remove('hide');
        dataWrapper.classList.remove('hideFlex');
        dataWrapper.classList.add('showFlex');
    }
}
arrowClickArea[0].addEventListener('click', collapseExpandDataWrapper);
function treatsTitleLength() {
    var _a, _b;
    const videoMainTitle = document.getElementById('mRecentVideoPerform--videoName');
    const videoMainTitleLength = ((_a = videoMainTitle === null || videoMainTitle === void 0 ? void 0 : videoMainTitle.textContent) === null || _a === void 0 ? void 0 : _a.length) || 69;
    if (videoMainTitleLength > 90) {
        const finalTitleText = ((_b = videoMainTitle === null || videoMainTitle === void 0 ? void 0 : videoMainTitle.textContent) === null || _b === void 0 ? void 0 : _b.substring(0, 90)) + '...';
        videoMainTitle.textContent = finalTitleText;
    }
}
treatsTitleLength();
//# sourceMappingURL=mostRecentVideoPerform.js.map