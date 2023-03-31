---
emoji: ⚙️
title: 분할-정복3 (Divide and Conquer) 행렬곱-쉬트라센
date: '2023-03-29 00:00:00'
author: 최민석
tags: 분할정복, 행렬곱셈, 쉬트라센
categories: Algorithms
---
### 행렬곱

- 행렬 곱셈 - 재귀알고리즘

```java
public static int[][] mulMatrix_basic(int a[][], int b[][]){
	  int row = a.length;
	  int col = b[0].length;
	  int r = a[0].length; // = b.length
	  int[][] output = new int[row][col];
	  for(int i = 0 ; i < row ; i++){
	      for(int j = 0 ; j < col ; j++){
	          for(int k = 0 ; k < r ; k++){
	              output[i][j] += a[i][k]*b[k][j];
	          }
	      }
	  }
	
	  return output;
};
```

- 쉬트라센-행렬곱셈 알고리즘


> 💡 쉬트라센 알고리즘은 입력행렬의 크기가 2의 거듭제곱이어야 하며, 정사각행렬이어야 한다.

> 💡 행렬 곱셈보다 행렬의 합을 구하는 것이 더 빠르다는 데서 기인한 알고리즘이다. 입력행렬의 크기가 매우 큰 경우에 한해 더 효율적이다.

```java
public static int[][] mulMatrix_strassen(int a[][], int b[][]) {
    int row = a.length;
    int col = b[0].length;
    int r = a[0].length; // = b.length
    int[][] output = new int[row][col];

    if (row == 1 && col == 1) {
        output[0][0] = a[0][0] * b[0][0];
        return output;
    }

    // Divide the matrices into four sub-matrices
    int newSize = row / 2;
    int[][] a11 = new int[newSize][newSize];
    int[][] a12 = new int[newSize][newSize];
    int[][] a21 = new int[newSize][newSize];
    int[][] a22 = new int[newSize][newSize];
    int[][] b11 = new int[newSize][newSize];
    int[][] b12 = new int[newSize][newSize];
    int[][] b21 = new int[newSize][newSize];
    int[][] b22 = new int[newSize][newSize];

    for (int i = 0; i < newSize; i++) {
        for (int j = 0; j < newSize; j++) {
            a11[i][j] = a[i][j];
            a12[i][j] = a[i][j + newSize];
            a21[i][j] = a[i + newSize][j];
            a22[i][j] = a[i + newSize][j + newSize];
            b11[i][j] = b[i][j];
            b12[i][j] = b[i][j + newSize];
            b21[i][j] = b[i + newSize][j];
            b22[i][j] = b[i + newSize][j + newSize];
        }
    }

    // Recursively multiply the sub-matrices
    int[][] m1 = mulMatrix_strassen(add(a11, a22), add(b11, b22));
    int[][] m2 = mulMatrix_strassen(add(a21, a22), b11);
    int[][] m3 = mulMatrix_strassen(a11, subtract(b12, b22));
    int[][] m4 = mulMatrix_strassen(a22, subtract(b21, b11));
    int[][] m5 = mulMatrix_strassen(add(a11, a12), b22);
    int[][] m6 = mulMatrix_strassen(subtract(a21, a11), add(b11, b12));
    int[][] m7 = mulMatrix_strassen(subtract(a12, a22), add(b21, b22));

    // Combine the sub-matrices to get the final result
    int[][] c11 = subtract(add(add(m1, m4), m7), m5);
    int[][] c12 = add(m3, m5);
    int[][] c21 = add(m2, m4);
    int[][] c22 = subtract(add(add(m1, m3), m6), m2);

    for (int i = 0; i < newSize; i++) {
        for (int j = 0; j < newSize; j++) {
            output[i][j] = c11[i][j];
            output[i][j + newSize] = c12[i][j];
            output[i + newSize][j] = c21[i][j];
            output[i + newSize][j + newSize] = c22[i][j];
        }
    }

    return output;
}
//이하 행렬의 간단 덧셈,뺄셈 함수
public static int[][] add(int a[][], int b[][]){
    int n = a.length;
    int[][] output = new int[n][n];
    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < n ; j++){
            output[i][j] = a[i][j] + b[i][j];
        }
    }
    return output;
}

public static int[][] subtract(int a[][], int b[][]){
    int n = a.length;
    int[][] output = new int[n][n];
    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < n ; j++){
            output[i][j] = a[i][j] - b[i][j];
        }
    }
    return output;
}
```

### 점화식

T(n) = 7×7×⋯×7 (7 times)

=7^k

=7^{logn}

=n^{log7}

≈n^{2.8}

### 분할 정복을 피해야 하는 경우

1. 크기 n인 문제가 거의  n에 가까운 두 개 이상의 문제로 분할된다.
- 지수 시간 복잡도 알고리즘이 나온다.
- 대표적 사례: 피보나치 수열을 분할정복으로 해결하는 경우
- F(n) = F(n-1)+F(n-2)

2. 크기n인 문제가 n/c 크기의 n개에 가까운 문제로 분할된다.
- 시간 복잡도가 n^{Θ(logn)}의 알고리즘이 나온다.
- F(n) = (n-1)F(n/c)+d

### 분할 정복을 피할 이유가 없는 경우

1. 입력 크기가 작은 경우
- 분할정복은 직관적으로 이해하기 쉽다.
- 입력 크기가 작은 경우까지 분할정복을 피할 이유는 없다.
2. 분할정복의 복잡도가 (이론적으로) 가장 효율적인 경우
- 다른 기법(동적계획, 분기한정 등)으로도 지수 복잡도가 나오는 경우
- 사례 : 하노이 탑(H_{n}=2H_{n-1}+1=2^{n}-1)
```toc
```
