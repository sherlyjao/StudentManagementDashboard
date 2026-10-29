const idTime = Date.now();

const mockStudentDb = [
    {   
        id: idTime + 1,
        firstName: "Leslie",
        lastName: "Andrews",
        email: "leslie.andrews@example.com"
    },
    {
        id: idTime + 2,
        firstName: "Emma",
        lastName: "Baumgarten",
        email: "emma.baumgarten@example.com"
    }
];

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