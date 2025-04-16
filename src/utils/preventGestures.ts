export function preventGestures() {
  if (typeof window !== 'undefined') {
    let startY = 0;
    let startX = 0;

    // Предотвращаем масштабирование через жесты
    document.addEventListener('gesturestart', (e) => {
      e.preventDefault();
    });

    document.addEventListener('gesturechange', (e) => {
      e.preventDefault();
    });

    document.addEventListener('gestureend', (e) => {
      e.preventDefault();
    });

    // Отслеживаем начало касания
    document.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    }, { passive: false });

    // Предотвращаем нежелательные свайпы
    document.addEventListener('touchmove', (e) => {
      if (e.touches.length > 1) return;

      const deltaY = e.touches[0].clientY - startY;
      const deltaX = e.touches[0].clientX - startX;
      const element = e.target as HTMLElement;
      const scrollTop = element.scrollTop ?? document.documentElement.scrollTop;

      // Предотвращаем горизонтальные свайпы
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
        return;
      }

      // Предотвращаем свайп вниз в начале страницы
      if (deltaY > 0 && scrollTop <= 0) {
        e.preventDefault();
        return;
      }

      // Предотвращаем свайп вверх в конце страницы
      if (deltaY < 0 && scrollTop + element.clientHeight >= element.scrollHeight) {
        e.preventDefault();
        return;
      }
    }, { passive: false });

    // Предотвращаем двойное нажатие для зума
    document.addEventListener('dblclick', (e) => {
      e.preventDefault();
    });

    // Предотвращаем масштабирование через колесико мыши с ctrl
    document.addEventListener('wheel', (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    }, { passive: false });
  }
}