import { useRef, useState } from 'react'
import MyImg from './assets/img/me.png'
import OutCrop from './assets/img/outcrop.png'
import Berzeit from './assets/img/berzeit.jpg'
import Laywers from './assets/img/Lawyers1.jpg'
import Lawfirm from './assets/img/lawfirm.jpg'
import Shoffing from './assets/img/shoffing.jpg'
import TwitterClone from './assets/img/twitter.jpg'
import Daman from './assets/img/daman.png'
import Deskise from './assets/img/deskise.png'
import Scout from './assets/img/Scout.png'
import Facebook from './assets/img/facebook.png'
import Twitter from './assets/img/twitterico.png'
import Whatsapp from './assets/img/whatsapp.png'
import Github from './assets/img/github.png'
import './App.css'
import "animate.css/animate.min.css";
import ParticlesContainer from './Particles';
import ScrollAnimation from "react-animate-on-scroll"; 

import emailjs from '@emailjs/browser';


function App() {

  const form = useRef()
  const [success, setSuccsess] = useState()
  const [fail, setfail] = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oy15rfh', 'template_5jcwzbv', form.current, 'L8acK8TemOKHC29Pg')
      .then((result) => {
          console.log(result.text);
          setSuccsess(true)
      }, (error) => {
          console.log(error.text);
          setfail(true)
      });

      e.target.reset()
  };


  return (
    <div className="App">
      <ParticlesContainer />
      <nav>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className='hero'>
        <div className="wrapper">
          <div className='hero-text '>
            <h4 className='animated fadeInDown'>My Name is</h4>
            <div className="my-name animated fadeInLeft">
              <h1>Hassan Alabadla</h1>
              <h2>Full-Stack Developer</h2>
              <p>Full-Stack Developer, Gained knowledge in this field from tons of searches and challenges I had went through</p>
              <h3>Every Obstacle Is A New Challenge ...</h3>
            </div>
            <div className="hero-contact animated fadeInUp">
              <p>Lets work togather</p>
              <a href="#contact" className='contact-me '>Contact</a>
            </div>
          </div>
          <img src={MyImg} className="animated fadeInRight" alt="Hero Image" />
        </div>
      </section>

      <section className='skills' id='skills'>
        <h2>My Skills</h2>
        <div className="container">
        <ScrollAnimation animateIn='flipInY'>
          <div className="skill-item">
            <h4>Front-end</h4>
            <p>HTML5, CSS3, JS, JQuery</p>
            <p>Vue.js</p>
            <p>React.js</p>
            <p>TailwindCSS</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInY' delay={50}>
          <div className="skill-item">
            <h4>Back-end</h4>
            <p>php Laravel</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>REST API</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInY' delay={120}>
          <div className="skill-item">
            <h4>Database</h4>
            <p>MySQL</p>
            <p>Firebase</p>
            <p>MongoDB</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInY' delay={180}>
          <div className="skill-item">
            <h4>Others</h4>
            <p>Postman</p>
            <p>GitHub</p>
            <p>Deploy & Hosting</p>
          </div>
        </ScrollAnimation>
        </div>

      </section>


      <section className="projects" id='projects'>
        <h2>My Projects</h2>
        <div className="container">
          <ScrollAnimation animateIn='flipInY' delay={250}>
          <div className="project-item">
            <div className="project-img">
              <img src={OutCrop} alt="" />
            </div>
            <div className="project-text">
              <h3>Digital Solutions Website</h3>
              <p>Animated Landing page and a page for each section</p>
              <div className="tech">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Javascript</p>
              </div>
            </div>
            <a href="https://www.outcropmediaa.com/" target="_blank" className='preview'>Preview</a>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='flipInY' delay={200}>
          <div className="project-item">
            <div className="project-img">
              <img src={Berzeit} alt="" />
            </div>
            <div className="project-text">
              <h3>Berzeit Training Center</h3>
              <p>Landing Page with a managment system - dashboard</p>
              <div className="tech">
                <p>HTML5</p>
                <p>TailwindCSS</p>
                <p>Javascript</p>
                <p>Laravel</p>
                <p>REST API</p>
                <p>MySQL</p>
              </div>
            </div>
            <a href="https://berzeit.outcropmediaa.com/" target="_blank" className='preview'>Preview</a>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='flipInY' delay={300}>
          <div className="project-item">
            <div className="project-img">
              <img src={Lawfirm} alt="" />
            </div>
            <div className="project-text">
              <h3>LawFirm Management App</h3>
              <p>Law firm management web application</p>
              <div className="tech">
                <p>HTML5</p>
                <p>TailwindCSS</p>
                <p>Javascript</p>
                <p>Vue.js</p>
                <p>Laravel</p>
                <p>REST API</p>
                <p>MySQL</p>
              </div>
            </div>
            <a href="https://lawyersagency.netlify.app/" target="_blank" className='preview'>Preview</a>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='flipInY' delay={400}>
          <div className="project-item">
            <div className="project-img">
              <img src={Laywers} alt="" />
            </div>
            <div className="project-text">
              <h3>Law FIrm App Landing page</h3>
              <p>Landing Page for Law Firm Web Application</p>
              <div className="tech">
                <p>HTML5</p>
                <p>TailwindCSS</p>
                <p>Javascript</p>
              </div>
            </div>
            <a href="https://lawyer.outcropmediaa.com/" target="_blank" className='preview'>Preview</a>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='flipInY' delay={400}>
          <div className="project-item">
            <div className="project-img">
              <img src={Shoffing} alt="" />
            </div>
            <div className="project-text">
              <h3>E-Shoppign Demo App</h3>
              <p>A simple shopping application for demo purpose</p>
              <div className="tech">
                <p>HTML5</p>
                <p>TailwindCSS</p>
                <p>Javascript</p>
                <p>Vue.js</p>
                <p>Public API</p>
              </div>
            </div>
            <a href="https://shoffing.netlify.app/" target="_blank" className='preview'>Preview</a>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='flipInY' delay={480}>
          <div className="project-item">
            <div className="project-img">
              <img src={TwitterClone} alt="" />
            </div>
            <div className="project-text">
              <h3>Twitter Clone</h3>
              <p>A simple Twitter UI for demo purpose</p>
              <div className="tech">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Javascript</p>
              </div>
            </div>
            <a href="https://hassanabadla.github.io/Twitter-Clone/" target="_blank" className='preview'>Preview</a>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='flipInY' delay={480}>
            <div className="project-item">
              <div className="project-img">
                <img src={Daman} alt="" />
              </div>
              <div className="project-text">
                <h3>Daman Reviews</h3>
                <p>Daman Reviews is a website that specializes in evaluating trading companies in Arab countries</p>
                <div className="tech">
                  <p>Laravel</p>
                  <p>MySQL</p>
                  <p>Bootstrap</p>
                </div>
              </div>
              <a href="https://daman.reviews/" target="_blank" className='preview'>Preview</a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='flipInY' delay={480}>
            <div className="project-item">
              <div className="project-img">
                <img src={Deskise} alt="" />
              </div>
              <div className="project-text">
                <h3>Deskise</h3>
                <p>A multi vendor trading platform for digital products</p>
                <div className="tech">
                  <p>Laravel</p>
                  <p>Vue.js</p>
                  <p>Nuxt.js</p>
                  <p>API</p>
                  <p>Firebase</p>
                </div>
              </div>
              <a href="https://deskise.com/" target="_blank" className='preview'>Preview</a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='flipInY' delay={480}>
            <div className="project-item">
              <div className="project-img">
                <img src={Scout} alt="" />
              </div>
              <div className="project-text">
                <h3>Scouts Management System</h3>
                <p>Management System for adminstration and a profile management for Parents</p>
                <div className="tech">
                  <p>Laravel</p>
                  <p>Vue.js</p>
                  <p>CSS</p>
                  <p>REST API</p>
                  <p>Bambora Gateway</p>
                </div>
              </div>
              <a href="https://scout.outcropmediaa.com/login" target="_blank" className='preview'>Preview</a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="contact" id='contact'>
        <h2>Lets Work Togather</h2>
        {
          success?<h3 className="success">Your email was sent successfully</h3>:null
        }
        {
          fail?<h3 className="fail">There is something wrong, try social account below</h3>:null
        }
        <div className="contact-wrapper">
          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name="name" id="name" placeholder='Your name..' required/>
            <input type="email" name="email" id="email" placeholder='Your email' required/>
            <textarea type="text" name="body" id="body" rows="5"placeholder='Your message..' />
            <button type='submit' id="send">SEND</button>
          </form>
          
        </div>
      </section>

      <footer>
        <div className="footer-background"></div>
        <div className="footer-wrapper">
          <h4>Hassan ALabadla</h4>
          <div className='social-contact'>
            <a href="https://www.facebook.com/halabadla/" target="_blank" ><img src={Facebook} alt="facebook"/>halabadla</a>
            <a href="https://twitter.com/Hassan_87" target="_blank" ><img src={Twitter} alt="Twitter"/>@Hassan_87</a>
            <a href="https://wa.me/972597768434" target="_blank" ><img src={Whatsapp} alt="Whatsapp"/>+972 5977 68 434</a>
            <a href="https://github.com/HassanAbadla" target="_blank" ><img src={Github} alt="Github"/>HassanAbadla</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
