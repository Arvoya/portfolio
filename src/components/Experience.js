import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


const customStyles = {
  futureOpportunitiesContent: {
    background: '#fff', // This will set the background to white
    padding: '15px', // Add padding for visual comfort
    borderRadius: '4px', // Optional: if you want rounded corners
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)' // Optional: if you want to add a subtle shadow
  },
  titleStyle: {
    fontSize: '1.2rem' // Adjust font size for titles
  },
  subtitleStyle: {
    fontSize: '1rem' // Adjust font size for subtitles
  }
};



class Experience extends Component {
  render() {
    let sectionName, work, education;

    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.experience;
      
      work = this.props.resumeExperience.map((work, i) => {
        const mainTech = work.mainTech.map((technology, i) => (
          <Badge pill className="main-badge mr-2 mb-2" key={i}>
            {technology}
          </Badge>
        ));
        const tech = work.technologies.map((technology, i) => (
          <Badge pill className="experience-badge mr-2 mb-2" key={i}>
            {technology}
          </Badge>
        ));

        return (
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-leaf experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>
            <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
              {work.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>
              {tech}
            </div>
          </VerticalTimelineElement>
        );
      });
    }

    if (this.props.resumeEducation) {
      education = this.props.resumeEducation.map((edu, i) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={edu.year}
          iconStyle={{ background: "#2196f3", color: "#fff", textAlign: "center" }}
          icon={<i className="fas fa-graduation-cap experience-icon"></i>}
          key={i}
        >
          <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
            {edu.degree}
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
            {edu.institution}
          </h4>
        </VerticalTimelineElement>
      ));
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
          <VerticalTimelineElement
  className="vertical-timeline-element--work future-opportunities-bg"
  date="Future Date"
  iconStyle={{ background: '#FF7F50', color: '#fff' }}
  icon={<FontAwesomeIcon icon={faLaptopCode} />}
  // Add the contentStyle prop with your new class for background
  contentStyle={{ background: '#fff', color: '#000' }} 
>
  <div>
    <h3>Digital Wellness Architect</h3>
    <h4 className="vertical-timeline-element-title">
    Your Company's Name
    </h4>
    <p>Seeking opportunities to develop innovative software solutions that enhance holistic health practices, contributing to the wellbeing of individuals in the digital age.</p>
  </div>
</VerticalTimelineElement>


            {work}
            {education}
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
