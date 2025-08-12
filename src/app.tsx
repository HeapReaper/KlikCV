import './styles/output.css';
import MainLayout from './layouts/main';
import { Routes } from './routes';

export function App() {
  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  );
}
