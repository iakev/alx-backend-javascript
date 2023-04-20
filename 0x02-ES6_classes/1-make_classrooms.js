import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const classRooms = [];

  for (const size of sizes) {
    classRooms.push(new ClassRoom(size));
  }
  return classRooms;
}
