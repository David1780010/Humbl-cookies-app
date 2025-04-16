declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
        MainButton: {
          show: () => void;
          hide: () => void;
          setText: (text: string) => void;
          onClick: (callback: () => void) => void;
        };
      };
    };
  }
}

export function initTelegramApp() {
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    // Сообщаем приложению, что оно готово к отображению
    window.Telegram.WebApp.ready();

    // Раскрываем приложение на всю высоту
    window.Telegram.WebApp.expand();
  }
} 