import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div className="h-px bg-[#6C6C6C] w-full" />
      <nav className="fixed bottom-0 left-0 right-0 bg-white py-6">
        <div className="flex justify-around items-center">
          <Link href="/" className="flex items-center justify-center w-20 h-20">
            <Image
              src="https://raw.githubusercontent.com/David1780010/Humbl-cookies-app/main/Navigation.png"
              alt="Главная"
              width={48}
              height={48}
            />
          </Link>
          <Link href="/catalog" className="flex items-center justify-center w-20 h-20">
            <Image
              src="https://raw.githubusercontent.com/David1780010/Humbl-cookies-app/main/navigation1.png"
              alt="Каталог"
              width={48}
              height={48}
            />
          </Link>
          <Link href="/cart" className="flex items-center justify-center w-20 h-20">
            <Image
              src="https://raw.githubusercontent.com/David1780010/Humbl-cookies-app/main/navigation2.png"
              alt="Корзина"
              width={48}
              height={48}
            />
          </Link>
          <Link href="/profile" className="flex items-center justify-center w-20 h-20">
            <Image
              src="https://raw.githubusercontent.com/David1780010/Humbl-cookies-app/main/navigation3.png"
              alt="Профиль"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </nav>
    </>
  );
} 