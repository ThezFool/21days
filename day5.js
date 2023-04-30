var btnsearch = document.querySelector('.search_box_btn')

btnsearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    console.log(this.previousElementSibling);
    this.previousElementSibling.focus();
})