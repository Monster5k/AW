const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnail')

function cambiarImagen(imagen){
    var i = document.getElementById("mainImg");
    i.src = imagen;
}


thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
        main_img.src = thumb.src
    })
})
