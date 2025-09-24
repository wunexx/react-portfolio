import logo from './assets/bg1.jpg'
import { GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';
import SkillBar from './components/SkillBar.tsx'
import './App.css'

function App() {
  return (
    <>
      <div className='container'>
        <div className='column'>
          <div className="basic">
            <div>
              <img src={logo} alt="profile picture" />
              <h2>Alex Selivanov</h2>
            </div>
            <div>
              <ul>
                <li><GlobeAltIcon className="icon" /> English</li>
                <li><GlobeAltIcon className="icon" /> Polish</li>
                <li><GlobeAltIcon className="icon" /> Russian</li>
                <li><GlobeAltIcon className="icon" /> Ukrainian</li>
                <li><MapPinIcon className="icon" /> Katowice</li>
              </ul>
            </div>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="skill-container">
              <SkillBar skill="Html/Css" level={90}></SkillBar>
              <SkillBar skill="Unity C#" level={80}></SkillBar>
              <SkillBar skill="Python" level={60}></SkillBar>
              <SkillBar skill="MySql" level={60}></SkillBar>
              <SkillBar skill="JavaScript" level={60}></SkillBar>
              <SkillBar skill="PHP" level={50}></SkillBar>
              <SkillBar skill="React + TypeScript" level={50}></SkillBar>
              <SkillBar skill="3D Modeling (Blender)" level={50}></SkillBar>
              <SkillBar skill="MAUI (XAML & C#)" level={40}></SkillBar>
            </div>
          </div>
        </div>

        <div className='column'>
          <div className="about-me">
              <h2>About Me</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
          </div>
          <div className="triple-div">
            <div className="small-div">
              <h2>3+</h2>
              <h4> Years Of Programming</h4>
            </div>
            <div className="small-div">
              <h2>Huge</h2>
              <h4>Love For Programming</h4>
            </div>
            <div className="small-div">
              <h2>Eager</h2>
              <h4>To Learn</h4>
            </div>
          </div>
          <div className="contact">
            <h2>Contact Me</h2>
            <div>
              <a href="https://github.com/wunexx" target="_blank" rel="noopener noreferrer">
                 <FaGithub className="icon"/>Github</a>
              <a href="mailto:sanichgang16@gmail.com">
                  <FaEnvelope className="icon"/>Gmail</a>
              <a href="https://t.me/wunex1" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="icon"/>Telegram</a>
            </div>
          </div>
        </div>

        <div className='column'>
          <div className="projects">
            <h2>My Projects</h2>

            <div className="projects-container">
              <div className="project-card">
                <img src={logo} className="project-image" alt="project image" />
                <div className="project-content">
                  <h2>Project</h2>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                  <a href="https://github.com/wunexx" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon"/>Github</a>
                </div>
              </div>

              <div className="project-card">
                <img src={logo} className="project-image" alt="project image" />
                <div className="project-content">
                  <h2>Project</h2>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                  <a href="https://github.com/wunexx" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon"/>Github</a>
                </div>
              </div>

              <div className="project-card">
                <img src={logo} className="project-image" alt="project image" />
                <div className="project-content">
                  <h2>Project</h2>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                  <a href="https://github.com/wunexx" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon"/>Github</a>
                </div>
              </div>

              <div className="project-card">
                <img src={logo} className="project-image" alt="project image" />
                <div className="project-content">
                  <h2>Project</h2>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                  <a href="https://github.com/wunexx" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon"/>Github</a>
                </div>
              </div>

              <div className="project-card">
                <img src={logo} className="project-image" alt="project image" />
                <div className="project-content">
                  <h2>Project</h2>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                  <a href="https://github.com/wunexx" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon"/>Github</a>
                </div>
              </div>

              <div className="project-card">
                  <img src={logo} className="project-image" alt="project image" />
                  <div className="project-content">
                    <h2>Project</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                    <a href="https://github.com/wunexx" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="icon"/>Github</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </>
  )
}
export default App