// Main Component
function Main(props) {
    return <Header msg={props.msg} />;
};
// Header Component
function Header(props) {
    return (
        <div style={{ border: "10px solid #000000"}}>
            <h1>Header here</h1>
            <Wrapper msg={props.msg} />
        </div>
    )
}
// Wrapper Component
function Wrapper(props) {
    return(
        <div style={{ border: "10px solid lightgray"}}>
            <h2>Wrapper here</h2>
            <Button msg={props.msg} />
        </div>
    )
}
// Button Component
function Button(props) {
    return(
        <div style={{ border: "20px solid orange"}}>
            <h3>This is the Button component</h3>
            <button onClick={() => alert(props.msg)}>Click Me!</button>
        </div>
    )
}
// Main App
function PropDrilling(props) {
    return (
        <Main msg={props.msg} />
    )
};

export default PropDrilling;