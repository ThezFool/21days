var btnopen = document.querySelector('.open_modal_btn')
var modal = document.querySelector('.modal')
var btnicon = document.querySelector('.modal_header i')
var btnclose = document.querySelector('.modal_footer button')

function togglemodal(e){
    console.log(e.target);
    modal.classList.toggle('hide')
}

btnopen.addEventListener('click', togglemodal)
btnclose.addEventListener('click', togglemodal)
btnicon.addEventListener('click', togglemodal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        togglemodal()
    }
})
