function About() {
    return(
    <div>
        <div className="about">
            <h2>About me</h2>
            <p>I'm Hamza, a junior frontend developer and Linux enthusiast from Egypt. I enjoy building things from scratch, ricing my desktop, and learning new tech. Currently relearning JavaScript.</p>
        </div>
    <div className="githubstats">
    <p align="center">
      <table>
        <tr>
          <td><img src="https://github-stats-extended.vercel.app/api?username=hamzadotjs&show_icons=true&theme=dark&hide_border=true&count_private=true" alt="hamzadotjs stats" height="165"/></td>
          <td><img src="https://github-readme-streak-stats-eight.vercel.app/?user=hamzadotjs&theme=dark&hide_border=true" alt="hamzadotjs streak" height="165"/></td>
           <td><img src="https://github-stats-extended.vercel.app/api/top-langs/?username=hamzadotjs&layout=compact&theme=dark&hide_border=true" alt="Top langs" height="165"/></td>
           </tr>
          </table>
        </p>
    </div>
    <h2>Skills</h2>
    <div className="skills">
        <span><i className="fa-brands fa-html5"></i> HTML</span>
        <span><i className="fa-brands fa-css"></i>CSS</span>
        <span><i className="fa-solid fa-terminal"></i> shell</span>
        <span><i className="fa-brands fa-linux"></i> Linux</span>
        <span><i className="fa-brands fa-python"></i> Python</span>
        <span><i className="fa-brands fa-square-js"></i> JavaScript</span>
        <span><i className="fa-brands fa-react"></i> React</span>
     </div>
  </div>
    )

}

export default About
