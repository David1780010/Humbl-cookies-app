'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '../utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <div className="min-h-screen bg-[#ffd4e5]">
      <div className="w-full">
        <img 
          src="https://i.imgur.com/4jnqmkN.png"
          alt="Humbl Cookies"
          className="w-full object-contain"
          style={{
            maxHeight: '280px',
            marginTop: '-20px'
          }}
        />
      </div>
    </div>
  );
}
