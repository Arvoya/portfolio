import React, { Component } from "react";

class Skills extends Component {
  render() {
    let skillsSection;
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      skillsSection = Object.keys(this.props.sharedSkills).map((key, i) => {
        var skills = this.props.sharedSkills[key].icons.map((skills, j) => {
          return (
               <li className="list-inline-item mx-3" key={j}>
              <span>
                <div className="text-center skills-tile">
                  <i className={skills.class} style={{ fontSize: "220%" }}>
                    <p
                         className="text-center"
                         style={{ fontSize: "30%", marginTop: "4px" }}
                    >
                      {skills.name}
                    </p>
                  </i>
                </div>
              </span>
               </li>
          );
        });
        return (
             <div key={i}>
               <h3 className="text-center">{key}</h3>
               <ul className="list-inline mx-auto skill-icon">{skills}</ul>
             </div>
        );
      });
    }

    return (
         <section id="skills">
           <div className="col-md-12">
             <div className="col-md-12">
               <h1 className="section-title">
                 <span className="text-white">{sectionName}</span>
               </h1>
             </div>
             <div className="col-md-12 text-center text-white">{skillsSection}</div>
           </div>
         </section>
    );
  }
}

export default Skills;