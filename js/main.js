const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
 .typeString('¡Haz tu reserva ahora mismo!')
 .pauseFor(200)
 .start();