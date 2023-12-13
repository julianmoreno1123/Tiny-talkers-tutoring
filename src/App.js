import logo from './logo.svg';
import './styles.css/App.css';

function App() {
  return (
    <div className="App">

      <header className="header">
        <nav className="navbar">
          <a >Inicio</a>
          <a >Acerca de nosotros</a>
          <a >Contacto</a>
          <a >Testimonios</a>
          <a >Recursos educativos</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Bienvenido a Tiny Talkers Tutoring</h2>
          <p>Donde el aprendizaje del inglés se convierte en una aventura emocionante.</p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>Acerca de nosotros</h2>
          <p>Somos un equipo apasionado que se dedica a brindar tutorías de inglés de alta calidad para niños y jóvenes.</p>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Contacto</h2>
          <p>¡Contáctanos para obtener más información sobre nuestras tutorías y servicios!</p>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Testimonios</h2>
          <div className="testimonial">
            <p>"Increíble experiencia. Mis hijos están mejorando su inglés de manera asombrosa. ¡Altamente recomendado!"</p>
            <p className="author">- María Rodríguez</p>
          </div>

        </div>
      </section>

      <section className="resources">
        <div className="container">
          <h2>Recursos educativos</h2>
          <p>Explora nuestra colección de recursos educativos diseñados para hacer que el aprendizaje del inglés sea divertido y efectivo.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Tiny Talkers Tutoring. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
