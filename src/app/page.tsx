'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '@/utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      <div className="w-full max-w-md mt-8 flex justify-center">
        <div className="w-full flex justify-center">
          <img 
            src="https://raw.githubusercontent.com/David1780010/Humbl-cookies-app/9d7381ab44330bb52318589923c85d38c72cb185/detalis.png"
            alt="Details"
            className="max-w-full max-h-[300px] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
