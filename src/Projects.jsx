import fetcherImg from './assets/fetcher.png'
import webgenImg from './assets/webgen.png'

function Projects() {
  return (
    <div>
      <h1>My projects:</h1>
      <div className="projects">

        <div className="project-card">
          <div className="project-info">
            <h3>My Old Site</h3>
            <p>My first portfolio site, built with HTML, CSS and a bit of JS.</p>
            <a href="https://hamzadotjs.github.io/www/" target="_blank">Visit →</a>
          </div>
          <iframe src="https://hamzadotjs.github.io/www" width="500" height="300"></iframe>
        </div>

        <div className="project-card">
          <div className="project-info">
            <h3>Fetcher</h3>
            <p>A neofetch alternative for the folks who got sick of editing jsonc files.</p>
            <a href="https://github.com/hamzadotjs/fetcher" target="_blank">Repo →</a>
          </div>
          <img src={fetcherImg} width="500" height="300" alt="Fetcher screenshot" />
        </div>

        <div className="project-card">
          <div className="project-info">
            <h3>Focus Crystals</h3>
            <p>A studying motivation app to help you stay on track.</p>
            <a href="https://hamzadotjs.github.io/studying" target="_blank">Visit →</a>
          </div>
          <iframe src="https://hamzadotjs.github.io/studying" width="500" height="300"></iframe>
        </div>
    
        <div className="project-card">
          <div className="project-info">
            <h3>Web Generator</h3>
            <p>webgen for short, is a simple utility to make websites in plain html and css that look like this one, batteries included.</p>
            <a href="https://github.com/hamzadotjs/webgen" target="_blank">Repo →</a>
          </div>
        <img src={webgenImg} alt="Webgen screenshot" />
        </div>
    

        <div className="project-card">
          <div className="project-info">
            <h3>Bangmail Website</h3>
            <p>A website I made for the Fabulous BangMail eMail protocol</p>
            <a href="https://hamzadotjs.github.io/www.bangmail" target="_blank">Visit →</a>
          </div>
          <iframe src="https://hamzadotjs.github.io/www.bangmail" width="500" height="300"></iframe>
        </div>

      </div>
    </div>
  )
};

export default Projects
