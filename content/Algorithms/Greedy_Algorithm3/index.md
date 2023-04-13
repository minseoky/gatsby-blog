---
emoji: ⚙️
title: 탐욕 알고리즘3
date: '2023-04-12 00:00:00'
author: 최민석
tags: Greedy Algorithms, Huffman
categories: Algorithms
---
## 마감시간 있는 스케줄 짜기

- 마감시간이 있는 스케줄 짜기에서는 모든 작업들이 끝나는데 걸리는 시간이 같고 마감시간과 보상이 할당되어 있다.
- 작업을 마감시간 전이나 마감시간에마친다면 보상을 받으며 목표는 마감시간안에 작업을 끝내서 최대의 보상을 얻는 것이다.
- 작업, 마감시간 보상이 다음과 같다고 가정하자

| Job | Deadline | Profit |
| --- | --- | --- |
| 1 | 2 | 30 |
| 2 | 1 | 35 |
| 3 | 2 | 25 |
| 4 | 1 | 40 |

### 가능한 결과들

| Schedule | Profit |
| --- | --- |
| [1,3] | 30+25 |
| [2,1] | 35+30 |
| [2,3] | 35+25 |
| [3,1] | 25+30 |
| [4,1] | 40+30 |
| [4,3] | 40+25 |
- 불가능한 경우는 나타내지 않음

- 마감시간안에 스케쥴링하는 알고리즘을 살펴보기 전에 몇가지를 정의
  - **적절한 순서(feasible sequence)** : 작업순서상의 모든 작업들을 마감시간안에 끝내는 경우
  - **적절한 집합(feasible set)** : 작업의 집합에서 적당한 순서가 존재하면 그 집합은 적절한 집합이다
  - **최적순서(optimal sequence)** : 총 보상을 최대로 하는 적절한 순서
  - **최적 집합(optimal set)** : 최적 순서에 속한 작업의 집합

- 위의 개념들을 알아보기 위해 deadline이 3까지 있고, 7개의 작업이 있는 경우에 대해 살펴보자
- 우선 profit이 큰 순서로 내림차순 정렬을 한다.


>💡 정렬이 되어있어야 최적의 알고리즘 산출 가능(Profit)


| Job | Deadline | Profit |
| --- | --- | --- |
| 1 | 3 | 40 |
| 2 | 1 | 35 |
| 3 | 1 | 30 |
| 4 | 3 | 25 |
| 5 | 1 | 20 |
| 6 | 3 | 15 |
| 7 | 2 | 10 |

마감시간 있는 스케줄 짜기

1. S를 공집합으로 설정한다
2. 순서 [1]이 feasible하므로 S를 {1}로 설정한다.
3. 순서 [2,1]이 feasible하므로 S를 {1,2}로 설정한다
4. [1,2,3]에 대해서는 feasible한 순서가 존재하지 않으므로 3은 기각!
5. 순서 [2,1,4]이 feasible하므로 S를 {1,2,4}로 설정한다.
6. 이후부터는 적절한 순서가 존재하지 않으므로 모두 기각!
- 결론적으로 최종 feasible set는 {1,2,4}인 경우 최대 보상을 얻을 수 있다.

### 마감 시간이 있는 스케쥴 짜기 알고리즘

- 문제 : 각 작업을 마감시간에 마칠 수 있도록 스케쥴을 짠 경우에만 보상을 얻을 수 있을 때 총 보상이 최대가 되도록 스케쥴을 짜라.
- 입력 : 작업의 수 n과 정수 배열 deadline. 여기서 deadline(i)는 i쨰 작업의 마감시간, 배열은 보상이 큰 것 부터 차례로 정렬되어 있다.
- 출력 : 작업의 최적 순서 J

```java
void schedule(int n, const int deadline[], sequence_of_integer &J)
{
	index i;
	sequence_of_integer K;

	J = [1];
	for (i = 2 ; i <= n ; i++){
		K = J에다가 deadline[i]의 값이 작은 것부터 차례로 i를 추가;
		if (K가 적절하면) J = K;
	}
}
```

### 마감 시간 있는 스케쥴 짜기의 최악 시간 복잡도 분석

- 단위 연산:
  1. 작업을 정렬하기 위해서 비교연산이 필요
  2. k와 작업 i가 추가된 J를 같게 놓을 때 비교연산 필요
  3. K가 적절한지 검사하는데 비교연산 필요
- 입력크기 : 작업의 수 n
- 분석
  - 정렬하는데 $Θ(nlogn)$
  - for루프에서 b와 c각각 i - 1번의 비교연산을 수행한다. 따라서
  - $Σ^{n}_{i=2}[(i-1)+i] = n^2-1 ∈Θ(n^2)$
  - $W(n)∈Θ(n^2)$

## Huffman code

Priority queue 사용 최소힙 허프만 알고리즘 구현
```java
import java.util.*;

//노드 구현
class HuffmanNode implements Comparable<HuffmanNode>{
    char key; // 문자
    int value; // 빈도수
    HuffmanNode left;
    HuffmanNode right;

    public HuffmanNode(char key, int value){
        this.key = key;
        this.value = value;
    }

    @Override
    public int compareTo(HuffmanNode o) {
        return this.value - o.value;
    }
}

public class Huffman {
    public static HashMap<Character,String> TransHuffman(String p){
        HashMap<Character,Integer> count = new HashMap<>(); // 'a' : 5

        // 문자 빈도수 계산
        for(char i : p.toCharArray()){
            if(!count.containsKey(i)){
                count.put(i,1);
            }
            else{
                count.replace(i, count.get(i) + 1);
            }
        }

        // 힙 노드 추가
        PriorityQueue<HuffmanNode> huffmanNodes = new PriorityQueue<>();
        for(Character key : count.keySet()){
            huffmanNodes.offer(new HuffmanNode(key, count.get(key)));
        }
        // 허프만 트리 생성
        while(huffmanNodes.size() > 1){ //전체 노드 수가 2개 이상이면 반복 (하나의 tree로 만들것이기 때문)
            HuffmanNode left = huffmanNodes.poll();
            HuffmanNode right = huffmanNodes.poll();
            HuffmanNode parent = new HuffmanNode('\0', left.value+right.value);
            parent.left = left;
            parent.right = right;
            huffmanNodes.offer(parent);
        }

        // 허프만 코드 result에 삽입
        HashMap<Character,String> result = new HashMap<>(); // 'a' : '001'
        if(huffmanNodes.peek().key == '\0'){
            GenerateCode(huffmanNodes.peek(), "", result);
        }
        else{
            result.put(huffmanNodes.peek().key, "0");
        }

        System.out.println(result);
        return result;
    }

    private static void GenerateCode(HuffmanNode node, String code, HashMap<Character,String> codes){ //재귀 호출
        if(node == null){
            return;
        }
        if(node.key != '\0'){
            codes.put(node.key, code);
        }

        GenerateCode(node.right, code + "1", codes);
        GenerateCode(node.left, code + "0", codes);
    }
}
```
```toc
```
