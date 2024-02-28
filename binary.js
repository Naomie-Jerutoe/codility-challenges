function solution(N) {
  const binaryRep = N.toString(2);
  const len = binaryRep.length;

  let maxGap = 0;
  let currentGap = 0;
  let countingGap = false;

  for (let i = 0; i < len; i++) {
    if (binaryRep[i] === "1") {
      if (countingGap) {
        maxGap = Math.max(maxGap, currentGap);
        currentGap = 0;
      } else {
        countingGap = true;
      }
    } else if (countingGap) {
      currentGap++;
    }
  }
  return maxGap;
}
