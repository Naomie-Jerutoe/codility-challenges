function solution(A, K) {
  const arrLength = A.length;
  const rotations = K % arrLength;

  for (let i = 0; i < rotations; i++) {
    const last = A[arrLength - 1];
    for (let j = arrLength - 1; j > 0; j--) {
      A[j] = A[j - 1];
    }
    A[0] = last;
  }
  return A;
}
