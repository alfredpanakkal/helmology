import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;
const page = (rootEl.dataset.page ?? 'home') as
  | 'home'
  | 'apps'
  | 'about'
  | 'disclaimer';

createRoot(rootEl).render(<App page={page} />);
