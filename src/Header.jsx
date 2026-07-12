function Header() {
   
   
    return (
   <div className="intro-container">
    <div className="intro">
     <h3> Hi I'm</h3>
      <h1>Hamza Sherif</h1>
      <p>A junior Web developer and linux enthusiast.</p>

      <div className="links">
        <a href="https://github.com/hamzadotjs" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://hamzadotjs.bsky.social" target="_blank"><i className="fab fa-bluesky"></i></a>
        <a href="https://t.me/noteepyhamza" target="_blank"><i className="fab fa-telegram"></i></a>
	    <a href="mailto:12.hamza.sherif@gmail.com" target="_blank"><i className="fa-solid fa-inbox"></i></a>
	    <a href="https://discord.com/users/1384129644856348673" target="_blank"><i className="fa-brands fa-discord"></i></a>
        <a href="https://wa.me/2001012855203" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
      </div>
      <h2>Title:</h2>
      <p>I use Arch, btw</p>
    </div>
    <div className="intro-img">
    </div>
  </div>
  )
}

export default Header