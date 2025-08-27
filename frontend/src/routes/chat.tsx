import { useState, useEffect } from 'react';
import { createFileRoute, useRouterState } from '@tanstack/react-router';
import ChatBubble from '../components/ChatBubble/ChatBubble';
import styles from './chat.module.css';

const ONE_SECONDS_IN_MILLISECONDS = 1000;

export const Route = createFileRoute('/chat')({
  component: RouteComponent,
});

function RouteComponent() {
  const [response, setResponse] = useState(false);
  const state = useRouterState({ select: (state) => state.location.state });

  useEffect(() => {
    const timer = setTimeout(() => {
      setResponse(true);
    }, ONE_SECONDS_IN_MILLISECONDS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.chat}>
      <ChatBubble>{state.prompt.input}</ChatBubble>
      {response && <p>Sim</p>}
    </div>
  );
}
