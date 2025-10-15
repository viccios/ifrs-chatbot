import type { SuggestionCardProps } from './SuggestionCardProps';
import styles from './SuggestionCard.module.css';

function SuggestionCard({ children, icon }: SuggestionCardProps) {
  return (
    <button className={styles.suggestionCard}>
      <p>{children}</p>
      <p>{icon}</p>
    </button>
  );
}

export default SuggestionCard;
