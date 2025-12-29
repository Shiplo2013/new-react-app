import logo from '../logo.svg';

function Logo(props) {
    const showLogo = <img width={'200px'} src={logo} />;
    return showLogo;
}
function Header() {
    return (
        <header>
            <Logo />
            <h1>This is a heading h1.</h1>
        </header>
    )
}

export default Header;