import './journal.css'
import { BlogContent, HeroSection } from '../../components'
import { blogData } from '../../components/blog-content/data';
import { useState } from 'react';


const Journal = () => {
  const [ blogItem, setBlogItem] = useState(blogData);

  return (
    <div className="journal">
    <HeroSection 
        bgImage='journal.jpg'
        title='Blog'
        text='Learn about our design process, collections and how to level up your style'
    />

    <div className="journal__content">
        {
          blogItem.map((item) => (
            <BlogContent key={item.id} item={item}/>
          ))
        }
    </div>

    </div>
  )
}

export default Journal