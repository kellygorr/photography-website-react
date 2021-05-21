export interface ISlideshowAccessibility {
    e: React.KeyboardEvent, 
    activeIndex: number,
    listLength: number
    ref: any
}
export const slideshowAccessibility = (props: ISlideshowAccessibility) => {
    const {e, activeIndex,listLength, ref} = props
    let newIndex 
    
    switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
            e.preventDefault()
            newIndex = activeIndex - 1
            break
        case 'ArrowDown':
        case 'ArrowRight':
            e.preventDefault()
            newIndex = activeIndex + 1
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
           
            let element
            if(document.activeElement.classList.contains('slide')){
                element = e.shiftKey ? document.getElementById('slide-title'): document.getElementById('slide-info')
             
            } else if(document.activeElement.id === 'slide-info' && e.shiftKey ){
                element = document.getElementsByClassName('slide')[activeIndex]
            }

            console.log('element', element)
            if(element){
                e.preventDefault();
                (element as HTMLElement).focus()
            }
            break
        default:
            break
    }
    if (newIndex >= 0) {

        const element = ref?.current?.children[newIndex]
        if (element) {
            element.focus()	
        }
    }

}
