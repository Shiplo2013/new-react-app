function Button() {
    const clickHandler = () => console.log("Clicked!");
    return (
        <button onClick={clickHandler}>Click Me!</button>
    );
}

export default Button;