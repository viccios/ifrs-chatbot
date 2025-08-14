import wavingHand from '../../assets/wavingHand.png';
import styles from './Greeting.module.css';

function Greeting() {
  return (
    <div className={styles.greeting}>
      <img
        src={wavingHand}
        alt="Mão acenando"
        width={150}
        height={150}
        draggable="false"
        className={styles.wavingHand}
      />
      <div>
        <p className={styles.gradientText}>Olá!</p>
        <p className={styles.gradientText}>Como posso ajudar você hoje?</p>
      </div>
    </div>
  );
}

export default Greeting;
