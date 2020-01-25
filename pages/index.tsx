import { useState } from 'react';

import { foods } from '../data';
import Layout from '../components/Layout';
import ItemInfo from '../components/ItemInfo';
import LinkBlank from '../components/LinkBlank';
import Graphic from '../components/assets/Graphic';

const Index = () => {
  const [item, setItem] = useState(
    foods[Math.floor(Math.random() * foods.length)]
  );

  return (
    <Layout>
      <div className="heading">
        <h1>How much water does food production use?</h1>
        <button
          onClick={() =>
            setItem(foods[Math.floor(Math.random() * foods.length)])
          }
        >
          Random
        </button>
        <ItemInfo item={item} />
        <div className="graphic">
          <Graphic />
        </div>
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
          button {
            background-color: transparent;
            border: none;
            border-radius: var(--br);
            color: var(--blue);
            cursor: pointer;
            font-weight: bold;
            padding: 1rem;
            border: 4px solid var(--blue);
          }
          button:focus {
            box-shadow: 0 0 0 4px var(--white), 0 0 0 8px var(--blue);
          }
          button:hover {
            background-color: var(--blue);
            color: var(--white);
          }
          .graphic {
            margin: 0 auto;
            max-width: 300px;
            padding: 0 1rem 2rem 1rem;
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
