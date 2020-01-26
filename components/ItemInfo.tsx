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
          <svg
            viewBox="0 0 10 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m8.6664 6.2725c0.00134 2.7615-1.6399 3.7263-3.6648 3.7275q-0.070549 2.96e-5 -0.14042-0.00151-0.14077-0.00298-0.27862-0.01273c-1.8277-0.12852-3.2483-1.1414-3.2495-3.7096-0.00129-2.6578 3.3938-6.0135 3.6484-6.2618 2.122e-4 0 2.122e-4 0 4.496e-4 -2.122e-4 0.00975-0.00943 0.014619-0.014148 0.014619-0.014148s3.6684 3.5111 3.6696 6.2724z" />
          </svg>
        </div>
      ))}
      <div className="drop">
        <svg
          viewBox="0 0 10 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="partial-clip">
              <rect x="0" />
            </clipPath>
          </defs>

          <path
            clipPath="url(#partial-clip)"
            d="m8.6664 6.2725c0.00134 2.7615-1.6399 3.7263-3.6648 3.7275q-0.070549 2.96e-5 -0.14042-0.00151-0.14077-0.00298-0.27862-0.01273c-1.8277-0.12852-3.2483-1.1414-3.2495-3.7096-0.00129-2.6578 3.3938-6.0135 3.6484-6.2618 2.122e-4 0 2.122e-4 0 4.496e-4 -2.122e-4 0.00975-0.00943 0.014619-0.014148 0.014619-0.014148s3.6684 3.5111 3.6696 6.2724z"
          />
        </svg>
      </div>
    </div>

    <style jsx>
      {`
        .item-info {
          text-align: center;
        }
        .drops {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: var(--bp-sm);
          margin: 2rem auto;
          padding: 0 1rem;
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
        svg {
          fill: var(--blue);
          height: 100%;
          width: 100%;
        }
        #partial-clip rect {
          height: 100%;
          width: 100%;
          y: calc(100% - ${(item.galPerOz - Math.floor(item.galPerOz)) * 100}%);
        }
      `}
    </style>
  </div>
);

export default ItemInfo;
