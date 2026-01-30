import logo from '../logo.svg';
import LogInLogOutButton from './LogInLogOutButton';

function Logo(props) {
    const showLogo = <img width={'200px'} alt={'Logo'} src={logo} alt="Company name" />;
    return showLogo;
}
function Header() {
    return (
        <header>
            <Logo />
            <LogInLogOutButton isLoggedIn={true} />
            <h1>This is a heading h1.</h1>
        </header>
    )
}

export default Header;