import Layout from '../components/Layout';
import data from '../data';
import { useState } from 'react';
import ItemInfo from '../components/ItemInfo';
import LinkBlank from '../components/LinkBlank';

const Index = () => {
  const [item, setItem] = useState(
    data[Math.floor(Math.random() * data.length)]
  );

  return (
    <Layout>
      <div className="heading">
        <h1>How much water does food production use?</h1>
        <button
          onClick={() => setItem(data[Math.floor(Math.random() * data.length)])}
        >
          Random
        </button>
        <ItemInfo item={item} />
      </div>
      <section>
        <article>
          <p>
            Food and agriculture are the largest consumers of water, so wasting
            food means that in addition to ending up in a landfill, it also
            wastes all the time, energy, and water that was necessary to produce
            it.
          </p>
          <p>
            All data on this site was originally published in{' '}
            <LinkBlank href="https://waterfootprint.org/media/downloads/Report47-WaterFootprintCrops-Vol2.pdf">
              a 2010 report
            </LinkBlank>{' '}
            by the IHE Delft (formerly UNESCO-IHE) Institute for Water
            Education. The data was obtained from a spreadsheet of that data
            compiled by the{' '}
            <LinkBlank href="https://graphics.latimes.com/food-water-footprint/">
              Los Angeles Times
            </LinkBlank>
            .
          </p>
        </article>
      </section>

      <style jsx>
        {`
          .heading {
            padding: 0 1rem;
            text-align: center;
          }
          section {
            background-color: var(--black);
            padding: 1rem;
          }
          article {
            color: var(--white);
            margin: 0 auto;
            margin: 0 auto;
            max-width: 80ch;
          }
          .;
        `}
      </style>
    </Layout>
  );
};

export default Index;
