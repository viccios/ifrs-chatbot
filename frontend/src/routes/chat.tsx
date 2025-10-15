import { useEffect, useState } from 'react';
import { createFileRoute, useRouterState } from '@tanstack/react-router';
import { useSession } from '../hooks/useSession';
import ReactMarkdown from 'react-markdown';
import ChatBubble from '../components/ChatBubble/ChatBubble';
import styles from './chat.module.css';

const API_BASE_URL = 'http://localhost:8000';
const APP_NAME = 'app';

export const Route = createFileRoute('/chat')({
  component: RouteComponent,
});

function RouteComponent() {
  const state = useRouterState({ select: (state) => state.location.state });
  const sessionId = useSession();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const sendMessage = async () => {
      const response = await fetch(`${API_BASE_URL}/run`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appName: APP_NAME,
          userId: 'u_999',
          sessionId: 'd277d3aa-607a-4590-a309-d24c7d62cb49',
          newMessage: {
            parts: [{ text: state.prompt.input }],
            role: 'user',
          },
          streaming: false,
        }),
      });

      if (!response.ok) {
        console.error(
          `Failed to send message: ${response.status} ${response.statusText}`,
        );
      }

      const events = await response.json();

      for (const event of events) {
        if (
          event?.content?.role === 'model' &&
          'text' in event?.content?.parts[0]
        ) {
          setMessage(event.content.parts[0].text);
        } else {
          setMessage(
            'Não foi possível atender a solicitação. Tente novamente mais tarde.',
          );
        }
      }
    };

    sendMessage();
  }, []);

  return (
    <div className={styles.chat}>
      <ChatBubble>{state.prompt.input}</ChatBubble>
      <ChatBubble>
        <p style={{ textAlign: 'left' }}>
          <ReactMarkdown>{message}</ReactMarkdown>
        </p>
      </ChatBubble>
    </div>
  );
}
