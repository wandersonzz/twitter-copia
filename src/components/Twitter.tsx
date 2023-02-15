import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";
import { Link } from "react-router-dom";

interface TweetProps {
  content: string;
}

export function Twitter({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/wandersonzz.png" alt="Wanderson" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Wanderson Felipe</strong>
          <span>@WandersonFelyp</span>
        </div>
        <p>{content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
