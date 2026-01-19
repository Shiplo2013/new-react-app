import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LogInLogOutButton(props) {
    const isLoggedIn = props.inLoggedIn;
    if(isLoggedIn) {
        return <LogoutButton/>;
    } else {
        return <LoginButton />;
    }
}
export default LogInLogOutButton;