import "../../Style/Components/Button.scss";

type ButtonProps = {
    text: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, handleClick }: ButtonProps) {
    return (
        <>
            <button onClick={handleClick} className="btn">
                {text}
            </button>
        </>

    );
}

export default Button;
