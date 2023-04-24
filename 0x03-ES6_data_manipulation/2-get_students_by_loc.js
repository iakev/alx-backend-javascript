export default function getStudentsByLocation(students, location) {
  const studentsLocation = students.filter((student) => student.location === location);
  return studentsLocation;
}
