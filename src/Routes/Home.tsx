import { lazy } from 'react';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
const Header = lazy(() => import('../Components/Header/Header'));
const Main = lazy(() => import('../Components/Main/Main'));


function Home() {
    return (<>
        <Header />
        <Main />
        <Skills />
        <Projects />

    </>);
}

export default Home;