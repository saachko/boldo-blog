import type { AppProps } from 'next/app';

import AppLayout from 'components/AppLayout';

import type { DefaultPageProps } from 'ts/interfaces';

import 'styles/reset.scss';
import 'styles/globals.scss';

function App({ Component, pageProps }: AppProps<DefaultPageProps>) {
  return (
    <AppLayout title={pageProps.title}>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default App;
