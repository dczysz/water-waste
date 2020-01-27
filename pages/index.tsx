import { NextPage } from 'next';
import { useState } from 'react';

import { FoodType } from '../data/foods';
import { foods } from '../data';
import Layout from '../components/Layout';
import LinkBlank from '../components/LinkBlank';
import Graphic from '../components/assets/Graphic';
import Link from 'next/link';

interface Props {
  initialFood: FoodType;
}

const Index: NextPage<Props> = ({ initialFood }) => {
  const [food, setFood] = useState(initialFood);

  return (
    <Layout>
      <section className="heading">
        <header>
          <h1>
            Water Waste<span className="accent">.</span>
          </h1>
          <h2>
            How much water does food production use
            <span className="accent">?</span>
          </h2>
        </header>

        <div className="horizontal-container random-content">
          <div className="text">
            <p>
              It takes <span className="underline">{food.galPerOz}</span>{' '}
              gallons of water to make one ounce of{' '}
              <span className="underline link">
                <Link href="/info/[name]" as={`/info/${food.name}`}>
                  <a>{food.name.toLowerCase()}</a>
                </Link>
              </span>
              .
            </p>
          </div>

          <button
            onClick={() =>
              setFood(foods[Math.floor(Math.random() * foods.length)])
            }
          >
            Random Food
          </button>
        </div>

        <div className="horizontal-container">
          <div className="graphic">
            <Graphic />
          </div>
          <div className="text">
            <h2>
              What's the big deal<span className="accent">?</span>
            </h2>
            <p>
              Food and agriculture are the largest consumers of water, so
              wasting food means that in addition to ending up in a landfill, it
              also wastes all the time, energy, and water that was necessary to
              produce it.
            </p>
          </div>
        </div>
      </section>

      <section className="attributions">
        <article>
          <h2>
            Attributions<span className="accent">:</span>
          </h2>
          <p>
            All data on this site was originally published in{' '}
            <span className="underline link">
              <LinkBlank href="https://waterfootprint.org/media/downloads/Report47-WaterFootprintCrops-Vol2.pdf">
                a 2010 report
              </LinkBlank>
            </span>{' '}
            by the IHE Delft (formerly UNESCO-IHE) Institute for Water
            Education. The data was obtained from a spreadsheet of that data
            compiled by the{' '}
            <span className="underline link">
              <LinkBlank href="https://graphics.latimes.com/food-water-footprint/">
                Los Angeles Times
              </LinkBlank>
            </span>
            .
          </p>
        </article>
      </section>

      <style jsx>
        {`
          h2 + p:first-of-type {
            margin-top: 0;
          }
          .heading {
            margin: 0 auto;
            max-width: 800px;
            padding: 0 1rem;
            text-align: center;
          }
          header {
            margin-bottom: 3rem;
          }
          h1 {
            margin-bottom: 0;
          }
          .heading .underline {
            font-weight: bold;
          }
          .horizontal-container {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 1rem auto;
            text-align: left;
          }
          .horizontal-container .text {
            max-width: 400px;
          }
          .horizontal-container .text h2 {
            margin-bottom: 0.5rem;
          }
          .random-content {
            justify-content: center;
          }
          .random-content p {
            font-size: 1.2rem;
            margin: 0;
          }
          button {
            background-color: transparent;
            border: 4px solid var(--blue);
            border-radius: var(--br);
            color: var(--blue);
            cursor: pointer;
            font-weight: bold;
            margin: 2rem;
            padding: 1rem;
          }
          button:focus {
            box-shadow: 0 0 0 4px var(--white), 0 0 0 8px var(--blue);
          }
          button:hover {
            background-color: var(--blue);
            color: var(--white);
          }
          .graphic {
            max-width: 340px;
            padding: 2rem;
          }
          .attributions {
            background-color: var(--black);
            padding: 1rem;
          }
          .attributions article {
            color: var(--white);
            margin: 0 auto;
            max-width: var(--bp-md);
          }
        `}
      </style>
    </Layout>
  );
};

Index.getInitialProps = _ctx => ({
  initialFood: foods[Math.floor(Math.random() * foods.length)],
});

export default Index;
