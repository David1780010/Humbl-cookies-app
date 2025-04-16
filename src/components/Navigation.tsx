import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div className="h-px bg-[#6C6C6C] w-full" />
      <nav className="fixed bottom-0 left-0 right-0 bg-white py-4">
        <div className="flex justify-around items-center">
          <Link href="/" className="flex items-center justify-center w-16 h-16">
            <Image
              src="https://github.com/David1780010/Humbl-cookies-app/blob/main/Navigation.png?raw=true"
              alt="Главная"
              width={32}
              height={32}
            />
          </Link>
          <Link href="/catalog" className="flex items-center justify-center w-16 h-16">
            <Image
              src="https://github.com/David1780010/Humbl-cookies-app/blob/main/navigation1.png?raw=true"
              alt="Каталог"
              width={32}
              height={32}
            />
          </Link>
          <Link href="/cart" className="flex items-center justify-center w-16 h-16">
            <Image
              src="https://github.com/David1780010/Humbl-cookies-app/blob/main/navigation2.png?raw=true"
              alt="Корзина"
              width={32}
              height={32}
            />
          </Link>
          <Link href="/profile" className="flex items-center justify-center w-16 h-16">
            <Image
              src="https://github.com/David1780010/Humbl-cookies-app/blob/main/navigation3.png?raw=true"
              alt="Профиль"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </nav>
    </>
  );
} 