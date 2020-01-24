import DropdownItem from './DropdownItem';

interface DropdownProps {
  items: {
    name: string;
  }[];
  query: string;
  focusIndex: number;
}

const Dropdown: React.FC<DropdownProps> = ({ items, query, focusIndex }) => {
  return (
    <div className="dropdown">
      <ul className="itemList">
        {items.map((d, i) => (
          <li key={d.name}>
            <DropdownItem
              name={d.name}
              query={query}
              focus={focusIndex === i}
            />
          </li>
        ))}
      </ul>
      <div className="total">
        <DropdownItem
          name={`${items.length} result${items.length === 1 ? '' : 's'}`}
          disabled
        />
      </div>

      <style jsx>
        {`
          .dropdown {
            border-radius: 0 0 var(--br) var(--br);
            box-shadow: var(--bs);
            left: 0;
            overflow-y: hidden;
            position: absolute;
            top: 3rem;
            width: 100%;
            z-index: -1;
          }
          .itemList {
            list-style-type: none;
            margin: 0;
            max-height: 40vh;
            overflow-y: auto;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Dropdown;
