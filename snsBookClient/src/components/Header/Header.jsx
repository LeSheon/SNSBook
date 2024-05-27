import "./header.scss";
import sbLogo from "../../assets/logo/SNS_Book_Logo.svg";
import searchLogo from "../../assets/logo/search.svg";

export default function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={sbLogo} alt="SNS Book Logo"/>
            <div className="header__search-container">
                <img className="header__search-logo" src={searchLogo} alt="search"/>
                <input className="header__searchbar" type="text" />
            </div>
            <div className="header__feature">
                <div className="header__add-post">Add Post</div>
                <div className="header__profile"></div>
            </div>
        </header>
    )
}