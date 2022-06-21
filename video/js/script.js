var i = 0;
const video = ['moto.mp4', 'floresta.mp4', 'cachoeira.mp4','mar.mp4', 'fundo.mp4', 'teclado.mp4'];
const vid = document.querySelector('#vid');
const parag = document.querySelector('#parag');
const ex = document.querySelector('#ex');
var tempo = 15;
// ex.addEventListener("click", tempo());

function mudar() {
    vid.src = "./video/" + video[i];
    parag.innerHTML = "Video: <b>" + video[i] + "<b>";
    i++;
    if (i == video.length) { i = 0; }
    setTimeout(function () { mudar() }, tempo * 1000);
}
mudar();