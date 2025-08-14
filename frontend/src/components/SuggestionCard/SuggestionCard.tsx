import type { SuggestionCardProps } from './SuggestionCardProps';
import styles from './SuggestionCard.module.css';

function SuggestionCard({ children, icon }: SuggestionCardProps) {
  return (
    <div className={styles.suggestionCard}>
      <p>{children}</p>
      <p>{icon}</p>
    </div>
  );
}

export default SuggestionCard;
