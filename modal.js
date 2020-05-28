const modal = document.getElementById("modal-bg");
const modalText = document.getElementById("modal-info");
const modalImg = document.getElementById("modal-cover");

function OpenModal(producto){
    if(producto == 'comic'){
        modalText.innerText = 'Se explora y se detalla a profundidad, la vida y los sucesos del antagonista principal de la historia, Duncan, su oscuro pasado, los motivos de su sed de venganza, el origen de su increíble poder mágico y la razón de su odio contra Alec. ';
        modalImg.src = 'img/comic.jpeg';
    }else if(producto == 'juego1'){
        modalText.innerText = 'Alec, un chico punk escoces de 18 años, comienza a descubrir un mundo lleno de magia y secretos pero que también está repleto de peligros y de enemigos que no dudaran ni un momento en acabar con su vida. En el camino, irá obteniendo más poder y revelando los misterios de este fantástico mundo de la magia, al igual que hará nuevos amigos y descubrirá la verdad de su asado, todo, mientras intenta dominar una gran energía ancestral llamada “el poder demoniaco”. Oh, y por primera vez en su vida, tendrá un “archienemigo” que hará hasta lo imposible para impedir que Alec domine ese poder.';
        modalImg.src = 'img/poster game 1.png'
    }else if(producto == 'juego2'){
        modalText.innerText = 'Alec finalmente encuentra su poder interior en una larga travesía junto a Eva y Goliat, lo que al final, desata una feroz batalla contra su mayor enemigo, Duncan. '
        modalImg.src = 'img/poster game 2.png'
    }else if(producto == 'juegoC'){
        modalText.innerText = 'Juego de cartas, donde cada una de estas, tiene una historia y un trasfondo que complementa de manera única, el universo de Arcanissimum, por lo cual, el juego resulta una experiencia que atrapa al usuario y lo conecta con el resto de este universo mágico.'
        modalImg.src = 'img/portada cartas.jpeg'
    }else if(producto == 'web'){
        modalText.innerText = 'Un portal web para todos aquellos interesados en explorar o pertenecer a la casa más polémica de Arcanissimum. Aquí, los curiosos podrán encontrar información, imágenes, referentes e historias, todo relacionado con esta casa.'
        modalImg.src = 'img/web.jpeg'
    }

    modal.style.display = "flex";
}

function CloseModal(){
    modal.style.display = "none";
}