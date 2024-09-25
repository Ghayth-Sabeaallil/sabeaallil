import { useRef } from "react";
import "../../Style/Components/Header.scss";

const Header = () => {
    const navRef = useRef<HTMLElement>(null);
    const toggle = () => {
        if (navRef.current) {
            if (navRef.current.classList.length > 1) {
                navRef.current.classList.remove("active");
            }
            else {
                navRef.current.classList.add("active");
            }
        }
    }

    const handleScrollToSection = (sec: string) => {
        const target = document.getElementById(sec);
        const targetPosition = target!.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1300; // 1.3 seconds for the scroll duration
        let startTime: number | null = null;

        function animationScroll(currentTime: number | null) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime! - startTime!;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animationScroll);
        }

        function ease(t: number, b: number, c: number, d: number) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animationScroll);
    };
    return (
        <>
            <header className="navbar-dekstop">
                <a className="logo" href="/"><img src="./LOGO.svg" alt="logo" /></a>
                <nav className="middle-items">
                    <a className="middle" onClick={() => handleScrollToSection('projects-section')}>PROJECTS</a>
                    <a className="middle" onClick={() => handleScrollToSection('home-section')}>HOME</a>
                    <a className="middle" onClick={() => handleScrollToSection('skill-section')}>SKILLS</a>
                </nav>
            </header>
            <header className="navbar-mobile">
                <a className="logo" href="/"><img src="./LOGO.svg" alt="logo" /></a>
                <nav ref={navRef} className="middle-items">
                    <a className="middle" onClick={() => handleScrollToSection('projects-section')}>PROJECTS</a>
                    <a className="middle" onClick={() => handleScrollToSection('home-section')}>HOME</a>
                    <a className="middle" onClick={() => handleScrollToSection('skill-section')}>SKILLS</a>
                </nav>
                <button onClick={toggle} className="navbar-toggler" id="navbar-toggler">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                </button>
            </header>
        </>
    )
}
export default Header;
