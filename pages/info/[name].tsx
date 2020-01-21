import { useRouter } from 'next/router';

import data from '../../data';
import Layout from '../../components/Layout';
import ItemInfo from '../../components/ItemInfo';

const Info = () => {
  const router = useRouter();
  const itemData = data.filter(d => d.name === router.query.name)[0];

  return itemData ? (
    <Layout>
      <ItemInfo item={itemData} />
    </Layout>
  ) : null;
};

export default Info;
