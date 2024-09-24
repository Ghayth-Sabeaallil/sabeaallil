import { lazy } from 'react';
import Skills from '../Components/Skills/Skills';
const Header = lazy(() => import('../Components/Header/Header'));
const Main = lazy(() => import('../Components/Main/Main'));


function Home() {
    return (<>
        <Header />
        <Main />
        <Skills />
    </>);
}

export default Home;