interface Props {
  item: {
    name: string;
    galPerOz: number;
  };
}

const ItemInfo: React.FC<Props> = ({ item }) => (
  <>
    <p>
      It takes{' '}
      <span>
        <span>{item.galPerOz}</span> gallons of water
      </span>{' '}
      to make{' '}
      <span>
        one ounce of <span>{item.name.toLowerCase()}</span>
      </span>
    </p>

    <style jsx>
      {`
        p {
          font-size: 1.2rem;
          text-align: center;
        }
        p > span {
          display: block;
          font-size: 2rem;
        }
        p > span > span {
          font-weight: bold;
        }
      `}
    </style>
  </>
);

export default ItemInfo;
