import { getStudentsAPI } from "./api.js";
import { renderTable } from "./app.js";

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