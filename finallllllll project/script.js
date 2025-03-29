// User Registration
function register() {
    let userType = document.getElementById("userTypeRegister").value;
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;
    
    if (username && password) {
        let userDetails = {
            username: username,
            password: password,
            type: userType // store the user type (volunteer, organization, admin)
        };
        
        localStorage.setItem(username, JSON.stringify(userDetails));
        alert("Registration successful! You can now log in.");
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
}

// User Login
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userType = document.getElementById("userType").value;
    
    let user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password && user.type === userType) {
        localStorage.setItem("loggedInUser", username);
        
        if (user.type === "volunteer") {
            window.location.href = "volunteer-dashboard.html";
        } else if (user.type === "organization") {
            window.location.href = "organization-dashboard.html";
        } else if (user.type === "admin") {
            window.location.href = "admin_dashboard.html";
        }
    } else {
        alert("Invalid username, password, or user type!");
    }
}
// Save organization details in localStorage
document.getElementById('orgForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const orgName = document.getElementById('orgName').value;
    const orgAddress = document.getElementById('orgAddress').value;
    const orgContact = document.getElementById('orgContact').value;
    const orgEmail = document.getElementById('orgEmail').value;
    
    // Save organization details to localStorage
    const orgDetails = {
        orgName: orgName,
        orgAddress: orgAddress,
        orgContact: orgContact,
        orgEmail: orgEmail
    };
    
    localStorage.setItem('organizationDetails', JSON.stringify(orgDetails));
    alert('Organization details saved successfully!');
});

// Post volunteer request
document.getElementById('volunteerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const workDescription = document.getElementById('workDescription').value;
    const workDate = document.getElementById('workDate').value;
    const workTime = document.getElementById('workTime').value;
    const volunteersNeeded = document.getElementById('volunteersNeeded').value;
    const salaryPerVolunteer = document.getElementById('salaryPerVolunteer').value;
    const experienceRequired = document.getElementById('experienceRequired').checked;
    
    // Prepare the request object
    const request = {
        workDescription,
        workDate,
        workTime,
        volunteersNeeded,
        salaryPerVolunteer,
        experienceRequired
    };
    
    // Store the request in localStorage
    let volunteerRequests = JSON.parse(localStorage.getItem('volunteerRequests')) || [];
    volunteerRequests.push(request);
    localStorage.setItem('volunteerRequests', JSON.stringify(volunteerRequests));
    
    // Display the posted request
    displayPostedRequests();
    
    alert('Volunteer request posted successfully!');
});

// Display posted volunteer requests
function displayPostedRequests() {
    const requests = JSON.parse(localStorage.getItem('volunteerRequests')) || [];
    const postStatusDiv = document.getElementById('postStatus');
    postStatusDiv.innerHTML = ''; // Clear previous data

    requests.forEach(request => {
        const requestElement = document.createElement('p');
        requestElement.textContent = `Work: ${request.workDescription}, Date: ${request.workDate}, Time: ${request.workTime}, Volunteers Needed: ${request.volunteersNeeded}, Salary: ${request.salaryPerVolunteer}, Experience Required: ${request.experienceRequired ? 'Yes' : 'No'}`;
        postStatusDiv.appendChild(requestElement);
    });
}

// Display posted requests on page load
window.onload = displayPostedRequests;
// Show Add Organization Form
function showAddOrganizationForm() {
    document.getElementById("addOrganizationForm").style.display = "block";
}

// Save Organization Details
function saveOrganization() {
    let orgName = document.getElementById("orgName").value;
    let orgType = document.getElementById("orgType").value;
    let orgAddress = document.getElementById("orgAddress").value;
    let orgContact = document.getElementById("orgContact").value;
    let orgDescription = document.getElementById("orgDescription").value;

    if (orgName && orgType && orgAddress && orgContact && orgDescription) {
        // Save the organization details to localStorage
        localStorage.setItem("orgName", orgName);
        localStorage.setItem("orgType", orgType);
        localStorage.setItem("orgAddress", orgAddress);
        localStorage.setItem("orgContact", orgContact);
        localStorage.setItem("orgDescription", orgDescription);

        alert("Organization details saved successfully!");

        // Show the Request Volunteers button
        document.getElementById("requestVolunteersSection").style.display = "block";
        document.getElementById("addOrganizationForm").style.display = "none";
    } else {
        alert("Please fill in all fields.");
    }
}




// Save Organization Details
function saveVolunteer() {
    let orgName = document.getElementById("orgName").value;
    let orgType = document.getElementById("orgType").value;
    let orgAddress = document.getElementById("orgAddress").value;
    let orgContact = document.getElementById("orgContact").value;
    let orgDescription = document.getElementById("orgDescription").value;

    if (orgName && orgType && orgAddress && orgContact && orgDescription) {
        // Save the organization details to localStorage
        localStorage.setItem("orgName", orgName);
        localStorage.setItem("orgType", orgType);
        localStorage.setItem("orgAddress", orgAddress);
        localStorage.setItem("orgContact", orgContact);
        localStorage.setItem("orgDescription", orgDescription);

        alert("Organization details saved successfully!");

        // Show the Request Volunteers button
        document.getElementById("requestVolunteersSection").style.display = "block";
        document.getElementById("addVolunteerForm").style.display = "none";
    } else {
        alert("Please fill in all fields.");
    }
}

// Request Volunteers
function requestVolunteers() {
    alert("You can now request volunteers for your organization!");
    // You can redirect to a new page or show a form to request volunteers
}

// Show Volunteer Form when "Add Volunteer" button is clicked
function showAddVolunteerForm() {
    document.getElementById("addVolunteerForm").style.display = "block"; // Show the form
}

// Validate Mobile Number (10 digits)
function validateVolunteerMobile() {
    let mobileNumber = document.getElementById("volunteerContact").value;
    let regex = /^[0-9]{10}$/; // RegEx for a valid 10-digit number

    if (!regex.test(mobileNumber)) {
        document.getElementById("volunteerContact").style.borderColor = "red"; 
        document.getElementById("errorMessage").style.display = "inline"; 
    } else {
        document.getElementById("volunteerContact").style.borderColor = "green"; 
        document.getElementById("errorMessage").style.display = "none"; 
    }
}

// Save Volunteer Details
function saveVolunteer() {
    let volunteerName = document.getElementById("volunteerName").value;
    let volunteerSkills = document.getElementById("volunteerSkills").value;
    let volunteerAddress = document.getElementById("volunteerAddress").value;
    let volunteerContact = document.getElementById("volunteerContact").value;
    let volunteerExperience = document.getElementById("volunteerExperience").value;

    // Validate mobile number before saving
    let regex = /^[0-9]{10}$/;
    if (!regex.test(volunteerContact)) {
        alert("Invalid mobile number. Please enter a valid 10-digit mobile number.");
        return;
    }

    // Save the volunteer details (simulated using localStorage)
    let volunteerData = {
        name: volunteerName,
        skills: volunteerSkills,
        address: volunteerAddress,
        contact: volunteerContact,
        experience: volunteerExperience
    };

    // Store volunteer details in localStorage
    localStorage.setItem("volunteerDetails", JSON.stringify(volunteerData));

    alert("Volunteer details saved successfully!");
}

// Fetch and Display Available Volunteer Requests (Dummy Data)
function loadVolunteerRequests() {
    let volunteerRequests = [
        { orgName: "Green Earth NGO", role: "Tree Plantation", date: "April 10, 2025" },
        { orgName: "Food Drive", role: "Meal Distribution", date: "April 15, 2025" }
    ];

    let requestList = document.getElementById("volunteerRequestsList");
    requestList.innerHTML = "";

    volunteerRequests.forEach(request => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${request.orgName}</strong> - ${request.role} on ${request.date}`;
        requestList.appendChild(listItem);
    });
}

// Load volunteer requests on page load
window.onload = loadVolunteerRequests;
// Show Volunteer Form when "Add Volunteer" is clicked
function showAddVolunteerForm() {
    document.getElementById("addVolunteerForm").style.display = "block";
}

// Save Volunteer Details
function saveVolunteer() {
    let volName = document.getElementById("volName").value;
    let volAge = document.getElementById("volAge").value;
    let volContact = document.getElementById("volContact").value;
    let volSkills = document.getElementById("volSkills").value;
    let volDescription = document.getElementById("volDescription").value;

    // Validate fields
    if (!volName || !volAge || !volContact || !volSkills) {
        alert("Please fill in all required fields.");
        return;
    }

    // Validate mobile number (10 digits)
    let mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(volContact)) {
        alert("Invalid mobile number. Please enter a valid 10-digit number.");
        return;
    }

    // Save details to localStorage
    let volunteerData = {
        name: volName,
        age: volAge,
        contact: volContact,
        skills: volSkills,
        description: volDescription
    };
    localStorage.setItem("volunteerProfile", JSON.stringify(volunteerData));

    // Show saved profile
    displayVolunteerProfile();
}

// Display Volunteer Profile after saving
function displayVolunteerProfile() {
    let savedData = localStorage.getItem("volunteerProfile");
    if (savedData) {
        let volunteer = JSON.parse(savedData);

        document.getElementById("profileName").textContent = volunteer.name;
        document.getElementById("profileAge").textContent = volunteer.age;
        document.getElementById("profileContact").textContent = volunteer.contact;
        document.getElementById("profileSkills").textContent = volunteer.skills;
        document.getElementById("profileDescription").textContent = volunteer.description;

        document.getElementById("volunteerProfile").style.display = "block";
        document.getElementById("addVolunteerForm").style.display = "none"; // Hide form after saving
    }
}

// Auto-load saved profile when page loads
window.onload = function () {
    displayVolunteerProfile();
};
// Show Organization Details Form when "Add Organization" button is clicked
function showAddOrganizationForm() {
    document.getElementById("addOrgBtn").style.display = "none"; // Hide "Add Organization" button
    document.getElementById("addOrganizationForm").style.display = "block"; // Show the form
}

// Save Organization Details
function saveOrganization() {
    let orgName = document.getElementById("orgName").value;
    let orgType = document.getElementById("orgType").value;
    let orgAddress = document.getElementById("orgAddress").value;
    let orgContact = document.getElementById("orgContact").value;
    let orgDescription = document.getElementById("orgDescription").value;

    if (!orgName || !orgType || !orgAddress || !orgContact || !orgDescription) {
        alert("Please fill in all fields.");
        return;
    }

    let regex = /^[0-9]{10}$/;
    if (!regex.test(orgContact)) {
        alert("Invalid mobile number. Please enter a valid 10-digit mobile number.");
        return;
    }

    let organizationData = {
        name: orgName,
        type: orgType,
        address: orgAddress,
        contact: orgContact,
        description: orgDescription
    };

    localStorage.setItem("organizationDetails", JSON.stringify(organizationData));

    alert("Organization details saved successfully!");

    // Hide form and show "Post Job Vacancy" button
    document.getElementById("addOrganizationForm").style.display = "none";
    document.getElementById("postJobSection").style.display = "block";
}

// Redirect to Job Vacancy Posting Page
function goToJobVacancyPage() {
    window.location.href = "job-vacancy.html";
}
// Function to Save Job Vacancy
// Function to Save Job Vacancy
function saveJobVacancy() {
    let jobTitle = document.getElementById("jobTitle").value;
    let jobDescription = document.getElementById("jobDescription").value;
    let volunteersNeeded = document.getElementById("volunteersNeeded").value;

    if (!jobTitle || !jobDescription || !volunteersNeeded) {
        alert("Please fill in all fields.");
        return;
    }

    let jobData = {
        title: jobTitle,
        description: jobDescription,
        needed: volunteersNeeded
    };

    localStorage.setItem("jobVacancy", JSON.stringify(jobData));

    alert("Job vacancy posted successfully!");

    // Show the saved job details
    document.getElementById("savedJobTitle").innerText = jobTitle;
    document.getElementById("savedJobDescription").innerText = jobDescription;
    document.getElementById("savedVolunteersNeeded").innerText = volunteersNeeded;
    document.getElementById("savedJobSection").style.display = "block";

    // Show Volunteer Approval Section
    displayVolunteerProfiles();
}

// Function to Show Volunteer Profiles for Approval
function displayVolunteerProfiles() {
    let volunteerApprovalSection = document.getElementById("volunteerApprovalSection");
    let volunteerListDiv = document.getElementById("volunteerList");

    // Get stored volunteers from localStorage
    let storedVolunteers = JSON.parse(localStorage.getItem("volunteerProfiles")) || [];

    if (storedVolunteers.length === 0) {
        volunteerListDiv.innerHTML = "<p>No volunteers available for approval.</p>";
    } else {
        volunteerListDiv.innerHTML = "";
        storedVolunteers.forEach((volunteer, index) => {
            let volunteerDiv = document.createElement("div");
            volunteerDiv.innerHTML = `
                <p><strong>Name:</strong> ${volunteer.name}</p>
                <p><strong>Skills:</strong> ${volunteer.skills}</p>
                <p><strong>Contact:</strong> ${volunteer.contact}</p>
                <button onclick="approveVolunteer(${index})">Approve</button>
                <hr>
            `;
            volunteerListDiv.appendChild(volunteerDiv);
        });
    }

    volunteerApprovalSection.style.display = "block";
}

// Function to Approve Volunteer
function approveVolunteer(index) {
    let storedVolunteers = JSON.parse(localStorage.getItem("volunteerProfiles")) || [];
    
    if (storedVolunteers[index]) {
        let approvedVolunteers = JSON.parse(localStorage.getItem("approvedVolunteers")) || [];
        approvedVolunteers.push(storedVolunteers[index]);
        localStorage.setItem("approvedVolunteers", JSON.stringify(approvedVolunteers));

        // Remove from pending list
        storedVolunteers.splice(index, 1);
        localStorage.setItem("volunteerProfiles", JSON.stringify(storedVolunteers));

        alert("Volunteer approved successfully!");
        displayVolunteerProfiles(); // Refresh list
    }
}

// Function to Go Back to Organization Dashboard
function goBack() {
    window.location.href = "organization-dashboard.html";
}
// Show Job Post Form
function showPostJobForm() {
    document.getElementById("postJobForm").style.display = "block";
}

// Function to Save Job Vacancy
function saveJobVacancy() {
    let jobTitle = document.getElementById("jobTitle").value;
    let jobDescription = document.getElementById("jobDescription").value;
    let volunteersNeeded = document.getElementById("volunteersNeeded").value;

    if (!jobTitle || !jobDescription || !volunteersNeeded) {
        alert("Please fill in all fields.");
        return;
    }

    let jobData = {
        title: jobTitle,
        description: jobDescription,
        needed: volunteersNeeded
    };

    // Retrieve existing jobs from localStorage
    let existingJobs = JSON.parse(localStorage.getItem("jobVacancies")) || [];
    existingJobs.push(jobData);

    localStorage.setItem("jobVacancies", JSON.stringify(existingJobs));
    alert("Job posted successfully!");

    // Hide the form after saving
    document.getElementById("postJobForm").style.display = "none";

    // Reset form fields
    document.getElementById("jobTitle").value = "";
    document.getElementById("jobDescription").value = "";
    document.getElementById("volunteersNeeded").value = "";
}
// Show the volunteer form
function showVolunteerForm() {
    document.getElementById("volunteerForm").style.display = "block";
}

// Save volunteer profile
function saveVolunteerProfile() {
    let name = document.getElementById("volunteerName").value;
    let skills = document.getElementById("volunteerSkills").value;
    let contact = document.getElementById("volunteerContact").value;

    if (!name || !skills || !contact) {
        alert("Please fill in all fields.");
        return;
    }

    let volunteerData = {
        name: name,
        skills: skills,
        contact: contact
    };

    // Save volunteer details to localStorage
    localStorage.setItem("volunteerProfile", JSON.stringify(volunteerData));
    alert("Profile saved successfully!");

    // Display the saved profile
    showVolunteerProfile();
}

// Show the saved volunteer profile
function showVolunteerProfile() {
    let storedProfile = JSON.parse(localStorage.getItem("volunteerProfile"));

    if (storedProfile) {
        document.getElementById("profileName").innerText = storedProfile.name;
        document.getElementById("profileSkills").innerText = storedProfile.skills;
        document.getElementById("profileContact").innerText = storedProfile.contact;
        
        document.getElementById("volunteerProfileSection").style.display = "block";
        document.getElementById("volunteerForm").style.display = "none"; // Hide form after saving
        
        // Show available job vacancies
        showJobVacancies();
    }
}

// Show job vacancies from localStorage
function showJobVacancies() {
    let jobVacancies = JSON.parse(localStorage.getItem("jobVacancies")) || [];

    if (jobVacancies.length > 0) {
        let jobList = document.getElementById("jobList");
        jobList.innerHTML = ""; // Clear previous list

        jobVacancies.forEach((job, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${job.title}</strong>: ${job.description} 
                <br><strong>Volunteers Needed:</strong> ${job.needed}`;
            jobList.appendChild(listItem);
        });

        document.getElementById("jobVacanciesSection").style.display = "block"; // Show the section
    }
}

// Load profile and job vacancies on page load
document.addEventListener("DOMContentLoaded", function () {
    showVolunteerProfile();
});
// Show the volunteer form
function showVolunteerForm() {
    document.getElementById("volunteerForm").style.display = "block";
}

// Save volunteer profile
function saveVolunteerProfile() {
    let name = document.getElementById("volunteerName").value;
    let skills = document.getElementById("volunteerSkills").value;
    let contact = document.getElementById("volunteerContact").value;

    if (!name || !skills || !contact) {
        alert("Please fill in all fields.");
        return;
    }

    let volunteerData = {
        name: name,
        skills: skills,
        contact: contact
    };

    // Save volunteer details to localStorage
    localStorage.setItem("volunteerProfile", JSON.stringify(volunteerData));
    alert("Profile saved successfully!");

    // Display the saved profile
    showVolunteerProfile();
}

// Show the saved volunteer profile
function showVolunteerProfile() {
    let storedProfile = JSON.parse(localStorage.getItem("volunteerProfile"));

    if (storedProfile) {
        document.getElementById("profileName").innerText = storedProfile.name;
        document.getElementById("profileSkills").innerText = storedProfile.skills;
        document.getElementById("profileContact").innerText = storedProfile.contact;
        
        document.getElementById("volunteerProfileSection").style.display = "block";
        document.getElementById("volunteerForm").style.display = "none"; // Hide form after saving
        
        // Show available job vacancies
        showJobVacancies();
    }
}

// Show job vacancies from localStorage
function showJobVacancies() {
    let jobVacancies = JSON.parse(localStorage.getItem("jobVacancies")) || [];

    if (jobVacancies.length > 0) {
        let jobList = document.getElementById("jobList");
        jobList.innerHTML = ""; // Clear previous list

        jobVacancies.forEach((job, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${job.title}</strong>: ${job.description} 
                <br><strong>Volunteers Needed:</strong> ${job.needed} 
                <br><button onclick="requestJob(${index})">Request Job</button>`;
            jobList.appendChild(listItem);
        });

        document.getElementById("jobVacanciesSection").style.display = "block"; // Show the section
    }
}

// Function to handle job request
function requestJob(jobIndex) {
    let jobVacancies = JSON.parse(localStorage.getItem("jobVacancies")) || [];
    let volunteerProfile = JSON.parse(localStorage.getItem("volunteerProfile"));

    if (!volunteerProfile) {
        alert("Please save your volunteer profile before requesting a job.");
        return;
    }

    if (jobVacancies[jobIndex]) {
        let requestedJob = jobVacancies[jobIndex];

        let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
        appliedJobs.push({
            jobTitle: requestedJob.title,
            volunteerName: volunteerProfile.name,
            contact: volunteerProfile.contact
        });

        localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

        alert(`You have requested the job: ${requestedJob.title}. The organization will review your application.`);
    }
}

// Load profile and job vacancies on page load
document.addEventListener("DOMContentLoaded", function () {
    showVolunteerProfile();
});
