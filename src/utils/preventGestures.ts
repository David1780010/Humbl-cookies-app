export function preventGestures() {
  if (typeof window !== 'undefined') {
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

    // Предотвращаем масштабирование через щипок
    document.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
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