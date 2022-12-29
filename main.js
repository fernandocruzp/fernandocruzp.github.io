let slider = document.getElementsByClassName("et_pb_gallery_items");;
let sliderIndividual = document.getElementsByClassName("et_pb_gallery_item");;
let contador = 0;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})
slides();

function slides(){
    console.log(contador);
    sliderIndividual[contador].style.display = "none";
    contador++;
    if(contador > sliderIndividual.length-1){
	contador=0;
    }
    sliderIndividual[contador].style.display = "block";
    setTimeout(slides,3000);
}
