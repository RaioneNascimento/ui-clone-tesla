// import { Loading } from '@components/Loading';
// import Page from '@components/Page';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import Page from './components/Page';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading ? <Loading /> : <Page />}
    </>
  );
}

export default App