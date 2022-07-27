import { HeroSection, Grid } from "../../components";
import "./about.css";

import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about">
      <HeroSection bgImage="our-story-banner.webp" title="Our Story" />

      <div className="about__section-1">
        <Grid
          title="How it all started"
          text="Hi, my name is Alex. If you don’t know me, I’m a men’s fashion and lifestyle creator on YouTube, Instagram, and TikTok. I’ve helped millions of guys all over the world elevate their personal style over the last 6 years. Whenever I start working with a guy in making improvements, the first thing I do is go over their clothing essentials. In other words… By upgrading a guy’s essentials, he can instantly level up every outfit he wears, and therefore transform his appearance."
          image="Alex-Profile.webp"
        />
      </div>

      <div className="about__section-2">
        <Grid
          title="Our unique approach"
          text="In mid 2020, my team and I started doing research and collecting formal feedback from my private facebook community of over 15,000 guys. The vision was to create something that complements the everyday guy’s physique... Something that can give them the same makeover feel... Something I can proudly share with my community... Something that helps the everyday, modern guy look his full potential. Over this last year, my partners and I put up over $30,000 of our own money into developing something exceptional: from design, fabric development, sampling and prototyping. Until finally we created something I’m happy with. Enter Aetos Apparel."
          image="development-collage.webp"
          imgStart="start"
        />
      </div>

      <div className="about__section-3">
        <Fade bottom>
        <h2>Why we do what we do</h2>
        <p>
          We believe a guy can gain so much confidence when he looks and feels
          like a million bucks. We strive to create designer-grade essentials
          for the modern-man's wardrobe at an affordable price. Because your
          essentials is what makes up an outfit. When you have a bad foundation
          it results in a sloppy outfit.
        </p>
        </Fade>
      </div>

    </div>
  );
};

export default About;
