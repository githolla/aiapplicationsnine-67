import type { Metadata } from 'next';
import AiApplicationsApp from '../../components/AiApplicationsApp';

export const metadata: Metadata = {
  title: 'AI Applications | Nine-67',
  description: 'Explore how Nine-67 designs, builds, and connects AI applications around real business workflows.',
};

export default function AiApplicationsPage() {
  return <AiApplicationsApp page="index" />;
}
