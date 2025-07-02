document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const btn   = document.getElementById('playBtn');

    btn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        btn.textContent = '⏸️';
      } else {
        audio.pause();
        btn.textContent = '▶️';
      }
    });

    // Opcional: al terminar la canción, volver al ícono de play
    audio.addEventListener('ended', () => {
      btn.textContent = '▶️';
    });
  });