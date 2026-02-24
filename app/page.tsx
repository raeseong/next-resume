import ResumeSection from "@/components/ResumeSection";
import { resumeData } from "@/data/resumeData";

export default function Home() {
  return (
    <main className="resume-page">
      <header className="profile-header">
        <h1>
          {resumeData.profile.name}{" "}
          <span className="profile-role">{resumeData.profile.role}</span>
        </h1>
        <ul className="contact-list">
          <li>{resumeData.profile.email}</li>
          <li>{resumeData.profile.phone}</li>
        </ul>
      </header>

      <ResumeSection title="INTRODUCE">
        <div>
          {resumeData.introduce.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="SKILL">
        <div>
          {resumeData.skills.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3 className="group-title">{group.label}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="CAREER">
        <div>
          {resumeData.careers.map((career) => (
            <article
              className="timeline-item"
              key={`${career.dateRange.startDate}-${career.company}`}
            >
              <div className="timeline-period">{career.periodLabel}</div>
              <div className="timeline-body">
                <h3 className="timeline-title">{career.company}</h3>
                <p className="timeline-role">{career.role}</p>
                <p className="badge">{career.badgeLabel}</p>
                {career.projects.map((project) => (
                  <div className="project-item" key={project.title}>
                    <h4>{project.title}</h4>
                    <ul>
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="EXPERIENCE">
        <div>
          {resumeData.experiences.map((experience) => (
            <article
              className="timeline-item"
              key={`${experience.dateRange.startDate}-${experience.org}`}
            >
              <div className="timeline-period">{experience.periodLabel}</div>
              <div className="timeline-body">
                <h3 className="timeline-title">{experience.org}</h3>
                {experience.subtitle ? (
                  <p className="timeline-role">{experience.subtitle}</p>
                ) : null}
                <ul>
                  {experience.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="TROUBLESHOOTING">
        <div>
          {resumeData.troubleshooting.map((item) => (
            <article className="trouble-item" key={item.title}>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="trouble-subtitle">{item.subtitle}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ResumeSection>

      {resumeData.education.length > 0 ? (
        <ResumeSection title="EDUCATION">
          <div>
            {resumeData.education.map((item) => (
              <article
                className="timeline-item"
                key={`${item.dateRange.startDate}-${item.school}`}
              >
                <div className="timeline-period">{item.periodLabel}</div>
                <div className="timeline-body">
                  <h3 className="timeline-title">{item.school}</h3>
                  {item.degree || item.major ? (
                    <p className="timeline-role">
                      {[item.degree, item.major].filter(Boolean).join(" · ")}
                    </p>
                  ) : null}
                  {item.details && item.details.length > 0 ? (
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </ResumeSection>
      ) : null}

      <ResumeSection title="ETC">
        <div>
          {resumeData.etc.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-period">{item.periodLabel}</div>
              <div className="timeline-body">
                <h3 className="timeline-title">{item.title}</h3>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </ResumeSection>
    </main>
  );
}
