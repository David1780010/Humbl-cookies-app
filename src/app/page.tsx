'use client';

import { useEffect } from 'react';
import Image from "next/image";
import { initTelegramApp } from '@/utils/telegram';

export default function Home() {
  useEffect(() => {
    initTelegramApp();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <img 
          src="https://i.postimg.cc/nhZJZcSy/detalis.png" 
          alt="Details"
          className="w-full"
        />
      </div>
    </div>
  );
}
