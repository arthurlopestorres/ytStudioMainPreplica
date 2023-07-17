"use strict";
const collapseArrow = document.getElementsByClassName('mRecentVideoPerform--container--metrics--arrow-collapseArrow');
const expandArrow = document.getElementsByClassName('mRecentVideoPerform--container--metrics--arrow-expandArrow');
const arrowClickArea = document.getElementsByClassName('mRecentVideoPerform--container--metrics--arrow');
function collapseExpandDataWrapper() {
    const dataWrapper = document.getElementsByClassName('mRecentVideoPerform--container--dataWrapper');
    if (!collapseArrow[0].classList.contains('hide')) {
        collapseArrow[0].classList.add('hide');
        expandArrow[0].classList.remove('hide');
        if (dataWrapper[0].classList.contains('showFlex')) {
            dataWrapper[0].classList.remove('showFlex');
        }
        else { }
        dataWrapper[0].classList.add('hideFlex');
    }
    else {
        expandArrow[0].classList.add('hide');
        collapseArrow[0].classList.remove('hide');
        dataWrapper[0].classList.remove('hideFlex');
        dataWrapper[0].classList.add('showFlex');
    }
}
arrowClickArea[0].addEventListener('click', collapseExpandDataWrapper);
//# sourceMappingURL=mostRecentVideoPerform.js.map