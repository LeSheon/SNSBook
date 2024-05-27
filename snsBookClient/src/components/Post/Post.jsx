import "./post.scss";
import tAvatar from "../../assets/image/test_avatar.png";
import fImage from "../../assets/image/test_feed.png";

export default function Post() {
    return (
        <section className="post">
            <ol className="post__list">
                <li className="post__list-item">
                    <div className="post__container">
                        <img className="post__avatar" src={tAvatar} />
                        <div className="post__profile-container">
                            <h5 className="post__user-name">Testing Name</h5>
                            <h6 className="post__time">Time ago</h6>
                        </div>
                    </div>
                    <div className="post__feed">
                        <img className="post__feed-image" src={fImage} />
                    </div>
                </li>
                <li className="post__list-item">
                    
                </li>
                <li className="post__list-item">
                    
                </li>
            </ol>
        </section>
    )
}