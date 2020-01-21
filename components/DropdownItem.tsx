import Link from 'next/link';

interface Props {
  name: string;
  query?: string;
  disabled?: boolean;
}

const DropdownItem: React.FC<Props> = ({ name, query, disabled = false }) => {
  const highlightLink = (text: string, query: string) => {
    const start = text.toLowerCase().indexOf(query.toLowerCase());
    const end = start + query.length;
    return (
      <>
        {text.substring(0, start)}
        <span>{text.substring(start, end)}</span>
        {text.substring(end)}
      </>
    );
  };

  return (
    <>
      {disabled ? (
        <span className="item disabled">{name}</span>
      ) : (
        <Link href="/info/[name]" as={`/info/${name}`}>
          <a className="item">{query ? highlightLink(name, query) : name}</a>
        </Link>
      )}
      <style jsx global>
        {`
          .item {
            background-color: var(--white);
            border-top: 1px solid var(--light-gray);
            display: block;
            padding: 1rem;
            text-align: center;
            text-decoration: none;
          }
          .item > span {
            color: var(--blue);
            font-weight: bold;
            text-decoration: underline;
          }
          .item.disabled {
            color: var(--dark-gray);
            font-style: italic;
            padding: 0.5rem 1rem;
            text-align: center;
          }
          .item:not(.disabled):hover,
          .item:not(.disabled):focus {
            background-color: var(--light-gray);
          }
        `}
      </style>
    </>
  );
};

export default DropdownItem;
