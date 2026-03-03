import Shelf from '@components/Shelf';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Family Cookbook Shelf</h1>
      <Shelf />
    </main>
  );
}
