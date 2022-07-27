import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__col-1">
        <h3>Join the Community</h3>
        <p>
          Subscribe to our email list to get special offers, free giveaways, and
          exclusive early bird access to new collections.
        </p>
      </div>
      <div className="newsletter__col-2">
        <div className="newsletter__col-2_input-1">
          <input type="text" placeholder="First name" />
        </div>
        <div className="newsletter__col-2_input-2">
          <input type="text" placeholder="email@newsletter.com" />
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
