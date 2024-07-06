import { lazy } from 'react';
const Canvas = lazy(() => import('../Components/Canvas/Canvas'));


function Home() {
    return (<>
        <Canvas />

    </>);
}

export default Home;