import Link from 'next/link';

import SearchBar from './SearchBar';
import Icon from './assets/Icon';

const Header = () => (
  <header>
    <div>
      <Link href="/">
        <a id="home-link">
          <div className="icon">
            <Icon />
          </div>
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
        align-items: center;
        border: 4px solid var(--blue);
        border-radius: calc(var(--br));
        display: flex;
        flex-wrap: no-wrap;
        margin-left: -0.5rem;
        padding: 0.25rem;
        text-decoration: none;
        text-wrap: no-wrap;
      }
      a:focus {
        border-color: var(--white);
        outline: none;
      }
      .icon {
        height: 2.4rem;
        margin-right: 0.25rem;
      }
      h1 {
        color: var(--white);
        font-size: 1.6rem;
        margin: 0;
        max-width: 0;
        opacity: 0;
        overflow-x: hidden;
        text-overflow: clip;
        transition: all 0.4s;
        white-space: nowrap;
      }
    `}</style>
  </header>
);

export default Header;
