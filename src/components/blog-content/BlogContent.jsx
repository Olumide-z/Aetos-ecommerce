import "./blog-content.css";
import { Link } from "react-router-dom";

const BlogContent = ({ item }) => {
  return (
    <div className="blog">
      <div className="blog__image">
        <Link to={`/journal/${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
      </div>

      <div className="blog__details">
        <Link to={`/journal/${item.id}`} className="blog__details-link">
          <h3>{item.title}</h3>
        </Link>
        <span>{item.date}</span>
        <p>
          {item.desc.length <= 200 ? item.desc : `${item.desc.slice(0, 185)}...`}
        </p>
        <Link to={`/journal/${item.id}`} className="blog__details-link">
          <h5 className="blog__details-link-read">READ MORE</h5>
        </Link>
      </div>

    </div>
  );
};

export default BlogContent;
