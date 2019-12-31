import { useEffect, useState } from 'react';

const useMedia = (query: string) => {
  const mql = window.matchMedia(query);
  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    const handler = () => setMatches(mql.matches);
    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, []);

  return matches;
};

export default useMedia;
