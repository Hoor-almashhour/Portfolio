
import "./Education.css"
const Education = () => {


  const educationData = [
    { title: "Education ",
      description: " Bachelor's degree in Information Technology Engineering,Aljazeera Private University ." },
    {
      title: "Frontend Intern at Vica Company",
      explanation: "Worked on real-world projects using React and API integration."
    },
    {
      title: "UI Developer Intern at Vica Company",
      explanation: "Converted Figma designs into fully functional and responsive interfaces."
    },
    {
      title: "Frontend Developer - Freelance",
      explanation: "Developed multiple websites using HTML, CSS, JavaScript, and React."
    },
  ];
  return (
    <>
      <section className="education-section">
        <div className="container">
          <div className='Section-Title'>
            <span>Education and Experience</span>
            <h1>Education & Experience</h1>
          </div>
          <div className="square"></div>
          <div className="decorative-circle-4"></div>
          <div className="decorative-circle-5"></div>
          <div className="education-container">
            {educationData.map((item, index) => (
              <div key={index} className="education-card">
                    <h4>{item.title}</h4>
                    <p className="description">{item.description || item.explanation}</p>
                </div>
            ))}
            <div className="square2"></div>
            <div className="decorative-circle-6"></div>
            <div className="decorative-circle-7"></div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Education
