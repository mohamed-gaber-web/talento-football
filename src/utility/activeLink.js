import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "#F0E68C" : "#fff" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }