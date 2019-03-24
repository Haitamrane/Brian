var contenu = document.querySelectorAll('.contenu li');
var achat = document.querySelectorAll('.achat ul li');
var type = document.querySelector('.check_type ul');
var surface = document.querySelector('.check_surface ul');
var prix = document.querySelector('.check_prix ul');
var piece = document.querySelector('.check_piece ul');
var valider = document.querySelector('.valider');


contenu[0].addEventListener("click",function(){
    for (let i = 0; i < achat.length; i++) {
        achat[i].classList.toggle('achat-visible');      
    }
    valider.classList.toggle('valider-visible');
    type.classList.remove('achat-visible');
    surface.classList.remove('achat-visible');
    prix.classList.remove('achat-visible');
    piece.classList.remove('achat-visible');
    autre.classList.remove('achat-visible');
})

achat[0].addEventListener("click",function(){
        type.classList.toggle('achat-visible');      
})

achat[1].addEventListener("click",function(){
    surface.classList.toggle('achat-visible');      
})

achat[2].addEventListener("click",function(){
    prix.classList.toggle('achat-visible');      
})

achat[3].addEventListener("click",function(){
    piece.classList.toggle('achat-visible');      
})

contenu[1].addEventListener("click",function(){
    for (let i = 0; i < achat.length; i++) {
        achat[i].classList.toggle('achat-visible');      
    }
    valider.classList.toggle('valider-visible');
    type.classList.remove('achat-visible');
    surface.classList.remove('achat-visible');
    prix.classList.remove('achat-visible');
    piece.classList.remove('achat-visible');
    autre.classList.remove('achat-visible');
})
