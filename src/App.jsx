
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">KIRAN KUMARI<span>.</span></h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="intro">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            I'm <span>Kiran Kumari</span>
          </h1>

          <h2>Aspiring Software Developer</h2>

          <p className="hero-description">
            M.Tech Computer Science graduate passionate about
            Java, web development and building meaningful
            technology solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-info">
            <div>
              <h3>2025</h3>
              <p>M.Tech Graduate</p>
            </div>

            <div>
              <h3>Java</h3>
              <p>Programming</p>
            </div>

            <div>
              <h3>React</h3>
              <p>Web Development</p>
            </div>
          </div>

        </div>

        {/* Right Side Visual */}
        <div className="hero-visual">
          <div className="visual-circle">
            <div className="visual-text">
              <span>CREATIVE</span>
              <h2>THINKER.</h2>
              <span>PROBLEM SOLVER.</span>
            </div>
          </div>

          <div className="floating-card">
            <span>✦</span>
            Always Learning
          </div>

          <div className="floating-tag">
            Java • React • SQL
          </div>
        </div>

      </section>

      {/* About section will come next */}

{/* About Section */}
<section id="about" className="about">

  <div className="about-heading">
    <p className="section-label">GET TO KNOW ME</p>
    <h2>About <span>Me</span></h2>
  </div>

  <div className="about-content">

    <div className="about-card">
      <div className="about-icon">✦</div>
      <h3>Who I Am</h3>
      <p>
        I'm Kiran Kumari, a Computer Science postgraduate
        with an interest in software development and
        modern web technologies.
      </p>
      <p>
        I enjoy learning new technologies, solving
        programming problems and turning ideas into
        practical applications.
      </p>
    </div>

    <div className="about-details">

      <div className="detail-box">
        <span>EDUCATION</span>
        <h3>M.Tech in Computer Science</h3>
        <p>Vignan's Institute of Information Technology</p>
        <small>2023 – 2025</small>
      </div>

      <div className="detail-box">
        <span>MY INTERESTS</span>
        <h3>Software Development</h3>
        <p>Java · Web Development · Database Technologies</p>
      </div>

      <div className="detail-box">
        <span>MY APPROACH</span>
        <h3>Learn. Build. Improve.</h3>
        <p>Continuously developing my technical and problem-solving skills.</p>
      </div>

    </div>
  </div>

</section>

{/* Skills Section */}
<section id="skills" className="skills">

  <div className="skills-heading">
    <p className="section-label">MY TECHNICAL EXPERTISE</p>
    <h2>Skills & <span>Technologies</span></h2>
    <p>Technologies I have learned and continue to improve.</p>
  </div>

  <div className="skills-grid">

    <div className="skill-card">
      <div className="skill-icon">☕</div>
      <h3>Java</h3>
      <p>Programming & OOP</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🐍</div>
      <h3>Python</h3>
      <p>Programming Fundamentals</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🌐</div>
      <h3>HTML5</h3>
      <p>Web Structure</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🎨</div>
      <h3>CSS3</h3>
      <p>Web Styling & Layout</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">⚡</div>
      <h3>JavaScript</h3>
      <p>Programming & Interactivity</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">⚛️</div>
      <h3>React.js</h3>
      <p>Frontend Development</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🗄️</div>
      <h3>SQL</h3>
      <p>Database Management</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🔧</div>
      <h3>Git</h3>
      <p>Version Control</p>
    </div>

  </div>
</section>

{/* Projects Section */}
<section id="projects" className="projects">

  <div className="projects-heading">
    <p className="section-label">MY RECENT WORK</p>
    <h2>Featured <span>Projects</span></h2>
    <p>A few projects that reflect my learning and technical journey.</p>
  </div>

  <div className="projects-container">

    {/* Project 1 */}
    <div className="project-card">

      <div className="project-number">01</div>

      <div className="project-content">
        <p className="project-category">AI / MACHINE LEARNING</p>

        <h3>LaMaTEPP++</h3>

        <p className="project-description">
          Lightweight Adapter-Enhanced Memory-Augmented
          Machine Translation for Indic Languages.
          An AI-based translation project focused on
          English-to-Telugu and English-to-Tamil translation
          using Transformer-based models.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>NLP</span>
          <span>mBART</span>
          <span>Deep Learning</span>
        </div>
      </div>

      <div className="project-arrow">↗</div>

    </div>

    {/* Project 2 */}
    <div className="project-card">

      <div className="project-number">02</div>

      <div className="project-content">
        <p className="project-category">COMPUTER VISION</p>

        <h3>3D Face Detection and Tracking System</h3>

        <p className="project-description">
          A computer vision-based project focused on
          detecting and tracking human faces using
          image processing techniques, feature extraction
          and deep learning concepts.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>Computer Vision</span>
          <span>CNN</span>
          <span>3D Modelling</span>
        </div>
      </div>

      <div className="project-arrow">↗</div>

    </div>

  </div>
</section>


{/* Contact Section */}
<section id="contact" className="contact">

  <div className="contact-heading">
    <p className="section-label">GET IN TOUCH</p>
    <h2>Let's Work <span>Together</span></h2>
    <p>
      I'm interested in software development opportunities
      and connecting with people in technology.
    </p>
  </div>

  <div className="contact-container">

    <div className="contact-info">
      <h3>Have an opportunity or a project in mind?</h3>
      <p>
        Feel free to reach out. I'd be happy to connect
        and discuss new opportunities.
      </p>

      
<div className="contact-item">
  <span>✉</span>
  <div>
    <small>EMAIL</small>
    <a href="mailto:kirankumarisundarapu@gmail.com">
  kirankumarisundarapu@gmail.com
</a>
  </div>
</div>


      <div className="contact-item">
        <span>in</span>
        <div>
          <small>LINKEDIN</small>
          <a
  href="https://www.linkedin.com/in/sundarapu-kirankumari-64b059250"
  target="_blank"
  rel="noreferrer"
>
  Visit LinkedIn ↗
</a>
        </div>
      </div>

      <div className="contact-item">
        <span>⌘</span>
        <div>
          <small>GITHUB</small>
          <a
  href="https://github.com/kirankumari-31"
  target="_blank"
  rel="noreferrer"
>
  Visit GitHub ↗
</a>
        </div>
      </div>
    </div>

    <div className="contact-message">
      <h3>Let's connect!</h3>
      <p>
        Open to learning, collaboration and new
        career opportunities.
      </p>

      <a
  href="mailto:kirankumarisundarapu@gmail.com"
  className="primary-button"
>
  Send Me an Email ↗
</a>
    </div>

  </div>
</section>

{/* Footer */}
<footer className="footer">
  <h3>KIRAN KUMARI<span>.</span></h3>
  <p>Designed & built with passion by Kiran Kumari.</p>
  <p>© 2026 All rights reserved.</p>
</footer>


    </div>
  )
}

export default App
