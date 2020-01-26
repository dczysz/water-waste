import { useRouter } from 'next/router';

import { foods } from '../../data';
import Layout from '../../components/Layout';
import ItemInfo from '../../components/ItemInfo';

const Info = () => {
  const router = useRouter();
  const item = foods.filter(f => f.name === router.query.name)[0];

  return <Layout>{item && <ItemInfo item={item} />}</Layout>;
};

export default Info;
