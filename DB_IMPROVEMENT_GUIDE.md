# 시술 DB 개선 가이드

## 현재 DB 구조 분석

현재 `db_extended.js`에는 다음 필드들이 있습니다:
- `id`, `name`, `nameEn`, `brand`
- `category`, `subcategory`
- `mechanism`
- `review` (summary, likes, dislikes, tips, overall)
- `effects` (primary, secondary, notFor, onsetTime, duration)
- `procedure` (duration, anesthesia, sessions, interval)
- `recovery` (painLevel, painDescription, downtime, commonSideEffects)
- `suitability` (idealAge, bestFor, notRecommended, skinType)
- `pros`, `cons`
- `safety`
- `pricing`
- `comparison`
- `tags`

---

## 🔴 추가 권장 필드 (알고리즘 정확도 향상)

### 1. `ageRange` - 권장 연령대 (구체화)
```javascript
ageRange: {
  minimum: 30,           // 최소 권장 나이
  maximum: 60,           // 최대 권장 나이
  optimal: "40대",       // 최적 연령대
  youngWarning: "20대에게는 과한 시술",  // 젊은층 경고
  seniorNote: "60대 이상은 회복기간 고려"  // 고령층 참고
}
```

**현재 문제**: `suitability.idealAge`가 "20대~60대"처럼 범위가 너무 넓어서 알고리즘이 정확히 필터링하기 어려움

**개선 효과**: 20대 후반에게 풀페이스리프팅 추천하는 문제 해결

---

### 2. `concerns` - 고민 매핑 (직접 연결)
```javascript
concerns: {
  primary: ["탄력저하", "처진피부", "주름"],   // 주요 타겟 고민
  secondary: ["모공", "피부결"],               // 부가 효과
  notEffective: ["기미", "색소침착", "여드름"]  // 효과 없는 고민
}
```

**현재 문제**: `effects.primary`가 "턱선 리프팅" 같은 시술 용어로 되어있어서 사용자 고민("처진피부")과 매핑이 어려움

**개선 효과**: `concernToTreatments` 매핑 자동화, 누락 방지

---

### 3. `targetAreas` - 시술 부위 (구체화)
```javascript
targetAreas: {
  primary: ["턱선", "볼", "이중턱"],      // 주요 시술 부위
  optional: ["이마", "눈가"],             // 선택적 부위
  notFor: ["입술", "코"]                  // 부적합 부위
}
```

**현재 문제**: 부위 정보가 분산되어 있거나 누락됨

**개선 효과**: 부위별 시술 추천 정확도 향상

---

### 4. `intensity` - 시술 강도
```javascript
intensity: {
  level: 4,              // 1(약함) ~ 5(강함)
  category: "aggressive", // gentle, moderate, aggressive
  firstTimerOk: false,   // 초보자 적합 여부
  maintenanceOk: true    // 유지 관리용 적합 여부
}
```

**현재 문제**: 시술 강도 정보가 없어서 초보자에게 강한 시술 추천됨

**개선 효과**: 경험 수준에 맞는 추천

---

### 5. `seasonality` - 계절 적합성
```javascript
seasonality: {
  summer: "caution",     // recommended, caution, avoid
  winter: "recommended",
  uvSensitive: true,     // 자외선 민감 여부
  note: "여름철 시술 후 철저한 자외선 차단 필요"
}
```

**현재 문제**: 계절 정보가 알고리즘 코드에만 하드코딩됨

**개선 효과**: DB 기반 계절 추천으로 유지보수 용이

---

### 6. `treatmentType` - 시술 유형 분류
```javascript
treatmentType: {
  method: "device",      // injection, device, topical, surgical
  invasiveness: "non",   // non, minimal, moderate, surgical
  category: "리프팅"     // 리프팅, 주사, 레이저, 스킨케어
}
```

**현재 문제**: `category`만으로는 주사/레이저/리프팅 구분이 불명확

**개선 효과**: 시술 타입 선호도 필터링 정확도 향상

---

### 7. `courseInfo` - 코스 정보 (구체화)
```javascript
courseInfo: {
  sessionsRequired: 1,        // 필요 회차
  sessionInterval: "1년",     // 회차 간격
  totalDuration: "1년",       // 전체 기간
  maintenanceInterval: "1년", // 유지 주기
  isPackage: false,           // 패키지 시술 여부
  perSessionPricing: false    // 회당 가격 여부
}
```

**현재 문제**: `procedure.sessions`가 "3~4회 권장"처럼 텍스트여서 계산 어려움

**개선 효과**: 총 비용 계산, 정기 관리 추천 정확도 향상

---

### 8. `effectTiming` - 효과 발현 시점
```javascript
effectTiming: {
  onset: "immediate",    // immediate(즉시), gradual(점진), delayed(지연)
  onsetDays: 0,          // 효과 시작까지 일수
  peakWeeks: 2,          // 최대 효과까지 주수
  durationMonths: 12     // 유지 기간 (월)
}
```

**현재 문제**: `effects.onsetTime`이 "1~2개월 후 서서히"처럼 텍스트

**개선 효과**: 급한 이벤트 vs 장기 관리 추천 구분

---

### 9. `synergy` - 시너지 정보 (구조화)
```javascript
synergy: {
  bestPartners: ["써마지", "보톡스"],
  synergyEffect: "울쎄라로 깊은층 + 써마지로 진피층 = 입체 리프팅",
  boostPercent: 25,           // 시너지 효과 증가율
  avoid: ["프락셀"],          // 병행 피해야 할 시술
  intervalDays: 14            // 병행 시 권장 간격
}
```

**현재 문제**: `comparison.bestWith`만 있고 시너지 이유/효과가 없음

**개선 효과**: 시너지 기반 조합 추천 정확도 향상

---

### 10. `priceRange` - 가격 정보 (구조화)
```javascript
priceRange: {
  min: 100,              // 최저가 (만원)
  max: 300,              // 최고가 (만원)
  average: 150,          // 평균가 (만원)
  perSession: false,     // 회당 가격 여부
  unit: "전체"           // 전체, 부위당, cc당
}
```

**현재 문제**: `pricing.range`가 "100~300만원"처럼 텍스트여서 파싱 필요

**개선 효과**: 예산 기반 필터링 정확도 향상, 총 비용 계산 가능

---

## 📋 적용 우선순위

| 순위 | 필드 | 난이도 | 효과 |
|------|------|--------|------|
| 1 | `ageRange` | 낮음 | 매우 높음 |
| 2 | `concerns` | 낮음 | 매우 높음 |
| 3 | `priceRange` | 낮음 | 높음 |
| 4 | `intensity` | 낮음 | 높음 |
| 5 | `targetAreas` | 중간 | 높음 |
| 6 | `effectTiming` | 낮음 | 중간 |
| 7 | `courseInfo` | 중간 | 중간 |
| 8 | `synergy` | 중간 | 중간 |
| 9 | `seasonality` | 낮음 | 낮음 |
| 10 | `treatmentType` | 낮음 | 낮음 |

---

## 예시: 울쎄라 개선 전/후

### 개선 전
```javascript
{
  name: "울쎄라",
  category: "리프팅/타이트닝",
  suitability: {
    idealAge: "30대 후반~50대",  // 텍스트
    bestFor: ["경미~중등도 피부 처짐", ...]
  },
  pricing: { range: "100~300만원" },  // 텍스트
  effects: {
    primary: ["턱선 리프팅", ...]  // 시술 용어
  }
}
```

### 개선 후
```javascript
{
  name: "울쎄라",
  category: "리프팅/타이트닝",
  
  // NEW: 연령대 구조화
  ageRange: {
    minimum: 35,
    maximum: 60,
    optimal: "40대",
    youngWarning: "30대 초반 이하에게는 과한 시술",
    seniorNote: null
  },
  
  // NEW: 고민 직접 매핑
  concerns: {
    primary: ["처진피부", "탄력저하", "이중턱"],
    secondary: ["주름", "볼륨손실"],
    notEffective: ["기미잡티", "여드름", "모공", "색소침착"]
  },
  
  // NEW: 가격 구조화
  priceRange: {
    min: 100,
    max: 300,
    average: 150,
    perSession: false,
    unit: "전체"
  },
  
  // NEW: 강도
  intensity: {
    level: 5,
    category: "aggressive",
    firstTimerOk: false,
    maintenanceOk: true
  },
  
  // NEW: 부위
  targetAreas: {
    primary: ["턱선", "볼", "이중턱"],
    optional: ["이마", "목"],
    notFor: ["눈밑", "입술"]
  },
  
  // 기존 필드 유지...
  suitability: { ... },
  pricing: { ... },
  effects: { ... }
}
```

---

## 구현 계획

1. **1단계**: 상위 5개 필드 추가 (ageRange, concerns, priceRange, intensity, targetAreas)
2. **2단계**: 알고리즘에서 새 필드 우선 사용하도록 수정
3. **3단계**: 나머지 필드 점진적 추가

이렇게 하면 알고리즘 코드의 하드코딩된 매핑을 줄이고, DB만 수정해도 추천 결과가 개선됩니다.
