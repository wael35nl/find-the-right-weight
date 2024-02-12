export const shuffleArray = (array: number[], start: boolean, selected: string, confirmSelect: string) => {
    if ((!start && selected === '0') || (start && confirmSelect === '0')) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i) + 1;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
    return array;
}