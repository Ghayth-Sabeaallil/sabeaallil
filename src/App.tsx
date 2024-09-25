import { lazy } from 'react';
const Home = lazy(() => import('./Routes/Home'))

function App() {
  return (
    <Home />
  );
}

export default App;