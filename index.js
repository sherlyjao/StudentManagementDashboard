import { getStudentsAPI } from "./api.js";
import { renderTable } from "./app.js";

// Exercise 2
let localStudents = [];

const initApp = () => {
  try {
    localStudents = getStudentsAPI();
    renderTable(localStudents);
  } catch (error) {
    alert(`${error.message}`);
  }
};

initApp();
