// Находим элементы
const img   = document.getElementById('mainImage');
const input = document.getElementById('opacityInput');

// При каждом клике по картинке читаем текущее значение input
img.addEventListener('click', () => {
  // приводим к числу и ограничиваем диапазоном 0-1
  const value = Math.min(1, Math.max(0, parseFloat(input.value)));
  // задаём анимацию на 1,2 с и меняем прозрачность
  img.style.transition = 'opacity 1.2s';
  img.style.opacity    = value;
});
