import type { ChatBubblePros } from './ChatBubbleProps';
import styles from './ChatBubble.module.css';

function ChatBubble({ children }: ChatBubblePros) {
  return <p className={styles.chatBubble}>{children}</p>;
}

export default ChatBubble;
