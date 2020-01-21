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
      }
      header div {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: var(--max-width);
        padding: 1rem;
      }
      a {
        text-decoration: none;
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
