function Nav() {
    const style = {
        listStyle: 'none',
        display: 'flex',
        columnGap: '20px',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: '20px',
        fontSize: '18px'
    }
    return (
        <div className="main-nav">
            <ul style={style}>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Nav;