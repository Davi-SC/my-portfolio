import { curriculumData } from "../data/curriculumData";

function Curriculum() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Curriculum</h2>

      <section>
        <h3 className="text-2xl font-semibold text-gray-700">Education</h3>
        <ul className="list-disc list-inside mt-2 space-y-2">
          {curriculumData.education.map((item, index) => (
            <li key={index} className="text-gray-600">
              <strong>{item.degree}</strong>, {item.institution}, {item.year}
              {item.details && <p className="ml-4">{item.details}</p>}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-700">Projects</h3>
        <ul className="list-disc list-inside mt-2 space-y-2">
          {curriculumData.projects.map((project, index) => (
            <li key={index} className="text-gray-600">
              <strong>{project.title}</strong>: {project.description}
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline ml-2"
                >
                  [Link]
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* <section>
        <h3 className="text-2xl font-semibold text-gray-700">
          Professional Experience
        </h3>
        <ul className="list-disc list-inside mt-2 space-y-2">
          {curriculumData.experience.map((exp, index) => (
            <li key={index} className="text-gray-600">
              <strong>{exp.role}</strong>, {exp.company}, {exp.period}
              {exp.details && <p className="ml-4">{exp.details}</p>}
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
}

export default Curriculum;
