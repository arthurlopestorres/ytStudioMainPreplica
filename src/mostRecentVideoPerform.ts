const collapseArrow = document.getElementsByClassName('mRecentVideoPerform--container--metrics--arrow-collapseArrow')[0];
const expandArrow = document.getElementsByClassName('mRecentVideoPerform--container--metrics--arrow-expandArrow')[0];
const arrowClickArea = document.getElementsByClassName('mRecentVideoPerform--container--metrics--arrow')

function collapseExpandDataWrapper(){
    const dataWrapper = document.getElementsByClassName('mRecentVideoPerform--container--dataWrapper')[0];

    if(!collapseArrow.classList.contains('hide')){
        collapseArrow.classList.add('hide');
        expandArrow.classList.remove('hide');
        if(dataWrapper.classList.contains('showFlex')){
            dataWrapper.classList.remove('showFlex')
        }
        dataWrapper.classList.add('hideFlex');
    } else {
        expandArrow.classList.add('hide');
        collapseArrow.classList.remove('hide');
        dataWrapper.classList.remove('hideFlex');
        dataWrapper.classList.add('showFlex');
    }
}
arrowClickArea[0].addEventListener('click', collapseExpandDataWrapper)

function treatsTitleLength(){
    const videoMainTitle: any = document.getElementById('mRecentVideoPerform--videoName')
    const videoMainTitleLength = videoMainTitle?.textContent?.length || 69

    if(videoMainTitleLength > 90){
        const finalTitleText = videoMainTitle?.textContent?.substring(0, 90) + '...'
        videoMainTitle.textContent = finalTitleText
    }
}
treatsTitleLength()