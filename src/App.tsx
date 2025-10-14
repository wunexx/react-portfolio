import { images } from "./images.tsx";
import SkillBar from './components/SkillBar.tsx';
import Project from './components/Project.tsx';

import { GlobeAltIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaTelegramPlane, FaEnvelope, FaItchIo, FaYoutube } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <>
      <div className="blob-container">
        <div className="blob blob-center"></div>
        <div className="blob blob-bottom-left"></div>
        <div className="blob blob-middle-right"></div>
       </div>
    
      <div className='container'>

        <div className='column'>
          <div className="basic">
            <div>
              <img src={images.logo} alt="profile picture" />
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
              <SkillBar skill="Unity C#" level={70}></SkillBar>
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
              <a href="mailto:xwunex@gmail.com">
                  <FaEnvelope className="icon"/>Gmail</a>
              <a href="https://t.me/wunex1" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="icon"/>Telegram</a>
              <a href="https://www.youtube.com/@wunexxx" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon"/>Youtube</a>
            </div>
          </div>
        </div>

        <div className='column'>
          <div className="projects">
            <h2>My Projects</h2>

            <div className="projects-container">
              <Project image={images.fightingAgents} name="Fighter AI Agents" desc="AI agents battle to secure a win in a 2D arena. Made with Unity 2D and ML-Agents." links={[
                {label: "Github", url: "https://github.com/wunexx/Knight-Agents", icon: FaGithub},
                {label: "Project", url: "https://wunexx.github.io/Knight-Agents/", icon: ArrowTopRightOnSquareIcon}
              ]}></Project>

              <Project image={images.soccerAgent} name="Soccer AI Agents" desc="Two AI soccer agents compete in a 2D arena, learning and adapting to score goals and secure victory." links={[
                {label: "Github", url: "https://github.com/wunexx/Soccer-Agents", icon: FaGithub},
                {label: "Project", url: "https://wunexx.github.io/Soccer-Agents/", icon: ArrowTopRightOnSquareIcon}
              ]}></Project>

              <Project image={images.physicsSimulation} name="Physics Simulation" desc="Simple Cellular Automata physics simulation made with pygame!" links={[
                {label: "Github", url: "https://github.com/wunexx/Physics-Simulation", icon: FaGithub}
              ]}></Project>

              <Project image={images.slimefactory} name="Slime Factory" desc="Slime-producing idle game built in Unity 2D." links={[
                {label: "Itch.io", url: "https://wunex.itch.io/slime-factory", icon: FaItchIo}
              ]}></Project>

              <Project image={images.space} name="Space Simulation" desc="Space simulation built in Python with Pygame, using real physics formulas!" links={[
                {label: "Github", url: "https://github.com/wunexx/Space-Simulation", icon: FaGithub}
              ]}></Project>

              <Project image={images.aiMazeAgent} name="Maze AI Agent" desc="AI agent made in Unity 3D using ML-Agents, trained to navigate mazes, collect a key, and unlock a door." links={[
                {label: "Github", url: "https://github.com/wunexx/Maze-Agent", icon: FaGithub}
              ]}></Project>

              <Project image={images.gameOfLife} name="Cownay's Game Of Life" desc="Simple Cellular Automata based on Conway's Game Of Life made with pygame and numpy!" links={[
                {label: "Github", url: "https://github.com/wunexx/Conway-game-of-life", icon: FaGithub}
              ]}></Project>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App