import { images } from "./images.tsx";
import SkillBar from './components/SkillBar.tsx';
import Project from './components/Project.tsx';
import SmallDiv from "./components/SmallDiv.tsx";

import { GlobeAltIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaTelegramPlane, FaEnvelope, FaItchIo, FaPhone } from 'react-icons/fa';
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
              <h3>I’m a 17-year-old aspiring programmer based in Katowice, currently studying in the 3rd grade of a technical school with a focus on software development. I’ve been passionate about programming for years and love building larger, more complex systems such as procedural dungeon generators and full game frameworks. Game development is my favorite area of programming, and I regularly participate in game jams to improve my skills and experiment with new ideas.</h3>
              <br></br>
              <h3> I originally come from Ukraine, where I completed eight years of schooling before relocating to Poland. I finished elementary school here with strong exam results and continue to push myself academically. Outside of programming, I enjoy going to the gym and playing computer games. I’m always looking to expand my knowledge, explore new technologies, and take on projects that challenge me to grow as a developer.</h3>
          </div>
          <div className="triple-div">
            <SmallDiv h2="" h3="3+ Years of Programming" />
            <SmallDiv h2="" h3="Game Dev My Biggest Passion" />
            <SmallDiv h2="" h3="Always Eager to Learn" />
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
              <a href="https://wunex.itch.io/" target="_blank" rel="noopener noreferrer">
                <FaItchIo className="icon"/>Itch.io</a>
              <a href="tel:+48576140248">
                <FaPhone className="icon"/>Phone
              </a>
            </div>
          </div>
        </div>

        <div className='column'>
          <div className="projects">
            <h2>My Projects</h2>

            <div className="projects-container">
              <Project image={images.aural} name="Aural" desc="Aural is a 2D dungeon crawler built with Unity and C#, created in 30 days for the Game Off 2025 game jam." links={[
                {label: "Github", url: "https://github.com/wunexx/Aural", icon: FaGithub},
                {label: "Itch.io", url: "https://wunex.itch.io/aural", icon: FaItchIo}
              ]}></Project>
              <Project image={images.fightingAgents} name="Fighter AI Agents" desc="AI agents battle to secure a win in a 2D arena. Made with Unity 2D and ML-Agents." links={[
                {label: "Github", url: "https://github.com/wunexx/Knight-Agents", icon: FaGithub},
                {label: "Project", url: "https://wunexx.github.io/Knight-Agents/", icon: ArrowTopRightOnSquareIcon}
              ]}></Project>

              <Project image={images.soccerAgent} name="Soccer AI Agents" desc="Two AI soccer agents compete in a 2D arena, learning and adapting to score goals and secure victory." links={[
                {label: "Github", url: "https://github.com/wunexx/Soccer-Agents", icon: FaGithub},
                {label: "Project", url: "https://wunexx.github.io/Soccer-Agents/", icon: ArrowTopRightOnSquareIcon}
              ]}></Project>

              <Project image={images.slimefactory} name="Slime Factory" desc="Slime-producing idle game built in Unity 2D." links={[
                {label: "Itch.io", url: "https://wunex.itch.io/slime-factory", icon: FaItchIo}
              ]}></Project>

              <Project image={images.physicsSimulation} name="Physics Simulation" desc="Simple Cellular Automata physics simulation made with pygame!" links={[
                {label: "Github", url: "https://github.com/wunexx/Physics-Simulation", icon: FaGithub}
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