var form = document.getElementById("resume-form");
var resumeContainer = document.getElementById("resume-container");
function generateResume(resumeData) {
    var resumeHTML = "\n        <div class=\"resume-section\">\n            <h2>Personal Information</h2>\n            <p>Name: ".concat(resumeData.name, "</p>\n            <p>Email: ").concat(resumeData.email, "</p>\n            <p>Phone: ").concat(resumeData.phone, "</p>\n            <p>Address: ").concat(resumeData.address, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h2>Education</h2>\n            <p>Degree: ").concat(resumeData.education.degree, "</p>\n            <p>Institution: ").concat(resumeData.education.institution, "</p>\n            <p>Graduation Date: ").concat(resumeData.education.graduationDate, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h2>Work Experience</h2>\n            <p>Job Title: ").concat(resumeData.workExperience.jobTitle, "</p>\n            <p>Company: ").concat(resumeData.workExperience.company, "</p>\n            <p>Employment Date: ").concat(resumeData.workExperience.employmentDate, "</p>\n            <p>Description: ").concat(resumeData.workExperience.description, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h2>Skills</h2>\n            <ul>\n                ").concat(resumeData.skills
        .map(function (skill) { return "<li>".concat(skill, "</li>"); })
        .join(""), "\n            </ul>\n        </div>\n    ");
    resumeContainer.innerHTML = resumeHTML;
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        education: {
            degree: formData.get("degree"),
            institution: formData.get("institution"),
            graduationDate: formData.get("graduation-date"),
        },
        workExperience: {
            jobTitle: formData.get("job-title"),
            company: formData.get("company"),
            employmentDate: formData.get("employment-date"),
            description: formData.get("description"),
        },
        skills: [formData.get("skill")],
    };
    generateResume(resumeData);
});
