import { useState } from "react";
import "./blog-details.css";
import { blogData } from "../../components/blog-content/data";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blogItem, setBlogItem] = useState(blogData);
  const { id } = useParams();

  const blog = blogItem.find((blog) => blog.id.toString() === id);

  return (
    <div className="blog-details">
      {blog && (
        <div className="blog-details__section">
          <div className="blog-details__section-image">
            <img src={blog.image} alt={blog.title} />
          </div>

          <div className="blog-details__section-info">
            <h2>{blog.title}</h2>
            <h6>{blog.date}</h6>
            <p>{blog.desc}</p>
            <div className="blog-details__section-info_image">
              <img src={blog.image2} alt={blog.title} />
            </div>
            {blog.materials && <h1>3 things that ASF fabric is made of:</h1>}
            {blog.materials &&
              blog.materials.map((item) => (
                <div
                  className="blog-details__section-info_materials"
                  key={item.id}
                >
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            {blog.image3 && (
                <>
                <h3>Take a look a the reviews for yourself!</h3>
              <div className="blog-details__section_review">
                <img src={blog.image3} alt={blog.title} />
              </div>
              <div className="blog-details__section_review">
                <img src={blog.image4} alt={blog.title} />
              </div>
              </>
            )}
            <p>{blog.subtext}</p>

            <div className="blog-details__section-info_button">
            <Link to="/collections" className="blog-details__section-info_button-link">
              <button>
                SHOP NOW
              </button>
            </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
