'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '@/utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto mt-8">
        <div className="w-full relative">
          <img 
            src="https://raw.githubusercontent.com/David1780010/Humbl-cookies-app/9d7381ab44330bb52318589923c85d38c72cb185/detalis.png"
            alt="Details"
            className="w-full max-h-[400px] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
