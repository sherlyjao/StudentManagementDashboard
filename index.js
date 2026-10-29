import { getStudentsAPI, addStudentsAPI } from "./api.js";

//Display dummy array
console.log(getStudentsAPI());

//Add new student
const newStudent = addStudentsAPI({
  firstName: "Dowew",
  lastName: "Amancio",
  email: "dowew.amancio@example.com",
});

//Display updated list
console.log(getStudentsAPI());
