import "../../Style/Components/Footer.scss";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="container-footer">
                <div className="left-line"></div>
                <span className="copy-right">Copy Right - {year}</span>
                <div className="right-line"></div>
            </div>
        </>
    );
};
export default Footer;
