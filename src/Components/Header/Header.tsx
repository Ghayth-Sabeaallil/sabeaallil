import "../../Style/Components/Header.scss";

const Header = () => {
    return (
        <>
            <header className="navbar-dekstop">
                <a className="logo" href="/"><img src="/LOGO.svg" alt="logo" /></a>
                <nav className="middle-items">
                    <a className="middle" href="/contact">PROJECTS</a>
                    <a className="middle" href="/">HOME</a>
                    <a className="middle" href="/about">SKILLS</a>
                </nav>
            </header>
        </>
    )
}
export default Header;
