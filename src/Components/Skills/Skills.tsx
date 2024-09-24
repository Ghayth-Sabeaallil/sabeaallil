import "../../Style/Components/Skills.scss";
const Skills = () => {
    const skills: string[] = ["html5", "css3", "sass", "javascript", "typescript", "java", "github", "tailwindcss", "vitejs", "mysql", "nextjs", "react", "docker", "figma", "git", "intellij", "vim", "trello", "ubuntu", "vscode"]
    return (
        <>
            <div className="container-skills" id="skill-section">
                <div className="left-div-skills">
                    {skills.map((skill) => (<>
                        <div className="circle">
                            <img alt={skill} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}/${skill}-original.svg`} />
                        </div>
                    </>))}

                </div>
                <div className="right-div-skills">
                    <h1 className="name">Skills</h1>
                </div>
            </div>
        </>
    );
};
export default Skills;
