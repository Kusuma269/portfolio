import PortfolioHeader from "./Components/Header";
import {Aboutme} from "./Components/Aboutme";
import {Skills } from "./Components/Skills";
import {EducationFlipBox} from "./Components/Education";
import {ProfileSection} from "./Components/Profile";
import {Projects} from "./Components/Projects";
import { ContactForm } from  "./Components/Contact";


export default function Home() {
  return <>
    <PortfolioHeader/>
    <ProfileSection/>
    <Aboutme/>
    <Skills/>
    <EducationFlipBox/>
    <Projects/>
    <ContactForm/>
  
  </>
}         