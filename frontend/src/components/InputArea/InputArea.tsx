import type { InputAreaProps } from './InputAreaProps';
import { Bot, SendHorizonal } from 'lucide-react';
import styles from './InputArea.module.css';

function InputArea({ onClick, onChange }: InputAreaProps) {
  return (
    <div className={styles.inputArea}>
      <Bot className={styles.botIcon} />
      <input
        type="text"
        placeholder="Pergunte-me qualquer coisa..."
        className={styles.input}
        onChange={onChange}
      />
      <button
        type="button"
        className={styles.sendHorizontalButton}
        title="Enviar"
        onClick={onClick}
      >
        <SendHorizonal />
      </button>
    </div>
  );
}

export default InputArea;
