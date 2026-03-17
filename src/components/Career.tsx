import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React JS Developer</h4>
                <h5>Instant Solutions Lab</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed and maintained 10+ React.js web applications with reusable,
              scalable components. Improved page load speed by 35% using performance
              optimization techniques. Integrated REST APIs and dynamic dashboards,
              reducing manual work by 40%. Fixed 100+ bugs/issues, improving overall
              app stability and user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Instant Solutions Lab</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Engaged in front-end development and WordPress customization.
              Collaborated closely with team members to meet project objectives and
              deliver high-quality solutions. Revamped UI/UX in collaboration with
              design team, improving usability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Trainee</h4>
                <h5>BlueTech International</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Conceptualized and designed marketing materials, resulting in a 20%
              increase in customer engagement. Collaborated with the marketing team
              to develop a new brand identity, leading to 15% growth in brand
              recognition. Created visually stunning graphics for social media
              campaigns, driving a 25% increase in follower interaction.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Internee</h4>
                <h5>CodSoft</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Contributed to designing and implementing responsive web interfaces
              using HTML, CSS, and JavaScript. Assisted in developing backend
              functionalities with Node.js, Express, and MongoDB. Conducted thorough
              testing and debugging of web applications to ensure quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
