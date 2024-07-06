import "../../Style/Components/Main.scss";
/*
<img className="pic" src="/pic.jpeg" alt="pic" />
 */

const Main = () => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="left-div">
                        <div className="circle-shadow">
                            <img className="pic" src="/pic.jpeg" alt="pic" />

                            <ul className="menu">
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ghayth-Sabeaallil">
                                        <img src="/github.svg" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ghayth-sabeaallil/">
                                        <img src="/linkedin.svg" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="mailto:ghaessesa58@gmail.com">
                                        <img src="/at.svg" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-div">
                        <h1 className="name">GHAYTH SABEAALLIL</h1>
                        <h2 className="subtext">
                            &lt;/ <span>Front</span> <span>End</span> <span>Developer</span>{" "}
                            &gt;
                        </h2>
                        <h2 className="hello">Hello World!👋</h2>
                    </div>
                </div>
            </main>
        </>
    );
};
export default Main;
