import WaterDrop from './WaterDrop';

interface Props {
  item: {
    name: string;
    galPerOz: number;
  };
}

const ItemInfo: React.FC<Props> = ({ item }) => (
  <div className="item-info">
    <h1>
      {item.name}
      <span className="accent">.</span>
    </h1>
    <h2>
      <span className="underline">{item.galPerOz}</span> gallons per ounce
    </h2>

    <div className="drops">
      {Array.from(Array(Math.floor(item.galPerOz)).keys()).map((_, i) => (
        <div key={i} className="drop">
          <WaterDrop />
        </div>
      ))}
      <div className="drop clip">
        <WaterDrop />
      </div>
    </div>

    <style jsx>
      {`
        .item-info {
          text-align: center;
          margin: 0 1rem;
        }
        .drops {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: var(--bp-sm);
          margin: 2rem auto;
        }
        .drop {
          --magic-number-that-looks-decent: 20;
          --drop-size: calc(
            4rem / (${item.galPerOz} / var(--magic-number-that-looks-decent))
          );
          align-items: center;
          display: flex;
          height: var(--drop-size);
          justify-content: center;
          margin: 0.25rem;
          max-height: 4rem;
          max-width: 4rem;
          min-height: 0.5rem;
          min-width: 0.5rem;
          width: var(--drop-size);
        }
        .drop.clip {
          --height: calc(
            100% - ${(item.galPerOz - Math.floor(item.galPerOz)) * 100}%
          );
          clip-path: polygon(
            0% var(--height),
            100% var(--height),
            100% 100%,
            0% 100%
          );
        }
      `}
    </style>
  </div>
);

export default ItemInfo;
