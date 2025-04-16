'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { initTelegramApp } from '../utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-[#ffd4e5]">
      <div className="w-full max-w-[500px] relative pt-4 px-4">
        <Image
          src="https://i.imgur.com/4jnqmkN.png"
          alt="Humbl Cookies"
          width={500}
          height={500}
          priority
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
