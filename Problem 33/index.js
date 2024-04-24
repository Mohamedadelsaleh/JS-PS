class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

const newKata = Kata.getVolumeOfCuboid(20, 1, 2);
console.log(newKata);
