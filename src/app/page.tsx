'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '@/utils/telegram';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full relative h-[200px]">
        <Image 
          src="https://i.imgur.com/znFJkU2.png"
          alt="Details"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
}
