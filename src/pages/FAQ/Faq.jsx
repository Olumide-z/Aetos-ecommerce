import React from 'react'
import HeroSection from '../../components/hero-section/HeroSection'

const Faq = () => {
  return (
    <div>
      <HeroSection 
        bgImage='FAQ.webp'
        overlay={true}
        title='Customer Help'
        text='If talking to a real-life human is more your thing, you can reach our Customer Care Team via email (below).'
      />
    </div>
  )
}

export default Faq