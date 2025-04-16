'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { initTelegramApp } from '@/utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="w-full relative">
        <Image
          src="https://i.imgur.com/znFJkU2.png"
          alt="Cookie"
          width={500}
          height={500}
          priority
          className="w-full h-auto"
          style={{
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
    </main>
  );
}
