'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '../utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto" style={{ marginTop: '-20px' }}>
        <div className="w-full relative">
          <img 
            src="https://raw.githubusercontent.com/David1780010/Humbl-cookies-app/9d7381ab44330bb52318589923c85d38c72cb185/detalis.png"
            alt="Details"
            className="w-full max-h-[280px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
