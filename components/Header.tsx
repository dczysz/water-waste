import Link from 'next/link';

import SearchBar from './SearchBar';

const Header = () => (
  <header>
    <div>
      <Link href="/">
        <a>
          <h1>Water Waste</h1>
        </a>
      </Link>
      <SearchBar />
    </div>

    <style jsx>{`
      header {
        background-color: var(--blue);
        height: 5rem;
      }
      header > div {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: space-between;
        margin: 0 auto;
        max-width: var(--max-width);
        padding: 1rem;
        position: relative;
      }
      a {
        border: 4px solid var(--blue);
        border-radius: calc(var(--br));
        padding: 0.25rem;
        text-decoration: none;
        text-wrap: no-wrap;
      }
      a:focus {
        border-color: var(--white);
        outline: none;
      }
      h1 {
        color: var(--white);
        font-size: 1.6rem;
        margin: 0;
      }
    `}</style>
  </header>
);

export default Header;
