import { createRoot } from 'react-dom/client';
import { App } from '@/App.tsx';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  const app = <App />;

  root.render(app);
}
