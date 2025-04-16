'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '../utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="w-full" style={{ marginTop: '-20px', marginRight: '-15px', position: 'relative' }}>
        <img 
          src="https://raw.githubusercontent.com/David1780010/Humbl-cookies-app/9d7381ab44330bb52318589923c85d38c72cb185/detalis.png"
          alt="Details"
          className="w-full h-auto"
          style={{ 
            maxHeight: '400px', 
            objectFit: 'cover',
            transform: 'scale(1.1)',
            transformOrigin: 'top right'
          }}
        />
      </div>
    </div>
  );
}
