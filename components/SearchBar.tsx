import { useState, useEffect } from 'react';

import Dropdown from './Dropdown';
import data from '../data';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const MAX_DROPDOWN_ITEMS = 8;
  const [query, setQuery] = useState('');
  const router = useRouter();
  const matches = findMatches();

  useEffect(() => {
    setQuery('');
  }, [router.query.name]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (matches.length) {
      router.push('/info/[name]', `/info/${matches[0].name}`);
      setQuery('');
    }
  };

  function findMatches() {
    return query === ''
      ? []
      : data.filter(
          d => d.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
        );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search"
      />
      <button type="submit" disabled={matches.length < 1}>
        Go
      </button>
      {matches.length ? (
        <Dropdown items={matches} query={query} maxShown={MAX_DROPDOWN_ITEMS} />
      ) : null}

      <style jsx>{`
        form {
          align-items: center;
          background-color: var(--white);
          border-radius: var(--br);
          border-bottom-left-radius: ${matches.length ? 0 : 'var(--br)'};
          border-bottom-right-radius: ${matches.length ? 0 : 'var(--br)'};
          box-shadow: ${matches.length ? 'var(--bs)' : 'none'};
          display: flex;
          padding: 0 0.75rem;
          position: relative;
          z-index: 1;
        }
        form:focus-within {
          box-shadow: var(--bs);
        }
        input,
        button {
          border: none;
          font-size: inherit;
          background-color: transparent;
        }
        input {
          height: 2.5rem;
          max-width: 20vw;
          margin-right: 0.75rem;
        }
        button:disabled {
          color: var(--dark-gray);
        }
        button:not(:disabled) {
          cursor: pointer;
        }
      `}</style>
    </form>
  );
};

export default SearchBar;
