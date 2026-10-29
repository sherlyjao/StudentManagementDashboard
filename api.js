const idTime = Date.now();

const mockStudentDb = [];

export function getStudentsAPI() {
    return mockStudentDb;
};

export function addStudentsAPI( newStudentData ) {
    const savedStudent = {
        id: idTime,
        ...newStudentData
    };

    mockStudentDb.push(savedStudent);
    return savedStudent;
};