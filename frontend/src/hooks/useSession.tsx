import { useEffect, useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

const API_BASE_URL = 'http://localhost:8000';
const APP_NAME = 'app';

type SessionData = {
  id: string;
};

export function useSession() {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const createSession = async () => {
      //const generatedSessionId = uuidv4();
      const response = await fetch(
        `${API_BASE_URL}/apps/${APP_NAME}/users/u_999/sessions/d277d3aa-607a-4590-a309-d24c7d62cb49`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        console.error(
          `Failed to create session: ${response.status} ${response.statusText}`,
        );
      }

      const data: SessionData = await response.json();

      setSessionId(data.id);
    };

    createSession();
  }, []);

  return sessionId;
}
