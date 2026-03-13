const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // 1. Atualiza o índice atual
    currentIndex = index;

    // 2. Move o trilho de imagens
    // Multiplica o índice por 100% para mover o trilho horizontalmente
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // 3. Atualiza os pontinhos ativos
    document.querySelector('.dot.active').classList.remove('active');
    dot.classList.add('active');
  });
});