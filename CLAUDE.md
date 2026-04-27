# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**SoEasy** — 한국에서 디지털 노마드로 살고 싶은 사람들을 위한 도시 정보 및 평가 플랫폼.
사용자들이 도시별 생활 조건(인터넷 속도, 카페·코워킹 환경, 물가, 교통 등)을 카드 형태로 탐색하고 평가할 수 있다.

## 기술 스택 (예정)

- **Backend**: Java 21, Spring Boot 3.x, JPA + QueryDSL, MySQL, Redis
- **Frontend**: (미결정 — 결정 시 이 파일 업데이트)
- **Infra**: Docker, (CI/CD 미결정)

## 빌드 & 실행

> 프로젝트 초기화 후 아래 명령어가 유효해집니다.

```bash
# 백엔드 빌드
./gradlew build

# 컴파일만 확인
./gradlew compileJava

# 테스트 전체 실행
./gradlew test

# 단일 테스트 클래스 실행
./gradlew test --tests "com.soeasy.{패키지}.{클래스명}"

# 애플리케이션 실행
./gradlew bootRun
```

## 아키텍처 요약

글로벌 CLAUDE.md의 Spring Boot 컨벤션을 그대로 따른다.
패키지 구조: `controller / service / repository / entity / dto / exception / config`

핵심 도메인:
- **City** — 도시 기본 정보 (이름, 지역, 대표 이미지)
- **CityScore** — 항목별 점수 (인터넷, 카페, 물가, 교통, 안전 등)
- **Review** — 사용자 작성 후기
- **User** — 인증 사용자 (소셜 로그인 예정)

## DB 마이그레이션

Flyway 사용. 파일 위치: `src/main/resources/db/migration/`
파일명 규칙: `V{숫자}__{설명}.sql` (기존 파일 절대 수정 금지)

## 주요 API 경로 패턴

```
GET  /api/cities          # 도시 목록 (필터·정렬 지원)
GET  /api/cities/{id}     # 도시 상세
POST /api/cities/{id}/reviews   # 리뷰 등록
GET  /api/cities/{id}/scores    # 항목별 평균 점수
```
