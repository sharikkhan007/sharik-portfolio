import "./App.css";
import heroImage from "./assets/sharik-profile.PNG";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const skills = [
    { name: "React", level: 75 },
    { name: "JavaScript", level: 72 },
    { name: "HTML & CSS", level: 90 },
    { name: "Node.js", level: 55 },
    { name: "Finance", level: 80 },
    { name: "AI & GenAI", level: 70 },
  ];

  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      category: "React • UI/UX",
      description:
        "A modern personal portfolio focused on clean design, creativity and smooth user experience.",
      github: "https://github.com/sharikkhan007/sharik-portfolio",
      status: "LIVE",
    },
    {
      number: "02",
      title: "Hostel Booking Website",
      category: "Next.js • Web Development",
      description:
        "A modern hostel booking platform designed to provide a smooth and user-friendly accommodation booking experience.",
      github: "https://github.com/sharikkhan007/hostel-booking-platform",
      status: "IN DEVELOPMENT",
    },
    {
      number: "03",
      title: "Shopping Application",
      category: "Node.js • React",
      description:
        "An e-commerce application featuring products, search and cart functionality. Currently under development.",
      status: "IN DEVELOPMENT",
    },
    {
      number: "04",
      title: "Agentic AI Business",
      category: "Agentic AI • Automation • Business",
      description:
        "A future AI-powered business ecosystem designed to automate business operations using intelligent AI agents for content creation, marketing, customer support, research and business management.",
      status: "FUTURE PROJECT",
    },
  ];

  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          Sharik <span>Khan</span>
        </button>

        <nav className="nav-links">
          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </nav>

        <button
          className="connect-button"
          onClick={() => scrollToSection("contact")}
        >
          LET&apos;S CONNECT
          <span>↗</span>
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-lines line-one"></div>
        <div className="hero-lines line-two"></div>

        <div className="hero-background-text">
          PORTFOLIO
        </div>

        <div className="hero-grid">
          <div className="hero-left">
            <p className="eyebrow">
              UI / UX & WEB DEVELOPER
            </p>

            <h1>
              I BUILD DIGITAL
              <br />
              EXPERIENCES THAT
              <br />
              <span>INSPIRE</span> &amp; <span>CONNECT</span>
            </h1>

            <p className="hero-description">
              BCA Graduate | MBA Finance Student
              <br />
              Exploring technology, artificial intelligence,
              <br />
              finance and digital innovation.
            </p>

            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              VIEW MY PROJECTS
              <span>→</span>
            </button>
          </div>

          <div className="hero-image-area">
            <div className="image-glow"></div>

            <img
              src={heroImage}
              alt="Sharik Khan"
              className="hero-image"
            />
          </div>

          <div className="hero-right">
            <p className="eyebrow right-eyebrow">
              CREATIVE PORTFOLIO
            </p>

            <div className="hero-quote">
              <div className="quote-line"></div>

              <p>
                Turning ideas into
                <br />
                meaningful digital
                <br />
                experiences.
              </p>
            </div>

            <div className="location">
              <div className="globe">◎</div>

              <p>
                BASED IN INDIA
                <br />
                <span>WORKING WORLDWIDE</span>
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-side">
          <span>SCROLL</span>

          <div className="scroll-line">
            <div></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-intro">
          <span></span>

          <p>
            GOOD IDEAS
            <br />
            GREAT THINGS
          </p>
        </div>

        <div className="stat">
          <h3>01+</h3>
          <p>YEARS LEARNING</p>
        </div>

        <div className="stat">
          <h3>04+</h3>
          <p>PROJECTS</p>
        </div>

        <div className="stat">
          <h3>∞</h3>
          <p>IDEAS</p>
        </div>

        <div className="stat">
          <h3>100%</h3>
          <p>DEDICATION</p>
        </div>

        <div className="availability">
          <p>
            AVAILABLE FOR
            <br />
            <span>OPPORTUNITIES</span>
          </p>

          <i></i>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="section-number">
          01
        </div>

        <div className="about-content">
          <div>
            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              Building My <span>Future</span>
              <br />
              Through Technology.
            </h2>
          </div>

          <div className="about-text">
            <p>
              I am Sharik Khan, a BCA graduate and MBA Finance student with a
              strong interest in technology, web development, artificial
              intelligence and digital innovation.
            </p>

            <p>
              I enjoy transforming ideas into digital experiences while
              continuously learning new technologies and improving my skills.
            </p>

            <p>
              My goal is to combine my technical background with finance and
              business knowledge to build meaningful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        className="skills-section section"
        id="skills"
      >
        <div className="section-number">
          02
        </div>

        <div className="skills-heading">
          <div>
            <p className="eyebrow">
              MY SKILLS
            </p>

            <h2>
              Always <span>Learning.</span>
              <br />
              Always Growing.
            </h2>
          </div>

          <p>
            My learning journey never stops. Every project is an opportunity
            to explore, experiment and improve.
          </p>
        </div>

        <div className="learning-card">
          <div className="learning-top">
            <p>LEARNING IN PROGRESS</p>

            <div className="live-status">
              <span></span>
              CONTINUOUSLY IMPROVING
            </div>
          </div>

          <div className="learning-animation">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="learning-core">
              <span>LEARN</span>
              <strong>+</strong>
              <span>BUILD</span>
            </div>

            <div className="floating-dot dot-one"></div>
            <div className="floating-dot dot-two"></div>
            <div className="floating-dot dot-three"></div>
          </div>

          <p className="learning-caption">
            EXPLORING • BUILDING • LEARNING • IMPROVING
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              className="skill-card"
              key={skill.name}
            >
              <div className="skill-top">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <div
                  style={{
                    width: `${skill.level}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        className="projects section"
        id="projects"
      >
        <div className="projects-heading">
          <div>
            <div className="section-title-row">
              <span className="section-number">
                03
              </span>

              <h2>
                Selected <span>Projects</span>
              </h2>
            </div>

            <p>
              A COLLECTION OF PROJECTS SHOWCASING MY SKILLS, LEARNING JOURNEY
              AND DEVELOPMENT EXPERIENCE.
            </p>
          </div>

          <button
            className="secondary-button"
            onClick={() => scrollToSection("contact")}
          >
            LET&apos;S WORK TOGETHER
            <span>↗</span>
          </button>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-top">
                <span>{project.number}</span>

                <span>
                  {project.status === "LIVE"
                    ? "●"
                    : project.status === "IN DEVELOPMENT"
                    ? "IN DEVELOPMENT"
                    : "FUTURE PROJECT"}
                </span>
              </div>

              <div className="project-visual">
                <div className="project-circle"></div>
                <div className="project-grid-lines"></div>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <button
                onClick={() => {
                  if (project.github) {
                    window.open(
                      project.github,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  } else {
                    alert(
                      `${project.title} is ${
                        project.status === "FUTURE PROJECT"
                          ? "planned as a future project"
                          : "currently under development"
                      }!`
                    );
                  }
                }}
              >
                {project.github
                  ? "EXPLORE PROJECT"
                  : project.status === "FUTURE PROJECT"
                  ? "FUTURE PROJECT"
                  : "IN DEVELOPMENT"}{" "}
                <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="contact-background">
          CONNECT
        </div>

        <p className="eyebrow">
          GET IN TOUCH
        </p>

        <h2>
          Let&apos;s Create Something
          <br />
          <span>Meaningful Together.</span>
        </h2>

        <p className="contact-text">
          Have an opportunity, project or idea? Let&apos;s connect and explore
          what we can build together.
        </p>

        {/* CONTACT LINKS */}
        <div className="contact-links">
          <a
            href="mailto:aijazjkb163@gmail.com"
            className="contact-main-button"
          >
            EMAIL ME <span>↗</span>
          </a>

          <a
            href="https://github.com/sharikkhan007"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-main-button"
          >
            GITHUB <span>↗</span>
          </a>
        </div>

        {/* MESSAGE FORM */}
        <div className="message-section">
          <h3>SEND ME A MESSAGE</h3>

          <p>AVAILABLE TO CONNECT</p>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();

              const formData = new FormData(e.target);

              const name = formData.get("name");
              const email = formData.get("email");
              const message = formData.get("message");

              const subject = `Portfolio Message from ${name}`;

              const body = `Name: ${name}

Email: ${email}

Message:
${message}`;

              window.location.href = `mailto:aijazjkb163@gmail.com?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`;

              e.target.reset();
            }}
          >
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              rows="6"
              required
            ></textarea>

            <button
              type="submit"
              className="send-message-button"
            >
              SEND MESSAGE <span>↗</span>
            </button>
          </form>
        </div>

        <div className="contact-footer">
          <p>© 2026 SHARIK KHAN</p>

          <button
            onClick={() => scrollToSection("home")}
          >
            BACK TO TOP ↑
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;