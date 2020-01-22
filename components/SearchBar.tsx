import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import data from '../data';
import Dropdown from './Dropdown';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const showDropdown = query !== '';
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
    return showDropdown
      ? data.filter(d => d.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)
      : [];
  }

  return (
    <form onSubmit={handleSubmit} id="search">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search"
      />
      <button type="submit" disabled={matches.length < 1}>
        Go
      </button>
      <div className="dropdown">
        {showDropdown ? <Dropdown items={matches} query={query} /> : null}
      </div>

      <style jsx>{`
        form {
          align-items: center;
          background-color: var(--white);
          border-radius: var(--br);
          display: flex;
          max-width: 40vw;
          padding: 0 1rem;
          position: relative;
          width: 16rem;
          z-index: 1;
        }
        form:focus-within {
          border-bottom-left-radius: ${showDropdown ? 0 : 'var(--br)'};
          border-bottom-right-radius: ${showDropdown ? 0 : 'var(--br)'};
          box-shadow: var(--bs);
          max-width: none;
          position: absolute;
          right: 1rem;
          top: 1rem;
          width: calc(100% - 2rem);
        }
        form:focus-within .dropdown {
          display: block;
        }
        input,
        button {
          margin: 0;
          padding: 0;
        }
        input {
          height: 3rem;
          margin-right: 1rem;
          min-width: 0;
          width: 100%;
        }
        button:disabled {
          color: var(--dark-gray);
          cursor: default;
        }
        .dropdown {
          display: none;
        }
      `}</style>
    </form>
  );
};

export default SearchBar;
