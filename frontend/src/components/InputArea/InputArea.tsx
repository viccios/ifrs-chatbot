import { Bot, SendHorizonal } from 'lucide-react';
import styles from './InputArea.module.css';

function InputArea() {
  return (
    <div className={styles.inputArea}>
      <Bot className={styles.botIcon} />
      <input
        type="text"
        placeholder="Pergunte-me qualquer coisa..."
        className={styles.input}
      />
      <button
        type="button"
        className={styles.sendHorizontalButton}
        title="Enviar"
      >
        <SendHorizonal />
      </button>
    </div>
  );
}

export default InputArea;
