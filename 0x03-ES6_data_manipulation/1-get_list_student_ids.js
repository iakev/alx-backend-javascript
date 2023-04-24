export default function getListStudentIds(studentsArray) {
  if (Array.isArray(studentsArray)) {
    return studentsArray.map((element) => element.id);
  }
  return [];
}
