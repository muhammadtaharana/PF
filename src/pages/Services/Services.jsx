import "./Services.css"
import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Services</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaCode className="service-icon"/>
          <h3>Vulnerability Assessment</h3>
          <p>I conduct thorough vulnerability assessments to identify and mitigate potential security risks in your applications and infrastructure.</p>
        </div>

        <div className="service-card">
          <FaPalette className="service-icon"/>
          <h3>Penetration Testing</h3>
          <p>Simulating cyber attacks to evaluate the security posture of your systems and applications.</p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon"/>
          <h3>Certified Ethical Hacking</h3>
          <p>Providing comprehensive ethical hacking services to identify and address security vulnerabilities in your systems.</p>
        </div>

      </div>

    </div>
  )

}

export default Services;