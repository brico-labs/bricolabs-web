import "./TopBar.css"

export default function topBar() {

return <header id="main-menu" >
      <div className="menu-bg"></div>
      <div className="wrapper">
          <a id="init" href="#init"><img className="logo-mini" src="assets/images/bricolabs_logo_mini.png" alt="Logo Bricolabs" /></a>
          <div className="show-menu"></div>
          <nav className="menu">
              <ul>
                  <li><a className="act"id="menu-who" href="#who">¿Quiénes somos?</a></li>
                  <li><a className="act"id="menu-projects" href="#projects">Galería</a></li>
                  <li><a className="act"id="menu-contact" href="#contact">Contacto</a></li>
                  <li><a className="act"href="http://bricolabs.cc/wiki">Wiki</a></li>
                  <li><a className="act"href="http://oshwdem.org">OSHWDem</a></li>
              </ul>
          </nav>
      </div>
  </header>
} 