import type { Metadata } from 'next';
import AiApplicationsApp from '../../../../components/AiApplicationsApp';

export const metadata: Metadata = {
  title: 'AI Applications | Nine-67',
};

export default async function AiApplicationPage({ params }: { params: Promise<{ app: string }> }) {
  const { app } = await params;
  return <AiApplicationsApp page={`apps/${decodeURIComponent(app)}`} />;
}
