export default function getStudentIdsSum(array) {
  return array.reduce((num, student) => num + student.id, 0);
}
