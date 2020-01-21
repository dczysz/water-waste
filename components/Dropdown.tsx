import DropdownItem from './DropdownItem';

interface DropdownProps {
  items: {
    name: string;
  }[];
  query: string;
  maxShown: number;
}

const Dropdown: React.FC<DropdownProps> = ({ items, query, maxShown }) => {
  const dropDownItems = items.map(d => (
    <DropdownItem key={d.name} name={d.name} query={query} />
  ));

  return (
    <div className="dropdown">
      {dropDownItems.length < maxShown ? (
        dropDownItems
      ) : (
        <>
          {dropDownItems.slice(0, maxShown)}
          <DropdownItem
            disabled
            name={`+${dropDownItems.length - maxShown} more`}
          />
        </>
      )}

      <style jsx>
        {`
          .dropdown {
            border-radius: 0 0 var(--br) var(--br);
            box-shadow: var(--bs);
            left: 0;
            overflow: hidden;
            position: absolute;
            top: 2.5rem;
            width: 100%;
            z-index: -1;
          }
        `}
      </style>
    </div>
  );
};

export default Dropdown;
