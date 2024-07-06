import { lazy } from 'react';
const Header = lazy(() => import('../Components/Header/Header'));
const Main = lazy(() => import('../Components/Main/Main'));


function Home() {
    return (<>
        <Header />
        <Main />
    </>);
}

export default Home;