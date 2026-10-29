import { addStudentsAPI, getStudentsAPI } from "./api.js";

let localStudents = [];
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');

// Regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email) => {
    return emailPattern.test(email);
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
    const studentData = { firstName, lastName, email };

    addStudentsAPI(studentData);
    localStudents = getStudentsAPI();
    renderTable(localStudents);
    studentForm.reset();

  } catch (error) {
    alert(`Failed to add student: ${error.message}`);
  }
});