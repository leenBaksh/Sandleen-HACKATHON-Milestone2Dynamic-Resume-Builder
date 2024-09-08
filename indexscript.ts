// script.ts
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  address: string;
  education: {
    degree: string;
    institution: string;
    graduationDate: string;
  };
  workExperience: {
    jobTitle: string;
    company: string;
    employmentDate: string;
    description: string;
  };
  skills: string[];
}

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContainer = document.getElementById(
  "resume-container"
) as HTMLDivElement;

function generateResume(resumeData: ResumeData) {
  const resumeHTML = `
        <div class="resume-section">
            <h2>Personal Information</h2>
            <p>Name: ${resumeData.name}</p>
            <p>Email: ${resumeData.email}</p>
            <p>Phone: ${resumeData.phone}</p>
            <p>Address: ${resumeData.address}</p>
        </div>

        <div class="resume-section">
            <h2>Education</h2>
            <p>Degree: ${resumeData.education.degree}</p>
            <p>Institution: ${resumeData.education.institution}</p>
            <p>Graduation Date: ${resumeData.education.graduationDate}</p>
        </div>

        <div class="resume-section">
            <h2>Work Experience</h2>
            <p>Job Title: ${resumeData.workExperience.jobTitle}</p>
            <p>Company: ${resumeData.workExperience.company}</p>
            <p>Employment Date: ${resumeData.workExperience.employmentDate}</p>
            <p>Description: ${resumeData.workExperience.description}</p>
        </div>

        <div class="resume-section">
            <h2>Skills</h2>
            <ul>
                ${resumeData.skills
                  .map((skill) => `<li>${skill}</li>`)
                  .join("")}
            </ul>
        </div>
    `;

  resumeContainer.innerHTML = resumeHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const resumeData: ResumeData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    address: formData.get("address") as string,
    education: {
      degree: formData.get("degree") as string,
      institution: formData.get("institution") as string,
      graduationDate: formData.get("graduation-date") as string,
    },
    workExperience: {
      jobTitle: formData.get("job-title") as string,
      company: formData.get("company") as string,
      employmentDate: formData.get("employment-date") as string,
      description: formData.get("description") as string,
    },
    skills: [formData.get("skill") as string],
  };

  generateResume(resumeData);
});
