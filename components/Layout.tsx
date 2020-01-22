import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from './Header';

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Water Waste{router.query.name ? ` - ${router.query.name}` : ''}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#4589dd" />
        <meta
          name="description"
          content="How much water does food production use?"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
