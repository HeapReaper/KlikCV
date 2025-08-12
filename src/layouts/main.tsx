import type {ComponentChildren} from 'preact';

type Props = {
  children: ComponentChildren;
};

export default function MainLayout({ children }: Props) {
  return (
    <div class="min-h-screen flex flex-col">
      <header class="bg-blue-600 text-white p-4">
        <h1>Mijn Website</h1>
      </header>

      <main class="flex-grow p-4">
        {children}
      </main>

      <footer class="bg-gray-200 text-center p-4">
        &copy; 2025 Mijn Website
      </footer>
    </div>
  );
}
