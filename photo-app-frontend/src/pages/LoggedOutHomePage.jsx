import Signup from "../components/Signup/Signup";
import LogIn from "./LoginPage";


function LoggedOutHomePage (){

    return (
        <div>
        <Signup/>
        <LogIn/>
        </div>
    )
}


export default LoggedOutHomePage;