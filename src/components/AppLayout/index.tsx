import Meta from './Meta';

interface AppLayoutProps {
  title: string;
  children: React.ReactNode;
}

function AppLayout({ title, children }: AppLayoutProps) {
  return (
    <>
      <Meta title={title} />
      {children}
    </>
  );
}

export default AppLayout;
