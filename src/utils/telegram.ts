declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        expand: () => void;
        ready: () => void;
        isExpanded: boolean;
        initData: string;
        initDataUnsafe: {
          query_id?: string;
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
          };
          start_param?: string;
        };
      };
    };
  }
}

export function initTelegramApp() {
  // Убеждаемся, что Telegram Web App загружен
  if (window.Telegram?.WebApp) {
    const webApp = window.Telegram.WebApp;
    
    // Сообщаем Telegram, что приложение готово
    webApp.ready();
    
    // Проверяем start_param
    if (webApp.initDataUnsafe.start_param === 'humbleappstart') {
      console.log('Приложение запущено через короткую ссылку');
    }
    
    // Если приложение еще не развернуто, разворачиваем его
    if (!webApp.isExpanded) {
      webApp.expand();
    }

    // Выводим информацию о пользователе, если она доступна
    if (webApp.initDataUnsafe.user) {
      console.log('Пользователь:', webApp.initDataUnsafe.user);
    }
  } else {
    console.warn('Telegram Web App не доступен');
  }
}