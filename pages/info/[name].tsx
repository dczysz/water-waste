import { useRouter } from 'next/router';

import { foods } from '../../data';
import Layout from '../../components/Layout';
import ItemInfo from '../../components/ItemInfo';

const Info = () => {
  const router = useRouter();
  const itemData = foods.filter(f => f.name === router.query.name)[0];

  return itemData ? (
    <Layout>
      <ItemInfo item={itemData} />
    </Layout>
  ) : null;
};

export default Info;
