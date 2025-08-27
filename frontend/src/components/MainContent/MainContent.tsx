import { Newspaper, CodeXml, Microscope } from 'lucide-react';
import Greeting from '../Greeting/Greeting';
import SuggestionCard from '../SuggestionCard/SuggestionCard';
import styles from './MainContent.module.css';

function MainContent() {
  return (
    <>
      <main className={styles.mainContent}>
        <Greeting />
        <div className={styles.informationCards}>
          <SuggestionCard icon={<Newspaper />}>
            Forneça um Resumo das Notas da Turma 321
          </SuggestionCard>
          <SuggestionCard icon={<CodeXml />}>
            Indique Cursos de Programação para Estudantes de Nível Básico
          </SuggestionCard>
          <SuggestionCard icon={<Microscope />}>
            Liste Projetos de Pesquisa Disponíveis
          </SuggestionCard>
        </div>
      </main>
    </>
  );
}

export default MainContent;
