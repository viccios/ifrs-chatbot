import { createFileRoute } from '@tanstack/react-router';
import MainContent from '../components/MainContent/MainContent';

export const Route = createFileRoute('/app')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainContent />;
}
