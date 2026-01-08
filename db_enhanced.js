// TrueKorea 확장 DB v4.0 - Enhanced with AI Recommendation Fields
// 시술 상세 정보 데이터베이스 (개선판)
// 인터넷 리서치 기반 연령대별/고민별 정확한 매핑 추가

const DB_ENHANCED = {
  version: "4.0",
  lastUpdated: "2025-01",
  
  // ===== 새로운 필드 설명 =====
  // ageRange: 권장 연령대 (숫자화)
  // concerns: 고민 직접 매핑
  // priceRange: 가격 숫자화
  // intensity: 시술 강도
  // targetAreas: 시술 부위
  // effectTiming: 효과 발현 시점
  // seasonality: 계절 적합성
  // synergy: 시너지 정보
  // courseInfo: 코스 정보
  // treatmentType: 시술 유형
  
  treatments: [
    // ===== 1. 울쎄라 =====
    {
      id: "ulthera",
      name: "울쎄라",
      nameEn: "Ultherapy",
      brand: "Merz",
      category: "리프팅/타이트닝",
      subcategory: "HIFU",
      
      // === NEW FIELDS ===
      ageRange: {
        minimum: 30,
        maximum: 60,
        optimal: "35~50세",
        youngWarning: "20대에게는 불필요하며 볼패임 위험 있음. 30대 초반도 예방 목적이라면 슈링크로 충분",
        seniorNote: "50대 이상은 효과가 제한적일 수 있으나 수술 대안으로 고려 가능"
      },
      concerns: {
        primary: ["처진피부", "탄력저하", "이중턱", "턱선"],
        secondary: ["주름", "볼처짐"],
        notEffective: ["기미잡티", "색소침착", "여드름", "모공", "피부결", "홍조", "다크서클", "피부톤"]
      },
      priceRange: {
        min: 100,
        max: 300,
        average: 150,
        perSession: false,
        unit: "전체"
      },
      intensity: {
        level: 5,
        category: "aggressive",
        firstTimerOk: false,
        maintenanceOk: true,
        description: "HIFU 시술 중 가장 강한 강도, 수면마취 권장"
      },
      targetAreas: {
        primary: ["턱선", "볼", "이중턱", "목"],
        optional: ["이마"],
        notFor: ["눈밑", "입술", "코"]
      },
      effectTiming: {
        onset: "delayed",
        onsetDays: 30,
        peakWeeks: 12,
        durationMonths: 18,
        description: "시술 후 2~3개월부터 가시적 변화, 3~6개월에 최대 효과"
      },
      seasonality: {
        summer: "recommended",
        winter: "recommended",
        uvSensitive: false,
        note: "계절 무관, 연중 시술 가능"
      },
      synergy: {
        bestPartners: ["써마지", "스킨보톡스", "리쥬란", "보톡스"],
        boostPercent: 25,
        synergyNote: "울쎄라(깊은층 리프팅) + 써마지(진피층 탄력) = 입체적 리프팅 효과",
        avoid: [],
        intervalDays: 14
      },
      courseInfo: {
        sessionsRequired: 1,
        sessionInterval: "12~18개월",
        totalDuration: "1회",
        maintenanceInterval: "12~18개월",
        isPackage: false,
        perSessionPricing: false
      },
      treatmentType: {
        method: "device",
        invasiveness: "non",
        category: "리프팅",
        technology: "HIFU 초음파"
      },
      
      // === EXISTING FIELDS ===
      mechanism: {detailed: "고강도 집속 초음파(HIFU)가 피부 1.5~4.5mm 깊이의 SMAS 근막층에 60~70℃ 열응고점을 만들어 콜라겐 재생 및 피부 수축 유도"},
      review: {
        summary: "울쎄라는 미국 FDA 최초로 리프팅 효과를 승인받은 HIFU 장비로, 비수술 리프팅의 끝판왕으로 불립니다.",
        likes: ["FDA 승인받은 유일한 비수술 리프팅", "실시간 초음파 영상으로 정확한 시술", "한 번 시술로 1~2년 효과 지속", "턱선, 볼처짐, 이중턱 종합 개선"],
        dislikes: ["HIFU 시술 중 가장 강한 통증", "100~300만원대의 높은 가격", "효과가 서서히 나타남", "얼굴 살 적으면 볼패임 가능"],
        tips: ["정품 팁 사용 병원에서 시술", "수면마취로 통증 해결", "최소 300샷 이상 권장", "써마지와 병행시 시너지"],
        overall: "30대 중반~50대 초반에 가장 효과적. 20대에게는 불필요한 시술."
      },
      effects: {
        primary: ["턱선 리프팅", "이중턱 개선", "볼처짐 개선"],
        secondary: ["피부 탄력", "잔주름 완화"],
        notFor: ["깊은 주름", "볼륨 채움", "색소 치료"],
        onsetTime: "1~2개월 후 서서히, 3~6개월 최대 효과",
        duration: "1~2년"
      },
      procedure: {
        duration: "60~90분",
        anesthesia: "마취크림 필수, 수면마취 권장",
        sessions: "1회",
        interval: "12~18개월",
        shots: "300~600샷"
      },
      recovery: {
        painLevel: 4,
        painDescription: "시술 중 뼈 근처 찌릿한 통증",
        downtime: "없음~3일",
        commonSideEffects: ["일시적 붓기", "홍반", "뻐근함"],
        recoveryTips: ["당일 세안/화장 가능", "음주/사우나 3~7일 금지"]
      },
      suitability: {
        idealAge: "35~50세 (30대 중반~50대 초반이 가장 효과적)",
        bestFor: ["경미~중등도 피부 처짐", "턱선 무너진 분", "비수술 리프팅 원하는 분"],
        notRecommended: ["20대", "얼굴 살 거의 없는 분", "심한 처짐(수술 권장)", "즉각 효과 원하는 분"],
        skinType: "모든 피부 타입 (단, 얼굴에 살이 어느 정도 있어야 함)"
      },
      pricing: { range: "100~300만원", average: "150만원", factors: ["샷수", "부위", "병원"] },
      tags: ["리프팅", "HIFU", "FDA승인", "프리미엄", "30대이상"]
    },

    // ===== 2. 써마지 =====
    {
      id: "thermage",
      name: "써마지",
      nameEn: "Thermage FLX",
      brand: "Solta Medical",
      category: "리프팅/타이트닝",
      subcategory: "RF",
      
      // === NEW FIELDS ===
      ageRange: {
        minimum: 25,
        maximum: 60,
        optimal: "30~50세",
        youngWarning: "20대 후반부터 예방 목적으로 가능. 20대 초중반에는 비용 대비 효과 낮음",
        seniorNote: null
      },
      concerns: {
        primary: ["탄력저하", "주름", "모공"],
        secondary: ["피부결", "잔주름"],
        notEffective: ["기미잡티", "색소침착", "여드름", "처진피부(심한경우)", "볼륨손실"]
      },
      priceRange: {
        min: 80,
        max: 200,
        average: 120,
        perSession: false,
        unit: "전체"
      },
      intensity: {
        level: 3,
        category: "moderate",
        firstTimerOk: true,
        maintenanceOk: true,
        description: "울쎄라 대비 통증 적음, 점심시간 시술 가능"
      },
      targetAreas: {
        primary: ["볼", "턱선", "눈가", "이마"],
        optional: ["목", "바디"],
        notFor: []
      },
      effectTiming: {
        onset: "immediate",
        onsetDays: 0,
        peakWeeks: 12,
        durationMonths: 12,
        description: "시술 직후 즉각 효과 + 2~3개월에 걸쳐 콜라겐 재생으로 점진적 개선"
      },
      seasonality: {
        summer: "recommended",
        winter: "recommended",
        uvSensitive: false,
        note: "계절 무관"
      },
      synergy: {
        bestPartners: ["울쎄라", "보톡스", "스킨부스터", "리쥬란"],
        boostPercent: 20,
        synergyNote: "울쎄라(SMAS층) + 써마지(진피층) = 깊은층+얕은층 동시 케어",
        avoid: [],
        intervalDays: 14
      },
      courseInfo: {
        sessionsRequired: 1,
        sessionInterval: "12개월",
        totalDuration: "1회",
        maintenanceInterval: "12개월",
        isPackage: false,
        perSessionPricing: false
      },
      treatmentType: {
        method: "device",
        invasiveness: "non",
        category: "리프팅",
        technology: "RF 고주파"
      },
      
      mechanism: {detailed: "모노폴라 RF가 진피층(2~3mm)에 균일한 열 전달, 기존 콜라겐 수축 + 새 콜라겐 생성"},
      review: {
        summary: "써마지는 20년 이상 검증된 탄력의 대명사 RF 시술입니다. 울쎄라보다 통증이 적고 슬로우에이징에 적합.",
        likes: ["울쎄라 대비 훨씬 적은 통증", "시술 직후 탱탱해지는 즉각 효과", "다운타임 거의 없음", "아이팁으로 눈가까지 시술", "볼패임 위험 낮음"],
        dislikes: ["리프팅 효과는 울쎄라보다 약함", "심한 처짐에는 효과 제한적", "고가"],
        tips: ["정품 팁 확인 필수", "1년 주기 유지 시술", "울쎄라와 병행하면 효과 UP"],
        overall: "20대 후반~50대에게 적합한 슬로우에이징 시술. 탄력 유지에 효과적."
      },
      effects: {
        primary: ["피부 탄력", "잔주름", "모공 축소"],
        secondary: ["피부결 개선", "윤곽 개선"],
        notFor: ["심한 처짐", "볼륨 채움", "색소"],
        onsetTime: "즉각 효과 + 2~3개월 점진적 개선",
        duration: "1년"
      },
      procedure: {
        duration: "30~45분",
        anesthesia: "마취크림 또는 무마취",
        sessions: "1회",
        interval: "12개월",
        shots: "300~900샷"
      },
      recovery: {
        painLevel: 2,
        painDescription: "따뜻한 느낌, FLX는 통증 크게 감소",
        downtime: "없음",
        commonSideEffects: ["일시적 홍조", "약간의 붓기"],
        recoveryTips: ["당일 일상생활 가능", "보습 관리"]
      },
      suitability: {
        idealAge: "30~50세 (20대 후반부터 예방 목적 가능)",
        bestFor: ["탄력 저하 시작된 분", "슬로우에이징 원하는 분", "다운타임 없이 관리 원하는 분"],
        notRecommended: ["20대 초중반", "심한 피부 처짐", "즉각적 리프팅 원하는 분"],
        skinType: "모든 피부 타입"
      },
      pricing: { range: "80~200만원", average: "120만원", factors: ["샷수", "부위", "팁 종류"] },
      tags: ["리프팅", "RF", "탄력", "슬로우에이징", "20대후반이상"]
    },

    // ===== 3. 슈링크 유니버스 =====
    {
      id: "shurink",
      name: "슈링크 유니버스",
      nameEn: "Shurink Universe",
      brand: "클래시스",
      category: "리프팅/타이트닝",
      subcategory: "HIFU",
      
      ageRange: {
        minimum: 20,
        maximum: 55,
        optimal: "25~45세",
        youngWarning: null,
        seniorNote: "50대 이상은 울쎄라가 더 효과적"
      },
      concerns: {
        primary: ["탄력저하", "처진피부", "턱선"],
        secondary: ["모공", "주름"],
        notEffective: ["기미잡티", "색소침착", "여드름", "볼륨손실"]
      },
      priceRange: {
        min: 10,
        max: 50,
        average: 25,
        perSession: true,
        unit: "회당"
      },
      intensity: {
        level: 2,
        category: "moderate",
        firstTimerOk: true,
        maintenanceOk: true,
        description: "울쎄라보다 통증 적고 가격 저렴, 가성비 HIFU"
      },
      targetAreas: {
        primary: ["볼", "턱선", "이마"],
        optional: ["눈가", "목"],
        notFor: []
      },
      effectTiming: {
        onset: "gradual",
        onsetDays: 14,
        peakWeeks: 8,
        durationMonths: 4,
        description: "시술 후 2주부터 효과, 2개월 최대, 3~4개월 유지"
      },
      seasonality: {
        summer: "recommended",
        winter: "recommended",
        uvSensitive: false,
        note: "계절 무관"
      },
      synergy: {
        bestPartners: ["보톡스", "스킨부스터", "리쥬란"],
        boostPercent: 15,
        synergyNote: "슈링크 + 보톡스 = 리프팅 + 윤곽 개선",
        avoid: [],
        intervalDays: 7
      },
      courseInfo: {
        sessionsRequired: 3,
        sessionInterval: "4주",
        totalDuration: "3개월",
        maintenanceInterval: "3~4개월",
        isPackage: true,
        perSessionPricing: true
      },
      treatmentType: {
        method: "device",
        invasiveness: "non",
        category: "리프팅",
        technology: "HIFU 초음파"
      },
      
      mechanism: {detailed: "HIFU 초음파로 SMAS층 자극, 콜라겐 재생 유도. 울쎄라보다 약한 에너지로 가볍게 관리"},
      review: {
        summary: "울쎄라의 가성비 버전. 20~30대 예방적 리프팅에 적합한 국산 HIFU 장비.",
        likes: ["울쎄라 대비 저렴한 가격", "통증 적음", "짧은 시술 시간", "20대부터 부담없이 시작 가능"],
        dislikes: ["효과 지속 기간 짧음(3~4개월)", "심한 처짐에는 효과 부족", "자주 받아야 함"],
        tips: ["3~4개월 주기로 꾸준히", "보톡스와 병행 추천", "초보자 입문용으로 적합"],
        overall: "20~30대 예방적 안티에이징에 최적. 40대 이상은 울쎄라 권장."
      },
      effects: {
        primary: ["탄력 개선", "턱선 정리", "리프팅"],
        secondary: ["모공 축소", "피부결"],
        notFor: ["심한 처짐", "볼륨", "색소"],
        onsetTime: "2주 후 효과 시작",
        duration: "3~4개월"
      },
      procedure: {
        duration: "20~30분",
        anesthesia: "마취크림",
        sessions: "3회 권장",
        interval: "4주",
        shots: "300~500샷"
      },
      recovery: {
        painLevel: 2,
        painDescription: "따끔거림",
        downtime: "없음",
        commonSideEffects: ["약간의 홍조"],
        recoveryTips: ["당일 일상생활 가능"]
      },
      suitability: {
        idealAge: "25~45세",
        bestFor: ["20~30대 예방 관리", "가성비 리프팅 원하는 분", "처음 리프팅 시작하는 분"],
        notRecommended: ["심한 피부 처짐", "강력한 리프팅 원하는 분"],
        skinType: "모든 피부 타입"
      },
      pricing: { range: "10~50만원/회", average: "25만원/회", factors: ["샷수", "부위"] },
      tags: ["리프팅", "HIFU", "가성비", "20대", "30대", "입문"]
    },

    // ===== 4. 리쥬란 =====
    {
      id: "rejuran",
      name: "리쥬란",
      nameEn: "Rejuran",
      brand: "파마리서치",
      category: "스킨부스터",
      subcategory: "PN",
      
      ageRange: {
        minimum: 20,
        maximum: 65,
        optimal: "25~50세",
        youngWarning: null,
        seniorNote: null
      },
      concerns: {
        primary: ["피부결", "탄력저하", "잔주름"],
        secondary: ["모공", "다크서클", "속건조"],
        notEffective: ["기미잡티", "색소침착", "처진피부(심한)", "볼륨손실"]
      },
      priceRange: {
        min: 15,
        max: 30,
        average: 20,
        perSession: true,
        unit: "회당"
      },
      intensity: {
        level: 2,
        category: "gentle",
        firstTimerOk: true,
        maintenanceOk: true,
        description: "자극 적은 피부 재생 시술, K-뷰티 대표"
      },
      targetAreas: {
        primary: ["전체 얼굴", "눈가", "목"],
        optional: ["손등"],
        notFor: []
      },
      effectTiming: {
        onset: "gradual",
        onsetDays: 14,
        peakWeeks: 8,
        durationMonths: 4,
        description: "2~4주 후 효과 시작, 3~4회 시술 후 최대 효과"
      },
      seasonality: {
        summer: "recommended",
        winter: "recommended",
        uvSensitive: false,
        note: "계절 무관, 연중 시술 가능"
      },
      synergy: {
        bestPartners: ["레이저토닝", "보톡스", "리프팅 시술"],
        boostPercent: 15,
        synergyNote: "리프팅 후 리쥬란으로 피부 재생력 보강",
        avoid: [],
        intervalDays: 7
      },
      courseInfo: {
        sessionsRequired: 4,
        sessionInterval: "2~3주",
        totalDuration: "2~3개월",
        maintenanceInterval: "3~4개월",
        isPackage: true,
        perSessionPricing: true
      },
      treatmentType: {
        method: "injection",
        invasiveness: "minimal",
        category: "스킨부스터",
        technology: "PN(폴리뉴클레오타이드) 주사"
      },
      
      mechanism: {detailed: "연어 유래 PN(폴리뉴클레오타이드)이 피부 세포 재생 촉진, 콜라겐/엘라스틴 합성 증가"},
      review: {
        summary: "피부 근본 체력을 키우는 K-뷰티 대표 스킨부스터. 전 연령대에 무난하게 적합.",
        likes: ["자연스러운 피부 개선", "K-뷰티 대표 시술", "안전성 검증", "다른 시술과 병행 가능"],
        dislikes: ["엠보싱 1~3일 티남", "여러 회 필요", "효과 서서히"],
        tips: ["3~4주 간격 3~4회 권장", "리쥬란HB+는 통증 53% 감소", "눈가는 리쥬란아이 전용"],
        overall: "20대부터 60대까지 모든 연령대에 추천. 피부 재생의 기본."
      },
      effects: {
        primary: ["피부 재생", "탄력 개선", "잔주름 완화"],
        secondary: ["피부결", "속건조 해결", "모공"],
        notFor: ["즉각 볼륨", "리프팅", "색소"],
        onsetTime: "2~4주 후 효과 시작",
        duration: "3~6개월"
      },
      procedure: {
        duration: "20~30분",
        anesthesia: "마취크림",
        sessions: "3~4회 권장",
        interval: "2~3주"
      },
      recovery: {
        painLevel: 2,
        painDescription: "따끔거림",
        downtime: "1~3일 (엠보싱)",
        commonSideEffects: ["엠보싱(볼록)", "멍", "붓기"],
        recoveryTips: ["엠보싱 2~3일 내 흡수", "다음날부터 화장 가능"]
      },
      suitability: {
        idealAge: "25~50세 (전 연령대 가능)",
        bestFor: ["피부 재생력 저하", "속건조", "잔주름/탄력", "피부 컨디션 개선"],
        notRecommended: ["해산물 알러지", "켈로이드"],
        skinType: "모든 피부, 민감성도 가능"
      },
      pricing: { range: "15~30만원/회", average: "20만원/회", factors: ["용량", "부위"] },
      tags: ["스킨부스터", "재생", "PN", "K-뷰티", "전연령"]
    },

    // ===== 5. 보톡스 =====
    {
      id: "botox",
      name: "보톡스",
      nameEn: "Botox",
      brand: "Allergan 외 다수",
      category: "주름/보톡스",
      subcategory: "보톡스",
      
      ageRange: {
        minimum: 20,
        maximum: 70,
        optimal: "25~60세",
        youngWarning: null,
        seniorNote: null
      },
      concerns: {
        primary: ["주름", "사각턱", "승모근"],
        secondary: ["이마주름", "미간주름", "눈가주름", "다한증"],
        notEffective: ["탄력저하", "처진피부", "볼륨손실", "색소"]
      },
      priceRange: {
        min: 3,
        max: 15,
        average: 5,
        perSession: true,
        unit: "부위당"
      },
      intensity: {
        level: 1,
        category: "gentle",
        firstTimerOk: true,
        maintenanceOk: true,
        description: "간단하고 빠른 국민 시술, 입문용으로 최적"
      },
      targetAreas: {
        primary: ["이마", "미간", "눈가", "턱"],
        optional: ["입꼬리", "목", "승모근", "종아리"],
        notFor: []
      },
      effectTiming: {
        onset: "gradual",
        onsetDays: 3,
        peakWeeks: 2,
        durationMonths: 4,
        description: "2~3일 후 효과 시작, 2주에 최대, 3~6개월 유지"
      },
      seasonality: {
        summer: "recommended",
        winter: "recommended",
        uvSensitive: false,
        note: "계절 무관"
      },
      synergy: {
        bestPartners: ["필러", "리프팅", "스킨부스터"],
        boostPercent: 15,
        synergyNote: "보톡스(주름) + 필러(볼륨) = 상호보완 효과",
        avoid: [],
        intervalDays: 0
      },
      courseInfo: {
        sessionsRequired: 1,
        sessionInterval: "4~6개월",
        totalDuration: "1회",
        maintenanceInterval: "4~6개월",
        isPackage: false,
        perSessionPricing: true
      },
      treatmentType: {
        method: "injection",
        invasiveness: "minimal",
        category: "주름",
        technology: "보툴리눔 톡신"
      },
      
      mechanism: {detailed: "보툴리눔 톡신이 신경-근육 접합부에서 아세틸콜린 분비 차단, 근육 이완으로 주름 개선"},
      review: {
        summary: "가장 간편하고 효과 확실한 국민 안티에이징 시술. 전 연령대 입문용으로 최적.",
        likes: ["시술 시간 10~15분", "2~3일 후 효과", "다양한 부위 적용", "저렴한 가격", "FDA 승인"],
        dislikes: ["3~6개월마다 재시술 필요", "과하면 어색한 표정", "내성 발생 가능"],
        tips: ["처음엔 소량으로 시작", "시술 후 4시간 눕지 않기", "한 병원에서 꾸준히"],
        overall: "20대부터 예방 목적으로 시작 가능. 전 연령대에 추천."
      },
      effects: {
        primary: ["표정주름 완화", "이마/미간/눈가", "턱 축소"],
        secondary: ["사각턱 개선", "승모근 축소", "다한증"],
        notFor: ["탄력", "처짐", "볼륨", "색소"],
        onsetTime: "2~3일 후 시작, 2주에 최대",
        duration: "3~6개월"
      },
      procedure: {
        duration: "10~15분",
        anesthesia: "무마취 또는 아이스팩",
        sessions: "1회",
        interval: "4~6개월"
      },
      recovery: {
        painLevel: 1,
        painDescription: "주사 따끔",
        downtime: "없음",
        commonSideEffects: ["주사 자국", "약간의 멍"],
        recoveryTips: ["4시간 눕지 않기", "당일 음주/운동 자제"]
      },
      suitability: {
        idealAge: "25~60세 (20대부터 예방 가능)",
        bestFor: ["표정주름", "사각턱", "승모근", "땀 많은 분"],
        notRecommended: ["임산부/수유", "신경근육질환"],
        skinType: "무관"
      },
      pricing: { range: "3~15만원/부위", average: "5만원/부위", factors: ["부위", "용량", "브랜드"] },
      tags: ["주름", "보톡스", "윤곽", "간편", "입문", "전연령"]
    },

    // ===== 6. 필러 =====
    {
      id: "filler",
      name: "필러",
      nameEn: "Dermal Filler",
      brand: "Juvederm, Restylane 외",
      category: "필러/볼륨",
      subcategory: "HA필러",
      
      ageRange: {
        minimum: 20,
        maximum: 70,
        optimal: "30~60세",
        youngWarning: "20대는 과하지 않게 소량 추천",
        seniorNote: null
      },
      concerns: {
        primary: ["볼륨손실", "팔자주름", "다크서클"],
        secondary: ["주름", "턱 윤곽"],
        notEffective: ["탄력저하", "처진피부", "모공", "색소"]
      },
      priceRange: {
        min: 20,
        max: 80,
        average: 40,
        perSession: true,
        unit: "cc당"
      },
      intensity: {
        level: 2,
        category: "moderate",
        firstTimerOk: true,
        maintenanceOk: true,
        description: "즉각적인 볼륨 효과, 의사 실력이 결과 좌우"
      },
      targetAreas: {
        primary: ["팔자주름", "볼", "턱", "입술"],
        optional: ["이마", "코", "눈밑"],
        notFor: []
      },
      effectTiming: {
        onset: "immediate",
        onsetDays: 0,
        peakWeeks: 2,
        durationMonths: 12,
        description: "시술 즉시 효과, 6개월~2년 유지"
      },
      seasonality: {
        summer: "recommended",
        winter: "recommended",
        uvSensitive: false,
        note: "계절 무관"
      },
      synergy: {
        bestPartners: ["보톡스", "리프팅", "스킨부스터"],
        boostPercent: 20,
        synergyNote: "보톡스(주름) + 필러(볼륨) = 자연스러운 동안 효과",
        avoid: [],
        intervalDays: 0
      },
      courseInfo: {
        sessionsRequired: 1,
        sessionInterval: "6~12개월",
        totalDuration: "1회",
        maintenanceInterval: "6~12개월",
        isPackage: false,
        perSessionPricing: true
      },
      treatmentType: {
        method: "injection",
        invasiveness: "minimal",
        category: "볼륨",
        technology: "히알루론산(HA) 주사"
      },
      
      mechanism: {detailed: "가교결합된 HA가 진피/피하층에서 볼륨 유지, 수분 끌어당겨 탄력 부여"},
      review: {
        summary: "즉각적인 볼륨 효과. 의사 선택이 결과의 80%를 결정.",
        likes: ["시술 즉시 효과 확인", "다양한 부위 적용", "HA 필러는 녹일 수 있음", "자연스러운 결과 가능"],
        dislikes: ["붓기, 멍 1~2주", "의사 실력에 따라 결과 천차만별", "6개월~2년 후 재시술"],
        tips: ["소량으로 자연스럽게", "정품 필러 확인 필수", "경험 많은 의사에게"],
        overall: "볼륨 손실이 시작되는 30대부터 효과적. 자연스러움이 핵심."
      },
      effects: {
        primary: ["볼륨 채움", "팔자주름 개선", "윤곽 보정"],
        secondary: ["잔주름", "물광"],
        notFor: ["리프팅", "탄력", "색소"],
        onsetTime: "즉각 효과",
        duration: "6개월~2년"
      },
      procedure: {
        duration: "15~30분",
        anesthesia: "마취크림 또는 리도카인 함유 제품",
        sessions: "1회",
        interval: "6~12개월"
      },
      recovery: {
        painLevel: 2,
        painDescription: "주사 통증",
        downtime: "1~3일",
        commonSideEffects: ["붓기", "멍", "비대칭"],
        recoveryTips: ["1주일 사우나 운동 피하기", "마사지 금지"]
      },
      suitability: {
        idealAge: "30~60세",
        bestFor: ["볼륨 손실", "팔자주름", "코/턱 윤곽"],
        notRecommended: ["심한 알러지", "켈로이드", "피부 감염"],
        skinType: "무관"
      },
      pricing: { range: "20~80만원/cc", average: "40만원/cc", factors: ["브랜드", "용량", "부위"] },
      tags: ["필러", "볼륨", "팔자", "윤곽", "즉각효과"]
    },

    // ===== 7. 레이저토닝 =====
    {
      id: "lasertoning",
      name: "레이저토닝",
      nameEn: "Laser Toning",
      brand: "스펙트라, 클라리티 외",
      category: "색소/토닝",
      subcategory: "레이저",
      
      ageRange: {
        minimum: 18,
        maximum: 70,
        optimal: "20~50세",
        youngWarning: null,
        seniorNote: null
      },
      concerns: {
        primary: ["기미잡티", "피부톤", "색소침착"],
        secondary: ["모공", "피부결"],
        notEffective: ["탄력저하", "처진피부", "주름", "볼륨손실"]
      },
      priceRange: {
        min: 3,
        max: 10,
        average: 5,
        perSession: true,
        unit: "회당"
      },
      intensity: {
        level: 1,
        category: "gentle",
        firstTimerOk: true,
        maintenanceOk: true,
        description: "자극 적은 기본 레이저 관리"
      },
      targetAreas: {
        primary: ["전체 얼굴"],
        optional: ["목", "손등"],
        notFor: []
      },
      effectTiming: {
        onset: "gradual",
        onsetDays: 14,
        peakWeeks: 12,
        durationMonths: 6,
        description: "꾸준히 10회 이상 받아야 효과"
      },
      seasonality: {
        summer: "caution",
        winter: "recommended",
        uvSensitive: true,
        note: "여름철 주의 필요, 자외선 차단 필수. 겨울이 최적기"
      },
      synergy: {
        bestPartners: ["IPL", "리쥬란", "아쿠아필"],
        boostPercent: 15,
        synergyNote: "토닝 + IPL 교차 시술로 색소 개선 극대화",
        avoid: [],
        intervalDays: 7
      },
      courseInfo: {
        sessionsRequired: 10,
        sessionInterval: "2주",
        totalDuration: "5개월",
        maintenanceInterval: "월 1회",
        isPackage: true,
        perSessionPricing: true
      },
      treatmentType: {
        method: "device",
        invasiveness: "non",
        category: "토닝",
        technology: "Nd:YAG 레이저"
      },
      
      mechanism: {detailed: "1064nm Nd:YAG 레이저가 멜라닌 색소를 점진적으로 분해"},
      review: {
        summary: "기미, 색소 관리의 기본. 꾸준히 받으면 피부톤 맑아짐.",
        likes: ["자극 적음", "가격 저렴", "피부톤 개선", "다운타임 없음"],
        dislikes: ["10회 이상 꾸준히 필요", "효과 서서히", "여름철 자외선 주의"],
        tips: ["2주 간격 10회 이상", "자외선 차단 필수", "겨울에 시작 권장"],
        overall: "20대부터 기본 관리로 추천. 꾸준함이 핵심."
      },
      effects: {
        primary: ["기미 개선", "피부톤 균일화", "색소침착 완화"],
        secondary: ["모공 개선", "피부결"],
        notFor: ["리프팅", "볼륨", "주름"],
        onsetTime: "10회 이후 눈에 띄는 효과",
        duration: "유지 관리 필요"
      },
      procedure: {
        duration: "15~20분",
        anesthesia: "무마취",
        sessions: "10회 이상",
        interval: "2주"
      },
      recovery: {
        painLevel: 1,
        painDescription: "따끔거림",
        downtime: "없음",
        commonSideEffects: ["일시적 홍조"],
        recoveryTips: ["자외선 차단 필수"]
      },
      suitability: {
        idealAge: "20~50세",
        bestFor: ["기미", "잡티", "피부톤 불균일"],
        notRecommended: ["매우 검은 피부", "광과민성"],
        skinType: "모든 피부 타입"
      },
      pricing: { range: "3~10만원/회", average: "5만원/회", factors: ["병원", "장비"] },
      tags: ["토닝", "기미", "색소", "피부톤", "기본관리", "전연령"]
    },

    // ===== 8. 아쿠아필 =====
    {
      id: "aquapeel",
      name: "아쿠아필",
      nameEn: "Aquapeel/Hydrafacial",
      brand: "아쿠아필, 하이드라페이셜 외",
      category: "모공/필링",
      subcategory: "필링",
      
      ageRange: {
        minimum: 15,
        maximum: 70,
        optimal: "15~40세",
        youngWarning: null,
        seniorNote: null
      },
      concerns: {
        primary: ["모공", "피부결", "블랙헤드"],
        secondary: ["피지", "각질", "피부톤"],
        notEffective: ["기미", "탄력저하", "처진피부", "주름", "볼륨손실"]
      },
      priceRange: {
        min: 5,
        max: 15,
        average: 8,
        perSession: true,
        unit: "회당"
      },
      intensity: {
        level: 1,
        category: "gentle",
        firstTimerOk: true,
        maintenanceOk: true,
        description: "10대도 가능한 기본 피부 관리"
      },
      targetAreas: {
        primary: ["전체 얼굴", "코"],
        optional: ["등"],
        notFor: []
      },
      effectTiming: {
        onset: "immediate",
        onsetDays: 0,
        peakWeeks: 0,
        durationMonths: 1,
        description: "시술 즉시 깨끗한 피부 확인, 월 1회 유지"
      },
      seasonality: {
        summer: "recommended",
        winter: "recommended",
        uvSensitive: false,
        note: "계절 무관"
      },
      synergy: {
        bestPartners: ["레이저토닝", "PDT", "스킨부스터"],
        boostPercent: 10,
        synergyNote: "아쿠아필로 각질 제거 후 다른 시술 흡수력 UP",
        avoid: [],
        intervalDays: 0
      },
      courseInfo: {
        sessionsRequired: 1,
        sessionInterval: "월 1회",
        totalDuration: "꾸준히",
        maintenanceInterval: "월 1회",
        isPackage: false,
        perSessionPricing: true
      },
      treatmentType: {
        method: "device",
        invasiveness: "non",
        category: "필링",
        technology: "수압/흡입 필링"
      },
      
      mechanism: {detailed: "수압으로 피지, 각질, 노폐물 제거 + 수분/영양 공급"},
      review: {
        summary: "10대부터 가능한 기본 피부 관리. 즉각적인 모공 청소 효과.",
        likes: ["즉각적인 청결감", "자극 적음", "10대도 가능", "가격 저렴"],
        dislikes: ["효과 오래 안감", "깊은 피부 문제 해결 X"],
        tips: ["월 1회 정기 관리", "다른 시술 전 기본 케어로"],
        overall: "10대 여드름 관리부터 기본 피부 관리까지. 입문 시술."
      },
      effects: {
        primary: ["모공 청소", "피지 제거", "각질 제거"],
        secondary: ["피부결 개선", "즉각 청결감"],
        notFor: ["리프팅", "색소", "주름"],
        onsetTime: "즉각 효과",
        duration: "2~4주"
      },
      procedure: {
        duration: "30~45분",
        anesthesia: "없음",
        sessions: "월 1회",
        interval: "월 1회"
      },
      recovery: {
        painLevel: 0,
        painDescription: "거의 없음",
        downtime: "없음",
        commonSideEffects: ["약간의 홍조"],
        recoveryTips: ["즉시 일상 가능"]
      },
      suitability: {
        idealAge: "15~40세",
        bestFor: ["모공 고민", "피지 과다", "기본 관리 원하는 분", "10대 여드름"],
        notRecommended: ["피부 염증 심한 경우"],
        skinType: "모든 피부"
      },
      pricing: { range: "5~15만원/회", average: "8만원/회", factors: ["병원", "부가 케어"] },
      tags: ["모공", "필링", "기본관리", "10대", "입문"]
    },

    // ===== 9. 프락셀 =====
    {
      id: "fraxel",
      name: "프락셀",
      nameEn: "Fraxel",
      brand: "Solta Medical",
      category: "흉터/재생",
      subcategory: "프락셔널",
      
      ageRange: {
        minimum: 18,
        maximum: 60,
        optimal: "20~50세",
        youngWarning: null,
        seniorNote: "회복력 고려 필요"
      },
      concerns: {
        primary: ["여드름흉터", "흉터", "모공"],
        secondary: ["피부결", "잔주름"],
        notEffective: ["탄력저하", "처진피부", "볼륨손실", "기미(악화 가능)"]
      },
      priceRange: {
        min: 20,
        max: 50,
        average: 35,
        perSession: true,
        unit: "회당"
      },
      intensity: {
        level: 4,
        category: "aggressive",
        firstTimerOk: false,
        maintenanceOk: false,
        description: "다운타임 있는 강한 재생 시술"
      },
      targetAreas: {
        primary: ["볼", "전체 얼굴"],
        optional: ["목", "손등"],
        notFor: []
      },
      effectTiming: {
        onset: "delayed",
        onsetDays: 14,
        peakWeeks: 12,
        durationMonths: 24,
        description: "3~5회 시술 후 6개월~1년에 최대 효과"
      },
      seasonality: {
        summer: "avoid",
        winter: "recommended",
        uvSensitive: true,
        note: "여름 피해야 함, 겨울이 최적기"
      },
      synergy: {
        bestPartners: ["스킨부스터", "재생관리"],
        boostPercent: 15,
        synergyNote: "프락셀 후 스킨부스터로 재생 촉진",
        avoid: ["레이저토닝"],
        intervalDays: 30
      },
      courseInfo: {
        sessionsRequired: 4,
        sessionInterval: "4~6주",
        totalDuration: "4~6개월",
        maintenanceInterval: "연 1회",
        isPackage: true,
        perSessionPricing: true
      },
      treatmentType: {
        method: "device",
        invasiveness: "moderate",
        category: "흉터",
        technology: "프락셔널 레이저"
      },
      
      mechanism: {detailed: "미세 레이저 빔이 피부에 미세 손상 → 재생 과정에서 새 피부 생성"},
      review: {
        summary: "여드름 흉터 치료의 정석. 다운타임을 감수하면 확실한 효과.",
        likes: ["흉터 개선 효과 확실", "피부 재생 촉진", "장기적 효과"],
        dislikes: ["다운타임 1주일", "붉은기 오래 지속", "여름 시술 어려움", "여러 회 필요"],
        tips: ["겨울에 시작", "자외선 차단 필수", "4회 이상 권장"],
        overall: "여드름 흉터가 심각한 20~30대에게 추천. 다운타임 감수 필요."
      },
      effects: {
        primary: ["여드름 흉터 개선", "모공 축소", "피부결 개선"],
        secondary: ["잔주름", "피부 재생"],
        notFor: ["기미(악화 가능)", "리프팅", "볼륨"],
        onsetTime: "3~5회 후 효과",
        duration: "1~2년"
      },
      procedure: {
        duration: "30~60분",
        anesthesia: "마취크림 필수",
        sessions: "3~5회",
        interval: "4~6주"
      },
      recovery: {
        painLevel: 3,
        painDescription: "따끔거림, 열감",
        downtime: "5~7일",
        commonSideEffects: ["붉은기", "각질", "붓기"],
        recoveryTips: ["1주일 외출 자제", "자외선 차단 필수"]
      },
      suitability: {
        idealAge: "20~50세",
        bestFor: ["여드름 흉터", "넓은 모공", "울퉁불퉁한 피부결"],
        notRecommended: ["여름", "기미 있는 분", "다운타임 불가"],
        skinType: "모든 피부 (기미 주의)"
      },
      pricing: { range: "20~50만원/회", average: "35만원/회", factors: ["강도", "범위"] },
      tags: ["흉터", "프락셀", "모공", "재생", "겨울시술"]
    },

    // ===== 10. IPL =====
    {
      id: "ipl",
      name: "IPL",
      nameEn: "Intense Pulsed Light",
      brand: "루메니스, 팔로마 외",
      category: "색소/토닝",
      subcategory: "광치료",
      
      ageRange: {
        minimum: 18,
        maximum: 60,
        optimal: "20~50세",
        youngWarning: null,
        seniorNote: null
      },
      concerns: {
        primary: ["기미잡티", "피부톤", "홍조", "색소침착"],
        secondary: ["모공", "피부결"],
        notEffective: ["탄력저하", "처진피부", "주름", "볼륨손실", "여드름흉터"]
      },
      priceRange: {
        min: 5,
        max: 20,
        average: 10,
        perSession: true,
        unit: "회당"
      },
      intensity: {
        level: 2,
        category: "moderate",
        firstTimerOk: true,
        maintenanceOk: true,
        description: "색소/홍조 개선에 효과적인 광치료"
      },
      targetAreas: {
        primary: ["전체 얼굴"],
        optional: ["목", "손등"],
        notFor: []
      },
      effectTiming: {
        onset: "gradual",
        onsetDays: 7,
        peakWeeks: 8,
        durationMonths: 6,
        description: "3~5회 시술 후 효과 극대화"
      },
      seasonality: {
        summer: "caution",
        winter: "recommended",
        uvSensitive: true,
        note: "여름 주의, 겨울이 최적기"
      },
      synergy: {
        bestPartners: ["레이저토닝", "스킨부스터"],
        boostPercent: 20,
        synergyNote: "토닝 + IPL 교차 시술로 색소/홍조 동시 개선",
        avoid: [],
        intervalDays: 14
      },
      courseInfo: {
        sessionsRequired: 5,
        sessionInterval: "3~4주",
        totalDuration: "4~5개월",
        maintenanceInterval: "3~6개월",
        isPackage: true,
        perSessionPricing: true
      },
      treatmentType: {
        method: "device",
        invasiveness: "non",
        category: "토닝",
        technology: "광(IPL)"
      },
      
      mechanism: {detailed: "다양한 파장의 빛이 멜라닌과 헤모글로빈에 선택적 흡수 → 색소/혈관 개선"},
      review: {
        summary: "기미, 잡티, 홍조를 동시에 개선. 토닝과 병행하면 효과 UP.",
        likes: ["색소+홍조 동시 개선", "넓은 범위 시술", "비교적 저렴"],
        dislikes: ["여름 주의", "일시적 딱지", "여러 회 필요"],
        tips: ["겨울에 시작", "토닝과 교차 시술", "자외선 차단 필수"],
        overall: "색소와 홍조가 같이 있는 분에게 추천. 겨울 시술 권장."
      },
      effects: {
        primary: ["색소 개선", "홍조 완화", "피부톤 개선"],
        secondary: ["모공", "피부결"],
        notFor: ["리프팅", "볼륨", "깊은 주름"],
        onsetTime: "3~5회 후 효과",
        duration: "3~6개월"
      },
      procedure: {
        duration: "20~30분",
        anesthesia: "무마취 또는 쿨링",
        sessions: "3~5회",
        interval: "3~4주"
      },
      recovery: {
        painLevel: 1,
        painDescription: "고무줄 튕기는 느낌",
        downtime: "1~3일",
        commonSideEffects: ["일시적 딱지", "홍조"],
        recoveryTips: ["자외선 차단", "딱지 자연 탈락"]
      },
      suitability: {
        idealAge: "20~50세",
        bestFor: ["기미잡티", "홍조", "피부톤 개선"],
        notRecommended: ["매우 검은 피부", "광과민성", "여름"],
        skinType: "밝은~중간 피부톤"
      },
      pricing: { range: "5~20만원/회", average: "10만원/회", factors: ["병원", "장비"] },
      tags: ["IPL", "색소", "홍조", "피부톤", "겨울시술"]
    }
  ]
};

// 기존 DB와 병합하는 함수
function mergeWithExistingDB(existingDB, enhancedData) {
  const merged = { ...existingDB };
  merged.version = enhancedData.version;
  merged.lastUpdated = enhancedData.lastUpdated;
  
  // 기존 시술에 새 필드 추가
  merged.treatments = merged.treatments.map(treatment => {
    const enhanced = enhancedData.treatments.find(e => e.name === treatment.name || e.id === treatment.id);
    if (enhanced) {
      return {
        ...treatment,
        ageRange: enhanced.ageRange,
        concerns: enhanced.concerns,
        priceRange: enhanced.priceRange,
        intensity: enhanced.intensity,
        targetAreas: enhanced.targetAreas,
        effectTiming: enhanced.effectTiming,
        seasonality: enhanced.seasonality,
        synergy: enhanced.synergy,
        courseInfo: enhanced.courseInfo,
        treatmentType: enhanced.treatmentType,
        // 기존 필드 업데이트
        suitability: enhanced.suitability || treatment.suitability,
        review: enhanced.review || treatment.review,
        tags: enhanced.tags || treatment.tags
      };
    }
    return treatment;
  });
  
  return merged;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DB_ENHANCED, mergeWithExistingDB };
}
