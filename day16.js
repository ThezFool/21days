var animationElements =document.querySelectorAll('.show_on_sroll')

function toggleAnimationElementInWindow(element){
    //1 item
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight

    //check xem element co ben trong man hinh hay ko
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        //ben trong thi vao day
        element.classList.add('start')
    }else{
        //ngoai thi vao day
        element.classList.remove('start')
    }
}

function checkAnimation(){

    animationElements.forEach(el=>{
        toggleAnimationElementInWindow(el)
    })



   
}

window.onscroll = checkAnimation