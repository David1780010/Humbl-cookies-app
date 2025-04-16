import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen pb-32">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="https://i.imgur.com/znFJkU2.png"
          alt="Cookie"
          width={500}
          height={500}
          priority
        />
      </div>
      <Navigation />
    </main>
  );
} 