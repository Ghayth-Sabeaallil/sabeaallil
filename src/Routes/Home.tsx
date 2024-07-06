import { lazy } from 'react';
const Header = lazy(() => import('../Components/Header/Header'));

function Home() {
    return (<>
        <Header />
    </>);
}

export default Home;