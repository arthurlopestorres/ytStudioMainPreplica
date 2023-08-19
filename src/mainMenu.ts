const menuOptions = Array.from(document.querySelectorAll('.mainMenu--options--option'))
menuOptions.forEach(element => {
    element.addEventListener('click', () => {
        menuOptions.forEach(element => {
            const iconNotSelected = element.querySelector('.mainMenu--options--option--icon')
            const iconSelected = element.querySelector('.mainMenu--options--option--icon--iconSelected')

            iconNotSelected?.classList.remove('hidden')
            iconSelected?.classList.add('hidden')
            element.classList.remove('selected')
        })

        const iconNotSelected = element.querySelector('.mainMenu--options--option--icon')
        const iconSelected = element.querySelector('.mainMenu--options--option--icon--iconSelected')
        
        iconNotSelected?.classList.add('hidden')
        iconSelected?.classList.remove('hidden')
        element.classList.add('selected')
    })
})