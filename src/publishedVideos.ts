Array.from(document.getElementsByClassName('publishedVideos--innerContainer--videosList--video')).forEach(element => {
    const defaultData = element.querySelector('.publishedVideos--innerContainer--VideosList--infosContainer')
    const options = element.querySelector('.publishedVideos--innerContainer--videosList--optionsContainer')

    element.addEventListener('mouseover', () => {
        defaultData?.classList.add('hide')
        options?.classList.remove('hide')
    })
    element.addEventListener('mouseout', () => {
        defaultData?.classList.remove('hide')
        options?.classList.add('hide')
    })
})