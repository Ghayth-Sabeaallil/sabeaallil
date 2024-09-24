import "../../Style/Components/Main.scss";
import Button from "../Button/Button";
/*
<img className="pic" src="/pic.jpeg" alt="pic" />
 */

const Main = () => {
    const handleClick = () => {

    }
    return (
        <>
            <main id="home-section">
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
                        <div className="subtext">
                            <div className="typing-text">  &lt;/ <span>Front</span> <span>End</span> <span>Developer</span>{" "}
                                &gt;</div>

                        </div>
                        <Button text={"See my Resums"} handleClick={handleClick} />
                    </div>
                </div>
            </main>
        </>
    );
};
export default Main;
