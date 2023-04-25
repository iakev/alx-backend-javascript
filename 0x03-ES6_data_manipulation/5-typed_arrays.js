export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const view = new DataView(buffer);
  try {
    view.setInt8(position, value);
  } catch (error) {
    throw new RangeError('Position outside range');
  }

  return view;
}
