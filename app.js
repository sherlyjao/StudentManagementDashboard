import { addStudentsAPI, getStudentsAPI } from "./api.js";

let localStudents = [];
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');

// Regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Email validation check
const isValidEmail = (email) => {
    return emailPattern.test(email);
};

// Name sentence Case convertion
const toSentenceCase = (string) => {
    if (!string) return;

    return string
        .trim()
        .split(/\s+/)
        .map(
            str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        )
        .join(' ');
};

export const renderTable = (dataArray) => {
    studentTableBody.innerHTML = '';

    if (!Array.isArray(dataArray) || dataArray.length == 0) {

        studentTableBody.innerHTML = `
            <tr>
                <td colspan="4" class="empty">No student records found.</td>
            </tr>
        `;
        return;
    }

    dataArray.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td id="student_${student.id}">${index + 1}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
        `

        studentTableBody.appendChild(row);
    });
};

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!firstName || !lastName || !email) {
    alert('All input fields must be filled out.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  try {
    //create array to append
    const studentData = { 
        firstName: toSentenceCase(firstName), 
        lastName: toSentenceCase(lastName),
        email: toSentenceCase(email) };
        
    addStudentsAPI(studentData);

    //display appended
    localStudents = getStudentsAPI();
    renderTable(localStudents);

    //rest form after every submit
    studentForm.reset();

  } catch (error) {
    alert(`Failed to add student: ${error.message}`);
  }
});