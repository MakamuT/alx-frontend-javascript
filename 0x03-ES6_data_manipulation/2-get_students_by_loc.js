export default function getStudentsByLocation(array, city) {
  return array.filter((loca) => loca.location === city);
}
