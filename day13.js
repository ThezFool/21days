var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')

upload.addEventListener('change', function(e){
    var img = document.createElement('img')
    img.src = URL.createObjectURL(upload.files[0])
    preview.appendChild(img)
})
