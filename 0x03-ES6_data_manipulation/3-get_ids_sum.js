export default function getStudentIdsSum(students) {
  const studentsIds = students.map((student) => student.id);
  const ids = studentsIds.reduce((accumulator, currentValue) => accumulator + currentValue);
  return ids;
}
