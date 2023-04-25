export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByLocation = students.filter((student) => student.location === city);
  const studentsGrade = studentsByLocation.map((student) => {
    const associatedGrade = newGrades.filter((newGrade) => student.id === newGrade.studentId);
    const temp = { ...student };
    if (associatedGrade.length !== 0) {
      temp.grade = associatedGrade[0].grade;
    } else {
      temp.grade = 'N/A';
    }
    return temp;
  });
  return studentsGrade;
}
