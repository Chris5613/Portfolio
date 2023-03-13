function Icons({ icon, text }) {
  return (
    <>
      <div className="skills-container">
        <div className="skills-icons">{icon}</div>
        <div className="skills-text">
          <h4>{text}</h4>
        </div>
      </div>
    </>
  );
}

export default Icons;
