export default function getListStudentIds(id) {
  if (!Array.isArray(id)) {
    return [];
  }
  return id.map((student) => student.id);
}
