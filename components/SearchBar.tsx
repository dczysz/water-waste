import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import { foods } from '../data';
import Dropdown from './Dropdown';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [focusIndex, setFocusIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(query !== '');
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);
  const submitBtnRef = useRef<HTMLButtonElement>(null!);

  const matches = findMatches();

  type IndexOptions = {
    currentIndex: number;
    minIndex: number;
    maxIndex: number;
  };

  // Focus input when it should be
  useEffect(() => {
    focusIndex === -1 && inputRef.current && inputRef.current.focus();
  }, [focusIndex]);

  // Clear input and collapse search bar on page navigation
  useEffect(() => {
    setQuery('');
    inputRef.current.blur();
    submitBtnRef.current.blur();
    formRef.current.blur();
  }, [router.query.name]);

  // Make sure dropdown is shown when typing
  useEffect(() => {
    !showDropdown && setShowDropdown(query !== '');
  }, [query]);

  const getNextIndex = (
    e: React.KeyboardEvent<HTMLElement>,
    { currentIndex, minIndex, maxIndex }: IndexOptions
  ) => {
    let newIndex = currentIndex;

    switch (e.keyCode) {
      case 38: // up arrow
        newIndex -= 1;
        break;
      case 40: // down arrow
        newIndex += 1;
        break;
    }

    newIndex =
      newIndex >= minIndex && newIndex <= maxIndex ? newIndex : currentIndex;

    return newIndex;
  };

  const handleKeyboardNav = (e: React.KeyboardEvent<HTMLElement>) => {
    const { keyCode } = e;

    // Escape key
    if (keyCode === 27 && formRef.current) {
      e.currentTarget.blur();
      inputRef.current.blur();
      submitBtnRef.current.blur();
      formRef.current.blur();
      setShowDropdown(false);
      return;
    }

    // Up or down arrow
    if (/38|40/.test(keyCode.toString())) {
      e.preventDefault();

      const newIndex = getNextIndex(e, {
        currentIndex: focusIndex,
        minIndex: -1,
        maxIndex: matches.length - 1,
      });

      setFocusIndex(newIndex);
      return;
    }

    // Typing, return focus to input
    if (keyCode >= 48 && keyCode <= 90) {
      inputRef.current.focus();
    }
  };

  //TODO: Link to search results page
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (matches.length) {
      router.push('/info/[name]', `/info/${matches[0].name}`);
      setQuery('');
      setFocusIndex(-1);
    }
  };

  function findMatches() {
    return showDropdown
      ? foods.filter(
          f =>
            query !== '' &&
            f.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
        )
      : [];
  }

  return (
    <form
      id="search"
      onSubmit={handleSubmit}
      onKeyDown={handleKeyboardNav}
      onFocus={() => setShowDropdown(query !== '')}
      ref={formRef}
    >
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search"
        onFocus={() => setFocusIndex(-1)}
        ref={inputRef}
      />
      <button type="submit" disabled={matches.length < 1} ref={submitBtnRef}>
        Go
      </button>
      <div className="dropdown">
        {showDropdown && (
          <Dropdown items={matches} query={query} focusIndex={focusIndex} />
        )}
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
          cursor: default;
          opacity: 0.6;
        }
        .dropdown {
          display: none;
        }
      `}</style>
    </form>
  );
};

export default SearchBar;
