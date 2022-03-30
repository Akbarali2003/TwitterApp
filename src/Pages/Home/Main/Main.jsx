import React from "react";
import './Main.scss';
import StarLogo from '../../../Assets/Images/star-logo.svg';
import HomeTodo from "../../../Components/Todo/Todo";

function HomeMain() {
    return(
        <>
        <main className="main">
            <span className="main__title">
                <h1 className="main__title--text">Home</h1>
                <img src={StarLogo} alt="StarLogo" width='24' height='24' />
            </span>
            <hr className="main__one--line" />
            <HomeTodo/>
        </main>
        
        </>
    );
}
export default HomeMain;