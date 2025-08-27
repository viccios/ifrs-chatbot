import { useState } from 'react';
import { createRootRoute, useNavigate, Outlet } from '@tanstack/react-router';
import Sidebar from '../components/Sidebar/Sidebar';
import InputArea from '../components/InputArea/InputArea';
import styles from './__root.module.css';

const POINT_FIVE_SECONDS_IN_MILLISECONDS = 500;

export const Route = createRootRoute({
  component: RootComponent,
});

declare module '@tanstack/react-router' {
  interface HistoryState {
    prompt: { input: string };
  }
}

function RootComponent() {
  const [isClosed, setIsClosed] = useState(false);
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
    setIsClosed(true);

    setTimeout(() => {
      navigate({ to: '/chat', state: { prompt: { input } } });
      setIsClosed(false);
    }, POINT_FIVE_SECONDS_IN_MILLISECONDS);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={isClosed ? styles.closeAnimation : ''}>
          <Outlet />
        </div>
        <InputArea onClick={handleClick} onChange={handleChange}></InputArea>
      </div>
    </div>
  );
}
