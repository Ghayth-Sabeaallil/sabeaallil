import "../../Style/Components/Projects.scss";

const Projects = () => {

    return (
        <>
            <div className="container-projects" id="projects-section">
                <div className="right-div-projects">
                    <h1 className="name">Projects</h1>
                </div>
                <div className="left-div-projects">
                    <a href="https://github.com/Ghayth-Sabeaallil/PizzaCal"><div className="project-card" >
                        <img className="project-img" src="./react.png" alt="Project" />
                        <span className="info">
                            <h2 className="title">Pizza Cal</h2>
                            <div className="line"></div>
                            <h3 className="language">React - TS - Scss</h3>
                        </span>
                    </div></a>
                    <a href="https://github.com/Ghayth-Sabeaallil/bokLib"><div className="project-card" >
                        <img className="project-img" src="./react.png" alt="Project" />
                        <span className="info">
                            <h2 className="title">Book Library</h2>
                            <div className="line"></div>
                            <h3 className="language">React - TS - Scss</h3>
                        </span>
                    </div></a>
                    <a href="https://github.com/gs222mh/PiGame"><div className="project-card" >
                        <img className="project-img" src="./react.png" alt="Project" />
                        <span className="info">
                            <h2 className="title">Pi Game</h2>
                            <div className="line"></div>
                            <h3 className="language">Java</h3>
                        </span>
                    </div></a>
                    <a href="https://github.com/gs222mh/HBS"><div className="project-card" >
                        <img className="project-img" src="./react.png" alt="Project" />
                        <span className="info">
                            <h2 className="title">Hotel Booking System</h2>
                            <div className="line"></div>
                            <h3 className="language">Java</h3>
                        </span>
                    </div></a>
                </div>

            </div>
        </>
    );
};
export default Projects;
