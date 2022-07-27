import './contact.css'
import { HeroSection } from '../../components'

const Contact = () => {
  return (
    <div className="contact">
       <HeroSection 
        bgImage='contact-banner.webp'
        title='Contact Us'
        text='Questions? Comments? Leave us a message using the form below so we can assist you. We answer all messages within 24 hours.'
        />

        <div className="contact__heading">
            <h2>Send us an email</h2>
            <p>If talking to a real-life human is more your thing, you can reach our Customer Care Team via live chat on site between 8am - 4pm PST.</p>
            <form>
              <input type="text" placeholder='Full Name' />
              <input type="email" placeholder='Email'/>
              <textarea placeholder='Message' />
              <button>Send</button>
            </form>
        </div>

    </div>
  )
}

export default Contact