export interface IListAccessibility {
    e: React.KeyboardEvent, 
    listLength: number,
    tabIndex: number,
    setTabIndex: (tabIndex: number)=> void
    ref: any
}
export const listAccessibility = (props: IListAccessibility) => {
    const {e, listLength,tabIndex, setTabIndex, ref} = props
    let newIndex 
    
    switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
            e.preventDefault()
            newIndex = tabIndex - 1
            break
        case 'ArrowDown':
        case 'ArrowRight':
            e.preventDefault()
            newIndex = tabIndex + 1
            break
        case 'Home':
            e.preventDefault()
            newIndex = 0
            break
        case 'End':
            e.preventDefault()
            newIndex = listLength - 1
            break
        case 'Tab':
            newIndex = e.shiftKey ? 0 : listLength - 1
            break
        default:
            break
    }

    if (newIndex >= 0) {

        const element = ref?.current?.children[newIndex]?.querySelector('a')

        if (element) {
            element.focus()	
            setTabIndex(newIndex)
        }
    }

}
