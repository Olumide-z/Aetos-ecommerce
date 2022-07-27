import React from "react";
import { useState } from "react";
import "./reviews.css";

const Reviews = () => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [allReviews, setAllReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && review && name && email){
        const singleReview = { id: new Date().getTime().toString(), title, review, name, email };
        console.log(singleReview)
        setAllReviews((allReviews) => {
           return [...allReviews, singleReview]
        });
        setTitle('');
        setReview('');
        setName('');
        setEmail('');
    }else{
        console.log('error')
    }
  };

  return (
    <section className="review__container">
    <div className="review">

      <div className="review__write">
        <h4>WRITE A REVIEW</h4>
        <p>Indicates a required field</p>
        <p>Score:</p>
        <div className="review__write--icon"></div>

        <form onSubmit={handleSubmit}>
          <div className="review__write--form-1">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label>Review:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className="review__write--form-2">
            <div>
              <label>Use your name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="review__write--btn">
            <button type="submit">POST</button>
          </div>
        </form>

      </div>
      </div>

     <div className="review__details">
      {
        allReviews && allReviews.map((item) => {
            const {id, name, title, email, review} = item;
            return(
                <div key={id}>
                    <div className="review__details--title">
                        <h4>{name}</h4>
                    </div>
                    <p>{title}</p>
                    <p>{review}</p>
                </div>
            )
        })
      }
      </div>
        

    </section>
  );
};

export default Reviews;
