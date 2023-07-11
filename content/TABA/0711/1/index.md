---
emoji: 🚀
title: 07.11(화)-1 데이터베이스 개요
date: '2023-07-11 00:00:00'
author: 최민석
tags: Database, Relational Algebra, Data Model
categories: DB SQL TABA
---
> ❗️**날짜별로 정리하여 복습하기를 원하기 때문에 내용이 길고 다소 정리되지 않았습니다.**
# 데이터베이스와 SQL실습

## 데이터베이스 개요

### Major Terms

- Data, Database
- Data model, Data modeling
    - E-R model, semantic object model, relational model
- Database management systems (DBMS)
    - SW(system SW)
    - DB2, Oracle, SQl Server, MySQL etc
- Data language: SQL
- Database design
    - tool : E-R Win, Visio, DA#
- Database administrator (DBA)
- Database tuning & monitoring
    - Orange

### DBMS

- Characteristics
    - SW (system SW)
    - Global vendors
        - IBM DB2
        - Oracle
        - Microsoft : SQL Server
        - MySQL → sold to Toracle
        - MariaDB
        - PostgreSQL
        - SAP HANA
    - Korean vendors(30% market shar of Korean market)
        - CUBRID
        - Goldilocks
        - Altibase
        - Tibero


> 💡 NoSQL → Not Only SQL


### 데이터베이스의 정의

- 조직의 모든 응용 프로그램이 공유하기 위해 통합 저장한 운영 데이터 operational data의 집합
    - 응용 : 인사관리, 회계관리, 계정관리, 수강신청, …
    - 공유 : 동시 공유 concurrent sharing
    - 통합 : 모든 데이터 파일을 통합 → 중복 제거(통제된 중복 controlled redundancy)
    - 저장: 디스크에 저장
    - 운영 데이터 : 조직의 운영에 필수적으로 필요한 데이터
- Self-describing collection of data
    - Data와 스키마(metadata)를 모두 보유


### Naming convention

Table 이름 : 대문자

Column 이름 : 첫글자 대문자

### 데이터베이스 예시

| Application                            | Num of Users      | Typical size(rows)  |
|----------------------------------------|-------------------|---------------------|
| Sales contact manager                  | 1                 | 2000                |
| Patient appointment (doctor, dentist)  | 15 ~ 50           | 100000              |
| Customer Relationship Management (CRM) | 500               | 10 million          |
| Enterprise Resource Planning(ERP)      | 5000              | 10 million+         |
| E-commerce site                        | Possibly millions | 1 billion+          |
| Digital dashboard                      | 500               | 100000              |
| Data mining                            | 25                | 100000 ~ millions+  |

- OLTP(On Line Transaction Processing): 항공사, 은행 → 기업의 본업, 수익 창출
    - IBM DB2, Oracle 1979-81
- MES : 제조 공정 자동화
    - Oracle(삼성전자)
- ERP : 인사, 회계 관리, SAP
- CRM : 고객 관리
- DW(data warehouse):현재 + 과거 데이터
    - OLAP(On Line Analytical Processing)
    - Data mining : 연관 분석, 분류, 클러스터링, …

### DB 성능 단위

- DB 처리 단위 : Transaction
- tps : transaction/second
- 10,000 tps, 1,000-100tps, 10-1 tps(추정)
- www.tpc.org

### DBMS의 기능

- 정의 : DB구조(스키마) 정의, 테이블 구조 정의
- 조작 : DB조작,
  검색, 삽입, 삭제, 갱신
  Retrieval, insertion, deletion, update
- 제어 : 회복, 동시성제어, 보안, 무결성

### 정규화 이론

> 💡 하나 또는 두 개의 테이블


하나의 테이블을 두개로 쪼개는 것 : 정규화

- 중복된 데이터를 허용하지 않음
- 무결정 유지
- 정규화에 관한 포스트 [[링크](minseoky/TABA/0711/2)]

### 데이터 언어

- 관계 대수 기반
    - DBMS 내부용
- 관계 해석 기반
    - 튜플 해석식
    - 도메인 해석식
- 관계 매핑 기반?

### SQL 언어 문장

- DDL(Data definition language) : 스키마 (테이블)
    - Create table, alter table, drop table
    - Create view, drop view
    - Create index, drop index
- DML(Data manipulation language)
    - Select from where 검색
    - Insert into 삽입
    - Delete from 삭제
    - Update set 갱신
- DCL(Data control language)
    - 데이터 제어용, 주로 DBA나 응용 프로그래머가 사용
    - 보안, 권한부여 Grant to, revoke from
    - 동시성 제어 lock, unlock
    - 회복 commit, rollback

### 와일드카드

- SQL 92 Standard (SQL Server, Oracle, etc)
    - _ = 한 문자 **(Exact match)**
    - % = 0개 혹은 그 이상의 글자 **(partial match)**
- MS Access (based on MS DOS)
    - ? = 한 문자 **(Exact match)**
    - * = 0개 혹은 그 이상의 글자 **(partial match)**

### 집계함수(Aggregation func)

- COUNT
- SUM
- AVG
- MIN
- MAX

### 쿼리 해석 순서

4.Select  
1.From  
2.[Where]  
3.[Group by [Having]]  
5.[Order by]  

## 관계형 모델과 정규화

### 데이터 모델

- 실세계를 capture 하는 방법(도구)
- 종류
    - 개념적 데이터 모델(conceptual data model)
        - E-R 모델(Entity-Relationship model)

          → 모델링 도구 : ERWin, DA#(EnCore)

        - Semantic network, semantic object model (Kroenke, 5th Ed.)
        - UML
        - SEUL model
    - 논리적 데이터 모델(logical data model)
        - 관계 데이터 모델(logical data model): relation(table)기반, E.F.codd가 제안

          → DB2, Oracle

        - 계층 데이터 모델(hierarchical data model) : tree 기반

          → IMS

        - 네트워크 데이터 모델(Network data model) : graph 기반


> 💡 E-R 모델의 Relationship과 관계 데이터 모델의 Relational은 다른 의미


- 용도
    - 개념 데이터 모델 : DB 개념적 설계 단계에서 아용
    - 논리 데이터 모델 : DB 논리적 설계 단계에서 사용, 이 모델을 구현한 것이 DBMS

### 관계 데이터 모델

- <S, O, C>로 구성
- S : Structure, 구조
    - 릴레이션, 열(속성), 행(튜플)
    - 튜플의 집합, 카티션 프로덕트의 subset, …
- O : Operation, 연산
    - 관계 대수(relational algebra)
        - 집합 연산 : 합집합, 교집합, 차집합, 카티션 프로덕트
        - 순수 연산 : selection, projection, join, division
    - 관계 해석(relation caculus)
        - 튜플 관계 해석
        - 도메인 관계 해석
- C : Constraints, 제약조건
    - 구조적 제약조건 : 개체 무결성, 참조 무결성
    - 의미적 제약조건 : 도메인 무결성


> 💡 관계 데이터 모델에서는 row를 tuple, column을 attribute라 함,  
> R={<1,a>,<2,b>…} 집합(set)으로 표현됨  
> A라는 attribute 가 가질 수 있는 값의 집합을 Domain이라고 함.  
> tuple의 수를 cardinality라고 함.  
> attribute의 수를 degree라고 함


### 관계 대수(Relational Algebra)

- 릴레이션을 처리하기 위한 연산의 집합
    - 릴레이션 : 튜플의 집합
- 기본 연산
    - 일반 집합 연산자
        - 합집합(union, ∪)
        - 교집합(intersect, ∩)
        - 차집합(difference, -)
        - 카티션 프로덕트(cartesian product, ×)
    - 순수 관계 연산자
        - 셀렉트(σ)
        - 프로젝트(π)
        - 조인 : 카티션 프로덕트에서 일부를 추출
            - Thetajoin(⋈) : 조건 만족하는 튜플만 반환
                - Equijoin(조인된 attribute가 둘 다 존재) = Innerjoin
                - Naturaljoin(중복된 attribute 중 하나 제거)
            - Outerjoin(⋈+) : 매칭이 되지 않은 튜플도 모두 그냥 추출함
        - 디비전(÷)
            - ex) A ÷ B → B에 있는 모든 tuple을 수행한 A 추출
- 폐쇄 성질(closure property)
    - 피연산자와 연산 결과가 모두 릴레이션(집합이여야함 : 프로젝션 연산 수행시 중복 제거됨)
    - 중첩(nested)된 수식의 표현이 가능

```toc
```
