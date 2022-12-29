let indice = 1;

function suma(n) {
  muestra(indice += n);
}
function actual(n) {
  muestra(indice = n);
}

function muestra(n) {
    let i;
    let slides = document.getElementsByClassName("et_pb_gallery_item");
    if (n > slides.length/2) {indice = 1}
    if (n < 1) {indice = slides.length/2}
    for (i = 0; i < slides.length/2; i++) {
	slides[i].style.display = "none";
	slides[i].style.opacity = 0;
    }
    slides[indice-1].style.display = "block";
    slides[indice-1].style.opacity = 1;
} 
