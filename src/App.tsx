import './App.css'
import TopBar from './TopBar/TopBar'

function App() {

  return <>
  <head lang="es">
    <title>BricoLabs</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="4m1g0 <dev.4m1g0@gmail.com>, manuelsrleon <manuelsrleon@gmail.com>" />
    <link rel="copyright" href="http://creativecommons.org/licenses/by-sa/3.0/" />
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link> 
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Press+Start+2P&display=swap" rel="stylesheet"></link>
  </head>
  
  <a id="init"></a>
  <TopBar></TopBar>
  <section className="hero intro cover">

        <div className="hero-text-container">
            <h1 id="hero-title">Fomentando la cultura open desde 2013 ⚡</h1>
            <h2 id="hero-subtitle">Bienvenidos al primer makerspace de Galicia.</h2>
        </div>
      <img id="hero-logo" src="assets/images/bricolabs_logo.png" alt="Logo Bricolabs" />
  </section>
  <section className="description content">
      <a className="anchor" id="who"></a>
      <div className="wrapper table">
          <div className="section-text">
              <h1 className="section-title">¿Quiénes somos?</h1>
              <div className="desc-text">
                  BricoLabs es una asociación que reúne semanalmente a todos aquellos que quieran colaborar en el diseño, construcción y pruebas de todo tipo de aparatos y gadgets, propuestos por los propios participantes y al estilo de otros HackerSpaces y FabLabs del mundo.<br /><br />
                    Es un grupo de trabajo donde todo el mundo puede proponer ideas y colaborar en las diferentes fases de los proyectos, a través de reuniones altamente participativas y en un ambiente ameno y dinámico, donde no importa tanto el nivel de conocimiento como la motivación en la realización de la actividad.
              </div>
                </div>
          <img className="desc-image" src="assets/images/group_photo.jpg" alt="Foto de grupo Bricolabs" />
      </div>
  </section>
  <section className="projects content">
      <a className="anchor" id="projects"></a>
      <h1 className="section-title">Galería de imágenes</h1>
      <div className="wrapper">
          <div className="section-desc">Cada semana nos reunimos para poner en común proyectos personales y desarrollar proyectos conjuntos. En estas imágenes puedes ver algunas cosas que hemos hecho. Además asistimos a numeros eventos de hardware libre y organizamos anualmente la feria de tecnología abierta OSHWDem.<br /><br />Puedes ver toda la documentación sobre nuestros proyectos en nuestra <a href="wiki/">Wiki</a>. También puedes acceder al <a href="https://github.com/brico-labs">GitHub</a> de los proyectos comunes.</div>
          <div className="img-container">
              <img src="assets/images/siguelineas-small.jpg" alt="Concurso de robots siguelíneas en la OSHWDem" />
          </div>
          <div className="img-container">
              <img src="assets/images/sumo-robot-small.jpg" alt="Consurso de robots sumo en la OSHWDem" />
          </div>
          <div className="img-container">
              <img src="assets/images/ciencia-en-la-calle-small.jpg" alt="Bricolabs en el dia de la ciencia en la calle" />
          </div>
          <div className="img-container">
              <img src="assets/images/escornabot-small.jpg" alt="Proyecto libre de robótica educativa Escornabot" />
          </div>
          <div className="img-container">
              <img src="assets/images/sensor_siguelineas-small.jpg" alt="Fabricando sensor siguelineas" />
          </div>
          <div className="img-container">
              <img src="assets/images/proyecto_electronica-small.jpg" alt="Proyecto electronica en Bricolabs" />
          </div>
      </div>
  </section>
  <section className="media content">
      <a className="anchor" id="contact"></a>
      <h1 className="section-title">Contacto</h1>
      <div className="wrapper">
          <div className="section-desc">
              <p>Nos reunimos en la Domus de A Coruña. Todos los meses hacemos una sesión de puertas abiertas, si quieres hacernos una visita puedes contactar con nosotos a través del correo electrónico <a href="mailto:contacto@bricolabs.cc" > contacto@bricolabs.cc</a></p><br />
          </div> 
      </div>
  </section>
  <footer>
      <a href="https://twitter.com/brico_labs" target="_blank"><img src="assets/images/twitter.png" alt="Twitter" /></a>
      <a href="https://www.flickr.com/photos/bricolabs/" target="_blank"><img src="assets/images/flickr.png" alt="Twitter" /></a>
      <a href="https://github.com/brico-labs" target="_blank"><img src="assets/images/github-white.png" alt="GitHub" /></a>
      <a href="mailto:contacto@bricolabs.cc"><img src="assets/images/email.png" alt="Email" /></a>
  </footer>
  </>
  }

export default App
