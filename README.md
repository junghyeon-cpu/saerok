# 새록 (Saerok) — 세계 조류 도감

전 세계 조류 **14,641종**을 담은 웹 도감입니다. 설치 없이 브라우저에서 바로 쓰고,
휴대폰에서는 홈 화면에 추가해 앱처럼 쓸 수 있습니다(PWA).

## 담긴 것

| 항목 | 수 | 출처 |
|---|---|---|
| 종 | 14,641 (현생 12,575 · 멸종 2,066) | GBIF Backbone Taxonomy |
| 분류 | 42목 · 364과 · 3,402속 | GBIF Backbone Taxonomy |
| 종 사진 | 11,561종 | Wikipedia / Wikimedia Commons |
| 돌려보는 3D 모델 | 206종 | Sketchfab (CC), Smithsonian (CC0) |
| 박물관 표본 스캔 | 628종 | MorphoSource |

## 기능

- 이름·학명 검색 (한국어명 / 영어명 / 학명)
- 분류 탐색: **현생/멸종 → 목 → 과 → 속 → 종**
- 종 상세: 사진, 위키백과 설명, 3D 뷰어, 박물관 표본 링크
- 다크모드, 오프라인 지원(PWA)

## 출처와 라이선스

- **분류·종 목록**: [GBIF Backbone Taxonomy](https://doi.org/10.15468/39omei) (CC BY 4.0)
- **사진·설명**: Wikipedia / Wikimedia Commons (각 문서의 라이선스에 따름)
- **한국어 이름**: Wikidata
- **3D 모델**: [Sketchfab](https://sketchfab.com) (CC0 / CC BY / CC BY-SA, 모델별 제작자 표기),
  [Smithsonian Open Access](https://www.si.edu/openaccess) (CC0)
- **표본 스캔**: [MorphoSource](https://www.morphosource.org) (원본 페이지로 링크, 재배포하지 않음)

앱 안 "출처" 메뉴에 각 항목의 상세 출처와 한계가 적혀 있습니다.

## 로컬에서 실행

정적 파일이라 웹서버만 있으면 됩니다.

```bash
python -m http.server 8737
```

브라우저에서 `http://localhost:8737` 을 엽니다.
