'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '@/utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
    
    // Добавляем скрипт Imgur
    const script = document.createElement('script');
    script.src = '//s.imgur.com/min/embed.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      // Очищаем скрипт при размонтировании компонента
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <blockquote 
          className="imgur-embed-pub" 
          lang="en" 
          data-id="znFJkU2"
        >
          <a href="https://imgur.com/znFJkU2">View post on imgur.com</a>
        </blockquote>
      </div>
    </div>
  );
}
