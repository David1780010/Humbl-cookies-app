'use client';

import { useEffect } from 'react';
import { initTelegramApp } from '@/utils/telegram';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <div className="w-full relative aspect-[3/2]">
          <Image 
            src="https://i.imgur.com/znFJkU2.png"
            alt="Details"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
