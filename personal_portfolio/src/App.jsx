import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <>
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </>
  )
}

export default App
