export function treatTextLength(elementIdentifier: string, textMaxLength: number): any{
    const textElements: any = document.querySelectorAll(elementIdentifier)

    textElements.forEach(element => {
        let elementTextLength = element?.textContent?.length
        if(elementTextLength > textMaxLength){
            let finalText = element?.textContent?.substring(0, textMaxLength) + '...'
            element.textContent = finalText
        }
    })
}

export default { treatTextLength }