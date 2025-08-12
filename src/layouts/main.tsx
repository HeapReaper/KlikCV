import type { ComponentChildren } from 'preact';
import Navbar from '../components/core/navbar';
import Footer from '../components/core/Footer';

type Props = {
  children: ComponentChildren;
};

export default function MainLayout({ children }: Props) {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar />

      <main class="flex-grow p-4">
        {children}
      </main>

      <Footer />
    </div>
  );
}
