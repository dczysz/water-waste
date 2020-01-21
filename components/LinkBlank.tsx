interface Props {
  href: string;
  children: React.ReactNode;
}

const LinkBlank: React.FC<Props> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default LinkBlank;
