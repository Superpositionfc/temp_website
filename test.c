double[] Merge(int A[], int m, int B[], int n, int c[mtn]) {
  int c[mtn];
  int ai, bi, ci;
  ai = 0
  bi = 0
  ci = 0
  while(ai< m && bi<n) {
    if(A[ai] <= B[bi]) {
      C[ci] = A[ai];
      ai++; ci++;
    } else {
      c[ci] = b[bi];
      bi++; ci++;
    }
  }
}
