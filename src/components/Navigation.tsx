import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white">
      <div className="h-px bg-[#6C6C6C] w-full" />
      <div className="flex justify-around items-center py-4">
        <Link href="/" className="p-2">
          <Image
            src="https://github.com/David1780010/Humbl-cookies-app/blob/main/Navigation.png?raw=true"
            alt="Главная"
            width={32}
            height={32}
          />
        </Link>
        <Link href="/catalog" className="p-2">
          <Image
            src="https://github.com/David1780010/Humbl-cookies-app/blob/main/navigation1.png?raw=true"
            alt="Каталог"
            width={32}
            height={32}
          />
        </Link>
        <Link href="/cart" className="p-2">
          <Image
            src="https://github.com/David1780010/Humbl-cookies-app/blob/main/navigation2.png?raw=true"
            alt="Корзина"
            width={32}
            height={32}
          />
        </Link>
        <Link href="/profile" className="p-2">
          <Image
            src="https://github.com/David1780010/Humbl-cookies-app/blob/main/navigation3.png?raw=true"
            alt="Профиль"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </nav>
  );
} 