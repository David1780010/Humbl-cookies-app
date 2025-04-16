'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '@/utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div style={{ 
        width: '100%', 
        maxWidth: '400px',
        margin: '0 auto',
        paddingTop: '10px',
        position: 'relative',
        left: '-15px'
      }}>
        <img 
          src="https://raw.githubusercontent.com/David1780010/Humbl-cookies-app/9d7381ab44330bb52318589923c85d38c72cb185/detalis.png"
          alt="Details"
          style={{
            width: '100%',
            maxHeight: '280px',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
}
