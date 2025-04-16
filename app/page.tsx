import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center p-4">
        <Image
          src="https://i.imgur.com/znFJkU2.png"
          alt="Cookie"
          width={300}
          height={300}
          priority
        />
      </div>
    </main>
  );
} 