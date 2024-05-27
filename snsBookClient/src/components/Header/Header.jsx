import "./header.scss";
import sbLogo from "../../assets/logo/SNS_Book_Logo.svg";

export default function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={sbLogo} alt="SNS Book Logo"/>
            <div className="header__search-container">
                <input className="header__searchbar" type="text" />
            </div>
            <div className="header__feature"></div>
        </header>
    )
}