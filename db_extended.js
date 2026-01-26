// TrueKorea 확장 DB v2.0
// 시술 상세 정보 데이터베이스

const DB_EXTENDED = {
  version: "3.0",
  lastUpdated: "2025-01",
  
  treatments: [
    // ===== 1. 울쎄라 =====
    {
      id: "ulthera",
      name: "울쎄라",
      nameEn: "Ultherapy",
      brand: "Merz",
      category: "리프팅/타이트닝",
      subcategory: "HIFU",
      
      mechanism: {detailed: "고강도 집속 초음파(HIFU)가 피부 1.5~4.5mm 깊이의 SMAS 근막층에 60~70℃ 열응고점을 만들어 콜라겐 재생 및 피부 수축 유도",
        },
      
      review: {
                "summary": "울쎄라는 미국 FDA 최초로 리프팅 효과를 승인받은 HIFU 장비로, 비수술 리프팅의 끝판왕으로 불립니다. 고강도 초음파가 피부 깊숙한 SMAS 근막층까지 도달해 콜라겐 재생을 유도합니다.",
                "likes": [
                        "FDA 승인받은 유일한 비수술 리프팅",
                        "실시간 초음파 영상으로 정확한 시술",
                        "한 번 시술로 6개월~1년 이상 효과 지속",
                        "턱선, 볼처짐, 이중턱 종합 개선",
                        "시술 직후 바로 일상생활 가능"
                ],
                "dislikes": [
                        "HIFU 시술 중 가장 강한 통증",
                        "100~300만원대의 높은 가격",
                        "효과가 서서히 나타나 2~3개월 대기",
                        "얼굴 살 적으면 볼패임 가능"
                ],
                "tips": [
                        "정품 팁 사용 병원에서 시술",
                        "수면마취로 통증 해결",
                        "최소 300샷 이상 권장",
                        "써마지와 함께 받으면 시너지"
                ],
                "overall": "비용과 통증을 감수할 수 있다면 비수술 리프팅 중 가장 확실한 효과를 기대할 수 있습니다."
        },
      
      effects: {
        primary: ["턱선 리프팅", "이중턱 개선", "볼처짐 개선"],
        secondary: ["피부 탄력", "잔주름 완화", "모공 축소"],
        notFor: ["깊은 주름", "볼륨 채움", "색소 치료"],
        onsetTime: "1~2개월 후 서서히, 3~6개월 최대 효과",
        duration: "1~2년"
      },
      
      procedure: {
        duration: "60~90분",
        anesthesia: "마취크림 필수, 수면마취 권장",
        sessions: "1회",
        interval: "6개월~1년",
        shots: "300~600샷"
      },
      
      recovery: {
        painLevel: 4,
        painDescription: "시술 중 뼈 근처 찌릿한 통증, 수면마취 시 편안함",
        downtime: "없음~3일",
        commonSideEffects: ["일시적 붓기", "홍반", "뻐근함"],
        recoveryTips: ["당일 세안/화장 가능", "음주/사우나 3~7일 금지"]
      },
      
      suitability: {
        idealAge: "30대 후반~50대",
        bestFor: ["경미~중등도 피부 처짐", "턱선 무너진 분", "다운타임 없이 관리 원하는 분"],
        notRecommended: ["얼굴 살 거의 없는 분", "심한 처짐", "즉각 효과 원하는 분", "임산부"],
        skinType: "모든 피부 타입"
      },
      
      pros: ["FDA 승인", "비침습", "자연스러운 개선", "효과 오래 지속", "바로 일상 복귀"],
      cons: ["높은 가격(100~300만)", "시술 중 통증", "효과 서서히", "볼패임 위험(얼굴 살 적으면)"],
      
      safety: {
        seriousSideEffects: ["볼패임", "화상(드묾)", "신경손상(일시적)"],
        contraindications: ["임신/수유", "시술부위 염증", "켈로이드"],
        warnings: ["정품팁 확인 필수", "숙련된 의사 선택"]
      },
      
      pricing: { range: "100~300만원", average: "150만원", factors: ["샷수", "부위", "병원"] },
      
      comparison: {
        vs: {
          "써마지": "울쎄라=깊은층 리프팅, 써마지=진피층 탄력",
          "슈링크": "울쎄라가 더 강력하고 비쌈, 슈링크는 가성비"
        },
        bestWith: ["써마지", "스킨부스터", "보톡스"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~50세", youngWarning: "20대에게는 불필요하며 볼패임 위험" },
      concerns: { primary: ["처진피부", "탄력저하", "이중턱", "턱선"], secondary: [], notEffective: [] },
      intensity: { level: 5, category: "aggressive", firstTimerOk: false },
      tags: ["리프팅", "HIFU", "FDA승인", "프리미엄"]
    },

    // ===== 2. 써마지 =====
    {
      id: "thermage",
      name: "써마지",
      nameEn: "Thermage FLX",
      brand: "Solta Medical",
      category: "리프팅/타이트닝",
      subcategory: "RF",
      
      mechanism: {detailed: "모노폴라 RF가 진피층(2~3mm)에 균일한 열 전달, 기존 콜라겐 수축 + 새 콜라겐 생성",
        },
      
      review: {
                "summary": "써마지는 20년 이상 검증된 탄력의 대명사 RF 시술입니다. 4세대 FLX는 통증이 크게 줄고 점심시간 시술로 인기입니다.",
                "likes": [
                        "울쎄라 대비 훨씬 적은 통증",
                        "시술 직후부터 탱탱해지는 즉각 효과",
                        "다운타임 거의 없음",
                        "아이팁으로 눈가까지 시술 가능",
                        "볼패임 위험이 낮음"
                ],
                "dislikes": [
                        "리프팅 효과는 울쎄라보다 약함",
                        "80~200만원대의 높은 가격",
                        "1~2개월 후 본격 효과 발현",
                        "1년 주기 재시술 권장"
                ],
                "tips": [
                        "4세대 FLX 장비인지 확인",
                        "정품 팁 사용 확인 필수",
                        "눈가 주름엔 아이써마지 추가",
                        "빌드업 테크닉이 중요"
                ],
                "overall": "통증에 민감하거나 탄력/피부결 개선이 목표인 분에게 최적입니다."
        },
      
      effects: {
        primary: ["피부 탄력", "잔주름 완화", "모공 축소"],
        secondary: ["턱선 정리", "피부결 개선"],
        notFor: ["심한 처짐", "볼륨 채움"],
        onsetTime: "즉각 + 1~6개월 점진적 개선",
        duration: "1~2년"
      },
      
      procedure: {
        duration: "30~60분",
        anesthesia: "대부분 불필요",
        sessions: "1회",
        interval: "1년",
        shots: "300~900샷"
      },
      
      recovery: {
        painLevel: 2,
        painDescription: "따뜻~뜨거운 느낌, 참을만함",
        downtime: "없음",
        commonSideEffects: ["일시적 붓기", "홍반"],
        recoveryTips: ["바로 일상 가능"]
      },
      
      suitability: {
        idealAge: "30대~50대",
        bestFor: ["탄력 저하", "모공/피부결 고민", "통증 민감한 분", "얼굴 살 적은 분"],
        notRecommended: ["심한 처짐", "페이스메이커", "임산부"],
        skinType: "모든 피부 타입"
      },
      
      pros: ["통증 적음", "다운타임 없음", "즉각 탄력감", "볼패임 위험 낮음", "눈가 전용팁"],
      cons: ["높은 가격", "리프팅은 울쎄라보다 약함"],
      
      safety: {
        seriousSideEffects: ["화상(드묾)", "지방위축(매우 드묾)"],
        contraindications: ["페이스메이커", "임신", "금속 임플란트"],
        warnings: ["4세대 FLX 장비 확인", "정품팁 확인"]
      },
      
      pricing: { range: "80~200만원", average: "120만원", factors: ["샷수", "팁 종류"] },
      
      comparison: {
        vs: { "울쎄라": "써마지=탄력/피부결, 울쎄라=리프팅" },
        bestWith: ["울쎄라", "스킨부스터"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~50세", youngWarning: "20대 후반부터 예방 목적 가능" },
      concerns: { primary: ["탄력저하", "주름", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["탄력", "RF", "고주파", "FDA승인", "저통증"]
    },

    // ===== 3. 슈링크 유니버스 =====
    {
      id: "shrink-universe",
      name: "슈링크 유니버스",
      nameEn: "Shurink Universe",
      brand: "Classys",
      category: "리프팅/타이트닝",
      subcategory: "HIFU",
      
      mechanism: {detailed: "HIFU 에너지로 SMAS층에 열응고점 형성, 7가지 카트리지로 맞춤 시술",
        },
      
      review: {
                "summary": "슈링크 유니버스는 가성비 HIFU의 대명사입니다. 울쎄라 가격의 1/3~1/5 수준이고 통증도 적어 대중적으로 인기가 많습니다.",
                "likes": [
                        "울쎄라 대비 1/3~1/5 가격",
                        "2.5배 빨라진 시술 속도",
                        "통증이 울쎄라보다 적음",
                        "7가지 카트리지로 맞춤 시술",
                        "다운타임 거의 없음"
                ],
                "dislikes": [
                        "울쎄라 대비 효과와 유지기간 짧음",
                        "6개월~1년마다 재시술 필요",
                        "초음파 영상 기능 없음",
                        "병원마다 가격 편차 큼"
                ],
                "tips": [
                        "유니버스가 최신형",
                        "울트라F + 부스터 조합 추천",
                        "6개월~1년 간격 정기 관리",
                        "오로라 앰플과 함께 시술"
                ],
                "overall": "울쎄라의 가성비 대안, HIFU 입문자에게 추천합니다."
        },
      
      effects: {
        primary: ["리프팅", "턱선 개선", "이중턱"],
        secondary: ["탄력", "피부결"],
        notFor: ["볼륨", "색소"],
        onsetTime: "2~3주 후 시작, 2~3개월 최대",
        duration: "3~6개월"
      },
      
      procedure: {
        duration: "20~30분",
        anesthesia: "마취크림",
        sessions: "3~4회 권장",
        interval: "4~6주",
        shots: "300~600샷"
      },
      
      recovery: {
        painLevel: 2.5,
        painDescription: "울쎄라보다 덜 아픔",
        downtime: "없음",
        commonSideEffects: ["미세 붓기", "홍반"],
        recoveryTips: ["당일 세안/화장 가능", "찬물 세안 피하기"]
      },
      
      suitability: {
        idealAge: "20대 후반~40대",
        bestFor: ["예산 고려하는 분", "리프팅 입문", "유지 관리"],
        notRecommended: ["얼굴 살 없는 분", "즉각적 큰 효과 원하는 분"],
        skinType: "모든 피부 타입"
      },
      
      pros: ["가성비 좋음", "통증 적음", "국산 장비", "다양한 카트리지", "빠른 시술"],
      cons: ["효과 유지 짧음", "여러 번 시술 필요", "울쎄라보다 효과 약함"],
      
      safety: {
        seriousSideEffects: ["볼패임", "화상(드묾)"],
        contraindications: ["임신", "피부 염증"],
        warnings: ["숙련된 시술자 중요 (영상출력 없음)"]
      },
      
      pricing: { range: "10~30만원/회", average: "15만원/회", factors: ["샷수", "부위"] },
      
      comparison: {
        vs: {
          "울쎄라": "슈링크 3~4회 ≒ 울쎄라 1회 효과, 가격은 1/3~1/5",
          "더블로": "비슷한 국산 HIFU"
        },
        bestWith: ["인모드", "스킨부스터"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 55, optimal: "25~45세", youngWarning: null },
      concerns: { primary: ["탄력저하", "처진피부", "턱선"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["리프팅", "HIFU", "국산", "가성비", "입문용"]
    },

    // ===== 4. 리쥬란 =====
    {
      id: "rejuran",
      name: "리쥬란",
      nameEn: "Rejuran Healer",
      brand: "Pharmaresearch",
      category: "스킨부스터",
      subcategory: "PN",
      
      mechanism: {detailed: "폴리뉴클레오타이드(PN)가 진피층에서 세포 성장인자 분비 촉진, 콜라겐/엘라스틴 합성 유도",
        },
      
      review: {
                "summary": "리쥬란은 연어 DNA에서 추출한 PN 성분으로 피부 재생에 특화된 한국 대표 스킨부스터입니다.",
                "likes": [
                        "피부 진피층 두께 증가하는 재생 효과",
                        "모공, 잔주름, 피부결 종합 개선",
                        "부작용/이물반응 거의 없음",
                        "회차가 늘수록 개선도 증가",
                        "민감성 피부에도 안전"
                ],
                "dislikes": [
                        "엠보싱이 1~3일 남음",
                        "통증이 상당함",
                        "3~4회 시술 필요",
                        "즉각적인 보습감은 부족"
                ],
                "tips": [
                        "리쥬란HB+는 통증 53% 감소",
                        "눈가는 리쥬란아이 전용",
                        "3~4주 간격 3~4회 권장",
                        "물광주사와 번갈아 받기"
                ],
                "overall": "피부 근본 체력을 키우고 싶은 분, 잔주름 고민인 분에게 추천합니다."
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
        interval: "2~3주",
        method: "미세주사/기계주입"
      },
      
      recovery: {
        painLevel: 2.5,
        painDescription: "따끔거림",
        downtime: "1~3일",
        commonSideEffects: ["엠보싱(볼록)", "멍", "붓기"],
        recoveryTips: ["엠보싱 2~3일 내 흡수", "다음날부터 화장"]
      },
      
      suitability: {
        idealAge: "20대 후반~50대",
        bestFor: ["피부 재생력 저하", "속건조", "잔주름/탄력", "피부 컨디션 개선"],
        notRecommended: ["해산물 알러지", "켈로이드"],
        skinType: "모든 피부, 민감성도 가능"
      },
      
      pros: ["자연스러운 개선", "K-뷰티 대표", "안전성 검증", "다른 시술 병행 가능"],
      cons: ["엠보싱 1~3일 티남", "여러 회 필요", "효과 서서히"],
      
      safety: {
        seriousSideEffects: ["감염(드묾)", "알러지(매우 드묾)"],
        contraindications: ["연어/해산물 알러지", "임신/수유", "피부 감염"],
        warnings: ["정품 확인"]
      },
      
      pricing: { range: "15~30만원/회", average: "20만원/회", factors: ["용량", "부위"] },
      
      comparison: {
        vs: {
          "쥬베룩": "리쥬란=재생/탄력, 쥬베룩=볼륨/콜라겐",
          "물광주사": "리쥬란=재생, 물광=보습/즉각 윤기"
        },
        bestWith: ["레이저토닝", "리프팅", "보톡스"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 65, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["피부결", "탄력저하", "잔주름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["스킨부스터", "재생", "PN", "K-뷰티", "연어주사"]
    },

    // ===== 5. 보톡스 =====
    {
      id: "botox",
      name: "보톡스",
      nameEn: "Botox",
      brand: "Allergan 외 다수",
      category: "주름/보톡스",
      subcategory: "보톡스",
      
      mechanism: {detailed: "보툴리눔 톡신이 신경-근육 접합부에서 아세틸콜린 분비 차단, 근육 이완으로 주름 개선",
        },
      
      review: {
                "summary": "보톡스는 근육을 이완시켜 주름을 완화하고 윤곽을 개선하는 국민 시술입니다. 주름부터 사각턱, 승모근까지 활용 범위가 넓습니다.",
                "likes": [
                        "시술 시간 10~15분",
                        "2~3일 후 효과 시작",
                        "주름, 사각턱, 승모근 등 다양한 활용",
                        "저렴한 가격",
                        "FDA 승인 안전 시술"
                ],
                "dislikes": [
                        "3~6개월마다 재시술 필요",
                        "과하면 어색한 표정",
                        "내성 발생 가능",
                        "두통, 현기증 가능"
                ],
                "tips": [
                        "처음엔 소량으로 시작",
                        "시술 후 4시간 눕지 않기",
                        "3~6개월 주기 지키기",
                        "한 병원에서 꾸준히"
                ],
                "overall": "간편하고 효과 확실한 대표 안티에이징 시술입니다."
        },
      
      effects: {
        primary: ["표정주름 완화", "이마/미간/눈가", "턱 축소"],
        secondary: ["사각턱 개선", "승모근 축소", "다한증"],
        notFor: ["볼륨", "탄력", "색소"],
        onsetTime: "3~7일 후 효과 시작",
        duration: "3~6개월"
      },
      
      procedure: {
        duration: "10~20분",
        anesthesia: "대부분 불필요",
        sessions: "1회",
        interval: "3~6개월",
        method: "주사"
      },
      
      recovery: {
        painLevel: 1.5,
        painDescription: "따끔, 크게 아프지 않음",
        downtime: "없음",
        commonSideEffects: ["주사 자국", "미세 멍"],
        recoveryTips: ["4시간 눕지 않기", "당일 세안/화장 가능"]
      },
      
      suitability: {
        idealAge: "20대~60대",
        bestFor: ["표정주름", "사각턱", "승모근", "땀 많은 분"],
        notRecommended: ["임산부/수유", "신경근육질환", "해당 부위 감염"],
        skinType: "무관"
      },
      
      pros: ["빠른 효과", "시술 간단", "다운타임 없음", "다양한 부위 적용"],
      cons: ["효과 일시적(3~6개월)", "반복 시술 필요", "과다 시술 시 부자연스러움"],
      
      safety: {
        seriousSideEffects: ["눈꺼풀 처짐(드묾)", "비대칭", "삼킴곤란(목 시술 시)"],
        contraindications: ["임신/수유", "신경근육질환", "보툴리눔 알러지"],
        warnings: ["정품 확인", "적정 용량 중요"]
      },
      
      pricing: { range: "3~15만원/부위", average: "5만원/부위", factors: ["부위", "용량", "브랜드"] },
      
      comparison: {
        vs: { "필러": "보톡스=근육/주름, 필러=볼륨/채움" },
        bestWith: ["필러", "리프팅", "스킨부스터"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 70, optimal: "25~60세", youngWarning: null },
      concerns: { primary: ["주름", "사각턱", "승모근"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      tags: ["주름", "보톡스", "윤곽", "간편", "입문"]
    },

    // ===== 6. 필러 =====
    {
      id: "filler",
      name: "필러",
      nameEn: "Dermal Filler",
      brand: "Juvederm, Restylane 외 다수",
      category: "필러/볼륨",
      subcategory: "HA필러",
      
      mechanism: {detailed: "가교결합된 HA가 진피/피하층에서 볼륨 유지, 수분 끌어당겨 탄력 부여",
        },
      
      review: {
                "summary": "필러는 히알루론산(HA)을 주입해 꺼진 부위를 채우고 윤곽을 보정하는 볼륨 시술입니다. 시술 즉시 결과를 확인할 수 있습니다.",
                "likes": [
                        "시술 직후 변화 확인 가능",
                        "다양한 부위 적용",
                        "HA 필러는 녹일 수 있음",
                        "자연스러운 결과 가능",
                        "시술 시간 짧음"
                ],
                "dislikes": [
                        "붓기, 멍 1~2주 지속",
                        "의사 실력에 결과 의존",
                        "과하면 부자연스러움",
                        "6개월~2년 후 재시술 필요"
                ],
                "tips": [
                        "소량으로 자연스럽게 시작",
                        "정품 필러 확인 필수",
                        "고위험 부위는 경험 많은 의사에게",
                        "1주일 사우나 운동 피하기"
                ],
                "overall": "즉각적인 볼륨 개선에 효과적입니다. 의사 선택이 결과의 80%입니다."
        },
      
      effects: {
        primary: ["볼륨 채움", "팔자주름", "입술/코/턱 윤곽"],
        secondary: ["물광", "잔주름"],
        notFor: ["리프팅", "탄력", "색소"],
        onsetTime: "즉각 효과",
        duration: "6개월~2년 (제품따라)"
      },
      
      procedure: {
        duration: "15~30분",
        anesthesia: "마취크림 또는 리도카인 함유 제품",
        sessions: "1회",
        interval: "6~12개월",
        method: "주사/캐뉼라"
      },
      
      recovery: {
        painLevel: 2,
        painDescription: "따끔~찌릿",
        downtime: "1~5일",
        commonSideEffects: ["붓기", "멍", "뭉침"],
        recoveryTips: ["냉찜질", "심한 운동 3일 피하기"]
      },
      
      suitability: {
        idealAge: "20대~60대",
        bestFor: ["꺼진 볼/팔자", "입술 볼륨", "코/턱 라인", "애교살"],
        notRecommended: ["켈로이드", "자가면역질환", "시술부위 염증"],
        skinType: "무관"
      },
      
      pros: ["즉각 효과", "자연스러운 볼륨", "녹일 수 있음(HA)", "다양한 부위"],
      cons: ["일시적 효과", "멍/붓기", "비용 누적", "과시술 시 부자연스러움"],
      
      safety: {
        seriousSideEffects: ["혈관폐색(매우 드묾)", "감염", "육아종"],
        contraindications: ["자가면역질환", "켈로이드", "시술부위 감염"],
        warnings: ["정품 확인", "혈관해부학 숙지된 의사"]
      },
      
      pricing: { range: "20~80만원/cc", average: "40만원/cc", factors: ["제품", "부위", "양"] },
      
      comparison: {
        vs: { "보톡스": "필러=볼륨, 보톡스=근육/주름" },
        bestWith: ["보톡스", "리프팅", "스킨부스터"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 70, optimal: "30~60세", youngWarning: "20대는 소량 추천" },
      concerns: { primary: ["볼륨손실", "팔자주름", "다크서클"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["볼륨", "필러", "HA", "즉각효과", "윤곽"]
    },

    // ===== 7. 인모드 =====
    {
      id: "inmode",
      name: "인모드",
      nameEn: "InMode",
      brand: "InMode",
      category: "리프팅/타이트닝",
      subcategory: "RF",
      
      mechanism: {detailed: "RF가 피부 온도 43도 이하로 유지하며 지방세포 파괴 + 콜라겐 재생",
        },
      
      review: {
                "summary": "인모드는 다양한 RF 핸드피스를 조합해 맞춤 시술이 가능한 멀티 플랫폼입니다. 써마지보다 저렴하면서 커스터마이징이 가능합니다.",
                "likes": [
                        "다양한 핸드피스 조합 가능",
                        "써마지 대비 저렴",
                        "탄력 + 모공 + 피부결 종합 관리",
                        "Forma는 통증/다운타임 없음",
                        "지방 감소 효과도 있음"
                ],
                "dislikes": [
                        "FX는 2~3일 다운타임",
                        "단일 시술 효과는 약함",
                        "3~5회 시술 필요",
                        "병원마다 가격 편차"
                ],
                "tips": [
                        "Forma로 가볍게 시작",
                        "FX는 중요 일정 피해서",
                        "써마지와 번갈아 받기",
                        "슈링크+인모드 조합 인기"
                ],
                "overall": "써마지보다 저렴하게 RF 탄력 관리를 원하는 분에게 좋습니다."
        },
      
      effects: {
        primary: ["지방 감소", "턱선 개선", "V라인"],
        secondary: ["탄력", "피부결"],
        notFor: ["볼륨", "색소", "깊은주름"],
        onsetTime: "즉각 + 1~3개월 점진",
        duration: "6개월~1년"
      },
      
      procedure: {
        duration: "30~60분",
        anesthesia: "대부분 불필요",
        sessions: "3~6회 권장",
        interval: "2~4주",
        modes: ["Forma(탄력)", "FX(지방감소)"]
      },
      
      recovery: {
        painLevel: 1.5,
        painDescription: "따뜻한 느낌, 거의 무통",
        downtime: "없음",
        commonSideEffects: ["일시적 홍반"],
        recoveryTips: ["바로 일상 가능"]
      },
      
      suitability: {
        idealAge: "20대~50대",
        bestFor: ["턱살/이중턱", "볼살", "지방+탄력 동시 원하는 분"],
        notRecommended: ["페이스메이커", "임산부", "금속 임플란트"],
        skinType: "모든 피부"
      },
      
      pros: ["무통증", "다운타임 없음", "지방+탄력 동시", "즉각 효과"],
      cons: ["여러 회 필요", "효과 제한적(심한 처짐X)"],
      
      safety: {
        seriousSideEffects: ["화상(매우 드묾)"],
        contraindications: ["페이스메이커", "임신", "피부 염증"],
        warnings: ["온도 모니터링 중요"]
      },
      
      pricing: { range: "15~40만원/회", average: "25만원/회", factors: ["모드", "부위"] },
      
      comparison: {
        vs: { "슈링크": "인모드=지방+탄력, 슈링크=리프팅 위주" },
        bestWith: ["슈링크", "스킨부스터"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~55세", youngWarning: "20대에게는 과한 시술" },
      concerns: { primary: ["탄력저하", "처진피부", "이중턱"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["지방감소", "RF", "V라인", "무통증", "턱선"]
    },

    // ===== 8. 쥬베룩 =====
    {
      id: "juvelook",
      name: "쥬베룩",
      nameEn: "Juvelook",
      brand: "Huons",
      category: "스킨부스터",
      subcategory: "PDLLA",
      
      mechanism: {detailed: "Poly-D,L-lactic acid가 진피층에서 콜라겐 합성 촉진, 점진적 볼륨 증가",
        },
      
      review: {
                "summary": "쥬베룩은 PDLLA 성분이 콜라겐 생성을 직접 촉진하는 콜라겐 부스터입니다. 시간이 지나면서 자연스럽게 탄력과 볼륨이 차오릅니다.",
                "likes": [
                        "콜라겐 생성 촉진 효과",
                        "점진적으로 자연스러운 개선",
                        "탄력 + 볼륨 동시 효과",
                        "리쥬란보다 오래 지속",
                        "스컬트라보다 자연스러움"
                ],
                "dislikes": [
                        "즉각 효과 적음",
                        "리쥬란보다 비쌈",
                        "결절 가능성",
                        "아직 대중화 덜 됨"
                ],
                "tips": [
                        "쥬베룩볼륨은 눈밑에 특화",
                        "시술 후 마사지 금지",
                        "2~3회 후 효과 판단",
                        "리쥬란과 번갈아 받기"
                ],
                "overall": "장기적으로 피부 근본을 개선하고 싶은 분에게 추천합니다."
        },
      
      effects: {
        primary: ["콜라겐 재생", "볼륨 개선", "모공 축소"],
        secondary: ["탄력", "피부결", "잔주름"],
        notFor: ["즉각 볼륨", "색소"],
        onsetTime: "4~6주 후 서서히",
        duration: "1~2년"
      },
      
      procedure: {
        duration: "20~30분",
        anesthesia: "마취크림",
        sessions: "2~4회",
        interval: "3~4주",
        method: "미세주사"
      },
      
      recovery: {
        painLevel: 2.5,
        painDescription: "따끔거림",
        downtime: "1~3일",
        commonSideEffects: ["엠보싱", "붓기", "멍"],
        recoveryTips: ["마사지 금지", "3일간 사우나 피하기"]
      },
      
      suitability: {
        idealAge: "30대~50대",
        bestFor: ["콜라겐 저하", "모공", "볼륨 감소", "자연스러운 채움"],
        notRecommended: ["켈로이드", "자가면역질환", "시술부위 염증"],
        skinType: "모든 피부"
      },
      
      pros: ["자연스러운 볼륨", "콜라겐 생성", "효과 오래 지속", "K-뷰티"],
      cons: ["결절 부작용 가능", "효과 느리게 나타남", "여러 회 필요"],
      
      safety: {
        seriousSideEffects: ["결절(뭉침)", "육아종"],
        contraindications: ["켈로이드", "자가면역질환"],
        warnings: ["과주입 주의", "마사지 금지"]
      },
      
      pricing: { range: "15~40만원/회", average: "25만원/회", factors: ["용량", "부위"] },
      
      comparison: {
        vs: { "리쥬란": "쥬베룩=볼륨/콜라겐, 리쥬란=재생/탄력" },
        bestWith: ["리쥬란", "리프팅", "보톡스"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["탄력저하", "볼륨손실", "주름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["스킨부스터", "콜라겐", "PDLLA", "볼륨", "K-뷰티"]
    },

    // ===== 9. 피코토닝 =====
    {
      id: "pico-toning",
      name: "피코토닝",
      nameEn: "Pico Toning",
      brand: "다양 (Picosure, Picocare 등)",
      category: "색소/미백",
      subcategory: "피코레이저",
      
      mechanism: {detailed: "피코초(10^-12초) 펄스가 멜라닌을 미세 입자로 파쇄, 대식세포가 흡수/배출",
        },
      
      review: {
                "summary": "피코토닝은 피코초 레이저로 색소를 미세하게 파쇄하는 업그레이드된 토닝입니다. 기미/잡티 개선에 효과적이면서 부작용 위험은 낮습니다.",
                "likes": [
                        "기존 토닝보다 색소 파쇄력 뛰어남",
                        "부작용 위험 상대적 낮음",
                        "피부톤 밝아지는 미백 효과",
                        "다운타임 거의 없음",
                        "종합적 색소 개선"
                ],
                "dislikes": [
                        "5~10회 꾸준히 필요",
                        "완전 제거보다 옅어지는 수준",
                        "기미 재발 가능",
                        "토닝보다 비쌈"
                ],
                "tips": [
                        "자외선 차단 필수",
                        "기미는 관리 개념으로",
                        "가을/겨울에 집중 시술",
                        "스킨부스터와 병행"
                ],
                "overall": "기미, 잡티, 칙칙한 피부톤 개선에 효과적입니다."
        },
      
      effects: {
        primary: ["기미", "잡티", "색소침착"],
        secondary: ["피부톤 균일", "모공", "피부결"],
        notFor: ["리프팅", "볼륨", "주름"],
        onsetTime: "3~5회 후 효과 뚜렷",
        duration: "유지관리 필요"
      },
      
      procedure: {
        duration: "15~30분",
        anesthesia: "대부분 불필요",
        sessions: "5~10회",
        interval: "2~4주",
        method: "레이저 조사"
      },
      
      recovery: {
        painLevel: 1.5,
        painDescription: "따끔거림",
        downtime: "없음~1일",
        commonSideEffects: ["홍반", "열감"],
        recoveryTips: ["자외선 차단 필수", "보습"]
      },
      
      suitability: {
        idealAge: "20대~50대",
        bestFor: ["기미", "잡티", "색소침착", "피부톤 불균일"],
        notRecommended: ["일광화상 직후", "광과민증", "임산부"],
        skinType: "모든 피부, 민감성 주의"
      },
      
      pros: ["다운타임 적음", "통증 적음", "점진적 개선", "기미에 효과적"],
      cons: ["여러 회 필요", "재발 가능", "자외선 주의"],
      
      safety: {
        seriousSideEffects: ["과색소침착(드묾)", "저색소침착"],
        contraindications: ["광과민증", "활동성 헤르페스", "임신"],
        warnings: ["자외선 차단 철저"]
      },
      
      pricing: { range: "5~15만원/회", average: "10만원/회", factors: ["장비", "부위"] },
      
      comparison: {
        vs: { "레이저토닝": "피코가 더 짧은 펄스로 효과적, 약간 비쌈" },
        bestWith: ["미백주사", "스킨부스터"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["기미잡티", "피부톤", "색소침착"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["색소", "기미", "피코레이저", "미백", "토닝"]
    },

    // ===== 10. 레이저토닝 =====
    {
      id: "laser-toning",
      name: "레이저토닝",
      nameEn: "Laser Toning",
      brand: "다양 (Spectra, Helios 등)",
      category: "색소/미백",
      subcategory: "Nd:YAG",
      
      mechanism: {detailed: "Nd:YAG 레이저가 멜라닌에 선택적으로 작용, 색소 파쇄 및 배출 유도",
        },
      
      review: {
                "summary": "레이저토닝은 1064nm 레이저를 저출력으로 반복 조사해 멜라닌을 점진적으로 파쇄하는 국민 미백 시술입니다.",
                "likes": [
                        "저렴한 가격",
                        "다운타임 거의 없음",
                        "꾸준히 받으면 피부톤 개선",
                        "안정성 검증됨",
                        "대부분 피부과에서 가능"
                ],
                "dislikes": [
                        "10~20회 이상 필요",
                        "피코토닝보다 효과 약함",
                        "과하면 오타모반 위험",
                        "기미 완치 어려움"
                ],
                "tips": [
                        "주 1회 10~20회 기본",
                        "과도한 횟수 주의",
                        "여름 강한 자외선 시 피하기",
                        "자외선 차단 필수"
                ],
                "overall": "가성비 좋은 기본 색소 관리 시술입니다."
        },
      
      effects: {
        primary: ["피부톤 개선", "잡티", "색소침착"],
        secondary: ["모공", "피부결"],
        notFor: ["깊은 기미", "리프팅", "볼륨"],
        onsetTime: "5~10회 후 효과",
        duration: "유지관리 필요"
      },
      
      procedure: {
        duration: "10~20분",
        anesthesia: "불필요",
        sessions: "10~20회",
        interval: "1~2주",
        method: "레이저 조사"
      },
      
      recovery: {
        painLevel: 1,
        painDescription: "거의 통증 없음",
        downtime: "없음",
        commonSideEffects: ["일시적 홍반"],
        recoveryTips: ["자외선 차단"]
      },
      
      suitability: {
        idealAge: "20대~50대",
        bestFor: ["피부톤 칙칙함", "잡티", "가벼운 색소", "관리 목적"],
        notRecommended: ["광과민증", "임산부"],
        skinType: "모든 피부"
      },
      
      pros: ["저렴함", "다운타임 없음", "통증 없음", "점심시간 시술"],
      cons: ["여러 회 필요", "효과 느림", "깊은 기미는 한계"],
      
      safety: {
        seriousSideEffects: ["오히려 색소 진해짐(드묾)"],
        contraindications: ["광과민증", "피부 염증"],
        warnings: ["자외선 차단 필수"]
      },
      
      pricing: { range: "3~8만원/회", average: "5만원/회", factors: ["장비", "횟수"] },
      
      comparison: {
        vs: { "피코토닝": "피코가 더 효과적이지만 비쌈" },
        bestWith: ["스킨부스터", "필링"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["기미잡티", "피부톤", "색소침착"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      tags: ["색소", "토닝", "미백", "저렴", "관리용"]
    },

    // ===== 11. 프락셀 =====
    {
      id: "fraxel",
      name: "프락셀",
      nameEn: "Fraxel",
      brand: "Solta Medical",
      category: "흉터/모공",
      subcategory: "프락셔널",
      
      mechanism: {detailed: "프락셔널 레이저가 미세 치료 영역(MTZ) 형성, 콜라겐 리모델링 및 새 피부 재생",
        },
      
      review: {
                "summary": "프락셀은 프락셔널 레이저의 대명사로, 피부에 미세한 열손상을 줘서 강력한 재생을 유도합니다. 여드름 흉터, 모공 개선에 확실합니다.",
                "likes": [
                        "여드름 흉터 개선에 탁월",
                        "모공, 피부결, 잔주름 종합 개선",
                        "피부가 새로 태어나는 느낌",
                        "효과 오래 지속",
                        "검증된 시술"
                ],
                "dislikes": [
                        "다운타임 5~7일",
                        "시술 중 통증",
                        "3~5회 필요",
                        "가격 높음"
                ],
                "tips": [
                        "듀얼 모드가 효과 좋음",
                        "가을/겨울에 시술",
                        "자외선 노출 절대 금지",
                        "재생크림으로 관리"
                ],
                "overall": "흉터, 모공을 확실히 개선하고 싶을 때 선택하는 리모델링 시술입니다."
        },
      
      effects: {
        primary: ["흉터 개선", "모공", "피부결"],
        secondary: ["잔주름", "색소침착"],
        notFor: ["리프팅", "볼륨"],
        onsetTime: "2~3회 후 효과",
        duration: "영구적 개선"
      },
      
      procedure: {
        duration: "30~60분",
        anesthesia: "마취크림 필수",
        sessions: "3~5회",
        interval: "4~8주",
        method: "레이저"
      },
      
      recovery: {
        painLevel: 3,
        painDescription: "따끔~화끈거림",
        downtime: "3~7일",
        commonSideEffects: ["홍반", "각질", "붓기"],
        recoveryTips: ["보습 철저", "자외선 차단", "각질 뜯지 않기"]
      },
      
      suitability: {
        idealAge: "20대~50대",
        bestFor: ["여드름 흉터", "모공", "피부결 울퉁불퉁", "잔주름"],
        notRecommended: ["켈로이드", "활동성 여드름", "임산부"],
        skinType: "모든 피부, 어두운 피부 주의"
      },
      
      pros: ["흉터에 효과적", "영구적 개선", "검증된 장비"],
      cons: ["다운타임 있음", "통증", "여러 회 필요", "비용"],
      
      safety: {
        seriousSideEffects: ["흉터 악화", "감염"],
        contraindications: ["켈로이드", "활동성 피부질환"],
        warnings: ["자외선 차단 필수"]
      },
      
      pricing: { range: "20~50만원/회", average: "35만원/회", factors: ["부위", "강도"] },
      
      comparison: {
        vs: { "MRF(스카펫 등)": "프락셀=레이저, MRF=RF+니들로 다운타임 더 적음" },
        bestWith: ["스킨부스터", "필링"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 60, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["여드름흉터", "흉터", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["흉터", "모공", "프락셔널", "재생", "피부결"]
    },

    // ===== 12. 스카펫/포텐자 =====
    {
      id: "scarlet-potenza",
      name: "스카펫/포텐자",
      nameEn: "Scarlet/Potenza",
      brand: "Viol/Cynosure",
      category: "흉터/모공",
      subcategory: "MRF",
      
      mechanism: {detailed: "미세바늘이 진피층까지 침투해 RF 에너지 전달, 콜라겐 재생 유도",
        },
      
      review: {
                "summary": "스칼렛/포텐자는 MRF(마이크로니들 RF)의 대표 장비로, 미세침을 통해 RF를 피부 깊숙이 전달합니다. 탄력, 모공, 흉터 개선에 효과적입니다.",
                "likes": [
                        "피부 깊숙이 RF 전달",
                        "모공, 흉터 동시 개선",
                        "부위별 맞춤 시술 가능",
                        "프락셀보다 다운타임 짧음",
                        "효과 오래 지속"
                ],
                "dislikes": [
                        "2~5일 다운타임",
                        "시술 중 통증",
                        "3~5회 필요",
                        "가격 높음"
                ],
                "tips": [
                        "모공/탄력은 MRF, 흉터는 프락셀",
                        "재생크림 열심히",
                        "자외선 약한 계절 추천",
                        "스킨부스터와 병행"
                ],
                "overall": "탄력과 모공을 동시에 개선하고 싶을 때 효과적입니다."
        },
      
      effects: {
        primary: ["흉터", "모공", "탄력"],
        secondary: ["잔주름", "피부결"],
        notFor: ["리프팅", "색소"],
        onsetTime: "2~4주 후 효과 시작",
        duration: "1년 이상"
      },
      
      procedure: {
        duration: "30~60분",
        anesthesia: "마취크림 필수",
        sessions: "3~5회",
        interval: "4~6주",
        method: "MRF"
      },
      
      recovery: {
        painLevel: 2.5,
        painDescription: "따끔거림",
        downtime: "2~5일",
        commonSideEffects: ["홍반", "붓기", "미세출혈"],
        recoveryTips: ["보습", "자외선 차단"]
      },
      
      suitability: {
        idealAge: "20대~50대",
        bestFor: ["여드름 흉터", "모공", "탄력 저하", "프락셀 대안"],
        notRecommended: ["켈로이드", "활동성 여드름", "금속 임플란트"],
        skinType: "모든 피부"
      },
      
      pros: ["프락셀보다 다운타임 적음", "모든 피부톤 가능", "탄력도 개선"],
      cons: ["여러 회 필요", "통증", "비용"],
      
      safety: {
        seriousSideEffects: ["감염", "흉터 악화"],
        contraindications: ["켈로이드", "금속 임플란트", "혈액응고장애"],
        warnings: ["위생 중요"]
      },
      
      pricing: { range: "25~60만원/회", average: "40만원/회", factors: ["장비", "부위"] },
      
      comparison: {
        vs: { "프락셀": "MRF=다운타임 적음, 프락셀=더 공격적" },
        bestWith: ["스킨부스터", "엑소좀"]
      },
      
      tags: ["흉터", "모공", "MRF", "탄력", "재생"]
    },

    // ===== 13. 물광주사 =====
    {
      id: "skinbooster-ha",
      name: "물광주사",
      nameEn: "Skin Booster",
      brand: "Restylane, Belotero 등",
      category: "스킨부스터",
      subcategory: "HA",
      
      mechanism: {detailed: "비가교 또는 저가교 HA가 진피층에서 수분 끌어당겨 피부 광채 증가",
        },
      
      review: {
                "summary": "물광주사는 히알루론산을 피부에 직접 주입해 촉촉하고 광나는 피부를 만드는 시술입니다. 연예인 피부 비결로 알려져 대중화되었습니다.",
                "likes": [
                        "확실한 피부 윤기와 촉촉함",
                        "화장 잘 먹음",
                        "다양한 제품 선택 가능",
                        "다른 시술과 병행 좋음",
                        "행사 전 관리에 최적"
                ],
                "dislikes": [
                        "엠보싱 1~3일",
                        "효과 2~3개월로 짧음",
                        "정기 재시술 필요",
                        "재생 효과는 부족"
                ],
                "tips": [
                        "행사 1~2주 전 시술",
                        "엠보싱은 2~3일이면 빠짐",
                        "리쥬란과 번갈아 받기",
                        "당일 화장 피하기"
                ],
                "overall": "행사 전 피부 광채가 필요하거나 건조한 피부 개선에 효과적입니다."
        },
      
      effects: {
        primary: ["보습", "윤기", "물광 피부"],
        secondary: ["잔주름", "피부결"],
        notFor: ["리프팅", "볼륨", "색소"],
        onsetTime: "즉각~1주",
        duration: "3~6개월"
      },
      
      procedure: {
        duration: "20~30분",
        anesthesia: "마취크림",
        sessions: "2~3회",
        interval: "2~4주",
        method: "미세주사/기계주입"
      },
      
      recovery: {
        painLevel: 2,
        painDescription: "따끔",
        downtime: "1~3일",
        commonSideEffects: ["엠보싱", "붓기", "멍"],
        recoveryTips: ["엠보싱 1~2일 내 흡수"]
      },
      
      suitability: {
        idealAge: "20대~50대",
        bestFor: ["건조함", "칙칙함", "피부톤", "특별한 날 전"],
        notRecommended: ["활동성 피부염", "HA 알러지"],
        skinType: "모든 피부, 특히 건성"
      },
      
      pros: ["즉각 윤기", "안전함", "간편"],
      cons: ["효과 짧음", "엠보싱 티남", "비용 누적"],
      
      safety: {
        seriousSideEffects: ["알러지(드묾)", "감염"],
        contraindications: ["HA 알러지", "피부 감염"],
        warnings: ["정품 확인"]
      },
      
      pricing: { range: "10~30만원/회", average: "20만원/회", factors: ["제품", "양"] },
      
      comparison: {
        vs: { "리쥬란": "물광=즉각 보습, 리쥬란=근본 재생" },
        bestWith: ["리쥬란", "리프팅"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["피부결", "속건조", "피부톤"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      tags: ["물광", "보습", "HA", "윤기", "입문"]
    },

    // ===== 14. 스킨보톡스 =====
    {
      id: "skin-botox",
      name: "스킨보톡스",
      nameEn: "Skin Botox",
      brand: "다양",
      category: "주름/보톡스",
      subcategory: "보톡스",
      
      mechanism: {detailed: "희석된 보툴리눔톡신이 피지선과 입모근에 작용, 모공 축소 및 번들거림 감소",
        },
      
      review: {
                "summary": "스킨보톡스는 희석한 보톡스를 피부 전체에 미세 주입해 모공 축소와 피지 조절 효과를 내는 시술입니다. 더마톡신이라고도 불립니다.",
                "likes": [
                        "모공 작아지는 효과",
                        "피지 분비 감소",
                        "피부결 매끄러워짐",
                        "다운타임 거의 없음",
                        "다른 시술과 병행 용이"
                ],
                "dislikes": [
                        "효과 2~3개월로 짧음",
                        "정기 재시술 필요",
                        "효과 편차 있음",
                        "비용 대비 효과 논란"
                ],
                "tips": [
                        "물광주사와 함께 받기",
                        "지성/복합성 피부에 추천",
                        "여름 화장 무너짐 방지",
                        "4시간 눕지 않기"
                ],
                "overall": "모공, 피지가 고민인 분에게 추천합니다."
        },
      
      effects: {
        primary: ["모공 축소", "피지 조절", "피부결"],
        secondary: ["잔주름", "윤기"],
        notFor: ["리프팅", "볼륨", "색소"],
        onsetTime: "1~2주",
        duration: "3~4개월"
      },
      
      procedure: {
        duration: "15~20분",
        anesthesia: "마취크림",
        sessions: "1회",
        interval: "3~4개월",
        method: "미세주사"
      },
      
      recovery: {
        painLevel: 1.5,
        painDescription: "따끔",
        downtime: "없음~1일",
        commonSideEffects: ["주사자국", "미세 붓기"],
        recoveryTips: ["당일 세안 가능"]
      },
      
      suitability: {
        idealAge: "20대~40대",
        bestFor: ["넓은 모공", "지성 피부", "번들거림", "피부결 개선"],
        notRecommended: ["건성 피부", "보툴리눔 알러지"],
        skinType: "지성/복합성에 특히 효과"
      },
      
      pros: ["모공에 효과적", "다운타임 없음", "간편"],
      cons: ["효과 짧음", "반복 필요"],
      
      safety: {
        seriousSideEffects: ["과도한 건조"],
        contraindications: ["보툴리눔 알러지", "임산부"],
        warnings: ["적정 농도 중요"]
      },
      
      pricing: { range: "10~25만원/회", average: "15만원/회", factors: ["부위", "양"] },
      
      comparison: {
        vs: { "일반 보톡스": "스킨보톡스=모공/피지, 일반=주름/윤곽" },
        bestWith: ["물광주사", "리쥬란"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["모공", "피부결", "유분"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["모공", "피지", "보톡스", "피부결", "지성피부"]
    },

    // ===== 15. 엑소좀 =====
    {
      id: "exosome",
      name: "엑소좀",
      nameEn: "Exosome",
      brand: "ExoCoBio(ASCE+) 등",
      category: "스킨부스터",
      subcategory: "엑소좀",
      
      mechanism: {detailed: "줄기세포에서 분비된 나노 소포체가 성장인자/단백질 전달, 세포 커뮤니케이션 활성화",
        },
      
      review: {
                "summary": "엑소좀은 줄기세포에서 분비되는 나노 소포체로 차세대 피부 재생 성분입니다. 기존 스킨부스터보다 깊은 수준의 피부 개선을 기대할 수 있습니다.",
                "likes": [
                        "줄기세포 유래 깊은 재생 효과",
                        "탄력, 피부결, 윤기 종합 개선",
                        "점진적이고 자연스러운 효과",
                        "다른 시술과 시너지",
                        "민감성 피부에도 안전"
                ],
                "dislikes": [
                        "장기 임상 데이터 부족",
                        "가격 높음",
                        "효과 체감까지 시간 필요",
                        "제품별 품질 편차"
                ],
                "tips": [
                        "MRF와 함께 시술하면 흡수율 향상",
                        "리쥬란, 쥬베룩과 조합",
                        "정품 확인",
                        "꾸준한 시술로 누적 효과"
                ],
                "overall": "프리미엄 안티에이징을 원하는 분에게 적합합니다."
        },
      
      effects: {
        primary: ["피부 재생", "항염", "트러블 진정"],
        secondary: ["탄력", "피부결", "홍반"],
        notFor: ["리프팅", "볼륨", "색소 직접 치료"],
        onsetTime: "2~4주",
        duration: "3~6개월"
      },
      
      procedure: {
        duration: "20~30분",
        anesthesia: "마취크림",
        sessions: "3~5회",
        interval: "2~4주",
        method: "미세주사/MTS"
      },
      
      recovery: {
        painLevel: 2,
        painDescription: "따끔",
        downtime: "1~2일",
        commonSideEffects: ["홍반", "붓기"],
        recoveryTips: ["보습", "자극 피하기"]
      },
      
      suitability: {
        idealAge: "20대~50대",
        bestFor: ["민감성", "트러블 피부", "시술 후 재생", "전반적 피부개선"],
        notRecommended: ["자가면역질환", "악성종양 병력"],
        skinType: "모든 피부, 특히 민감성/트러블"
      },
      
      pros: ["강력한 재생", "민감성에도 가능", "트러블 진정", "다른 시술 후 회복"],
      cons: ["비용", "여러 회 필요", "효과 개인차"],
      
      safety: {
        seriousSideEffects: ["알러지(매우 드묾)"],
        contraindications: ["악성종양", "자가면역질환"],
        warnings: ["제품 품질 확인"]
      },
      
      pricing: { range: "20~50만원/회", average: "30만원/회", factors: ["제품", "농도"] },
      
      comparison: {
        vs: { "리쥬란": "엑소좀=재생/항염 더 강력, 리쥬란=탄력" },
        bestWith: ["MRF", "리프팅", "레이저 후"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["피부결", "탄력저하", "재생"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["엑소좀", "재생", "줄기세포", "민감성", "트러블"]
    },

    // ===== 16. 제모 레이저 =====
    {
      id: "hair-removal",
      name: "레이저 제모",
      nameEn: "Laser Hair Removal",
      brand: "젠틀맥스, 클라리티 등",
      category: "제모",
      subcategory: "레이저",
      
      mechanism: {detailed: "755nm/1064nm 레이저가 모낭에 흡수되어 열 발생, 성장기 모낭 파괴",
        },
      
      review: {
                "summary": "레이저 제모는 레이저 빛이 모낭을 파괴해 영구 제모 효과를 제공합니다. 5~10회 시술로 면도의 번거로움에서 해방됩니다.",
                "likes": [
                        "5~10회로 영구 제모",
                        "인그로운 헤어 문제 해결",
                        "장기적 비용 절감",
                        "대부분 부위 가능",
                        "다운타임 거의 없음"
                ],
                "dislikes": [
                        "5~10회 반복 필요",
                        "고무줄 튕기는 듯한 통증",
                        "연한 털은 효과 떨어짐",
                        "일시적 홍반 가능"
                ],
                "tips": [
                        "시술 전 2주 왁싱 금지",
                        "자외선 차단 필수",
                        "생리 직후가 통증 적음",
                        "여름 전에 미리 시작"
                ],
                "overall": "면도의 번거로움에서 해방되고 싶은 분에게 강력 추천합니다."
        },
      
      effects: {
        primary: ["영구적 털 감소", "모낭 파괴"],
        secondary: ["피부결 개선", "모공 축소"],
        notFor: ["흰털", "금색 털"],
        onsetTime: "2~3회 후 감소 느낌",
        duration: "영구적(80~90% 감모)"
      },
      
      procedure: {
        duration: "부위별 10~60분",
        anesthesia: "대부분 불필요",
        sessions: "6~10회",
        interval: "4~6주(얼굴), 6~8주(바디)",
        method: "레이저"
      },
      
      recovery: {
        painLevel: 2,
        painDescription: "고무줄로 튕기는 느낌",
        downtime: "없음",
        commonSideEffects: ["홍반", "열감"],
        recoveryTips: ["자외선 차단", "보습"]
      },
      
      suitability: {
        idealAge: "10대 후반~50대",
        bestFor: ["짙은 털", "면도 귀찮음", "매끄러운 피부 원함"],
        notRecommended: ["흰털/금털", "피부질환", "일광화상 직후"],
        skinType: "모든 피부톤(장비 선택)"
      },
      
      pros: ["영구적 효과", "시간 절약", "매끄러움", "모공 개선"],
      cons: ["여러 회 필요", "비용", "흰털 불가"],
      
      safety: {
        seriousSideEffects: ["화상", "색소침착(드묾)"],
        contraindications: ["광과민증", "활동성 피부질환"],
        warnings: ["시술 전 왁싱/뽑기 금지"]
      },
      
      pricing: { range: "1~20만원/부위/회", average: "5만원/부위/회", factors: ["부위", "횟수"] },
      
      comparison: {
        vs: { "IPL제모": "레이저가 더 효과적이지만 비쌈" },
        bestWith: ["제모 후 스킨케어"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["제모", "털"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["제모", "영구제모", "레이저", "매끄러움"]
    },

    // ===== 17. 실리프팅 =====
    {
      id: "thread-lift",
      name: "실리프팅",
      nameEn: "Thread Lift",
      brand: "PDO, PCL, PLLA 다양",
      category: "리프팅/타이트닝",
      subcategory: "실리프팅",
      
      mechanism: {detailed: "코그(가시) 달린 실이 조직을 물리적으로 거상, 이후 콜라겐 생성 유도",
        },
      
      review: {
                "summary": "실리프팅은 녹는 실을 피부 아래에 삽입해 물리적으로 끌어올리는 리프팅 시술입니다. 즉각적인 리프팅 효과와 콜라겐 재생 효과가 있습니다.",
                "likes": [
                        "즉각적인 리프팅 효과",
                        "HIFU/RF보다 강력한 끌어올림",
                        "수술 대비 짧은 다운타임",
                        "콜라겐 재생 효과",
                        "자연스럽게 효과 사라짐"
                ],
                "dislikes": [
                        "3~7일 붓기, 멍",
                        "효과 유지 6개월~2년",
                        "실이 만져질 수 있음",
                        "가격 높음"
                ],
                "tips": [
                        "코그는 리프팅, 모노는 탄력",
                        "2주간 큰 입 벌리기 피하기",
                        "HIFU/RF 병행하면 효과 연장",
                        "경험 많은 의사 선택"
                ],
                "overall": "즉각적이고 강력한 리프팅을 원하지만 수술은 부담스러운 분에게 적합합니다."
        },
      
      effects: {
        primary: ["즉각 리프팅", "턱선", "볼처짐"],
        secondary: ["콜라겐 재생"],
        notFor: ["탄력만 원하는 경우", "볼륨"],
        onsetTime: "즉각 효과",
        duration: "1~2년 (실 종류에 따라)"
      },
      
      procedure: {
        duration: "30~60분",
        anesthesia: "국소마취",
        sessions: "1회",
        interval: "1~2년",
        method: "실 삽입"
      },
      
      recovery: {
        painLevel: 2.5,
        painDescription: "뻐근함, 당김",
        downtime: "3~7일",
        commonSideEffects: ["붓기", "멍", "당김감"],
        recoveryTips: ["입 크게 안벌리기 2주", "격한 표정 자제"]
      },
      
      suitability: {
        idealAge: "30대~50대",
        bestFor: ["즉각 효과 원하는 분", "중등도 처짐", "수술 안하고 리프팅"],
        notRecommended: ["피부 매우 얇은 분", "켈로이드", "심한 처짐"],
        skinType: "대부분 가능"
      },
      
      pros: ["즉각 효과", "수술 대비 간단", "회복 빠름"],
      cons: ["효과 제한적", "부작용 가능", "비용"],
      
      safety: {
        seriousSideEffects: ["실 튀어나옴", "감염", "비대칭"],
        contraindications: ["켈로이드", "자가면역질환", "혈액응고장애"],
        warnings: ["숙련된 시술자 중요"]
      },
      
      pricing: { range: "50~200만원", average: "100만원", factors: ["실 종류", "개수"] },
      
      comparison: {
        vs: { "울쎄라": "실=즉각 물리적 거상, 울쎄라=점진적 콜라겐" },
        bestWith: ["필러", "보톡스"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 60, optimal: "40~55세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부", "탄력저하", "주름"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["실리프팅", "즉각효과", "리프팅", "거상"]
    },

    // ===== 18. 여드름 치료 =====
    {
      id: "acne-treatment",
      name: "여드름 치료",
      nameEn: "Acne Treatment",
      brand: "아큐네, PDT 등",
      category: "여드름/트러블",
      subcategory: "복합치료",
      
      mechanism: {detailed: "PDT(광역동치료)는 피지선 축소, 레이저는 살균/염증 완화, 압출은 즉각 배출",
        },
      
      review: {
                "summary": "여드름 치료는 원인에 따라 약물 치료, 레이저, 필링, 압출 등을 복합적으로 진행합니다. 조기 치료가 흉터 예방에 중요합니다.",
                "likes": [
                        "원인별 맞춤 치료",
                        "조기 치료 시 흉터 예방",
                        "PDT는 1~2회로 빠른 호전",
                        "유지 치료로 재발 최소화",
                        "전문의 안전 치료"
                ],
                "dislikes": [
                        "완치까지 수개월 소요",
                        "일부 약물 부작용 주의",
                        "PDT 후 2~3일 다운타임",
                        "일시적 악화 가능"
                ],
                "tips": [
                        "손으로 짜지 말기",
                        "이소트레티노인 복용 시 임신 금지",
                        "PDT 후 자외선 피하기",
                        "보습 중요"
                ],
                "overall": "여드름은 피부과 질환입니다. 전문의 상담으로 흉터 없이 치료하세요."
        },
      
      effects: {
        primary: ["여드름 개선", "피지 조절", "염증 완화"],
        secondary: ["모공", "흉터 예방"],
        notFor: ["흉터 치료(별도)", "리프팅"],
        onsetTime: "2~4주 후 개선",
        duration: "유지관리 필요"
      },
      
      procedure: {
        duration: "30~60분",
        anesthesia: "마취크림(PDT시)",
        sessions: "5~10회",
        interval: "1~2주",
        method: "복합치료"
      },
      
      recovery: {
        painLevel: 2,
        painDescription: "얼얼함, 화끈",
        downtime: "1~3일",
        commonSideEffects: ["홍반", "각질", "일시적 악화"],
        recoveryTips: ["자외선 차단", "보습", "손대지 않기"]
      },
      
      suitability: {
        idealAge: "10대~30대",
        bestFor: ["활동성 여드름", "반복되는 트러블", "피지 과다"],
        notRecommended: ["광과민증", "임산부(일부 치료)"],
        skinType: "지성/여드름 피부"
      },
      
      pros: ["근본 원인 치료", "재발 감소", "흉터 예방"],
      cons: ["여러 회 필요", "일시적 악화 가능", "비용 누적"],
      
      safety: {
        seriousSideEffects: ["색소침착", "화상(드묾)"],
        contraindications: ["광과민증", "PDT 과민"],
        warnings: ["짜지 않기", "처방약 병행"]
      },
      
      pricing: { range: "5~20만원/회", average: "10만원/회", factors: ["치료 종류", "정도"] },
      
      comparison: {
        vs: { "스킨케어만": "시술이 더 빠르고 확실한 효과" },
        bestWith: ["스킨케어 처방", "스킨부스터(안정 후)"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 12, maximum: 50, optimal: "12~35세", youngWarning: null },
      concerns: { primary: ["여드름", "피지", "트러블"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["여드름", "트러블", "피지", "PDT", "관리"]
    },

    // ===== 19. IPL =====
    {
      id: "ipl",
      name: "IPL",
      nameEn: "Intense Pulsed Light",
      brand: "루메니스, M22 등",
      category: "색소/미백",
      subcategory: "IPL",
      
      mechanism: {detailed: "광대역 빛이 멜라닌/헤모글로빈에 흡수되어 색소 파괴 및 혈관 응고",
        },
      
      review: {
                "summary": "IPL은 다양한 파장의 빛으로 색소, 홍조, 혈관, 피부결을 동시에 개선하는 멀티 시술입니다.",
                "likes": [
                        "색소 + 홍조 + 혈관 + 피부결 동시 개선",
                        "다운타임 거의 없음",
                        "통증 적음",
                        "가격 저렴",
                        "피부톤 균일화"
                ],
                "dislikes": [
                        "레이저보다 색소 파쇄력 약함",
                        "3~5회 반복 필요",
                        "깊은 색소에 효과 제한",
                        "일시적 색소 침착 가능"
                ],
                "tips": [
                        "자외선 차단 필수",
                        "가을/겨울에 시술",
                        "토닝과 번갈아 받기",
                        "어두운 피부는 주의"
                ],
                "overall": "전반적인 피부 컨디션을 가볍게 개선하고 싶을 때 좋은 선택입니다."
        },
      
      effects: {
        primary: ["잡티", "홍반", "안면홍조"],
        secondary: ["피부톤", "모세혈관", "탄력"],
        notFor: ["깊은 기미", "리프팅", "볼륨"],
        onsetTime: "1~2주 후(잡티 딱지 탈락)",
        duration: "유지관리 필요"
      },
      
      procedure: {
        duration: "15~30분",
        anesthesia: "불필요~마취크림",
        sessions: "3~5회",
        interval: "3~4주",
        method: "광조사"
      },
      
      recovery: {
        painLevel: 1.5,
        painDescription: "고무줄 튕김",
        downtime: "없음~3일",
        commonSideEffects: ["홍반", "잡티 진해짐(→탈락)", "딱지"],
        recoveryTips: ["자외선 차단 필수", "딱지 뜯지 않기"]
      },
      
      suitability: {
        idealAge: "20대~50대",
        bestFor: ["잡티", "홍반/홍조", "피부톤 개선", "모세혈관"],
        notRecommended: ["어두운 피부톤", "일광화상 직후", "광과민증"],
        skinType: "밝은 피부에 효과적"
      },
      
      pros: ["다목적", "다운타임 적음", "통증 적음", "가격 합리적"],
      cons: ["깊은 색소 한계", "여러 회 필요", "일시적 잡티 진해짐"],
      
      safety: {
        seriousSideEffects: ["화상", "색소탈실"],
        contraindications: ["광과민증", "최근 태닝"],
        warnings: ["자외선 차단 철저"]
      },
      
      pricing: { range: "8~20만원/회", average: "12만원/회", factors: ["장비", "부위"] },
      
      comparison: {
        vs: { "레이저토닝": "IPL=잡티/홍반에 강함, 토닝=깊은 색소" },
        bestWith: ["스킨부스터", "보습관리"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 60, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["기미잡티", "피부톤", "홍조", "색소침착"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["IPL", "잡티", "홍반", "복합개선", "관리"]
    },

    // ===== 20. 지방분해 주사 =====
    {
      id: "lipolysis-injection",
      name: "지방분해주사",
      nameEn: "Lipolysis Injection",
      brand: "카이벨라, PPC 등",
      category: "바디/지방",
      subcategory: "지방분해",
      
      mechanism: {detailed: "디옥시콜산(카이벨라) 또는 PPC가 지방세포막 용해, 대사 배출",
        },
      
      review: {
                "summary": "지방분해주사는 지방세포를 분해하는 약물을 주입해 국소 지방을 줄이는 시술입니다. 이중턱, 볼살 등에 효과적입니다.",
                "likes": [
                        "수술 없이 국소 지방 감소",
                        "운동으로 안 빠지는 부위에 효과",
                        "시술 시간 짧음",
                        "자연스러운 배출",
                        "반복 시술로 누적 효과"
                ],
                "dislikes": [
                        "즉각 효과 없음",
                        "3~5회 반복 필요",
                        "붓기, 멍 3~7일",
                        "체중 감량은 아님"
                ],
                "tips": [
                        "수분 섭취로 배출 촉진",
                        "마사지 병행",
                        "체중 관리 병행",
                        "얇은 부위는 처짐 주의"
                ],
                "overall": "수술 없이 국소 지방을 줄이고 싶은 분에게 좋은 선택입니다."
        },
      
      effects: {
        primary: ["이중턱 감소", "턱선 개선", "국소 지방 감소"],
        secondary: ["윤곽 개선"],
        notFor: ["전신 다이어트", "탄력(별도 시술)"],
        onsetTime: "4~6주 후 효과",
        duration: "영구적(지방세포 파괴)"
      },
      
      procedure: {
        duration: "15~30분",
        anesthesia: "마취크림/얼음찜질",
        sessions: "2~4회",
        interval: "4~6주",
        method: "주사"
      },
      
      recovery: {
        painLevel: 2.5,
        painDescription: "화끈거림, 붓기",
        downtime: "3~7일",
        commonSideEffects: ["붓기(심함)", "멍", "뭉침", "저림"],
        recoveryTips: ["냉찜질", "2~3일 심한 붓기 정상"]
      },
      
      suitability: {
        idealAge: "20대~50대",
        bestFor: ["이중턱", "볼살", "국소 지방", "운동해도 안빠지는 곳"],
        notRecommended: ["삼킴곤란", "시술부위 감염", "임산부"],
        skinType: "무관"
      },
      
      pros: ["수술 없이 지방 감소", "영구적 효과", "국소 타겟"],
      cons: ["붓기 심함", "통증", "여러 회 필요", "비용"],
      
      safety: {
        seriousSideEffects: ["신경손상(일시적)", "피부괴사(매우 드묾)"],
        contraindications: ["삼킴곤란", "감염", "응고장애"],
        warnings: ["FDA 승인 제품(카이벨라) 권장"]
      },
      
      pricing: { range: "20~50만원/회", average: "35만원/회", factors: ["부위", "양"] },
      
      comparison: {
        vs: { "쿨스컬프팅": "주사=더 빠름/붓기 많음, 쿨스컬프팅=무통증/느림" },
        bestWith: ["리프팅(탄력 보완)", "인모드"]
      },
      
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["지방", "이중턱", "바디라인"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["지방분해", "이중턱", "윤곽", "카이벨라", "국소지방"]
    },

    // ===== 21. 더블로 골드 =====
    {
      id: "doublo-gold",
      name: "더블로 골드",
      nameEn: "Doublo Gold",
      brand: "Hironic",
      category: "리프팅/타이트닝",
      subcategory: "HIFU",
      mechanism: {detailed: "고강도 집속초음파가 SMAS층에 열응고점 형성, 콜라겐 재생 유도",
        },
      
      review: {
                "summary": "더블로 골드는 국산 HIFU 리프팅의 대표 장비로, FDA/KFDA 승인을 받은 안전한 시술입니다. 실시간 모니터링으로 정확한 SMAS층 타겟팅이 가능합니다.",
                "likes": [
                        "실시간 초음파 모니터링으로 정확한 시술",
                        "기존 더블로 대비 40% 빨라진 속도",
                        "시술 직후 즉각 리프팅 효과",
                        "울쎄라 대비 합리적 가격",
                        "다운타임 거의 없음"
                ],
                "dislikes": [
                        "울쎄라보다 효과가 약하다는 평가",
                        "6개월~1년마다 재시술 필요",
                        "통증이 있는 편",
                        "병원마다 가격 편차"
                ],
                "tips": [
                        "정품 팁 사용 병원 선택",
                        "300샷 이상 권장",
                        "써마지와 병행하면 시너지",
                        "3개월 후 효과 절정"
                ],
                "overall": "울쎄라의 국산 대안으로, 가격과 효과의 균형을 원하는 분에게 적합합니다."
        },
      effects: {
        primary: ["리프팅", "턱선", "탄력"],
        secondary: ["주름완화", "피부결"],
        notFor: ["볼륨", "색소"],
        onsetTime: "2~4주 후 효과",
        duration: "6개월~1년"
      },
      procedure: { duration: "30~40분", anesthesia: "마취크림", sessions: "2~3회", interval: "2~3개월" },
      recovery: { painLevel: 2.5, painDescription: "찌릿함", downtime: "없음", commonSideEffects: ["홍반", "붓기"], recoveryTips: ["당일 일상 가능"] },
      suitability: { idealAge: "30대~50대", bestFor: ["가성비 리프팅", "유지관리"], notRecommended: ["심한 처짐"], skinType: "모든 피부" },
      pros: ["국산 가성비", "다운타임 없음", "통증 적음"],
      cons: ["효과 울쎄라보다 약함", "여러 회 필요"],
      safety: {
        seriousSideEffects: ["볼패임(드묾)"], contraindications: ["임신", "피부염"], warnings: ["숙련된 시술자"] },
      pricing: { range: "15~40만원/회", average: "25만원/회", factors: ["샷수", "부위"] },
      comparison: { vs: { "울쎄라": "더블로가 저렴, 효과는 울쎄라" }, bestWith: ["스킨부스터"] },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: "20대 초반에게는 권장하지 않음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["HIFU", "국산", "가성비", "리프팅"]
    },

    // ===== 22. 울트라포머 MPT =====
    {
      id: "ultraformer-mpt",
      name: "울트라포머 MPT",
      nameEn: "Ultraformer MPT",
      brand: "Classys",
      category: "리프팅/타이트닝",
      subcategory: "HIFU",
      mechanism: {detailed: "MPT 기술로 미세한 부위까지 초음파 에너지 전달, SMAS층 타겟팅",
        },
      
      review: {
                "summary": "울트라포머 MPT는 슈링크의 업그레이드 버전으로, MP(Macro Pulsed) 모드로 더 강력한 리프팅 효과를 제공합니다.",
                "likes": [
                        "기존 슈링크 대비 강화된 효과",
                        "7가지 카트리지로 맞춤 시술",
                        "통증 감소 기술 적용",
                        "다운타임 없음",
                        "다양한 깊이 타겟팅"
                ],
                "dislikes": [
                        "기존 슈링크보다 비쌈",
                        "울쎄라 대비 효과 제한적",
                        "재시술 주기 짧음",
                        "초음파 영상 기능 없음"
                ],
                "tips": [
                        "MPT 모드가 효과 좋음",
                        "부스터와 함께 시술",
                        "6개월 간격 정기 관리",
                        "처음엔 적은 샷수로 테스트"
                ],
                "overall": "슈링크에서 한 단계 업그레이드를 원하는 분에게 추천합니다."
        },
      effects: {
        primary: ["눈가리프팅", "입가", "세밀부위"],
        secondary: ["탄력", "잔주름"],
        notFor: ["전체 리프팅", "볼륨"],
        onsetTime: "2~4주",
        duration: "6개월~1년"
      },
      procedure: { duration: "20~40분", anesthesia: "마취크림", sessions: "3~5회", interval: "1개월" },
      recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["바로 일상"] },
      suitability: { idealAge: "30대~50대", bestFor: ["눈가 주름", "입가", "세밀 부위"], notRecommended: ["전체 처짐"], skinType: "모든 피부" },
      pros: ["세밀 시술 가능", "눈가 특화", "통증 적음"],
      cons: ["넓은 부위 비효율", "여러 회 필요"],
      safety: {
        seriousSideEffects: ["드묾"], contraindications: ["임신"], warnings: [] },
      pricing: { range: "10~30만원/회", average: "20만원/회", factors: ["부위", "샷수"] },
      comparison: { vs: { "슈링크": "울트라포머=세밀, 슈링크=넓은부위" }, bestWith: ["슈링크", "보톡스"] },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: "20대 초반에게는 권장하지 않음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["HIFU", "눈가", "세밀", "펜타입"]
    },

    // ===== 23. 소프웨이브 =====
    {
      id: "sofwave",
      name: "소프웨이브",
      nameEn: "Sofwave",
      brand: "Sofwave",
      category: "리프팅/타이트닝",
      subcategory: "HIFU",
      mechanism: {detailed: "12MHz 고주파 초음파로 진피층 중간 깊이 콜라겐 자극",
        },
      
      review: {
                "summary": "소프웨이브는 1.5mm 깊이의 진피층만 타겟팅하는 SUPERB 기술로 볼패임 없이 안전한 리프팅을 제공합니다.",
                "likes": [
                        "볼패임 위험 없음",
                        "눈가까지 시술 가능",
                        "통증이 적은 편",
                        "다운타임 없음",
                        "FDA 승인"
                ],
                "dislikes": [
                        "깊은 처짐에는 효과 제한적",
                        "SMAS층까지 도달 안 함",
                        "여러 회차 필요",
                        "비용이 높은 편"
                ],
                "tips": [
                        "얼굴 살 적은 분에게 추천",
                        "울쎄라 대안으로 고려",
                        "1~2개월 후 효과 확인",
                        "눈가 전용으로 활용"
                ],
                "overall": "볼패임이 걱정되는 분, 얼굴 살이 적은 분에게 최적입니다."
        },
      effects: {
        primary: ["잔주름", "피부탄력", "피부결"],
        secondary: ["리프팅(약함)"],
        notFor: ["심한 처짐", "깊은 주름"],
        onsetTime: "1~3개월",
        duration: "6개월~1년"
      },
      procedure: { duration: "30~45분", anesthesia: "마취크림", sessions: "1~2회", interval: "6개월" },
      recovery: { painLevel: 2, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["바로 일상"] },
      suitability: { idealAge: "30대~40대", bestFor: ["초기노화", "잔주름", "탄력저하"], notRecommended: ["심한처짐"], skinType: "모든 피부" },
      pros: ["다운타임 없음", "통증 적음", "FDA승인"],
      cons: ["깊은 리프팅 한계", "비용"],
      safety: {
        seriousSideEffects: ["드묾"], contraindications: ["임신"], warnings: [] },
      pricing: { range: "50~100만원", average: "70만원", factors: ["부위"] },
      comparison: { vs: { "울쎄라": "소프웨이브=얕은층/주름, 울쎄라=깊은층/리프팅" }, bestWith: ["울쎄라", "스킨부스터"] },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~55세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["주름", "HIFU", "탄력", "FDA"]
    },

    // ===== 24. 올리지오 =====
    {
      id: "oligio",
      name: "올리지오",
      nameEn: "Oligio",
      brand: "Jeisys",
      category: "리프팅/타이트닝",
      subcategory: "RF",
      mechanism: {detailed: "모노폴라 RF가 진피층에 열 전달, 콜라겐 수축 및 재생",
        },
      
      review: {
                "summary": "올리지오는 한국인 피부에 최적화된 국산 RF 리프팅 장비로, '국산 써마지'라 불리며 가성비가 뛰어납니다.",
                "likes": [
                        "써마지 대비 1/3 가격",
                        "한국인 피부에 최적화",
                        "통증이 적음",
                        "다운타임 없음",
                        "볼패임 위험 없음"
                ],
                "dislikes": [
                        "써마지보다 효과가 약하다는 평",
                        "6개월마다 재시술 권장",
                        "즉각 리프팅은 약함",
                        "아직 대중화 덜 됨"
                ],
                "tips": [
                        "600샷 기준으로 효과 판단",
                        "써마지 예산 부담 시 대안",
                        "6개월 주기 정기 관리",
                        "스킨보톡스와 병행"
                ],
                "overall": "써마지 예산이 부담되지만 RF 리프팅을 원하는 분에게 좋은 선택입니다."
        },
      effects: {
        primary: ["탄력", "리프팅", "피부결"],
        secondary: ["모공", "잔주름"],
        notFor: ["볼륨", "색소"],
        onsetTime: "즉각+1~3개월 점진",
        duration: "1년"
      },
      procedure: { duration: "30~60분", anesthesia: "불필요~마취크림", sessions: "1회", interval: "1년" },
      recovery: { painLevel: 2, painDescription: "따뜻~뜨거움", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["바로 일상"] },
      suitability: { idealAge: "30대~50대", bestFor: ["탄력저하", "가성비 RF"], notRecommended: ["페이스메이커"], skinType: "모든 피부" },
      pros: ["국산 가성비", "써마지 대비 저렴", "통증 적음"],
      cons: ["써마지보다 효과 약할 수 있음"],
      safety: {
        seriousSideEffects: ["화상(드묾)"], contraindications: ["페이스메이커", "임신"], warnings: [] },
      pricing: { range: "40~100만원", average: "60만원", factors: ["팁수", "부위"] },
      comparison: { vs: { "써마지": "올리지오가 저렴, 효과는 써마지" }, bestWith: ["HIFU", "스킨부스터"] },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 28, maximum: 55, optimal: "30~50세", youngWarning: "20대 초반에게는 권장하지 않음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["RF", "국산", "탄력", "가성비"]
    },

    // ===== 25. 모피어스8 =====
    {
      id: "morpheus8",
      name: "모피어스8",
      nameEn: "Morpheus8",
      brand: "InMode",
      category: "흉터/모공",
      subcategory: "MRF",
      mechanism: {detailed: "24개 미세바늘이 진피층까지 RF 전달, 콜라겐 리모델링",
        },
      
      review: {
                "summary": "모피어스8은 마이크로니들 RF와 프락셔널 기술을 결합한 프리미엄 MRF 장비로, 탄력과 피부결을 동시에 개선합니다.",
                "likes": [
                        "탄력 + 피부결 동시 개선",
                        "4.5mm 깊이까지 RF 전달",
                        "맞춤형 깊이 조절",
                        "콜라겐 리모델링 효과",
                        "다양한 팁 선택"
                ],
                "dislikes": [
                        "3~5일 다운타임",
                        "시술 중 통증",
                        "가격이 높음",
                        "3~5회 시술 필요"
                ],
                "tips": [
                        "흉터, 모공에 효과적",
                        "여름 피하기",
                        "재생크림 필수",
                        "스킨부스터와 병행"
                ],
                "overall": "탄력과 피부 질감을 함께 개선하고 싶은 분에게 추천합니다."
        },
      effects: {
        primary: ["흉터", "모공", "탄력"],
        secondary: ["잔주름", "피부결"],
        notFor: ["리프팅", "색소"],
        onsetTime: "4~6주",
        duration: "1~2년"
      },
      procedure: { duration: "30~60분", anesthesia: "마취크림 필수", sessions: "3~4회", interval: "4~6주" },
      recovery: { painLevel: 3, painDescription: "따끔~화끈", downtime: "3~7일", commonSideEffects: ["홍반", "붓기", "각질"], recoveryTips: ["보습", "자외선 차단"] },
      suitability: { idealAge: "20대~50대", bestFor: ["여드름흉터", "모공", "탄력저하"], notRecommended: ["켈로이드", "활동성여드름"], skinType: "모든 피부톤" },
      pros: ["흉터+탄력 동시", "깊은 진피 타겟", "모든 피부톤"],
      cons: ["다운타임", "통증", "비용"],
      safety: {
        seriousSideEffects: ["감염", "색소침착"], contraindications: ["켈로이드", "혈액응고장애"], warnings: ["위생 중요"] },
      pricing: { range: "40~80만원/회", average: "50만원/회", factors: ["부위", "팁"] },
      comparison: { vs: { "스카펫": "비슷한 MRF, 병원따라 선호" }, bestWith: ["엑소좀", "스킨부스터"] },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["탄력저하", "흉터", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["MRF", "흉터", "모공", "탄력"]
    },

    // ===== 26. 시크릿RF =====
    {
      id: "secret-rf",
      name: "시크릿 RF",
      nameEn: "Secret RF",
      brand: "Cutera",
      category: "흉터/모공",
      subcategory: "MRF",
      mechanism: {detailed: "64개 니들이 RF 전달, 콜라겐 재생 유도",
        },
      
      review: {
                "summary": "시크릿 RF는 마이크로니들 RF의 대표 장비로, 미세침을 통해 RF를 피부 깊숙이 전달합니다. 모공, 탄력, 흉터 개선에 효과적입니다.",
                "likes": [
                        "미세침으로 RF 깊숙이 전달",
                        "모공 + 탄력 동시 개선",
                        "프락셀보다 다운타임 짧음",
                        "다양한 깊이 설정",
                        "검증된 효과"
                ],
                "dislikes": [
                        "2~5일 다운타임",
                        "시술 중 통증",
                        "3~5회 필요",
                        "가격 높음"
                ],
                "tips": [
                        "모공 + 탄력 동시 고민에 최적",
                        "재생크림 열심히",
                        "가을/겨울 추천",
                        "엑소좀과 병행"
                ],
                "overall": "MRF 시술의 정석으로, 탄력과 모공을 동시에 개선하고 싶은 분에게 적합합니다."
        },
      effects: {
        primary: ["흉터", "모공", "탄력"],
        secondary: ["주름", "피부결"],
        notFor: ["리프팅", "색소"],
        onsetTime: "4~6주",
        duration: "1~2년"
      },
      procedure: { duration: "30~45분", anesthesia: "마취크림", sessions: "3~5회", interval: "4주" },
      recovery: { painLevel: 2.5, painDescription: "따끔", downtime: "2~5일", commonSideEffects: ["홍반", "붓기"], recoveryTips: ["보습", "자외선차단"] },
      suitability: { idealAge: "20대~50대", bestFor: ["여드름흉터", "모공"], notRecommended: ["켈로이드"], skinType: "모든 피부" },
      pros: ["흉터 효과", "탄력 개선"],
      cons: ["다운타임", "여러 회 필요"],
      safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드", "피부감염"], warnings: [] },
      pricing: { range: "30~60만원/회", average: "40만원/회", factors: ["부위"] },
      comparison: { vs: { "모피어스8": "비슷, 병원 보유장비따라" }, bestWith: ["스킨부스터"] },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["탄력저하", "모공", "흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["MRF", "흉터", "모공"]
    },

    // ===== 27. 실펌X =====
    {
      id: "sylfirm-x",
      name: "실펌X",
      nameEn: "Sylfirm X",
      brand: "Sillex",
      category: "흉터/모공",
      subcategory: "MRF",
      mechanism: {detailed: "RP(반복펄스)모드가 색소/혈관에 선택적 작용, CW모드는 탄력",
        },
      
      review: {
                "summary": "실펌X는 펄스 모드와 연속파 모드를 모두 갖춘 고주파 장비로, 홍조, 기미, 모공, 흉터까지 다양한 피부 문제를 치료합니다.",
                "likes": [
                        "홍조 + 기미 + 모공 동시 개선",
                        "펄스/연속파 모드 선택",
                        "다양한 피부 문제 대응",
                        "비교적 적은 다운타임",
                        "안면홍조 특화"
                ],
                "dislikes": [
                        "3~5회 반복 필요",
                        "즉각 효과 적음",
                        "흉터에는 효과 제한적",
                        "병원마다 가격 차이"
                ],
                "tips": [
                        "홍조 고민에 특히 추천",
                        "3회 이상 받아봐야 효과 판단",
                        "자외선 차단 필수",
                        "브이빔과 병행 가능"
                ],
                "overall": "홍조, 기미가 주 고민인 분에게 효과적인 다목적 치료기입니다."
        },
      effects: {
        primary: ["기미", "홍조", "모공"],
        secondary: ["흉터", "탄력"],
        notFor: ["리프팅"],
        onsetTime: "4~6주",
        duration: "유지관리"
      },
      procedure: { duration: "30~45분", anesthesia: "마취크림", sessions: "4~6회", interval: "2~4주" },
      recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["홍반"], recoveryTips: ["자외선 차단"] },
      suitability: { idealAge: "30대~50대", bestFor: ["기미", "홍조", "모공"], notRecommended: ["광과민증"], skinType: "모든 피부" },
      pros: ["기미/홍조에도 효과", "다운타임 적음"],
      cons: ["여러 회 필요", "유지관리"],
      safety: {
        seriousSideEffects: ["색소침착(드묾)"], contraindications: ["광과민증"], warnings: ["자외선 차단"] },
      pricing: { range: "20~50만원/회", average: "35만원/회", factors: ["부위", "모드"] },
      comparison: { vs: { "모피어스8": "실펌=기미/홍조 특화" }, bestWith: ["토닝", "스킨부스터"] },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 55, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["모공", "흉터", "피부결"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["MRF", "기미", "홍조", "모공"]
    },

    // ===== 28. 아그네스 =====
    {
      id: "agnes",
      name: "아그네스",
      nameEn: "Agnes",
      brand: "Gowoonsesang",
      category: "여드름/트러블",
      subcategory: "RF",
      mechanism: {detailed: "절연침이 피지선에 RF 전달하여 선택적 파괴, 재발 방지",
        },
      
      review: {
                "summary": "아그네스는 고주파 미세침으로 피지선을 선택적으로 파괴하는 여드름/모공 특화 장비입니다. 재발 없는 근본 치료를 목표로 합니다.",
                "likes": [
                        "피지선 직접 파괴로 근본 치료",
                        "재발률 낮음",
                        "특정 부위 집중 치료",
                        "모공, 한관종에도 효과",
                        "장기적 효과"
                ],
                "dislikes": [
                        "시술 중 통증",
                        "3~7일 다운타임",
                        "3~5회 필요",
                        "가격 높음"
                ],
                "tips": [
                        "반복되는 같은 부위 여드름에 추천",
                        "한관종 제거에도 효과적",
                        "얼굴 전체보다 부분 치료",
                        "인내심 필요"
                ],
                "overall": "특정 부위에 반복되는 여드름으로 고통받는 분에게 근본적 해결책입니다."
        },
      effects: {
        primary: ["여드름", "피지선파괴", "재발방지"],
        secondary: ["모공"],
        notFor: ["흉터", "탄력"],
        onsetTime: "2~4주",
        duration: "반영구적"
      },
      procedure: { duration: "30~60분", anesthesia: "마취크림", sessions: "2~4회", interval: "4주" },
      recovery: { painLevel: 2.5, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["붓기", "딱지"], recoveryTips: ["딱지 자연탈락"] },
      suitability: { idealAge: "10대~40대", bestFor: ["반복여드름", "피지과다"], notRecommended: ["활동성 염증심함"], skinType: "모든 피부" },
      pros: ["근본적 치료", "재발 감소"],
      cons: ["여러 회 필요", "비용"],
      safety: {
        seriousSideEffects: ["색소침착(드묾)"], contraindications: ["켈로이드"], warnings: [] },
      pricing: { range: "20~40만원/회", average: "30만원/회", factors: ["부위", "범위"] },
      comparison: { vs: { "PDT": "아그네스=피지선파괴, PDT=살균" }, bestWith: ["스킨케어", "PDT"] },
      tags: ["여드름", "피지", "RF", "근본치료"]
    },

    // ===== 29. PDO 코그실 =====
    {
      id: "pdo-cog",
      name: "PDO 코그실",
      nameEn: "PDO Cog Thread",
      brand: "다양",
      category: "리프팅/타이트닝",
      subcategory: "실리프팅",
      mechanism: {detailed: "코그(가시)가 조직을 물리적으로 거상하고 PDO가 콜라겐 생성 유도",
        },
      
      review: {
                "summary": "PDO 코그실은 가시 달린 녹는 실로 피부를 물리적으로 끌어올리는 실리프팅입니다. 즉각적인 리프팅 효과와 콜라겐 재생 효과가 있습니다.",
                "likes": [
                        "즉각적인 리프팅 효과",
                        "HIFU/RF보다 강력한 끌어올림",
                        "콜라겐 재생 효과",
                        "수술 대비 짧은 다운타임",
                        "자연스럽게 녹음"
                ],
                "dislikes": [
                        "3~7일 붓기, 멍",
                        "실이 만져질 수 있음",
                        "효과 유지 1~2년",
                        "가격 높음"
                ],
                "tips": [
                        "코그실은 리프팅, 모노실은 탄력",
                        "2주간 큰 입 벌리기 피하기",
                        "경험 많은 의사 선택",
                        "HIFU와 병행하면 효과 연장"
                ],
                "overall": "즉각적인 리프팅을 원하지만 수술은 부담스러운 분에게 좋은 선택입니다."
        },
      effects: {
        primary: ["즉각리프팅", "턱선", "볼처짐"],
        secondary: ["콜라겐재생"],
        notFor: ["탄력만", "볼륨"],
        onsetTime: "즉각",
        duration: "1~1.5년"
      },
      procedure: { duration: "30~60분", anesthesia: "국소마취", sessions: "1회", interval: "1~2년" },
      recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기", "멍", "당김"], recoveryTips: ["큰 표정 자제 2주"] },
      suitability: { idealAge: "30대~50대", bestFor: ["즉각효과", "중등도처짐"], notRecommended: ["켈로이드", "심한처짐"], skinType: "대부분" },
      pros: ["즉각 효과", "회복 빠름"],
      cons: ["효과 제한적", "부작용 가능"],
      safety: {
        seriousSideEffects: ["실튀어나옴", "감염"], contraindications: ["켈로이드", "응고장애"], warnings: ["숙련자에게"] },
      pricing: { range: "50~150만원", average: "80만원", factors: ["실 종류", "개수"] },
      comparison: { vs: { "울쎄라": "실=즉각거상, 울쎄라=점진콜라겐" }, bestWith: ["필러", "보톡스"] },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 60, optimal: "40~55세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["실리프팅", "PDO", "즉각효과", "리프팅"]
    },

    // ===== 30. 민트리프트 =====
    {
      id: "mint-lift",
      name: "민트리프트",
      nameEn: "Mint Lift",
      brand: "HansBiomed",
      category: "리프팅/타이트닝",
      subcategory: "실리프팅",
      mechanism: {detailed: "PDO와 PCL 혼합으로 콜라겐 재생 기간 연장",
        },
      
      review: {
                "summary": "민트리프트는 양방향 코그가 달린 녹는 실로, 더 강력한 고정력과 리프팅 효과를 제공합니다. 턱선, 볼처짐에 효과적입니다.",
                "likes": [
                        "양방향 코그로 강한 고정력",
                        "즉각적 리프팅",
                        "1~2년 효과 유지",
                        "콜라겐 재생 효과",
                        "자연스러운 결과"
                ],
                "dislikes": [
                        "3~7일 붓기, 멍",
                        "비용 높음",
                        "실이 만져질 수 있음",
                        "시술 후 당김감"
                ],
                "tips": [
                        "턱선, 볼처짐에 효과적",
                        "2주간 사우나 피하기",
                        "경험 많은 의사 선택",
                        "6개월 후 HIFU 병행"
                ],
                "overall": "강력한 즉각 리프팅을 원하는 분에게 적합합니다."
        },
      effects: {
        primary: ["리프팅", "턱선", "탄력"],
        secondary: ["콜라겐재생"],
        notFor: ["볼륨"],
        onsetTime: "즉각",
        duration: "1.5~2년"
      },
      procedure: { duration: "30~60분", anesthesia: "국소마취", sessions: "1회", interval: "1.5~2년" },
      recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "5~7일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["큰 표정 자제"] },
      suitability: { idealAge: "30대~50대", bestFor: ["오래가는 실리프팅"], notRecommended: ["켈로이드"], skinType: "대부분" },
      pros: ["PDO보다 오래감", "자연스러움"],
      cons: ["비용", "부작용 가능"],
      safety: {
        seriousSideEffects: ["감염", "실이동"], contraindications: ["켈로이드"], warnings: [] },
      pricing: { range: "80~200만원", average: "120만원", factors: ["실 개수"] },
      comparison: { vs: { "PDO실": "민트가 더 오래감" }, bestWith: ["필러"] },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 60, optimal: "40~55세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["실리프팅", "민트", "PDO", "PCL"]
    },

    // ===== 31~90: 추가 시술들 =====
    { id: "emface", name: "엠페이스", nameEn: "Emface", brand: "BTL", category: "리프팅/타이트닝", subcategory: "EMS", mechanism: {detailed: "전기자극+RF로 근육강화 및 콜라겐", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~55세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "엠페이스는 HIFES 기술로 표정근을 강화하고 RF로 콜라겐을 생성하는 비침습 리프팅입니다. 무통증으로 편하게 받을 수 있습니다.",
                "likes": [
                        "무통증 시술",
                        "다운타임 없음",
                        "표정근 강화 + 탄력 동시",
                        "20분 빠른 시술",
                        "마취 불필요"
                ],
                "dislikes": [
                        "리프팅 효과 제한적",
                        "4회 이상 필요",
                        "효과 편차 있음",
                        "페이스메이커 불가"
                ],
                "tips": [
                        "예방 목적으로 적합",
                        "4회 1세트 권장",
                        "다른 리프팅과 병행",
                        "주 1회 간격"
                ],
                "overall": "통증 없이 가볍게 관리하고 싶은 분에게 추천합니다."
        }, effects: { primary: ["탄력", "리프팅"], secondary: ["주름"], notFor: ["볼륨"], onsetTime: "4~6주", duration: "6개월~1년" }, procedure: { duration: "20분", anesthesia: "불필요", sessions: "4회", interval: "주1회" }, recovery: { painLevel: 1, painDescription: "근육움찔", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: ["바로일상"] }, suitability: { idealAge: "30대~50대", bestFor: ["탄력저하"], notRecommended: ["페이스메이커"], skinType: "모든피부" }, pros: ["무통증", "다운타임없음"], cons: ["효과제한적"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "30~60만원/회", average: "40만원/회", factors: ["부위"] }, comparison: { vs: { "써마지": "엠페이스=근육" }, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~55세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["EMS", "근육", "무통증"] },

    { id: "titan-lift", name: "티타늄리프팅", nameEn: "Titan Lifting", brand: "Cutera", category: "리프팅/타이트닝", subcategory: "레이저", mechanism: {detailed: "755+810+1064nm 복합파장", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "주름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "티타늄리프팅은 3파장 레이저로 즉각적인 리프팅과 톤업 효과를 제공합니다. 행사 전 급하게 관리가 필요할 때 좋습니다.",
                "likes": [
                        "즉각적인 리프팅 효과",
                        "다운타임 없음",
                        "톤업 효과",
                        "통증 적음",
                        "빠른 시술"
                ],
                "dislikes": [
                        "효과 지속 3~6개월로 짧음",
                        "3~5회 필요",
                        "깊은 처짐에 효과 제한",
                        "다른 리프팅보다 약함"
                ],
                "tips": [
                        "행사 전 급하게 관리할 때",
                        "슈링크와 병행",
                        "2~4주 간격 시술",
                        "즉각 효과 원할 때"
                ],
                "overall": "행사 전 즉각적인 효과가 필요할 때 선택하기 좋습니다."
        }, effects: { primary: ["즉각리프팅", "톤업"], secondary: ["모공"], notFor: ["볼륨"], onsetTime: "즉각", duration: "3~6개월" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["바로일상"] }, suitability: { idealAge: "20대~50대", bestFor: ["즉각효과", "행사전"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["즉각효과", "다운타임없음"], cons: ["효과짧음"], safety: {
        seriousSideEffects: ["화상(드묾)"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "20~50만원/회", average: "30만원/회", factors: ["부위"] }, comparison: { vs: { "슈링크": "티타늄=즉각" }, bestWith: ["슈링크"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "주름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["레이저", "즉각", "톤업"] },

    { id: "sculptra", name: "스컬트라", nameEn: "Sculptra", brand: "Galderma", category: "필러/볼륨", subcategory: "콜라겐부스터", mechanism: {detailed: "폴리락틱산 콜라겐 합성 자극", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["볼륨손실", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      
      review: {
                "summary": "스컬트라는 PLLA 성분이 체내 콜라겐 생성을 촉진하는 콜라겐 부스터입니다. 시간이 지날수록 자연스럽게 볼륨이 차오릅니다.",
                "likes": [
                        "콜라겐 생성 촉진으로 자연스러움",
                        "2년 이상 오래 유지",
                        "점진적이고 자연스러운 볼륨",
                        "FDA 승인 안전성",
                        "필러보다 자연스러움"
                ],
                "dislikes": [
                        "즉각 효과 없음 (6주 후 발현)",
                        "3회 이상 시술 필요",
                        "결절 부작용 가능",
                        "마사지 필수 (5일간)"
                ],
                "tips": [
                        "시술 후 5일간 마사지 필수",
                        "한 달 간격 3회 권장",
                        "팔자주름, 볼패임에 효과적",
                        "HA 필러와 병행 가능"
                ],
                "overall": "자연스럽게 차오르는 볼륨을 원하고 기다릴 수 있는 분에게 최적입니다."
        }, effects: { primary: ["볼륨", "탄력"], secondary: ["윤곽"], notFor: ["즉각볼륨"], onsetTime: "1~3개월", duration: "2년이상" }, procedure: { duration: "30~60분", anesthesia: "마취크림", sessions: "2~3회", interval: "4~6주" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "1~5일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["마사지5일"] }, suitability: { idealAge: "30대~60대", bestFor: ["볼륨감소", "팔자"], notRecommended: ["결절이력"], skinType: "무관" }, pros: ["오래지속", "자연스러움"], cons: ["효과느림", "결절가능"], safety: {
        seriousSideEffects: ["결절"], contraindications: ["켈로이드"], warnings: ["마사지필수"] }, pricing: { range: "50~80만원/바이알", average: "60만원", factors: ["바이알수"] }, comparison: { vs: { "HA필러": "스컬트라=오래감" }, bestWith: ["HA필러"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["볼륨손실", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      tags: ["콜라겐부스터", "PLLA", "볼륨"] },

    { id: "ellanse", name: "엘란쎄", nameEn: "Ellanse", brand: "Sinclair", category: "필러/볼륨", subcategory: "콜라겐부스터", mechanism: {detailed: "즉각볼륨+콜라겐유도", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["볼륨손실", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      
      review: {
                "summary": "엘란쎄는 PCL 성분으로 즉각 볼륨과 점진적 콜라겐 생성을 동시에 제공합니다. 1~4년까지 오래 유지되는 것이 특징입니다.",
                "likes": [
                        "즉각 볼륨 + 콜라겐 생성 동시",
                        "1~4년 장기 유지",
                        "자연스러운 결과",
                        "한 번으로 효과 확인",
                        "다양한 등급 선택"
                ],
                "dislikes": [
                        "녹일 수 없음 (비가역적)",
                        "결절 가능성",
                        "가격 높음",
                        "경험 많은 의사 필수"
                ],
                "tips": [
                        "녹일 수 없으니 신중하게 결정",
                        "S등급이 가장 오래감",
                        "마사지 금지",
                        "소량으로 시작"
                ],
                "overall": "한 번에 즉각 + 장기 효과를 원하는 분에게 적합합니다. 단, 비가역적이니 신중하게."
        }, effects: { primary: ["즉각볼륨", "콜라겐"], secondary: ["탄력"], notFor: ["입술"], onsetTime: "즉각+점진", duration: "1~4년" }, procedure: { duration: "30~60분", anesthesia: "마취크림", sessions: "1회", interval: "1~4년" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기"], recoveryTips: ["마사지금지"] }, suitability: { idealAge: "30대~50대", bestFor: ["볼륨+콜라겐"], notRecommended: ["녹여야할경우"], skinType: "무관" }, pros: ["즉각+점진", "오래감"], cons: ["녹일수없음"], safety: {
        seriousSideEffects: ["결절"], contraindications: ["자가면역"], warnings: ["신중히"] }, pricing: { range: "40~80만원/cc", average: "60만원", factors: ["등급"] }, comparison: { vs: { "스컬트라": "엘란쎄=즉각도있음" }, bestWith: ["보톡스"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["볼륨손실", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      tags: ["콜라겐부스터", "PCL"] },

    { id: "profhilo", name: "프로파일로", nameEn: "Profhilo", brand: "IBSA", category: "스킨부스터", subcategory: "HA", mechanism: {detailed: "진피전체 탄력리모델링", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~55세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["탄력저하", "피부결"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "프로파일로는 고순도 히알루론산을 5개 BAP 포인트에 주입해 피부 전체 탄력을 리모델링하는 스킨부스터입니다.",
                "likes": [
                        "피부 전체 탄력 리모델링",
                        "단 2회로 완료",
                        "자연스러운 탄력 개선",
                        "주입 포인트가 적어 편함",
                        "처짐 개선 효과"
                ],
                "dislikes": [
                        "볼륨 효과는 없음",
                        "즉각 효과 적음",
                        "가격 높음",
                        "1~2일 붓기"
                ],
                "tips": [
                        "2회 기본, 4주 간격",
                        "리프팅 전후에 받으면 시너지",
                        "마사지 금지",
                        "탄력 고민에 특화"
                ],
                "overall": "전체적인 피부 탄력 개선이 목표인 분에게 추천합니다."
        }, effects: { primary: ["탄력", "처짐개선"], secondary: ["보습"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "6개월~1년" }, procedure: { duration: "15~20분", anesthesia: "없음", sessions: "2회", interval: "4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: ["마사지금지"] }, suitability: { idealAge: "30대~50대", bestFor: ["전체탄력"], notRecommended: ["HA알러지"], skinType: "모든피부" }, pros: ["전체탄력", "2회완료"], cons: ["볼륨없음"], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["HA알러지"], warnings: [] }, pricing: { range: "30~60만원/회", average: "45만원", factors: ["부위"] }, comparison: { vs: { "물광": "프로파일로=탄력" }, bestWith: ["리프팅"] }, tags: ["HA", "탄력", "리모델링"] },

    { id: "filorga", name: "샤넬주사", nameEn: "Filorga NCTF", brand: "Filorga", category: "스킨부스터", subcategory: "HA", mechanism: {detailed: "50가지성분 영양공급", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["피부결", "피부톤"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "샤넬주사(필로르가)는 50여 가지 비타민과 아미노산을 함유해 피부에 영양을 공급하고 윤기를 더하는 스킨부스터입니다.",
                "likes": [
                        "풍부한 영양 성분",
                        "즉각적인 윤기와 광채",
                        "칙칙한 피부톤 개선",
                        "다운타임 거의 없음",
                        "다른 시술과 병행 용이"
                ],
                "dislikes": [
                        "효과 지속 2~4개월로 짧음",
                        "3~5회 반복 필요",
                        "재생 효과는 부족",
                        "엠보싱 1~2일"
                ],
                "tips": [
                        "행사 전 광채 피부 만들기",
                        "리쥬란과 번갈아 받기",
                        "토닝과 병행",
                        "2~3주 간격 시술"
                ],
                "overall": "칙칙하고 피로해 보이는 피부에 즉각적인 생기를 원할 때 좋습니다."
        }, effects: { primary: ["영양", "윤기"], secondary: ["탄력"], notFor: ["볼륨"], onsetTime: "1~2주", duration: "2~4개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~3주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["엠보싱"], recoveryTips: ["다음날화장"] }, suitability: { idealAge: "20대~50대", bestFor: ["칙칙함", "피로피부"], notRecommended: ["알러지"], skinType: "모든피부" }, pros: ["영양공급", "윤기"], cons: ["효과짧음"], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["성분알러지"], warnings: [] }, pricing: { range: "15~30만원/회", average: "20만원", factors: ["용량"] }, comparison: { vs: { "리쥬란": "샤넬=영양" }, bestWith: ["토닝"] }, tags: ["영양", "윤기", "샤넬"] },

    { id: "glutathione", name: "백옥주사", nameEn: "Glutathione IV", brand: "다양", category: "주사/수액", subcategory: "미백", mechanism: {detailed: "항산화+멜라닌억제", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 65, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["피부톤", "미백"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "백옥주사는 글루타치온을 정맥주사로 투여해 전신 미백과 항산화 효과를 제공합니다. 꾸준한 시술이 필요합니다.",
                "likes": [
                        "전신 미백 효과",
                        "항산화로 피로 회복",
                        "피부톤 전체 개선",
                        "다운타임 없음",
                        "다른 시술과 병행 용이"
                ],
                "dislikes": [
                        "10~20회 이상 필요",
                        "효과 유지를 위해 지속 필요",
                        "국소 색소엔 효과 제한",
                        "개인차 큼"
                ],
                "tips": [
                        "주 1~2회 꾸준히",
                        "토닝과 병행하면 시너지",
                        "G6PD 결핍 환자 주의",
                        "비타민C와 함께"
                ],
                "overall": "전신 미백과 피로 회복을 원하는 분에게 적합합니다. 꾸준함이 핵심입니다."
        }, effects: { primary: ["미백", "항산화"], secondary: ["피로회복"], notFor: ["국소색소"], onsetTime: "10~20회후", duration: "유지필요" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "10~20회", interval: "주1~2회" }, recovery: { painLevel: 1, painDescription: "주사통증", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: ["바로일상"] }, suitability: { idealAge: "20대~50대", bestFor: ["전신미백"], notRecommended: ["G6PD결핍"], skinType: "모든피부" }, pros: ["전신효과"], cons: ["여러회필요"], safety: {
        seriousSideEffects: ["G6PD위험"], contraindications: ["G6PD결핍"], warnings: ["병력확인"] }, pricing: { range: "3~10만원/회", average: "5만원", factors: ["용량"] }, comparison: { vs: { "토닝": "백옥=전신" }, bestWith: ["토닝"] }, tags: ["미백", "글루타치온"] },

    { id: "cinderella", name: "신데렐라주사", nameEn: "Alpha Lipoic Acid IV", brand: "다양", category: "주사/수액", subcategory: "미백", mechanism: {detailed: "해독+지방대사+미백", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 65, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["피부톤", "해독"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "신데렐라주사는 알파리포산을 주성분으로 항산화, 미백, 해독, 다이어트 효과를 복합적으로 제공합니다.",
                "likes": [
                        "항산화 + 미백 + 해독 복합 효과",
                        "다이어트 보조 효과",
                        "피로 회복",
                        "다운타임 없음",
                        "전신 효과"
                ],
                "dislikes": [
                        "10~20회 필요",
                        "즉각 효과 적음",
                        "당뇨 환자 주의 (저혈당)",
                        "효과 편차"
                ],
                "tips": [
                        "주 1~2회 꾸준히",
                        "백옥주사와 번갈아 받기",
                        "운동, 식단과 병행",
                        "당뇨 환자는 상담 필수"
                ],
                "overall": "미백과 다이어트 보조 효과를 동시에 원하는 분에게 좋습니다."
        }, effects: { primary: ["항산화", "미백"], secondary: ["다이어트"], notFor: ["국소"], onsetTime: "10회이상", duration: "유지필요" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "10~20회", interval: "주1~2회" }, recovery: { painLevel: 1, painDescription: "주사통증", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["피로", "미백"], notRecommended: ["당뇨주의"], skinType: "무관" }, pros: ["다중효과"], cons: ["여러회"], safety: {
        seriousSideEffects: ["저혈당"], contraindications: ["당뇨주의"], warnings: [] }, pricing: { range: "3~8만원/회", average: "5만원", factors: [] }, comparison: { vs: { "백옥": "비슷" }, bestWith: ["백옥주사"] }, tags: ["항산화", "미백"] },

    { id: "prp", name: "PRP자가혈", nameEn: "PRP", brand: "자가혈", category: "스킨부스터", subcategory: "재생", mechanism: {detailed: "혈소판풍부혈장 콜라겐촉진", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 65, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["피부결", "재생"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "PRP 자가혈은 본인의 혈소판풍부혈장을 추출해 주입하는 재생 시술입니다. 자가 성분이라 안전하고 재생 효과가 뛰어납니다.",
                "likes": [
                        "자가혈이라 부작용 거의 없음",
                        "피부 재생 효과 우수",
                        "탄력, 흉터 개선",
                        "민감성 피부에도 안전",
                        "콜라겐 촉진"
                ],
                "dislikes": [
                        "채혈 필요",
                        "3~5회 반복 필요",
                        "1~3일 다운타임",
                        "효과 발현까지 시간 필요"
                ],
                "tips": [
                        "MRF와 함께 시술하면 흡수율 향상",
                        "엑소좀과 병행",
                        "3~4주 간격 권장",
                        "재생 목적에 최적"
                ],
                "overall": "자가 성분으로 안전하게 재생 효과를 원하는 분에게 추천합니다."
        }, effects: { primary: ["재생", "탄력"], secondary: ["흉터"], notFor: ["즉각볼륨"], onsetTime: "2~4주", duration: "3~6개월" }, procedure: { duration: "40~60분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2.5, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["자극피하기"] }, suitability: { idealAge: "30대~50대", bestFor: ["재생", "민감성"], notRecommended: ["혈액질환"], skinType: "모든피부" }, pros: ["자가혈안전", "재생효과"], cons: ["채혈필요"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["혈액질환"], warnings: [] }, pricing: { range: "20~50만원/회", average: "30만원", factors: [] }, comparison: { vs: { "엑소좀": "PRP=자가혈" }, bestWith: ["MRF"] }, tags: ["PRP", "재생"] },

    { id: "picosure", name: "피코슈어", nameEn: "PicoSure", brand: "Cynosure", category: "색소/미백", subcategory: "피코레이저", mechanism: {detailed: "피코초펄스 멜라닌파쇄", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["기미잡티", "색소침착"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "피코슈어는 755nm 피코레이저의 원조로, 기미/색소 치료에 특화되어 있습니다. 빠른 펄스로 주변 조직 손상을 최소화합니다.",
                "likes": [
                        "755nm 기미/색소 특화",
                        "주변 조직 손상 최소",
                        "다운타임 적음",
                        "피부결 개선 부가 효과",
                        "안전성 검증"
                ],
                "dislikes": [
                        "5~10회 반복 필요",
                        "깊은 색소엔 효과 제한",
                        "가격 높은 편",
                        "유지 관리 필요"
                ],
                "tips": [
                        "기미는 관리 개념으로",
                        "자외선 차단 필수",
                        "가을/겨울에 집중 시술",
                        "토닝과 병행"
                ],
                "overall": "기미, 색소 고민에 효과적인 프리미엄 피코레이저입니다."
        }, effects: { primary: ["기미", "색소"], secondary: ["피부결"], notFor: ["리프팅"], onsetTime: "3~5회후", duration: "유지관리" }, procedure: { duration: "15~30분", anesthesia: "불필요", sessions: "5~10회", interval: "2~4주" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음~1일", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["기미", "색소"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["색소효과", "다운타임적음"], cons: ["여러회"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: ["자외선차단"] }, pricing: { range: "8~20만원/회", average: "12만원", factors: ["장비"] }, comparison: { vs: { "토닝": "피코가더효과적" }, bestWith: ["미백주사"] }, tags: ["피코", "기미", "색소"] },

    { id: "vbeam", name: "브이빔", nameEn: "V-Beam Perfecta", brand: "Candela", category: "색소/미백", subcategory: "혈관레이저", mechanism: {detailed: "펄스다이레이저 헤모글로빈흡수", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["홍조", "혈관"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "브이빔 퍼펙타는 595nm 펄스다이 레이저로 혈관만 선택적으로 치료합니다. 홍조, 혈관종, 붉은 여드름 자국에 가장 효과적인 혈관 레이저입니다.",
                "likes": [
                        "혈관만 선택적 치료",
                        "홍조 개선에 탁월",
                        "붉은 여드름 자국 효과적",
                        "DCD 냉각으로 통증 최소화",
                        "다운타임 적음"
                ],
                "dislikes": [
                        "5~10회 반복 필요",
                        "멍이 들 수 있음",
                        "완치 아닌 관리 개념",
                        "유지 시술 필요"
                ],
                "tips": [
                        "3~4주 간격 권장",
                        "자외선 차단 필수",
                        "IPL과 병행 가능",
                        "강하게 맞으면 멍 1~2주"
                ],
                "overall": "홍조, 붉은 여드름 자국이 고민이라면 첫 번째로 고려해야 할 레이저입니다."
        }, effects: { primary: ["홍조", "혈관"], secondary: ["여드름홍반"], notFor: ["기미"], onsetTime: "1~3회후", duration: "유지관리" }, procedure: { duration: "15~30분", anesthesia: "불필요", sessions: "3~5회", interval: "3~4주" }, recovery: { painLevel: 1.5, painDescription: "고무줄튕김", downtime: "없음~3일", commonSideEffects: ["홍반", "멍"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["홍조", "모세혈관"], notRecommended: ["광과민증"], skinType: "밝은피부" }, pros: ["홍조효과"], cons: ["멍가능"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "10~25만원/회", average: "15만원", factors: ["부위"] }, comparison: { vs: { "IPL": "브이빔=혈관특화" }, bestWith: ["진정관리"] }, tags: ["혈관", "홍조", "PDL"] },

    { id: "excelv", name: "엑셀브이", nameEn: "Excel V", brand: "Cutera", category: "색소/미백", subcategory: "혈관레이저", mechanism: {detailed: "듀얼파장 선택적흡수", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["홍조", "혈관"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "엑셀브이는 532nm와 1064nm 듀얼 파장으로 혈관과 색소를 동시에 치료하는 프리미엄 레이저입니다. 브이빔보다 다양한 피부 문제에 대응합니다.",
                "likes": [
                        "혈관 + 색소 동시 치료",
                        "듀얼 파장으로 다양한 적응증",
                        "제네시스 모드로 탄력까지",
                        "브이빔보다 범용적",
                        "FDA 승인"
                ],
                "dislikes": [
                        "가격이 높음",
                        "5~10회 필요",
                        "효과 나타나기까지 시간 필요",
                        "병원마다 세팅 다름"
                ],
                "tips": [
                        "홍조+색소 동시 고민에 최적",
                        "제네시스 모드 병행 추천",
                        "3~4주 간격",
                        "브이빔과 비교 상담"
                ],
                "overall": "홍조와 색소 문제를 동시에 해결하고 싶다면 좋은 선택입니다."
        }, effects: { primary: ["혈관", "색소"], secondary: ["피부톤"], notFor: ["리프팅"], onsetTime: "2~3회후", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "3~5회", interval: "3~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["홍반", "딱지"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["혈관+색소"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["혈관+색소동시"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "15~30만원/회", average: "20만원", factors: [] }, comparison: { vs: { "브이빔": "엑셀브이=듀얼" }, bestWith: ["토닝"] }, tags: ["혈관", "색소", "듀얼"] },

    { id: "co2mole", name: "CO2점제거", nameEn: "CO2 Mole Removal", brand: "다양", category: "점/사마귀", subcategory: "레이저", mechanism: {detailed: "10600nm 물분자흡수 조직기화", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["점", "사마귀"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "CO2 레이저 점제거는 탄산가스 레이저로 점, 사마귀, 검버섯 등을 깎아내는 시술입니다. 즉각적인 제거가 가능하지만 관리가 중요합니다.",
                "likes": [
                        "즉각적인 점 제거",
                        "다양한 병변 제거 가능",
                        "비교적 저렴",
                        "한 번에 여러 개 가능",
                        "검증된 방법"
                ],
                "dislikes": [
                        "1~2주 딱지 관리 필요",
                        "색소침착 가능성",
                        "재발 가능",
                        "깊은 점은 흉터 위험"
                ],
                "tips": [
                        "재생테이프 잘 붙이기",
                        "딱지 억지로 떼지 말기",
                        "자외선 차단 필수",
                        "가을/겨울 추천"
                ],
                "overall": "점 제거의 기본이자 정석입니다. 관리만 잘하면 깔끔하게 제거됩니다."
        }, effects: { primary: ["점제거"], secondary: [], notFor: ["색소"], onsetTime: "즉각(딱지후)", duration: "영구적" }, procedure: { duration: "10~30분", anesthesia: "국소마취", sessions: "1~2회", interval: "필요시" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "7~14일", commonSideEffects: ["딱지"], recoveryTips: ["딱지뜯지않기"] }, suitability: { idealAge: "전연령", bestFor: ["점", "사마귀"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["깔끔제거"], cons: ["흉터가능"], safety: {
        seriousSideEffects: ["흉터"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "5천~3만원/개", average: "1만원/개", factors: ["크기"] }, comparison: { vs: {}, bestWith: ["재생연고"] }, tags: ["점제거", "CO2"] },

    { id: "hydrafacial", name: "하이드라페이셜", nameEn: "HydraFacial", brand: "Edge Systems", category: "스킨케어", subcategory: "클렌징", mechanism: {detailed: "보텍스석션 노폐물제거", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "15~50세", youngWarning: null },
      concerns: { primary: ["모공", "피부결"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "하이드라페이셜은 물광 피부관리의 대명사로, 딥클렌징과 수분 공급을 동시에 제공합니다. 피부과 관리의 기본 코스입니다.",
                "likes": [
                        "딥클렌징 + 수분 동시",
                        "즉각적인 피부결 개선",
                        "다운타임 없음",
                        "다른 시술 전 베이스로 좋음",
                        "모든 피부 타입 가능"
                ],
                "dislikes": [
                        "효과 지속 1~2주로 짧음",
                        "정기적 관리 필요",
                        "근본적 피부 개선 아님",
                        "자주 받으면 비용 부담"
                ],
                "tips": [
                        "월 1~2회 정기 관리",
                        "중요 행사 전날 추천",
                        "레이저 전 베이스로",
                        "압출은 적당히"
                ],
                "overall": "피부 관리의 기본! 다른 시술과 병행하면 효과가 배가됩니다."
        }, effects: { primary: ["모공청소", "보습"], secondary: ["톤업"], notFor: ["리프팅"], onsetTime: "즉각", duration: "2~4주" }, procedure: { duration: "30~40분", anesthesia: "불필요", sessions: "정기관리", interval: "2~4주" }, recovery: { painLevel: 0.5, painDescription: "시원함", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: ["바로화장"] }, suitability: { idealAge: "10대~50대", bestFor: ["모공", "피지"], notRecommended: ["활동성여드름"], skinType: "모든피부" }, pros: ["무통증", "즉각투명"], cons: ["효과짧음"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["활동성피부염"], warnings: [] }, pricing: { range: "10~25만원/회", average: "15만원", factors: ["단계"] }, comparison: { vs: { "아쿠아필": "유사" }, bestWith: ["토닝"] }, tags: ["클렌징", "모공"] },

    { id: "aquapeel", name: "아쿠아필", nameEn: "AquaPeel", brand: "다양", category: "스킨케어", subcategory: "클렌징", mechanism: {detailed: "물+공기압 노폐물제거", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "15~50세", youngWarning: null },
      concerns: { primary: ["모공", "피부결"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "아쿠아필은 물과 산소를 이용한 필링으로, 모공 속 노폐물을 제거하고 수분을 공급합니다. 하이드라페이셜과 유사한 효과입니다.",
                "likes": [
                        "자극 적은 물필링",
                        "모공 딥클렌징",
                        "수분 공급",
                        "다운타임 없음",
                        "하이드라페이셜 대안"
                ],
                "dislikes": [
                        "효과 지속 짧음",
                        "하이드라페이셜보다 약함",
                        "정기적 관리 필요",
                        "근본 치료 아님"
                ],
                "tips": [
                        "2주 간격 정기 관리",
                        "여드름 피부에 도움",
                        "MTS 전 베이스로",
                        "하이드라페이셜과 비교"
                ],
                "overall": "순하고 자극 적은 물 필링을 원한다면 좋은 선택입니다."
        }, effects: { primary: ["모공청소"], secondary: ["톤업"], notFor: ["리프팅"], onsetTime: "즉각", duration: "2~4주" }, procedure: { duration: "30~40분", anesthesia: "불필요", sessions: "정기관리", interval: "2~4주" }, recovery: { painLevel: 0.5, painDescription: "시원함", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: ["바로화장"] }, suitability: { idealAge: "10대~50대", bestFor: ["모공"], notRecommended: ["심한염증"], skinType: "모든피부" }, pros: ["무통증"], cons: ["효과짧음"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["활동성염증"], warnings: [] }, pricing: { range: "5~15만원/회", average: "10만원", factors: [] }, comparison: { vs: { "하이드라페이셜": "유사" }, bestWith: ["토닝"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "15~50세", youngWarning: null },
      concerns: { primary: ["모공", "피부결", "블랙헤드"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      tags: ["클렌징", "모공"] },

    { id: "led", name: "LED테라피", nameEn: "LED Therapy", brand: "다양", category: "스킨케어", subcategory: "광선치료", mechanism: {detailed: "빨강=재생, 파랑=살균", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 12, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["피부진정", "재생"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "LED 테라피는 특정 파장의 빛으로 피부 재생, 진정, 여드름 치료 등 다양한 효과를 제공합니다. 다른 시술 후 마무리로 좋습니다.",
                "likes": [
                        "무통증, 무자극",
                        "다양한 효과 (색상별)",
                        "다운타임 없음",
                        "다른 시술과 병행 용이",
                        "편안한 힐링"
                ],
                "dislikes": [
                        "단독 효과 약함",
                        "여러 회차 필요",
                        "즉각 효과 미미",
                        "보조 시술 개념"
                ],
                "tips": [
                        "레이저 후 마무리로 최적",
                        "빨강: 재생/탄력, 파랑: 여드름",
                        "주 1~2회 꾸준히",
                        "홈디바이스로도 가능"
                ],
                "overall": "다른 시술의 효과를 높여주는 훌륭한 보조 시술입니다."
        }, effects: { primary: ["재생", "진정"], secondary: ["여드름"], notFor: ["리프팅"], onsetTime: "꾸준히", duration: "유지관리" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "정기관리", interval: "주1~3회" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: ["바로일상"] }, suitability: { idealAge: "전연령", bestFor: ["진정", "재생"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["무통증", "부작용없음"], cons: ["단독효과미미"], safety: {
        seriousSideEffects: ["없음"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "1~5만원/회", average: "3만원", factors: [] }, comparison: { vs: {}, bestWith: ["모든시술후"] }, tags: ["LED", "진정"] },

    { id: "coolsculpting", name: "쿨스컬프팅", nameEn: "CoolSculpting", brand: "Allergan", category: "바디/지방", subcategory: "냉각지방", mechanism: {detailed: "크라이오리폴리시스 지방사멸", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["지방", "바디라인"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "쿨스컬프팅은 냉각으로 지방세포를 파괴하는 비수술 지방감소 시술입니다. FDA 승인된 안전한 시술로 부분 지방 감소에 효과적입니다.",
                "likes": [
                        "비수술 지방감소",
                        "FDA 승인 안전성",
                        "다운타임 적음",
                        "부분 지방에 효과적",
                        "자연스러운 감소"
                ],
                "dislikes": [
                        "비용 높음",
                        "2~3개월 후 효과 확인",
                        "전체 다이어트 아님",
                        "2~3회 필요할 수 있음"
                ],
                "tips": [
                        "복부, 옆구리, 팔뚝 등 부분 지방에",
                        "다이어트 병행 필수",
                        "2~3개월 후 판단",
                        "운동, 식단과 함께"
                ],
                "overall": "부분 지방이 고민이지만 수술은 부담스러운 분에게 좋습니다."
        }, effects: { primary: ["지방감소"], secondary: [], notFor: ["체중감량"], onsetTime: "2~3개월", duration: "영구적" }, procedure: { duration: "35~60분/부위", anesthesia: "불필요", sessions: "1~2회", interval: "2~3개월" }, recovery: { painLevel: 1.5, painDescription: "냉감", downtime: "없음", commonSideEffects: ["붓기", "저림"], recoveryTips: ["마사지"] }, suitability: { idealAge: "20대~50대", bestFor: ["국소지방"], notRecommended: ["냉감과민"], skinType: "무관" }, pros: ["비침습", "FDA승인"], cons: ["효과느림"], safety: {
        seriousSideEffects: ["지방역설"], contraindications: ["한랭과민"], warnings: [] }, pricing: { range: "40~80만원/부위", average: "50만원", factors: ["부위"] }, comparison: { vs: { "지방분해주사": "쿨스컬프팅=무통증" }, bestWith: ["인모드바디"] }, tags: ["지방", "냉각", "바디"] },

    { id: "emsculpt", name: "엠스컬프", nameEn: "Emsculpt", brand: "BTL", category: "바디/지방", subcategory: "근육강화", mechanism: {detailed: "전자기장 초극대수축", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["근육", "바디라인"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "엠스컬프는 고강도 전자기장으로 근육을 강화하고 지방을 감소시킵니다. 운동 없이 근육을 키울 수 있는 바디 시술입니다.",
                "likes": [
                        "근육 강화 + 지방 감소 동시",
                        "운동 효과",
                        "비수술, 다운타임 없음",
                        "30분 = 2만 번 근수축",
                        "복근, 힙업 효과"
                ],
                "dislikes": [
                        "4회 이상 필요",
                        "유지 위해 지속 필요",
                        "비용 높음",
                        "운동 대체는 아님"
                ],
                "tips": [
                        "4회 1세트 권장",
                        "운동과 병행하면 시너지",
                        "복부, 엉덩이, 허벅지",
                        "쿨스컬프팅과 병행"
                ],
                "overall": "운동의 보조제로 생각하면 좋습니다. 운동 대체는 아닙니다."
        }, effects: { primary: ["근육강화", "지방감소"], secondary: ["힙업"], notFor: ["체중감량"], onsetTime: "2~4주", duration: "6개월~1년" }, procedure: { duration: "30분/부위", anesthesia: "불필요", sessions: "4~6회", interval: "2~3일" }, recovery: { painLevel: 1, painDescription: "근육운동감", downtime: "없음", commonSideEffects: ["근육통"], recoveryTips: ["바로일상"] }, suitability: { idealAge: "20대~50대", bestFor: ["복근", "힙업"], notRecommended: ["페이스메이커"], skinType: "무관" }, pros: ["운동효과", "무통증"], cons: ["유지운동필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "20~40만원/회", average: "30만원", factors: [] }, comparison: { vs: { "쿨스컬프팅": "엠스컬프=근육" }, bestWith: ["쿨스컬프팅"] }, tags: ["근육", "HIFEM", "바디"] },

    { id: "miradry", name: "미라드라이", nameEn: "miraDry", brand: "miraDry", category: "다한증/액취", subcategory: "마이크로웨이브", mechanism: {detailed: "땀샘/냄새샘 영구파괴", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 60, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["다한증", "액취증"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "미라드라이는 마이크로파로 땀샘을 영구적으로 파괴하는 다한증/액취증 치료입니다. 1~2회로 영구적 효과를 기대할 수 있습니다.",
                "likes": [
                        "영구적 효과",
                        "1~2회로 완료",
                        "수술 없이 해결",
                        "FDA 승인",
                        "액취증 동시 개선"
                ],
                "dislikes": [
                        "시술 후 붓기/통증 1~2주",
                        "비용 높음",
                        "일부 재발 가능",
                        "겨드랑이 전용"
                ],
                "tips": [
                        "여름 전 미리 시술",
                        "1~2주 붓기 각오",
                        "2회 권장",
                        "보톡스보다 영구적"
                ],
                "overall": "겨드랑이 다한증/액취증의 근본적 해결책입니다."
        }, effects: { primary: ["다한증개선", "액취감소"], secondary: [], notFor: ["손발다한증"], onsetTime: "즉각", duration: "영구적" }, procedure: { duration: "60~90분", anesthesia: "국소마취", sessions: "1~2회", interval: "3개월" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기", "저림"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "10대~50대", bestFor: ["겨드랑이다한증"], notRecommended: ["페이스메이커"], skinType: "무관" }, pros: ["영구적", "수술아님"], cons: ["비용높음"], safety: {
        seriousSideEffects: ["신경손상"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "150~250만원", average: "200만원", factors: [] }, comparison: { vs: { "보톡스다한증": "미라드라이=영구" }, bestWith: [] }, tags: ["다한증", "액취", "영구"] },

    { id: "larapeel", name: "라라필", nameEn: "Lara Peel", brand: "다양", category: "필링", subcategory: "화학필링", mechanism: {detailed: "AHA+레티놀 피부재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 60, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["피부결", "각질"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "라라필은 순한 산 성분으로 각질을 제거하고 피부결을 개선하는 필링입니다. 다운타임이 적어 일상 필링으로 적합합니다.",
                "likes": [
                        "순한 필링",
                        "다운타임 적음",
                        "피부결 개선",
                        "모공 관리",
                        "다른 시술과 병행 용이"
                ],
                "dislikes": [
                        "효과가 순함",
                        "여러 회차 필요",
                        "깊은 치료 불가",
                        "즉각 효과 약함"
                ],
                "tips": [
                        "2주 간격 정기 관리",
                        "여드름 피부에 도움",
                        "레이저 전 베이스로",
                        "자극 적어 입문용"
                ],
                "overall": "필링 입문자나 민감 피부에게 추천하는 순한 필링입니다."
        }, effects: { primary: ["각질", "피부결"], secondary: ["톤업"], notFor: ["리프팅"], onsetTime: "1~2주", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "4~6회", interval: "2~3주" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "2~5일", commonSideEffects: ["각질", "홍반"], recoveryTips: ["보습", "자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["칙칙함", "각질"], notRecommended: ["민감성"], skinType: "지성" }, pros: ["피부결개선"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["피부염"], warnings: ["자외선차단"] }, pricing: { range: "5~15만원/회", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, tags: ["필링", "각질"] },

    { id: "soprano", name: "소프라노아이스", nameEn: "Soprano Ice", brand: "Alma", category: "제모", subcategory: "레이저", mechanism: {detailed: "저출력반복조사 모낭파괴", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["제모", "털"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "소프라노는 축적 방식(SHR)의 대표적인 레이저 제모 장비입니다. 통증이 적고 모든 피부 타입에 안전하게 사용할 수 있습니다.",
                "likes": [
                        "통증 적음 (온열 마사지 느낌)",
                        "모든 피부 타입 가능",
                        "여름에도 시술 가능",
                        "넓은 부위 빠른 시술",
                        "안전성 검증"
                ],
                "dislikes": [
                        "10회 이상 필요",
                        "완전 제모 어려움",
                        "가는 털 효과 제한",
                        "유지 관리 필요"
                ],
                "tips": [
                        "4~6주 간격 권장",
                        "10회 이상 계획",
                        "겨울에 시작하면 여름에 효과",
                        "제모 전 면도만"
                ],
                "overall": "통증에 민감한 분에게 추천하는 레이저 제모입니다."
        }, effects: { primary: ["영구제모"], secondary: [], notFor: ["흰털"], onsetTime: "5~6회후", duration: "영구감모" }, procedure: { duration: "부위별", anesthesia: "불필요", sessions: "6~10회", interval: "4~6주" }, recovery: { painLevel: 1, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "10대~50대", bestFor: ["통증민감자"], notRecommended: ["흰털"], skinType: "모든피부톤" }, pros: ["무통증", "빠름"], cons: ["여러회"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: { "젠틀맥스": "소프라노=무통증" }, bestWith: [] }, tags: ["제모", "무통증"] },

    { id: "gentlemax", name: "젠틀맥스프로", nameEn: "GentleMax Pro", brand: "Candela", category: "제모", subcategory: "레이저", mechanism: {detailed: "알렉산드라이트+야그 듀얼", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["제모", "털"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "젠틀맥스 프로는 알렉산드라이트와 엔디야그 듀얼 파장으로 다양한 피부 타입에 효과적인 레이저 제모 장비입니다.",
                "likes": [
                        "듀얼 파장으로 다양한 대응",
                        "굵은 털에 효과적",
                        "색소 치료도 가능",
                        "검증된 장비",
                        "빠른 효과"
                ],
                "dislikes": [
                        "통증 있음",
                        "5~10회 필요",
                        "피부 어두우면 주의",
                        "여름 시술 주의"
                ],
                "tips": [
                        "4~6주 간격",
                        "굵은 털에 효과적",
                        "755nm가 제모에 최적",
                        "통증 있지만 효과 빠름"
                ],
                "overall": "효과적인 레이저 제모를 원한다면 젠틀맥스가 정석입니다."
        }, effects: { primary: ["영구제모"], secondary: [], notFor: ["흰털"], onsetTime: "5~6회후", duration: "영구감모" }, procedure: { duration: "부위별", anesthesia: "쿨링", sessions: "6~10회", interval: "4~6주" }, recovery: { painLevel: 2, painDescription: "고무줄튕김", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "10대~50대", bestFor: ["제모"], notRecommended: ["흰털"], skinType: "모든피부톤" }, pros: ["듀얼파장", "효과적"], cons: ["통증"], safety: {
        seriousSideEffects: ["화상"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: { "소프라노": "젠틀맥스=효과적" }, bestWith: [] }, tags: ["제모", "듀얼"] },

    { id: "nasolabial", name: "팔자필러", nameEn: "Nasolabial Filler", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "볼륨으로 그림자제거", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 70, optimal: "35~60세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["팔자주름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "팔자주름 필러는 히알루론산을 팔자주름에 주입해 볼륨을 채우고 주름을 개선합니다. 즉각적인 효과를 볼 수 있습니다.",
                "likes": [
                        "즉각적인 주름 개선",
                        "자연스러운 볼륨",
                        "시술 시간 짧음",
                        "녹일 수 있음 (HA)",
                        "1년 내외 유지"
                ],
                "dislikes": [
                        "6~12개월 후 재시술",
                        "멍/붓기 가능",
                        "과주입 시 부자연스러움",
                        "비용 부담"
                ],
                "tips": [
                        "소량으로 자연스럽게",
                        "스컬트라와 병행 고려",
                        "경험 많은 의사 선택",
                        "볼 필러와 같이 하면 시너지"
                ],
                "overall": "팔자주름 개선의 가장 즉각적인 방법입니다."
        }, effects: { primary: ["팔자주름"], secondary: ["동안"], notFor: ["탄력"], onsetTime: "즉각", duration: "6~12개월" }, procedure: { duration: "15~20분", anesthesia: "마취크림", sessions: "1회", interval: "6~12개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "1~3일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "30대~60대", bestFor: ["팔자주름"], notRecommended: ["켈로이드"], skinType: "무관" }, pros: ["즉각효과"], cons: ["유지필요"], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: ["자가면역"], warnings: ["숙련자에게"] }, pricing: { range: "30~60만원", average: "40만원", factors: [] }, comparison: { vs: {}, bestWith: ["보톡스"] }, tags: ["필러", "팔자"] },

    { id: "chin", name: "턱필러", nameEn: "Chin Filler", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "V라인효과", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["턱윤곽"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "턱 필러는 히알루론산으로 턱 끝 볼륨을 높여 얼굴 비율을 개선합니다. V라인 효과와 측면 라인 개선에 효과적입니다.",
                "likes": [
                        "즉각적인 턱 라인 개선",
                        "V라인 효과",
                        "옆얼굴 라인 개선",
                        "수술 없이 해결",
                        "녹일 수 있음"
                ],
                "dislikes": [
                        "1~2년 후 재시술",
                        "과주입 시 부자연스러움",
                        "멍/붓기 가능",
                        "무턱 심하면 수술 고려"
                ],
                "tips": [
                        "소량으로 자연스럽게",
                        "보톡스와 병행하면 효과적",
                        "측면 라인 중요",
                        "과주입 주의"
                ],
                "overall": "무턱 콤플렉스를 수술 없이 해결할 수 있는 좋은 방법입니다."
        }, effects: { primary: ["턱라인", "V라인"], secondary: [], notFor: ["탄력"], onsetTime: "즉각", duration: "12~18개월" }, procedure: { duration: "15~20분", anesthesia: "마취크림", sessions: "1회", interval: "1~1.5년" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "1~5일", commonSideEffects: ["붓기"], recoveryTips: ["턱괴지않기"] }, suitability: { idealAge: "20대~50대", bestFor: ["무턱", "V라인"], notRecommended: ["턱긴경우"], skinType: "무관" }, pros: ["즉각윤곽"], cons: ["유지필요"], safety: {
        seriousSideEffects: ["이동"], contraindications: ["감염"], warnings: [] }, pricing: { range: "30~60만원", average: "40만원", factors: [] }, comparison: { vs: {}, bestWith: ["광대필러"] }, tags: ["필러", "턱", "윤곽"] },

    { id: "undereye", name: "다크서클필러", nameEn: "Under Eye Filler", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "음영제거", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["다크서클"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      
      review: {
                "summary": "다크서클 필러는 눈밑 꺼짐에 히알루론산을 주입해 그림자를 개선합니다. 미세 카뉼라로 안전하게 시술합니다.",
                "likes": [
                        "즉각적인 눈밑 개선",
                        "그림자형 다크서클에 효과적",
                        "피곤해 보이는 인상 개선",
                        "녹일 수 있음",
                        "짧은 시술"
                ],
                "dislikes": [
                        "틴들 현상 (파랗게 비침) 가능",
                        "눈밑 피부 얇아 멍 잘 듦",
                        "6~12개월 유지",
                        "색소형엔 효과 없음"
                ],
                "tips": [
                        "꺼짐형에만 효과적",
                        "색소형은 레이저로",
                        "경험 많은 의사 필수",
                        "소량씩 여러 번"
                ],
                "overall": "눈밑 꺼짐으로 인한 그림자 다크서클에 효과적입니다."
        }, effects: { primary: ["다크서클"], secondary: [], notFor: ["색소형"], onsetTime: "즉각", duration: "6~12개월" }, procedure: { duration: "15~20분", anesthesia: "마취크림", sessions: "1회", interval: "6~12개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "20대~50대", bestFor: ["눈밑꺼짐"], notRecommended: ["색소형"], skinType: "무관" }, pros: ["즉각개선"], cons: ["멍가능"], safety: {
        seriousSideEffects: ["뭉침"], contraindications: ["눈질환"], warnings: ["경험많은의사"] }, pricing: { range: "30~50만원", average: "40만원", factors: [] }, comparison: { vs: {}, bestWith: ["보톡스"] }, tags: ["필러", "다크서클"] },

    { id: "lip", name: "입술필러", nameEn: "Lip Filler", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "입술볼륨+모양보정", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "22~50세", youngWarning: null },
      concerns: { primary: ["입술볼륨"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "입술 필러는 히알루론산으로 입술 볼륨을 높이고 윤곽을 다듬습니다. M자 입술, 하트 입술 등 다양한 모양이 가능합니다.",
                "likes": [
                        "즉각적인 볼륨 업",
                        "다양한 모양 가능",
                        "녹일 수 있음",
                        "짧은 시술",
                        "촉촉해 보이는 효과"
                ],
                "dislikes": [
                        "붓기 2~3일",
                        "6~12개월 유지",
                        "오버하면 부자연스러움",
                        "초기 불편감"
                ],
                "tips": [
                        "자연스럽게 소량부터",
                        "M자 라인 살리기",
                        "상하 밸런스 중요",
                        "첫 시술은 보수적으로"
                ],
                "overall": "얇은 입술, 볼륨 없는 입술 고민에 즉각적인 해결책입니다."
        }, effects: { primary: ["입술볼륨"], secondary: [], notFor: [], onsetTime: "즉각", duration: "6~12개월" }, procedure: { duration: "15~20분", anesthesia: "마취크림", sessions: "1회", interval: "6~12개월" }, recovery: { painLevel: 2.5, painDescription: "예민부위", downtime: "3~7일", commonSideEffects: ["붓기"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "20대~40대", bestFor: ["얇은입술"], notRecommended: ["헤르페스활성"], skinType: "무관" }, pros: ["자연스러움", "녹임가능"], cons: ["붓기"], safety: {
        seriousSideEffects: ["뭉침"], contraindications: ["헤르페스"], warnings: [] }, pricing: { range: "20~50만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필러", "입술"] },

    { id: "forehead-botox", name: "이마보톡스", nameEn: "Forehead Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "전두근이완 가로주름개선", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 70, optimal: "25~60세", youngWarning: null },
      concerns: { primary: ["이마주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "이마 보톡스는 이마 가로주름을 개선하고 눈썹을 올려주는 효과가 있습니다. 자연스러운 표정 유지가 중요합니다.",
                "likes": [
                        "이마 주름 개선",
                        "눈썹 리프팅 효과",
                        "짧은 시술",
                        "3~6개월 유지",
                        "검증된 효과"
                ],
                "dislikes": [
                        "눈썹 처짐 가능",
                        "표정 어색할 수 있음",
                        "3~6개월마다 재시술",
                        "미간과 함께 해야 자연스러움"
                ],
                "tips": [
                        "미간 보톡스와 함께",
                        "소량으로 자연스럽게",
                        "눈썹 처짐 주의",
                        "첫 시술은 보수적으로"
                ],
                "overall": "이마 주름의 기본적인 해결책이지만 눈썹 처짐 주의가 필요합니다."
        }, effects: { primary: ["이마주름"], secondary: [], notFor: ["볼륨"], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "10분", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: ["4시간눕지않기"] }, suitability: { idealAge: "20대~60대", bestFor: ["이마주름"], notRecommended: ["눈썹처짐"], skinType: "무관" }, pros: ["빠른효과"], cons: ["눈썹처짐가능"], safety: {
        seriousSideEffects: ["눈썹처짐"], contraindications: ["신경근육질환"], warnings: ["적정용량"] }, pricing: { range: "5~15만원", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["눈가보톡스"] }, tags: ["보톡스", "이마"] },

    { id: "glabella-botox", name: "미간보톡스", nameEn: "Glabella Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "추미근이완", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 70, optimal: "25~60세", youngWarning: null },
      concerns: { primary: ["미간주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "미간 보톡스는 미간 세로주름(11자 주름)을 개선합니다. 인상이 부드러워지고 화난 표정이 개선됩니다.",
                "likes": [
                        "11자 주름 개선",
                        "인상 부드러워짐",
                        "화난 표정 개선",
                        "즉각적 효과",
                        "3~6개월 유지"
                ],
                "dislikes": [
                        "3~6개월마다 재시술",
                        "과하면 표정 어색",
                        "두통 가능성",
                        "이마와 함께 해야 자연스러움"
                ],
                "tips": [
                        "이마 보톡스와 함께",
                        "눈썹 올리는 습관 주의",
                        "적정량 중요",
                        "주름 깊으면 필러 병행"
                ],
                "overall": "미간 주름으로 화나 보인다면 가장 먼저 고려할 시술입니다."
        }, effects: { primary: ["미간주름"], secondary: [], notFor: ["볼륨"], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "5분", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: ["눕지않기"] }, suitability: { idealAge: "20대~60대", bestFor: ["11자주름"], notRecommended: [], skinType: "무관" }, pros: ["인상개선"], cons: ["반복필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "3~10만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["이마보톡스"] }, tags: ["보톡스", "미간"] },

    { id: "crowfeet-botox", name: "눈가보톡스", nameEn: "Crow's Feet Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "안륜근이완 까치발개선", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 70, optimal: "30~60세", youngWarning: null },
      concerns: { primary: ["눈가주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "눈가 보톡스(까마귀발)는 눈꼬리 주름을 개선합니다. 웃을 때 생기는 잔주름이 줄어들고 눈매가 또렷해집니다.",
                "likes": [
                        "눈가 잔주름 개선",
                        "눈매 또렷해짐",
                        "자연스러운 효과",
                        "짧은 시술",
                        "3~6개월 유지"
                ],
                "dislikes": [
                        "웃을 때 어색할 수 있음",
                        "3~6개월 재시술",
                        "눈 주변이라 멍 가능",
                        "과하면 부자연스러움"
                ],
                "tips": [
                        "소량으로 자연스럽게",
                        "웃을 때 주름만 타겟",
                        "눈밑 보톡스와 구분",
                        "표정 유지 중요"
                ],
                "overall": "눈가 잔주름을 자연스럽게 개선하는 가장 효과적인 방법입니다."
        }, effects: { primary: ["눈가주름"], secondary: [], notFor: ["눈밑꺼짐"], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "5~10분", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "20대~60대", bestFor: ["웃을때주름"], notRecommended: [], skinType: "무관" }, pros: ["자연스러움"], cons: ["반복필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "5~15만원", average: "8만원", factors: [] }, comparison: { vs: {}, bestWith: ["이마보톡스"] }, tags: ["보톡스", "눈가"] },

    { id: "masseter-botox", name: "사각턱보톡스", nameEn: "Masseter Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "저작근위축 V라인", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["사각턱"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "사각턱 보톡스는 교근에 보톡스를 주입해 턱 라인을 갸름하게 만듭니다. V라인 효과와 이갈이 개선 효과가 있습니다.",
                "likes": [
                        "V라인 효과",
                        "이갈이/이악물기 개선",
                        "두통 완화 효과",
                        "수술 없이 윤곽 개선",
                        "3~6개월 유지"
                ],
                "dislikes": [
                        "3~6개월 재시술 필요",
                        "근육 줄면 처짐 가능",
                        "효과 나타나기 2~4주",
                        "식사 시 불편할 수 있음"
                ],
                "tips": [
                        "2~4주 후 효과 확인",
                        "지속 시 근육 자체가 작아짐",
                        "처짐 우려 시 리프팅 병행",
                        "이갈이 있으면 일석이조"
                ],
                "overall": "수술 없이 사각턱을 개선하는 가장 대중적인 방법입니다."
        }, effects: { primary: ["사각턱축소"], secondary: ["이갈이"], notFor: ["뼈형사각턱"], onsetTime: "2~4주", duration: "4~6개월" }, procedure: { duration: "10분", anesthesia: "불필요", sessions: "1회", interval: "4~6개월" }, recovery: { painLevel: 1.5, painDescription: "뻐근함", downtime: "없음", commonSideEffects: ["뻐근함"], recoveryTips: ["딱딱한음식피하기"] }, suitability: { idealAge: "20대~50대", bestFor: ["근육형사각턱"], notRecommended: ["뼈형"], skinType: "무관" }, pros: ["비수술윤곽"], cons: ["반복필요"], safety: {
        seriousSideEffects: ["비대칭"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "10~30만원", average: "15만원", factors: [] }, comparison: { vs: {}, bestWith: ["턱필러"] }, tags: ["보톡스", "사각턱", "윤곽"] },

    { id: "trapezius-botox", name: "승모근보톡스", nameEn: "Trapezius Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "승모근위축 목길어보임", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["승모근"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "승모근 보톡스는 어깨 근육을 줄여 어깨라인을 매끈하게 만들고 목을 길어 보이게 합니다. 어깨 통증 완화 효과도 있습니다.",
                "likes": [
                        "어깨라인 매끈해짐",
                        "목이 길어 보이는 효과",
                        "어깨 뭉침/통증 완화",
                        "옷핏 개선",
                        "수술 없이 효과"
                ],
                "dislikes": [
                        "3~6개월 재시술 필요",
                        "용량 많이 필요 (비용 높음)",
                        "효과 나타나기 2~4주",
                        "팔 힘 약해질 수 있음"
                ],
                "tips": [
                        "50~100유닛 이상 필요",
                        "2~4주 후 효과 확인",
                        "지속시 근육 자체가 작아짐",
                        "웨딩 전 인기 시술"
                ],
                "overall": "어깨가 넓고 승모근이 발달한 분에게 옷핏 개선 효과가 큽니다."
        }, effects: { primary: ["어깨라인"], secondary: ["통증완화"], notFor: ["뼈구조"], onsetTime: "2~4주", duration: "4~6개월" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "1회", interval: "4~6개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "없음", commonSideEffects: ["뻐근함"], recoveryTips: ["무거운것피하기"] }, suitability: { idealAge: "20대~40대", bestFor: ["뭉친승모근"], notRecommended: ["어깨약한분"], skinType: "무관" }, pros: ["드레스라인"], cons: ["대량주입필요"], safety: {
        seriousSideEffects: ["팔힘약화"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "30~60만원", average: "40만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["보톡스", "승모근"] },

    { id: "nabotas", name: "나보타", nameEn: "Nabota", brand: "대웅제약", category: "주름/보톡스", subcategory: "보톡스브랜드", mechanism: {detailed: "고순도보툴리눔톡신", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 70, optimal: "25~60세", youngWarning: null },
      concerns: { primary: ["주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "나보타는 국산 보톡스로 보툴렉스와 함께 가장 많이 사용됩니다. 가격 대비 효과가 좋고 안전성이 검증되었습니다.",
                "likes": [
                        "가성비 좋음",
                        "효과 검증됨",
                        "다양한 부위 사용",
                        "알레간 대비 저렴",
                        "국산 대표 브랜드"
                ],
                "dislikes": [
                        "지속 기간 개인차",
                        "수입산보다 짧다는 평도",
                        "브랜드별 효과 차이 있음",
                        "내성 가능성"
                ],
                "tips": [
                        "보톡스 입문용으로 적합",
                        "효과/지속 확인 후 브랜드 선택",
                        "병원마다 취급 브랜드 다름",
                        "정품 확인 중요"
                ],
                "overall": "국산 보톡스의 대표주자로 가성비를 원한다면 좋은 선택입니다."
        }, effects: { primary: ["주름", "윤곽"], secondary: [], notFor: [], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "부위별", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["보톡스시술"], notRecommended: ["보툴리눔알러지"], skinType: "무관" }, pros: ["FDA승인국산", "가성비"], cons: [], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: { "보톡스": "나보타=국산" }, bestWith: [] }, tags: ["보톡스", "나보타", "국산"] },

    { id: "dysport", name: "디스포트", nameEn: "Dysport", brand: "Ipsen", category: "주름/보톡스", subcategory: "보톡스브랜드", mechanism: {detailed: "넓은부위효과적", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 70, optimal: "25~60세", youngWarning: null },
      concerns: { primary: ["주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "디스포트는 영국산 보톡스로 퍼짐이 좋아 넓은 부위에 효과적입니다. 보톡스보다 빠른 효과 발현이 특징입니다.",
                "likes": [
                        "빠른 효과 발현",
                        "넓게 퍼지는 특성",
                        "이마/승모근에 효과적",
                        "자연스러운 표정",
                        "검증된 수입산"
                ],
                "dislikes": [
                        "퍼짐 때문에 정교한 시술 어려움",
                        "보톡스보다 지속 짧다는 평",
                        "눈가 등 세밀 부위 주의",
                        "가격 높음"
                ],
                "tips": [
                        "이마, 승모근 등 넓은 부위에",
                        "세밀한 부위는 보톡스가 나음",
                        "효과 빠르게 원하면 디스포트",
                        "병원마다 선호 다름"
                ],
                "overall": "넓은 부위나 빠른 효과를 원할 때 적합합니다."
        }, effects: { primary: ["주름", "넓은범위"], secondary: [], notFor: [], onsetTime: "2~5일", duration: "3~6개월" }, procedure: { duration: "부위별", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["이마", "승모근"], notRecommended: ["섬세부위"], skinType: "무관" }, pros: ["빠른효과", "넓은범위"], cons: ["퍼짐주의"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: { "보톡스": "디스포트=퍼짐좋음" }, bestWith: [] }, tags: ["보톡스", "디스포트"] },

    { id: "xeomin", name: "제오민", nameEn: "Xeomin", brand: "Merz", category: "주름/보톡스", subcategory: "보톡스브랜드", mechanism: {detailed: "복합단백질제거 내성적음", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 70, optimal: "25~60세", youngWarning: null },
      concerns: { primary: ["주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "제오민은 순수 보툴리눔 독소만 함유해 항체 형성이 적습니다. 보톡스 내성이 생긴 분에게 대안이 됩니다.",
                "likes": [
                        "항체 형성 적음",
                        "순수 독소 성분",
                        "보톡스 내성자 대안",
                        "알레르기 위험 낮음",
                        "자연스러운 효과"
                ],
                "dislikes": [
                        "효과 약하다는 평도",
                        "가격 높음",
                        "취급 병원 적음",
                        "대중성 낮음"
                ],
                "tips": [
                        "보톡스 효과 떨어진 분에게",
                        "알레르기 걱정되면 고려",
                        "병원에 취급 여부 확인",
                        "효과 비교 후 선택"
                ],
                "overall": "보톡스 내성이 있거나 알레르기가 걱정되는 분에게 추천합니다."
        }, effects: { primary: ["주름"], secondary: [], notFor: [], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "부위별", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["내성있는분"], notRecommended: [], skinType: "무관" }, pros: ["내성적음"], cons: ["효과시작느림"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: { "보톡스": "제오민=순수" }, bestWith: [] }, tags: ["보톡스", "제오민", "순수"] },

    { id: "voluma", name: "쥬비덤볼루마", nameEn: "Juvederm Voluma", brand: "Allergan", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "Vycross기술 리프팅용", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 65, optimal: "35~60세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["볼륨손실"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "볼루마는 알레간의 프리미엄 필러로 볼, 광대, 턱 등 볼륨이 필요한 부위에 사용합니다. 지속력이 길고 리프팅 효과가 있습니다.",
                "likes": [
                        "18~24개월 긴 지속력",
                        "리프팅 효과",
                        "볼륨감 우수",
                        "FDA 승인",
                        "자연스러운 결과"
                ],
                "dislikes": [
                        "가격 높음",
                        "볼륨 부위 전용",
                        "잔주름엔 부적합",
                        "녹이기 어려움 (HA지만 단단)"
                ],
                "tips": [
                        "볼, 관자놀이, 턱에 최적",
                        "리프팅 효과 원하면 볼루마",
                        "잔주름은 다른 필러로",
                        "경험 많은 의사 선택"
                ],
                "overall": "볼륨과 리프팅을 동시에 원하는 프리미엄 필러입니다."
        }, effects: { primary: ["볼륨", "광대", "턱"], secondary: ["리프팅"], notFor: ["잔주름"], onsetTime: "즉각", duration: "18~24개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1회", interval: "1.5~2년" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "30대~50대", bestFor: ["볼륨손실"], notRecommended: ["켈로이드"], skinType: "무관" }, pros: ["오래지속", "FDA승인"], cons: ["비용"], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: ["자가면역"], warnings: [] }, pricing: { range: "50~80만원/cc", average: "60만원", factors: [] }, comparison: { vs: {}, bestWith: ["보톡스"] }, tags: ["필러", "볼륨", "쥬비덤"] },

    { id: "restylane-lyft", name: "레스틸렌리프트", nameEn: "Restylane Lyft", brand: "Galderma", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "NASHA기술", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 65, optimal: "35~60세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["볼륨손실"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "레스틸렌 리프트는 갈더마의 볼륨용 필러로 볼루마와 함께 대표적인 리프팅 필러입니다. 볼, 광대, 턱 라인에 사용됩니다.",
                "likes": [
                        "볼륨 + 리프팅 효과",
                        "12~18개월 유지",
                        "자연스러운 결과",
                        "FDA 승인",
                        "검증된 브랜드"
                ],
                "dislikes": [
                        "가격 높음",
                        "붓기 있을 수 있음",
                        "볼륨 부위 전용",
                        "다른 레스틸렌과 구분 필요"
                ],
                "tips": [
                        "볼루마와 비교 상담",
                        "볼, 광대에 적합",
                        "자연스러운 리프팅 원하면",
                        "브랜드 선호도로 선택"
                ],
                "overall": "갈더마 선호자를 위한 볼륨/리프팅 필러입니다."
        }, effects: { primary: ["볼륨", "리프팅"], secondary: [], notFor: ["잔주름"], onsetTime: "즉각", duration: "12~18개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1회", interval: "1~1.5년" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "30대~50대", bestFor: ["볼륨"], notRecommended: ["켈로이드"], skinType: "무관" }, pros: ["검증된브랜드"], cons: ["비용"], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: ["자가면역"], warnings: [] }, pricing: { range: "40~70만원/cc", average: "50만원", factors: [] }, comparison: { vs: {}, bestWith: ["보톡스"] }, tags: ["필러", "레스틸렌"] },

    { id: "radiesse", name: "래디에스", nameEn: "Radiesse", brand: "Merz", category: "필러/볼륨", subcategory: "CaHA", mechanism: {detailed: "CaHA 콜라겐유도", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["볼륨손실"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      
      review: {
                "summary": "레디에세는 칼슘 기반 필러로 즉각 볼륨과 콜라겐 생성을 동시에 제공합니다. 코, 턱, 손등에 많이 사용됩니다.",
                "likes": [
                        "즉각 볼륨 + 콜라겐 생성",
                        "12~18개월 유지",
                        "코, 턱에 효과적",
                        "자연스러운 결과",
                        "검증된 성분"
                ],
                "dislikes": [
                        "녹일 수 없음 (비가역적)",
                        "입술 사용 불가",
                        "멍 가능",
                        "가격 높음"
                ],
                "tips": [
                        "녹일 수 없으니 신중하게",
                        "코, 턱, 손등에 적합",
                        "입술은 HA 필러로",
                        "경험 많은 의사 필수"
                ],
                "overall": "코, 턱 볼륨과 콜라겐 생성을 원한다면 좋지만, 비가역적이니 신중하게."
        }, effects: { primary: ["볼륨", "콜라겐"], secondary: ["탄력"], notFor: ["입술"], onsetTime: "즉각+점진", duration: "12~18개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1회", interval: "1~1.5년" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["볼륨+콜라겐"], notRecommended: ["녹여야할경우"], skinType: "무관" }, pros: ["콜라겐유도", "오래감"], cons: ["녹일수없음", "입술불가"], safety: {
        seriousSideEffects: ["결절"], contraindications: ["자가면역"], warnings: [] }, pricing: { range: "50~80만원/cc", average: "60만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필러", "칼슘"] },

    { id: "clear-brilliant", name: "클리어앤브릴리언트", nameEn: "Clear+Brilliant", brand: "Solta", category: "흉터/모공", subcategory: "프랙셔널", mechanism: {detailed: "저출력 재생유도", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 55, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["피부결", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "클리어브릴리언트는 순한 프락셔널 레이저로 다운타임이 적습니다. 피부결 개선과 모공 관리에 효과적인 '베이비 프락셀'입니다.",
                "likes": [
                        "순한 프락셔널",
                        "다운타임 1~2일로 짧음",
                        "피부결 개선",
                        "모공 관리",
                        "프락셀 입문용"
                ],
                "dislikes": [
                        "효과가 순함",
                        "여러 회차 필요",
                        "깊은 흉터엔 부족",
                        "프락셀보다 약함"
                ],
                "tips": [
                        "프락셀 입문용으로",
                        "2~4주 간격 5회 이상",
                        "관리 목적으로 적합",
                        "행사 3~5일 전 가능"
                ],
                "overall": "프락셀은 부담스럽지만 피부결 관리가 필요한 분에게 추천합니다."
        }, effects: { primary: ["피부결", "톤업"], secondary: ["모공"], notFor: ["깊은흉터"], onsetTime: "1~2주", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "4~6회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~40대", bestFor: ["피부결", "예방관리"], notRecommended: ["깊은흉터"], skinType: "모든피부" }, pros: ["다운타임적음"], cons: ["효과약함"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "15~30만원/회", average: "20만원", factors: [] }, comparison: { vs: { "프락셀": "소프트버전" }, bestWith: ["스킨부스터"] }, tags: ["프랙셔널", "피부결"] },

    { id: "subcision", name: "서브시전", nameEn: "Subcision", brand: "시술", category: "흉터/모공", subcategory: "흉터치료", mechanism: {detailed: "피하박리술", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["여드름흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      
      review: {
                "summary": "서브시전은 특수 바늘로 흉터 아래 섬유화 조직을 끊어 패인 흉터를 올리는 시술입니다. 롤링 스카 등 깊은 흉터에 효과적입니다.",
                "likes": [
                        "패인 흉터 올림 효과",
                        "롤링 스카에 효과적",
                        "다른 시술과 병행 가능",
                        "물리적 박리 효과",
                        "검증된 방법"
                ],
                "dislikes": [
                        "멍/붓기 1~2주",
                        "여러 회차 필요",
                        "깊은 아이스픽엔 효과 제한",
                        "시술자 숙련도 중요"
                ],
                "tips": [
                        "롤링 스카에 최적",
                        "프락셀, 필러와 병행",
                        "1~2주 다운타임 각오",
                        "3~5회 반복 권장"
                ],
                "overall": "패인 여드름 흉터(롤링 스카)의 핵심 치료법입니다."
        }, effects: { primary: ["패인흉터"], secondary: [], notFor: ["아이스픽"], onsetTime: "1~3개월", duration: "영구적" }, procedure: { duration: "30~60분", anesthesia: "국소마취", sessions: "2~4회", interval: "4~6주" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "7~14일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["압박", "마사지"] }, suitability: { idealAge: "20대~40대", bestFor: ["롤링흉터"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["근본개선"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "20~50만원/회", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: ["프락셀"] }, tags: ["흉터", "서브시전"] },

    { id: "tca-cross", name: "TCA CROSS", nameEn: "TCA CROSS", brand: "시술", category: "흉터/모공", subcategory: "흉터치료", mechanism: {detailed: "흉터바닥자극 재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["여드름흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      
      review: {
                "summary": "TCA 크로스는 고농도 TCA 산을 아이스픽 흉터에 점적해 흉터 바닥을 올리는 시술입니다. 깊고 좁은 흉터에 효과적입니다.",
                "likes": [
                        "아이스픽 흉터 특화",
                        "흉터 바닥 올림",
                        "비교적 저렴",
                        "국소 치료 가능",
                        "검증된 방법"
                ],
                "dislikes": [
                        "1~2주 딱지",
                        "색소침착 가능",
                        "여러 회차 필요",
                        "넓은 흉터엔 부적합"
                ],
                "tips": [
                        "아이스픽, 박스카에 효과적",
                        "4~6주 간격 3~5회",
                        "서브시전과 병행",
                        "색소침착 주의"
                ],
                "overall": "좁고 깊은 아이스픽 흉터의 핵심 치료법입니다."
        }, effects: { primary: ["아이스픽흉터"], secondary: [], notFor: ["넓은흉터"], onsetTime: "2~4주", duration: "점진개선" }, procedure: { duration: "15~30분", anesthesia: "불필요", sessions: "3~6회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따가움", downtime: "5~10일", commonSideEffects: ["딱지"], recoveryTips: ["딱지건드리지않기"] }, suitability: { idealAge: "20대~40대", bestFor: ["아이스픽흉터"], notRecommended: ["넓은흉터"], skinType: "밝은피부" }, pros: ["아이스픽특화"], cons: ["밝은피부적합"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "5~15만원/회", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["서브시전"] }, tags: ["흉터", "TCA"] },

    { id: "pdt", name: "PDT광역동", nameEn: "PDT", brand: "다양", category: "여드름/트러블", subcategory: "광선치료", mechanism: {detailed: "ALA+광조사 살균/피지선축소", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 50, optimal: "15~40세", youngWarning: null },
      concerns: { primary: ["여드름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "광역동치료(PDT)는 광감작제를 바르고 LED 빛을 쬐어 피지선을 억제하고 여드름균을 사멸시킵니다. 심한 여드름에 효과적입니다.",
                "likes": [
                        "피지선 억제",
                        "여드름균 사멸",
                        "염증성 여드름에 효과적",
                        "항생제 대안",
                        "피부 재생 효과"
                ],
                "dislikes": [
                        "2~3일 붉음/각질",
                        "광과민 반응 주의",
                        "여러 회차 필요",
                        "시술 후 햇빛 피해야"
                ],
                "tips": [
                        "심한 여드름에 추천",
                        "1~2주 간격 5~10회",
                        "시술 후 48시간 햇빛 금지",
                        "야외활동 적은 시기에"
                ],
                "overall": "항생제로도 안 되는 심한 여드름에 효과적인 치료입니다."
        }, effects: { primary: ["여드름", "피지감소"], secondary: ["모공"], notFor: ["흉터"], onsetTime: "2~4주", duration: "유지관리" }, procedure: { duration: "60~90분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2.5, painDescription: "화끈거림", downtime: "3~7일", commonSideEffects: ["홍반", "각질"], recoveryTips: ["자외선차단", "야외피하기"] }, suitability: { idealAge: "10대~40대", bestFor: ["중등도여드름"], notRecommended: ["광과민증"], skinType: "지성" }, pros: ["근본치료"], cons: ["다운타임", "광차단필수"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: ["48시간광차단"] }, pricing: { range: "15~30만원/회", average: "20만원", factors: [] }, comparison: { vs: { "아그네스": "PDT=광선" }, bestWith: ["스킨케어"] }, tags: ["여드름", "PDT"] },

    { id: "carboxy", name: "카복시", nameEn: "Carboxy Therapy", brand: "다양", category: "바디/지방", subcategory: "순환", mechanism: {detailed: "이산화탄소 혈류증가", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["다크서클", "셀룰라이트"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "카복시테라피는 이산화탄소 가스를 주입해 혈류를 촉진하고 지방을 분해합니다. 다크서클, 튼살, 셀룰라이트에 사용됩니다.",
                "likes": [
                        "혈류 개선",
                        "다크서클 개선",
                        "튼살/셀룰라이트에 효과",
                        "자연스러운 효과",
                        "다운타임 적음"
                ],
                "dislikes": [
                        "주사 시 통증",
                        "여러 회차 필요",
                        "효과 서서히 나타남",
                        "드라마틱한 변화 어려움"
                ],
                "tips": [
                        "다크서클에 리쥬란과 병행",
                        "튼살에 프락셀과 병행",
                        "10회 이상 권장",
                        "꾸준함이 중요"
                ],
                "overall": "다크서클, 튼살의 보조 치료로 효과적입니다."
        }, effects: { primary: ["지방분해", "셀룰라이트"], secondary: ["다크서클"], notFor: ["대량지방"], onsetTime: "5~10회", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "10~20회", interval: "주1~2회" }, recovery: { painLevel: 1.5, painDescription: "팽팽함", downtime: "없음", commonSideEffects: ["팽팽함"], recoveryTips: ["마사지"] }, suitability: { idealAge: "20대~50대", bestFor: ["셀룰라이트", "다크서클"], notRecommended: ["심장질환"], skinType: "무관" }, pros: ["다목적", "순환개선"], cons: ["여러회"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["심장질환"], warnings: [] }, pricing: { range: "3~10만원/회", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["지방분해주사"] }, tags: ["카복시", "순환"] },

    { id: "stretchmark", name: "튼살레이저", nameEn: "Stretch Mark Laser", brand: "다양", category: "바디/지방", subcategory: "튼살", mechanism: {detailed: "튼살조직재생유도", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 50, optimal: "18~40세", youngWarning: null },
      concerns: { primary: ["튼살"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "튼살치료는 프락셔널 레이저, 카복시, RF 등 복합 치료로 진행됩니다. 완전 제거는 어렵지만 눈에 띄게 개선 가능합니다.",
                "likes": [
                        "튼살 눈에 띄게 개선",
                        "다양한 치료 옵션",
                        "흰 튼살/붉은 튼살 모두 가능",
                        "피부 재생 효과",
                        "자신감 회복"
                ],
                "dislikes": [
                        "완전 제거 불가",
                        "여러 회차 필요",
                        "비용 높음",
                        "인내심 필요"
                ],
                "tips": [
                        "붉은 튼살일 때 치료 시작",
                        "프락셀 + 카복시 병행",
                        "10회 이상 장기 계획",
                        "70~80% 개선 목표"
                ],
                "overall": "완전 제거는 어렵지만 꾸준한 치료로 상당히 개선됩니다."
        }, effects: { primary: ["튼살개선"], secondary: [], notFor: ["완전제거"], onsetTime: "3~5회후", duration: "영구개선" }, procedure: { duration: "30~60분", anesthesia: "마취크림", sessions: "5~10회", interval: "4~6주" }, recovery: { painLevel: 2.5, painDescription: "따끔", downtime: "3~7일", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["튼살"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["튼살개선"], cons: ["완전제거불가"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "20~50만원/회", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: ["카복시"] }, tags: ["튼살", "레이저"] },

    { id: "mts", name: "MTS", nameEn: "MTS", brand: "다양", category: "흉터/모공", subcategory: "재생", mechanism: {detailed: "진피자극 콜라겐재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 60, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["모공", "피부결"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "MTS(마이크로니들)는 미세 바늘로 피부에 미세 상처를 내어 재생을 유도합니다. 모공, 흉터, 탄력 개선에 효과적입니다.",
                "likes": [
                        "피부 재생 촉진",
                        "유효성분 흡수율 향상",
                        "모공/흉터/탄력 개선",
                        "다운타임 1~2일",
                        "다양한 피부 고민에"
                ],
                "dislikes": [
                        "시술 중 따끔함",
                        "1~2일 붉음",
                        "여러 회차 필요",
                        "감염 주의 필요"
                ],
                "tips": [
                        "성장인자/엑소좀과 병행",
                        "2~4주 간격 5회 이상",
                        "홈케어는 0.25mm 이하",
                        "병원은 1mm 이상"
                ],
                "overall": "피부 재생과 유효성분 흡수를 높이는 기본적인 시술입니다."
        }, effects: { primary: ["모공", "피부결"], secondary: ["흉터"], notFor: ["심한흉터"], onsetTime: "4~6주", duration: "유지관리" }, procedure: { duration: "30~40분", anesthesia: "마취크림", sessions: "4~6회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["모공", "피부결"], notRecommended: ["활동성여드름"], skinType: "모든피부" }, pros: ["재생효과", "앰플침투↑"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: ["위생중요"] }, pricing: { range: "5~15만원/회", average: "10만원", factors: [] }, comparison: { vs: { "MRF": "MTS=바늘만" }, bestWith: ["앰플"] }, tags: ["MTS", "재생"] },

    { id: "carbonpeel", name: "카본필링", nameEn: "Carbon Peel", brand: "다양", category: "스킨케어", subcategory: "필링", mechanism: {detailed: "카본흡착후레이저제거", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["모공", "피지"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "카본필링은 카본 로션을 바르고 레이저로 터뜨려 모공 속 노폐물을 제거합니다. 모공 축소와 피지 조절에 효과적입니다.",
                "likes": [
                        "모공 딥클렌징",
                        "피지 조절",
                        "즉각적인 피부결 개선",
                        "다운타임 거의 없음",
                        "할리우드 필링으로 유명"
                ],
                "dislikes": [
                        "효과 지속 짧음",
                        "여러 회차 필요",
                        "근본적 모공 치료 아님",
                        "건성엔 건조할 수 있음"
                ],
                "tips": [
                        "2주 간격 5~10회",
                        "지성 피부에 추천",
                        "다른 레이저와 병행",
                        "유지 관리 필요"
                ],
                "overall": "지성 피부, 모공 고민에 즉각적인 효과를 주는 필링입니다."
        }, effects: { primary: ["모공", "피지"], secondary: ["톤업"], notFor: ["리프팅"], onsetTime: "즉각", duration: "2~4주" }, procedure: { duration: "30~40분", anesthesia: "불필요", sessions: "정기관리", interval: "2~4주" }, recovery: { painLevel: 1, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: ["보습"] }, suitability: { idealAge: "10대~40대", bestFor: ["모공", "지성피부"], notRecommended: ["광과민증"], skinType: "지성" }, pros: ["모공효과", "다운타임없음"], cons: ["유지필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "5~15만원/회", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["토닝"] }, tags: ["카본", "모공"] },

    { id: "glycolic", name: "글리콜산필링", nameEn: "Glycolic Acid Peel", brand: "다양", category: "필링", subcategory: "화학필링", mechanism: {detailed: "글리콜산 각질용해", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 60, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["피부결", "각질"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "글리콜산 필링은 AHA 계열 산으로 각질을 제거하고 피부 턴오버를 촉진합니다. 칙칙함, 잔주름, 여드름에 효과적입니다.",
                "likes": [
                        "각질 제거",
                        "피부톤 개선",
                        "잔주름 개선",
                        "여드름에 도움",
                        "다양한 농도 선택"
                ],
                "dislikes": [
                        "필링 후 예민",
                        "자외선 민감",
                        "붉음/각질 탈락",
                        "민감피부 주의"
                ],
                "tips": [
                        "저농도부터 시작",
                        "자외선 차단 필수",
                        "2~4주 간격",
                        "레티놀과 병행 주의"
                ],
                "overall": "화학적 필링의 기본으로 다양한 피부 고민에 효과적입니다."
        }, effects: { primary: ["각질", "피부결"], secondary: ["톤업"], notFor: ["민감성"], onsetTime: "1~2주", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "4~6회", interval: "2~4주" }, recovery: { painLevel: 1.5, painDescription: "따가움", downtime: "2~5일", commonSideEffects: ["각질"], recoveryTips: ["보습", "자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["각질", "칙칙함"], notRecommended: ["민감성"], skinType: "지성" }, pros: ["피부결개선"], cons: ["자극"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["민감성"], warnings: ["자외선차단"] }, pricing: { range: "3~10만원/회", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨케어"] }, tags: ["필링", "AHA"] },

    { id: "salicylic", name: "살리실산필링", nameEn: "Salicylic Acid Peel", brand: "다양", category: "필링", subcategory: "화학필링", mechanism: {detailed: "지용성살리실산 모공침투", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 50, optimal: "15~45세", youngWarning: null },
      concerns: { primary: ["여드름", "피지"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "살리실산 필링은 BHA 계열로 모공 속까지 침투해 피지와 각질을 제거합니다. 여드름, 블랙헤드에 특히 효과적입니다.",
                "likes": [
                        "모공 속 깊이 침투",
                        "피지/블랙헤드 제거",
                        "여드름에 효과적",
                        "항염 효과",
                        "지성 피부에 최적"
                ],
                "dislikes": [
                        "건성엔 건조할 수 있음",
                        "아스피린 알레르기 주의",
                        "필링 후 예민",
                        "붉음 가능"
                ],
                "tips": [
                        "지성/여드름 피부에 추천",
                        "2주 간격 정기 관리",
                        "보습 잘 해주기",
                        "글리콜산과 번갈아 사용"
                ],
                "overall": "지성 피부와 여드름 피부를 위한 필링입니다."
        }, effects: { primary: ["모공", "여드름"], secondary: ["각질"], notFor: ["건성"], onsetTime: "1~2주", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "4~6회", interval: "2~4주" }, recovery: { painLevel: 1.5, painDescription: "따가움", downtime: "2~5일", commonSideEffects: ["건조"], recoveryTips: ["보습"] }, suitability: { idealAge: "10대~40대", bestFor: ["여드름", "모공"], notRecommended: ["건성"], skinType: "지성" }, pros: ["여드름효과"], cons: ["건조"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["아스피린알러지"], warnings: [] }, pricing: { range: "3~10만원/회", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["여드름관리"] }, tags: ["필링", "BHA"] },

    { id: "hairtransplant", name: "모발이식", nameEn: "Hair Transplant", brand: "시술", category: "탈모", subcategory: "수술", mechanism: {detailed: "FUE/FUT 모낭이식", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 65, optimal: "30~55세", youngWarning: "25세 미만은 탈모 진행 확인 필요" },
      concerns: { primary: ["탈모"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: true },
      
      review: {
                "summary": "모발이식은 후두부 모낭을 채취해 탈모 부위에 이식하는 수술입니다. 영구적인 탈모 해결책이지만 수술 부담이 있습니다.",
                "likes": [
                        "영구적 효과",
                        "자연스러운 결과",
                        "자기 모발 사용",
                        "탈모의 근본 해결",
                        "헤어라인 교정 가능"
                ],
                "dislikes": [
                        "수술 비용 높음",
                        "1~2주 다운타임",
                        "생착률 편차",
                        "공여부 한계",
                        "6~12개월 후 최종 결과"
                ],
                "tips": [
                        "비절개(FUE) vs 절개(FUT) 비교",
                        "경험 많은 병원 선택",
                        "3000모 이상 대량이식 주의",
                        "수술 후 관리 중요"
                ],
                "overall": "탈모의 가장 확실한 해결책이지만, 병원 선택이 매우 중요합니다."
        }, effects: { primary: ["탈모개선"], secondary: [], notFor: ["공여부부족"], onsetTime: "6~12개월", duration: "영구적" }, procedure: { duration: "4~8시간", anesthesia: "국소마취+수면", sessions: "1~2회", interval: "6개월~1년" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "7~14일", commonSideEffects: ["붓기", "딱지"], recoveryTips: ["머리감기주의"] }, suitability: { idealAge: "20대~60대", bestFor: ["M자탈모", "헤어라인"], notRecommended: ["진행중탈모심함"], skinType: "무관" }, pros: ["영구적", "자연스러움"], cons: ["비용높음"], safety: {
        seriousSideEffects: ["생착실패"], contraindications: ["출혈성질환"], warnings: ["경험많은의사"] }, pricing: { range: "500~1500만원", average: "800만원", factors: ["모수"] }, comparison: { vs: {}, bestWith: ["약물치료"] }, tags: ["탈모", "모발이식"] },

    { id: "scalpmeso", name: "두피메조", nameEn: "Scalp Mesotherapy", brand: "다양", category: "탈모", subcategory: "주사", mechanism: {detailed: "성장인자/비타민 직접주입", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 65, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["탈모"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "두피 메조테라피는 모발 성장인자, 비타민 등을 두피에 직접 주입해 탈모를 예방하고 모발을 강화합니다.",
                "likes": [
                        "모발 성장 촉진",
                        "두피 환경 개선",
                        "탈모 예방 효과",
                        "다운타임 없음",
                        "모발이식 전후 관리로"
                ],
                "dislikes": [
                        "꾸준히 해야 효과",
                        "주 1회 x 10회 이상",
                        "진행된 탈모엔 한계",
                        "비용 누적"
                ],
                "tips": [
                        "초기 탈모에 효과적",
                        "PRP와 병행 추천",
                        "주 1회 10회 이상",
                        "모발이식 후 관리로도"
                ],
                "overall": "초기 탈모 예방과 모발 강화에 효과적인 두피 영양 주사입니다."
        }, effects: { primary: ["탈모개선"], secondary: ["두피건강"], notFor: ["고도탈모"], onsetTime: "3~6개월", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "10~20회", interval: "주1~2회" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음", commonSideEffects: ["붓기"], recoveryTips: ["다음날샴푸"] }, suitability: { idealAge: "20대~50대", bestFor: ["초기탈모"], notRecommended: ["고도탈모"], skinType: "무관" }, pros: ["비수술", "영양직접전달"], cons: ["여러회"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["두피질환"], warnings: [] }, pricing: { range: "5~15만원/회", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["PRP"] }, tags: ["탈모", "메조"] },

    { id: "scalpprp", name: "두피PRP", nameEn: "Scalp PRP", brand: "자가혈", category: "탈모", subcategory: "주사", mechanism: {detailed: "혈소판풍부혈장 모낭활성화", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 65, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["탈모"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "두피 PRP는 자가 혈소판을 두피에 주입해 모낭을 활성화하고 모발 성장을 촉진합니다. 안전하고 자연스러운 탈모 치료입니다.",
                "likes": [
                        "자가혈이라 안전",
                        "모낭 활성화",
                        "모발 굵기 개선",
                        "부작용 거의 없음",
                        "메조와 병행 효과적"
                ],
                "dislikes": [
                        "채혈 필요",
                        "여러 회차 필요",
                        "진행된 탈모엔 한계",
                        "효과 나타나기 3~6개월"
                ],
                "tips": [
                        "4주 간격 5~10회 권장",
                        "메조테라피와 병행",
                        "초기 탈모에 시작",
                        "모발이식 후 관리로도"
                ],
                "overall": "안전하고 자연스러운 탈모 치료로 초기 탈모에 효과적입니다."
        }, effects: { primary: ["탈모개선"], secondary: [], notFor: ["고도탈모"], onsetTime: "3~6개월", duration: "유지관리" }, procedure: { duration: "40~60분", anesthesia: "마취크림", sessions: "6~10회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음", commonSideEffects: ["붓기"], recoveryTips: ["당일샴푸피하기"] }, suitability: { idealAge: "20대~50대", bestFor: ["초중기탈모"], notRecommended: ["혈액질환"], skinType: "무관" }, pros: ["자가혈안전"], cons: ["여러회"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["혈액질환"], warnings: [] }, pricing: { range: "15~30만원/회", average: "20만원", factors: [] }, comparison: { vs: {}, bestWith: ["메조"] }, tags: ["탈모", "PRP"] },

    { id: "placenta", name: "태반주사", nameEn: "Placenta Injection", brand: "라이넥/멜스몬", category: "주사/수액", subcategory: "재생", mechanism: {detailed: "성장인자/아미노산 재생촉진", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 65, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["피로", "재생"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "태반주사(라이넥)는 태반 추출물로 피로 회복, 피부 재생, 갱년기 증상 완화에 효과적입니다. 일본에서 개발된 검증된 성분입니다.",
                "likes": [
                        "피로 회복 효과",
                        "피부 재생/탄력",
                        "갱년기 증상 완화",
                        "간 기능 개선",
                        "전신 안티에이징"
                ],
                "dislikes": [
                        "주 1~2회 꾸준히 필요",
                        "효과 체감까지 시간",
                        "주사 맞아야 함",
                        "가격 부담"
                ],
                "tips": [
                        "주 1~2회 x 10회 이상",
                        "피로, 갱년기에 효과적",
                        "백옥주사와 병행",
                        "꾸준함이 중요"
                ],
                "overall": "전신 피로 회복과 안티에이징을 원하는 분에게 추천합니다."
        }, effects: { primary: ["피로회복", "재생"], secondary: ["미백"], notFor: ["국소치료"], onsetTime: "10회이상", duration: "유지관리" }, procedure: { duration: "10~15분", anesthesia: "불필요", sessions: "10~20회", interval: "주1~2회" }, recovery: { painLevel: 1.5, painDescription: "주사통증", downtime: "없음", commonSideEffects: ["주사부위통증"], recoveryTips: [] }, suitability: { idealAge: "30대~60대", bestFor: ["피로", "갱년기"], notRecommended: ["임산부"], skinType: "무관" }, pros: ["피로회복", "재생"], cons: ["여러회"], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["임산부"], warnings: [] }, pricing: { range: "2~5만원/회", average: "3만원", factors: [] }, comparison: { vs: {}, bestWith: ["비타민주사"] }, tags: ["태반", "재생"] },

    { id: "vitaminc", name: "비타민C고용량", nameEn: "High-dose Vitamin C", brand: "다양", category: "주사/수액", subcategory: "영양", mechanism: {detailed: "콜라겐합성촉진 항산화", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["피부톤", "피로"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "비타민C 주사(메가도스)는 고용량 비타민C를 정맥 주사해 항산화, 미백, 면역력 강화 효과를 제공합니다.",
                "likes": [
                        "강력한 항산화",
                        "피부 미백 효과",
                        "면역력 강화",
                        "피로 회복",
                        "콜라겐 합성 촉진"
                ],
                "dislikes": [
                        "주 1~2회 필요",
                        "G6PD 결핍 주의",
                        "신장 질환자 주의",
                        "효과 지속 짧음"
                ],
                "tips": [
                        "백옥주사와 병행 추천",
                        "주 1~2회 꾸준히",
                        "감기 예방에도 도움",
                        "고용량일수록 효과"
                ],
                "overall": "미백과 면역력을 동시에 챙기고 싶을 때 좋습니다."
        }, effects: { primary: ["피로회복", "미백"], secondary: ["면역"], notFor: ["국소치료"], onsetTime: "꾸준히", duration: "유지관리" }, procedure: { duration: "30~60분", anesthesia: "불필요", sessions: "10~20회", interval: "주1~2회" }, recovery: { painLevel: 1, painDescription: "주사통증", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: ["수분섭취"] }, suitability: { idealAge: "20대~60대", bestFor: ["피로", "흡연자"], notRecommended: ["신장질환"], skinType: "무관" }, pros: ["피로회복", "항산화"], cons: ["여러회"], safety: {
        seriousSideEffects: ["신장결석"], contraindications: ["신장질환"], warnings: ["신장기능확인"] }, pricing: { range: "3~10만원/회", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["백옥주사"] }, tags: ["비타민C", "항산화"] },

    { id: "garlic", name: "마늘주사", nameEn: "Garlic IV", brand: "다양", category: "주사/수액", subcategory: "영양", mechanism: {detailed: "에너지대사촉진", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["피로"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "마늘주사(푸르설타민)는 비타민B1 유도체로 피로 회복에 즉각적인 효과가 있습니다. 마늘 냄새가 나서 마늘주사라 불립니다.",
                "likes": [
                        "즉각적 피로 회복",
                        "숙취 해소",
                        "에너지 증진",
                        "빠른 효과",
                        "가격 저렴"
                ],
                "dislikes": [
                        "마늘 냄새 1~2시간",
                        "효과 지속 짧음",
                        "자주 맞아야 함",
                        "근본 해결 아님"
                ],
                "tips": [
                        "피로할 때 즉각 효과",
                        "중요 일정 전 피하기 (냄새)",
                        "주 1~2회 가능",
                        "다른 수액과 병행"
                ],
                "overall": "급한 피로 회복이 필요할 때 즉각적인 효과를 줍니다."
        }, effects: { primary: ["피로회복"], secondary: ["숙취해소"], notFor: ["국소"], onsetTime: "즉각~다음날", duration: "며칠" }, procedure: { duration: "5~10분", anesthesia: "불필요", sessions: "필요시", interval: "주1~2회" }, recovery: { painLevel: 1, painDescription: "주사통증", downtime: "없음", commonSideEffects: ["마늘냄새"], recoveryTips: [] }, suitability: { idealAge: "20대~60대", bestFor: ["피로", "숙취"], notRecommended: ["B1알러지"], skinType: "무관" }, pros: ["빠른피로회복"], cons: ["냄새"], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["B1알러지"], warnings: [] }, pricing: { range: "1~3만원/회", average: "2만원", factors: [] }, comparison: { vs: {}, bestWith: ["비타민주사"] }, tags: ["마늘", "피로"] },

    { id: "airjet", name: "에어젯", nameEn: "AirJet", brand: "다양", category: "스킨부스터", subcategory: "무바늘", mechanism: {detailed: "제트분사 진피침투", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["피부결"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "에어젯은 바늘 없이 공기압으로 약물을 주입하는 무통 시술입니다. 스킨부스터, 보톡스 등을 통증 없이 주입합니다.",
                "likes": [
                        "무바늘, 무통증",
                        "멍/붓기 적음",
                        "시술 시간 짧음",
                        "바늘 공포증에 최적",
                        "다운타임 적음"
                ],
                "dislikes": [
                        "깊은 주입 어려움",
                        "효과 약하다는 평도",
                        "모든 약물 불가",
                        "가격 높음"
                ],
                "tips": [
                        "바늘 무서우면 에어젯으로",
                        "스킨부스터에 적합",
                        "깊은 시술은 바늘이 효과적",
                        "통증 민감자에게 추천"
                ],
                "overall": "바늘이 무섭거나 통증에 민감한 분에게 좋은 대안입니다."
        }, effects: { primary: ["보습", "탄력"], secondary: [], notFor: ["깊은침투"], onsetTime: "즉각", duration: "2~4주" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "정기관리", interval: "2~4주" }, recovery: { painLevel: 0.5, painDescription: "살짝따끔", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["주사무서운분"], notRecommended: [], skinType: "모든피부" }, pros: ["무통증", "무바늘"], cons: ["효과약함"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["피부질환"], warnings: [] }, pricing: { range: "5~15만원/회", average: "10만원", factors: [] }, comparison: { vs: { "물광": "에어젯=무바늘" }, bestWith: ["다른시술후"] }, tags: ["에어젯", "무바늘"] },

    // ===== 2차 배치: 85~134 (50개) =====
    { id: "doublo", name: "더블로골드", nameEn: "Doublo Gold", brand: "Hironic", category: "리프팅/타이트닝", subcategory: "HIFU", mechanism: {detailed: "SMAS층 열응고점형성", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: "20대 초반에게는 권장하지 않음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "더블로는 국산 HIFU 장비의 원조로, 초음파로 SMAS층을 자극해 리프팅 효과를 제공합니다. 울쎄라의 국산 대안입니다.",
                "likes": [
                        "울쎄라 대비 저렴",
                        "SMAS층 타겟팅",
                        "비수술 리프팅",
                        "다운타임 없음",
                        "국산 HIFU 대표"
                ],
                "dislikes": [
                        "울쎄라보다 효과 약함",
                        "6개월~1년 재시술",
                        "통증 있음",
                        "병원마다 차이"
                ],
                "tips": [
                        "정품 카트리지 확인",
                        "300샷 이상 권장",
                        "더블로 골드가 업그레이드 버전",
                        "써마지와 병행"
                ],
                "overall": "가성비 있는 HIFU를 원한다면 좋은 선택입니다."
        }, effects: { primary: ["리프팅", "턱선"], secondary: ["탄력"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "6개월~1년" }, procedure: { duration: "30~40분", anesthesia: "마취크림", sessions: "2~3회", interval: "2~3개월" }, recovery: { painLevel: 2.5, painDescription: "찌릿함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["바로일상"] }, suitability: { idealAge: "30대~50대", bestFor: ["가성비리프팅"], notRecommended: ["심한처짐"], skinType: "모든피부" }, pros: ["국산가성비"], cons: ["울쎄라보다약함"], safety: {
        seriousSideEffects: ["볼패임"], contraindications: ["임신"], warnings: [] }, pricing: { range: "15~40만원", average: "25만원", factors: [] }, comparison: { vs: { "울쎄라": "더블로가저렴" }, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: "20대 초반에게는 권장하지 않음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["HIFU", "국산", "가성비"] },

    { id: "ultraformer", name: "울트라포머MPT", nameEn: "Ultraformer MPT", brand: "Classys", category: "리프팅/타이트닝", subcategory: "HIFU", mechanism: {detailed: "MPT기술 세밀부위타겟", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: "20대 초반에게는 권장하지 않음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "울트라포머(슈링크)는 HIFU 리프팅의 대표 장비입니다. 다양한 깊이의 카트리지로 맞춤 시술이 가능합니다.",
                "likes": [
                        "다양한 깊이 선택",
                        "비수술 리프팅",
                        "다운타임 없음",
                        "대중적인 HIFU",
                        "가격 합리적"
                ],
                "dislikes": [
                        "볼패임 가능성",
                        "울쎄라보다 약함",
                        "6개월~1년 재시술",
                        "통증 있음"
                ],
                "tips": [
                        "볼패임 우려 시 깊은 층 피하기",
                        "MPT 버전이 업그레이드",
                        "부스터와 병행",
                        "정기적 관리"
                ],
                "overall": "가장 대중적인 HIFU로 정기 리프팅 관리에 적합합니다."
        }, effects: { primary: ["눈가리프팅"], secondary: ["탄력"], notFor: ["전체리프팅"], onsetTime: "2~4주", duration: "6개월~1년" }, procedure: { duration: "20~40분", anesthesia: "마취크림", sessions: "3~5회", interval: "1개월" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["눈가", "세밀부위"], notRecommended: ["전체처짐"], skinType: "모든피부" }, pros: ["세밀시술"], cons: ["넓은부위비효율"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["임신"], warnings: [] }, pricing: { range: "10~30만원", average: "20만원", factors: [] }, comparison: { vs: {}, bestWith: ["슈링크"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: "20대 초반에게는 권장하지 않음" },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["HIFU", "펜타입", "눈가"] },

    { id: "tensera", name: "텐써라", nameEn: "Tensera", brand: "Jeisys", category: "리프팅/타이트닝", subcategory: "HIFU", mechanism: {detailed: "초음파에너지 SMAS타겟", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "텐서라는 HIFU와 RF를 결합한 복합 리프팅 장비입니다. 두 에너지의 시너지로 탄력과 리프팅을 동시에 제공합니다.",
                "likes": [
                        "HIFU + RF 복합 효과",
                        "탄력 + 리프팅 동시",
                        "통증 적음",
                        "다운타임 없음",
                        "볼패임 위험 적음"
                ],
                "dislikes": [
                        "HIFU 단독보다 약할 수 있음",
                        "재시술 필요",
                        "비용 높음",
                        "아직 대중화 덜 됨"
                ],
                "tips": [
                        "HIFU만으로 부족하면 고려",
                        "탄력까지 원할 때",
                        "써마지/슈링크 대안으로",
                        "복합 효과 원할 때"
                ],
                "overall": "리프팅과 탄력을 동시에 원하는 분에게 좋은 선택입니다."
        }, effects: { primary: ["리프팅", "탄력"], secondary: [], notFor: ["볼륨"], onsetTime: "2~4주", duration: "6개월~1년" }, procedure: { duration: "30~40분", anesthesia: "마취크림", sessions: "2~3회", interval: "2~3개월" }, recovery: { painLevel: 2.5, painDescription: "찌릿함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["가성비리프팅"], notRecommended: ["심한처짐"], skinType: "모든피부" }, pros: ["국산가성비"], cons: ["효과제한적"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["임신"], warnings: [] }, pricing: { range: "15~35만원", average: "25만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["HIFU", "국산"] },

    { id: "liftera", name: "리프테라", nameEn: "Liftera", brand: "Classys", category: "리프팅/타이트닝", subcategory: "HIFU", mechanism: {detailed: "HIFU에너지 진피/SMAS", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "리프테라는 가성비 HIFU 장비로 슈링크와 비슷한 효과를 더 저렴하게 제공합니다. 정기 관리용으로 적합합니다.",
                "likes": [
                        "가격 저렴",
                        "HIFU 효과",
                        "다운타임 없음",
                        "정기 관리 부담 적음",
                        "슈링크 대안"
                ],
                "dislikes": [
                        "슈링크/울쎄라보다 약함",
                        "효과 짧음",
                        "자주 받아야 함",
                        "병원마다 차이"
                ],
                "tips": [
                        "가성비 정기 관리용",
                        "3~6개월 간격 권장",
                        "첫 HIFU로는 슈링크 추천",
                        "유지 관리용으로"
                ],
                "overall": "가성비 있게 HIFU를 정기적으로 관리하고 싶을 때 추천합니다."
        }, effects: { primary: ["리프팅"], secondary: ["탄력"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "6개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "3~5회", interval: "1~2개월" }, recovery: { painLevel: 2, painDescription: "찌릿함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["유지관리"], notRecommended: ["심한처짐"], skinType: "모든피부" }, pros: ["간편함"], cons: ["효과약함"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["임신"], warnings: [] }, pricing: { range: "10~25만원", average: "15만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["HIFU", "국산", "유지"] },

    { id: "sonoqueen", name: "소노퀸", nameEn: "Sonoqueen", brand: "뉴선메디", category: "리프팅/타이트닝", subcategory: "HIFU", mechanism: {detailed: "카트리지교체방식", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "소노퀸은 눈가, 입가 등 섬세한 부위 전용 HIFU입니다. 작은 카트리지로 세밀한 시술이 가능합니다.",
                "likes": [
                        "눈가/입가 전용",
                        "세밀한 시술",
                        "다른 HIFU로 못하는 부위",
                        "다운타임 없음",
                        "눈가 리프팅 효과"
                ],
                "dislikes": [
                        "전체 얼굴은 다른 HIFU로",
                        "효과 약함",
                        "자주 받아야 함",
                        "가격 대비 효과"
                ],
                "tips": [
                        "눈가 전용으로 추천",
                        "슈링크와 병행",
                        "눈밑, 눈꼬리에",
                        "3~6개월 간격"
                ],
                "overall": "눈가, 입가 같은 세밀한 부위에 특화된 HIFU입니다."
        }, effects: { primary: ["눈가리프팅"], secondary: ["탄력"], notFor: ["전체리프팅"], onsetTime: "2~4주", duration: "6개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "3~5회", interval: "1~2개월" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["눈가"], notRecommended: ["전체처짐"], skinType: "모든피부" }, pros: ["눈가특화", "가성비"], cons: ["전체리프팅부족"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["임신"], warnings: [] }, pricing: { range: "10~25만원", average: "15만원", factors: [] }, comparison: { vs: {}, bestWith: ["울쎄라"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["HIFU", "눈가"] },


    { id: "tunefacer", name: "튠페이스", nameEn: "TuneFace", brand: "루트로닉", category: "리프팅/타이트닝", subcategory: "RF", mechanism: {detailed: "니들RF진피층자극", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "주름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "튠페이스는 RF 리프팅 장비로 통증 없이 탄력을 개선합니다. 써마지/올리지오보다 순하고 편안한 시술입니다.",
                "likes": [
                        "무통증",
                        "탄력 개선",
                        "다운타임 없음",
                        "편안한 시술",
                        "써마지 대안"
                ],
                "dislikes": [
                        "써마지보다 약함",
                        "여러 회차 필요",
                        "효과 순함",
                        "즉각 효과 적음"
                ],
                "tips": [
                        "통증 싫으면 튠페이스",
                        "4~6회 패키지 권장",
                        "써마지 전 입문용",
                        "정기 관리용"
                ],
                "overall": "통증 없이 가볍게 탄력 관리하고 싶을 때 좋습니다."
        }, effects: { primary: ["탄력", "모공"], secondary: ["잔주름"], notFor: ["리프팅"], onsetTime: "4~6주", duration: "6개월~1년" }, procedure: { duration: "30~45분", anesthesia: "마취크림", sessions: "3~5회", interval: "4주" }, recovery: { painLevel: 2.5, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "30대~50대", bestFor: ["탄력", "모공"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["탄력+모공"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "20~40만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "주름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["RF", "니들", "탄력"] },

    { id: "virtue", name: "버츄RF", nameEn: "Virtue RF", brand: "Solta", category: "리프팅/타이트닝", subcategory: "RF", mechanism: {detailed: "자동니들RF콜라겐리모델링", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "버츄 RF는 마이크로니들 RF에 로봇 기술을 적용한 프리미엄 MRF입니다. 정교한 니들링으로 효과와 안전성이 뛰어납니다.",
                "likes": [
                        "정교한 로봇 니들링",
                        "깊이/에너지 정밀 조절",
                        "탄력 + 흉터 개선",
                        "안전성 높음",
                        "프리미엄 MRF"
                ],
                "dislikes": [
                        "가격 높음",
                        "3~5일 다운타임",
                        "3~5회 필요",
                        "취급 병원 적음"
                ],
                "tips": [
                        "시크릿RF 업그레이드 버전",
                        "흉터 + 탄력 동시에",
                        "다운타임 감안",
                        "프리미엄 원하면 버츄"
                ],
                "overall": "MRF 중 가장 정교하고 프리미엄한 시술을 원할 때 선택합니다."
        }, effects: { primary: ["탄력", "모공"], secondary: ["흉터"], notFor: ["리프팅"], onsetTime: "4~6주", duration: "1년" }, procedure: { duration: "30~45분", anesthesia: "마취크림", sessions: "3~4회", interval: "4~6주" }, recovery: { painLevel: 2.5, painDescription: "따끔", downtime: "2~5일", commonSideEffects: ["홍반", "붓기"], recoveryTips: ["보습"] }, suitability: { idealAge: "30대~50대", bestFor: ["탄력", "모공"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["정밀시술"], cons: ["비용"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "30~60만원", average: "45만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "30~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "모공", "흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["RF", "니들", "로봇"] },

    { id: "volnewmer", name: "볼뉴머", nameEn: "Volnewmer", brand: "Classys", category: "리프팅/타이트닝", subcategory: "RF", mechanism: {detailed: "RF에너지콜라겐자극", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~55세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["볼륨손실", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "볼뉴머는 국산 RF 리프팅 장비로 올리지오와 함께 써마지 대안입니다. 가성비와 효과의 균형이 좋습니다.",
                "likes": [
                        "써마지 대비 저렴",
                        "콜라겐 리모델링",
                        "다운타임 없음",
                        "통증 적음",
                        "국산 RF 대표"
                ],
                "dislikes": [
                        "써마지보다 약함",
                        "6개월 재시술",
                        "효과 편차",
                        "아직 대중화 중"
                ],
                "tips": [
                        "올리지오와 비교",
                        "600샷 기준",
                        "써마지 예산 부담 시",
                        "6개월 정기 관리"
                ],
                "overall": "올리지오와 함께 가성비 RF 리프팅의 대안입니다."
        }, effects: { primary: ["탄력"], secondary: ["모공"], notFor: ["리프팅"], onsetTime: "4~6주", duration: "6개월~1년" }, procedure: { duration: "30~40분", anesthesia: "불필요~마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["탄력"], notRecommended: ["페이스메이커"], skinType: "모든피부" }, pros: ["가성비"], cons: ["효과제한적"], safety: {
        seriousSideEffects: ["화상"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "15~30만원", average: "20만원", factors: [] }, comparison: { vs: {}, bestWith: ["HIFU"] }, tags: ["RF", "국산", "탄력"] },

    { id: "evoke", name: "이보크", nameEn: "Evoke", brand: "InMode", category: "리프팅/타이트닝", subcategory: "RF", mechanism: {detailed: "RF에너지지방+피부동시", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~55세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["탄력저하", "턱선"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "이보크는 핸즈프리 RF 장비로 턱선과 볼살을 관리합니다. 손 없이 착용만 하면 되는 편리한 시술입니다.",
                "likes": [
                        "핸즈프리 편리함",
                        "턱선/볼살에 효과적",
                        "통증 없음",
                        "다운타임 없음",
                        "지방감소 + 탄력"
                ],
                "dislikes": [
                        "4~6회 필요",
                        "시술 시간 30~60분",
                        "효과 서서히 나타남",
                        "비용 높음"
                ],
                "tips": [
                        "턱선, 이중턱 고민에",
                        "주 1~2회 x 4~6회",
                        "인모드 계열",
                        "시술 중 폰 가능"
                ],
                "overall": "편하게 턱선을 관리하고 싶을 때 좋은 선택입니다."
        }, effects: { primary: ["턱선", "탄력"], secondary: ["이중턱"], notFor: ["볼륨"], onsetTime: "4~6주", duration: "6개월~1년" }, procedure: { duration: "30~60분", anesthesia: "불필요", sessions: "6~8회", interval: "주1회" }, recovery: { painLevel: 1.5, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["턱선정리"], notRecommended: ["페이스메이커"], skinType: "무관" }, pros: ["핸즈프리", "무통증"], cons: ["여러회필요"], safety: {
        seriousSideEffects: ["화상"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "15~30만원", average: "20만원", factors: [] }, comparison: { vs: {}, bestWith: ["인모드"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~55세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["탄력저하", "턱선"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["RF", "턱선", "인모드"] },

    { id: "secret-rf", name: "시크릿RF", nameEn: "Secret RF", brand: "Cutera", category: "흉터/모공", subcategory: "MRF", mechanism: { detailed: "마이크로니들RF콜라겐리모델링", },
      
      review: {
                "summary": "시크릿RF는 마이크로니들 RF 장비로 여드름흉터와 모공 치료에 특화되어 있습니다. 미세 바늘이 진피층까지 RF 에너지를 전달해 콜라겐 리모델링을 유도합니다.",
                "likes": [
                        "여드름흉터 효과적",
                        "모공 축소",
                        "피부 탄력 개선",
                        "표피 손상 최소화",
                        "짧은 다운타임"
                ],
                "dislikes": [
                        "3~5회 필요",
                        "시술 중 따끔함",
                        "2~5일 다운타임",
                        "비용 다소 높음"
                ],
                "tips": [
                        "여드름흉터에 효과적",
                        "스킨부스터와 병행 추천",
                        "4주 간격 3~5회",
                        "레이저보다 색소침착 적음"
                ],
                "overall": "여드름흉터와 모공을 효과적으로 개선하고 싶을 때 추천합니다."
        }, effects: { primary: ["흉터", "모공"], secondary: ["탄력"], notFor: ["리프팅"], onsetTime: "4~6주", duration: "1~2년" }, procedure: { duration: "30~45분", anesthesia: "마취크림", sessions: "3~5회", interval: "4주" }, recovery: { painLevel: 2.5, painDescription: "따끔", downtime: "2~5일", commonSideEffects: ["홍반", "붓기"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["여드름흉터", "모공"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["흉터효과"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "30~60만원", average: "40만원", factors: [] }, comparison: { vs: { "모피어스8": "유사" }, bestWith: ["스킨부스터"] }, tags: ["MRF", "흉터", "모공"] },

    { id: "intracell", name: "인트라셀", nameEn: "Intracell", brand: "Jeisys", category: "흉터/모공", subcategory: "MRF", mechanism: {detailed: "절연니들RF진피재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["모공", "흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "인트라셀은 마이크로니들 RF의 원조 장비 중 하나입니다. 모공, 탄력, 흉터에 효과적인 MRF 시술입니다.",
                "likes": [
                        "MRF 원조 장비",
                        "모공/탄력/흉터 개선",
                        "검증된 효과",
                        "콜라겐 리모델링",
                        "다양한 피부 고민에"
                ],
                "dislikes": [
                        "2~5일 다운타임",
                        "통증 있음",
                        "3~5회 필요",
                        "최신 장비보다 구형"
                ],
                "tips": [
                        "시크릿RF, 포텐자와 비교",
                        "흉터 치료에 효과적",
                        "재생크림 필수",
                        "가을/겨울 추천"
                ],
                "overall": "검증된 MRF 시술로 모공과 흉터 개선에 효과적입니다."
        }, effects: { primary: ["흉터", "모공"], secondary: ["탄력"], notFor: ["리프팅"], onsetTime: "4~6주", duration: "1~2년" }, procedure: { duration: "30~45분", anesthesia: "마취크림", sessions: "3~5회", interval: "4주" }, recovery: { painLevel: 2.5, painDescription: "따끔", downtime: "2~5일", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["여드름흉터"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["흉터효과"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "20~50만원", average: "35만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["모공", "흉터", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["MRF", "흉터"] },

    { id: "scarlets", name: "스칼렛S", nameEn: "Scarlet S", brand: "Viol", category: "흉터/모공", subcategory: "MRF", mechanism: {detailed: "빠른RF전달콜라겐재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "스칼렛S는 마이크로니들 RF와 토닝이 결합된 복합 장비입니다. 모공, 탄력, 색소까지 한번에 개선합니다.",
                "likes": [
                        "MRF + 토닝 복합",
                        "모공/탄력/색소 동시",
                        "올인원 시술",
                        "다운타임 짧음",
                        "효율적인 시술"
                ],
                "dislikes": [
                        "3~5회 필요",
                        "각 효과 약할 수 있음",
                        "가격 높음",
                        "전문 장비보다 약함"
                ],
                "tips": [
                        "올인원 관리 원할 때",
                        "바쁜 분에게 추천",
                        "각 고민이 심하면 전문 시술로",
                        "3~4주 간격"
                ],
                "overall": "여러 피부 고민을 한번에 관리하고 싶을 때 효율적입니다."
        }, effects: { primary: ["흉터", "모공"], secondary: ["탄력"], notFor: ["리프팅"], onsetTime: "4~6주", duration: "1년" }, procedure: { duration: "30~45분", anesthesia: "마취크림", sessions: "3~5회", interval: "4주" }, recovery: { painLevel: 2.5, painDescription: "따끔", downtime: "2~5일", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["모공", "흉터"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["빠른시술"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "20~40만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 55, optimal: "28~50세", youngWarning: null },
      concerns: { primary: ["탄력저하", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      tags: ["MRF", "모공"] },

    { id: "pdo-mono", name: "PDO실(모노)", nameEn: "PDO Mono Thread", brand: "다양", category: "리프팅/타이트닝", subcategory: "실리프팅", mechanism: {detailed: "모노실진피자극재생", },
      
      review: {
                "summary": "PDO 모노실은 가시 없는 녹는 실로 피부 탄력을 개선합니다. 코그실보다 순하고 자연스러운 탄력 효과를 줍니다.",
                "likes": [
                        "자연스러운 탄력",
                        "콜라겐 재생",
                        "리프팅보다 탄력에 초점",
                        "다운타임 적음",
                        "코그실보다 순함"
                ],
                "dislikes": [
                        "리프팅 효과 약함",
                        "6~12개월 유지",
                        "여러 가닥 필요",
                        "효과 순함"
                ],
                "tips": [
                        "탄력 목적에 적합",
                        "코그실과 병행",
                        "HIFU와 함께하면 시너지",
                        "50~100가닥 필요"
                ],
                "overall": "리프팅보다 자연스러운 탄력을 원할 때 추천합니다."
        }, effects: { primary: ["탄력", "피부결"], secondary: ["잔주름"], notFor: ["리프팅"], onsetTime: "2~4주", duration: "6개월~1년" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1~2회", interval: "6개월" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["붓기"], recoveryTips: ["표정자제"] }, suitability: { idealAge: "30대~50대", bestFor: ["탄력", "피부결"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["탄력개선"], cons: ["리프팅효과없음"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "20~50만원", average: "30만원", factors: ["실개수"] }, comparison: { vs: { "코그실": "모노=탄력, 코그=리프팅" }, bestWith: ["코그실"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 60, optimal: "35~55세", youngWarning: "20대에게는 과한 시술" },
      concerns: { primary: ["탄력저하", "주름"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      tags: ["실리프팅", "모노", "탄력"] },

    { id: "pdo-cog", name: "PDO코그실", nameEn: "PDO Cog Thread", brand: "다양", category: "리프팅/타이트닝", subcategory: "실리프팅", mechanism: { detailed: "코그가조직거상후콜라겐유도", },
      
      review: {
                "summary": "PDO 코그실은 가시(코그)가 있는 녹는 실로 즉각적인 리프팅 효과를 줍니다. HIFU와 달리 시술 직후 바로 변화를 확인할 수 있습니다.",
                "likes": [
                        "즉각적인 리프팅",
                        "턱선 개선 효과",
                        "1~1.5년 지속",
                        "콜라겐 재생 유도",
                        "한 번에 확실한 효과"
                ],
                "dislikes": [
                        "뻐근함 3~7일",
                        "숙련자 필수",
                        "실 튀어나옴 가능",
                        "비용 높음"
                ],
                "tips": [
                        "숙련된 의사에게 받을 것",
                        "2주간 표정 자제",
                        "필러와 병행 가능",
                        "중등도 처짐에 효과적"
                ],
                "overall": "즉각적인 리프팅 효과를 원할 때 추천하지만 숙련자에게 받는 것이 중요합니다."
        }, effects: { primary: ["즉각리프팅", "턱선"], secondary: ["콜라겐"], notFor: ["탄력만"], onsetTime: "즉각", duration: "1~1.5년" }, procedure: { duration: "30~60분", anesthesia: "국소마취", sessions: "1회", interval: "1~2년" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["표정자제2주"] }, suitability: { idealAge: "30대~50대", bestFor: ["즉각효과", "중등도처짐"], notRecommended: ["켈로이드"], skinType: "대부분" }, pros: ["즉각효과"], cons: ["부작용가능"], safety: {
        seriousSideEffects: ["실튀어나옴"], contraindications: ["켈로이드"], warnings: ["숙련자에게"] }, pricing: { range: "50~150만원", average: "80만원", factors: ["실개수"] }, comparison: { vs: {}, bestWith: ["필러"] }, tags: ["실리프팅", "코그", "리프팅"] },

    { id: "pcl-thread", name: "PCL실", nameEn: "PCL Thread", brand: "Sinclair", category: "리프팅/타이트닝", subcategory: "실리프팅", mechanism: {detailed: "PCL이느리게분해되며콜라겐유도", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 60, optimal: "40~55세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      
      review: {
                "summary": "PCL 실리프팅은 PDO보다 오래 유지되는 녹는 실입니다. 2~3년까지 효과가 지속되어 재시술 부담이 적습니다.",
                "likes": [
                        "2~3년 긴 유지",
                        "콜라겐 지속 생성",
                        "재시술 부담 적음",
                        "PDO보다 오래감",
                        "자연스러운 효과"
                ],
                "dislikes": [
                        "PDO보다 비쌈",
                        "부작용 시 오래감",
                        "경험 많은 의사 필수",
                        "녹는데 시간 오래 걸림"
                ],
                "tips": [
                        "오래 유지 원하면 PCL",
                        "부작용 주의 (오래가서)",
                        "경험 많은 병원 선택",
                        "민트리프트가 대표"
                ],
                "overall": "오래 유지되는 실리프팅을 원할 때 좋지만 신중하게 선택하세요."
        }, effects: { primary: ["리프팅"], secondary: ["콜라겐"], notFor: [], onsetTime: "즉각+점진", duration: "2~3년" }, procedure: { duration: "30~60분", anesthesia: "국소마취", sessions: "1회", interval: "2~3년" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "5~7일", commonSideEffects: ["붓기"], recoveryTips: ["표정자제"] }, suitability: { idealAge: "30대~50대", bestFor: ["오래가는리프팅"], notRecommended: ["켈로이드"], skinType: "대부분" }, pros: ["오래지속"], cons: ["비용"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "80~200만원", average: "120만원", factors: [] }, comparison: { vs: { "PDO실": "PCL이더오래감" }, bestWith: ["필러"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 60, optimal: "40~55세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["실리프팅", "PCL", "오래감"] },

    { id: "silhouette", name: "실루엣소프트", nameEn: "Silhouette Soft", brand: "Sinclair", category: "리프팅/타이트닝", subcategory: "실리프팅", mechanism: {detailed: "PLLA콘이리프팅하며콜라겐유도", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 60, optimal: "40~55세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      
      review: {
                "summary": "실루엣 소프트는 녹는 콘이 달린 실리프팅으로 강력한 리프팅과 볼륨 효과를 동시에 제공합니다.",
                "likes": [
                        "강력한 리프팅",
                        "볼륨 효과",
                        "2년 이상 유지",
                        "콘으로 강한 고정",
                        "처짐 개선 확실"
                ],
                "dislikes": [
                        "가격 높음",
                        "붓기/멍 1~2주",
                        "당김감 있음",
                        "경험 많은 의사 필수"
                ],
                "tips": [
                        "처짐 심할 때 효과적",
                        "볼륨+리프팅 동시 원하면",
                        "2주 다운타임 각오",
                        "자연스러움 원하면 다른 실로"
                ],
                "overall": "강력한 리프팅과 볼륨이 필요할 때 선택하는 프리미엄 실리프팅입니다."
        }, effects: { primary: ["리프팅", "콜라겐"], secondary: [], notFor: [], onsetTime: "즉각+점진", duration: "1.5~2년" }, procedure: { duration: "30~60분", anesthesia: "국소마취", sessions: "1회", interval: "1.5~2년" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "5~7일", commonSideEffects: ["붓기"], recoveryTips: ["표정자제"] }, suitability: { idealAge: "30대~50대", bestFor: ["리프팅+콜라겐"], notRecommended: ["켈로이드"], skinType: "대부분" }, pros: ["리프팅+콜라겐"], cons: ["비용"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "100~200만원", average: "150만원", factors: [] }, comparison: { vs: {}, bestWith: ["필러"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 60, optimal: "40~55세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["실리프팅", "PLLA"] },

    { id: "placentex", name: "플라센텍스", nameEn: "Placentex", brand: "다양", category: "스킨부스터", subcategory: "PDRN", mechanism: {detailed: "연어DNA재생인자피부재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["피부결", "재생"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "플라센텍스는 태반 추출물(PDRN)을 함유한 스킨부스터입니다. 피부 재생과 탄력 개선에 효과적인 이탈리아 제품입니다.",
                "likes": [
                        "PDRN 재생 효과",
                        "피부 탄력 개선",
                        "상처 치유 촉진",
                        "잔주름 개선",
                        "검증된 성분"
                ],
                "dislikes": [
                        "여러 회차 필요",
                        "효과 체감까지 시간",
                        "리쥬란과 비교됨",
                        "가격 있음"
                ],
                "tips": [
                        "리쥬란 대안으로",
                        "2~4주 간격 5회 이상",
                        "MTS와 병행 효과적",
                        "재생 목적에 최적"
                ],
                "overall": "PDRN 성분으로 피부 재생을 원할 때 리쥬란의 좋은 대안입니다."
        }, effects: { primary: ["재생", "탄력"], secondary: ["피부결"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "3~6개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["재생", "손상피부"], notRecommended: ["해산물알러지"], skinType: "모든피부" }, pros: ["재생효과"], cons: ["여러회필요"], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["해산물알러지"], warnings: [] }, pricing: { range: "10~25만원", average: "15만원", factors: [] }, comparison: { vs: { "리쥬란": "유사성분" }, bestWith: ["리쥬란"] }, tags: ["PDRN", "재생"] },

    { id: "skinvive", name: "스킨바이브", nameEn: "SkinVive", brand: "Allergan", category: "스킨부스터", subcategory: "HA", mechanism: {detailed: "미세HA입자진피보습", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "28~55세", youngWarning: null },
      concerns: { primary: ["피부결"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "스킨바이브는 알레간의 수분 스킨부스터입니다. 히알루론산으로 피부 깊숙이 보습하고 광채를 더합니다.",
                "likes": [
                        "알레간 정품 HA",
                        "깊은 보습",
                        "광채 효과",
                        "6개월 유지",
                        "FDA 승인"
                ],
                "dislikes": [
                        "볼륨 효과는 없음",
                        "가격 높음",
                        "1~2회 필요",
                        "다른 스킨부스터와 비교"
                ],
                "tips": [
                        "건조한 피부에 추천",
                        "볼륨보다 보습 원할 때",
                        "리쥬란과 비교 상담",
                        "1개월 간격 2회"
                ],
                "overall": "프리미엄 보습 스킨부스터로 건조하고 푸석한 피부에 추천합니다."
        }, effects: { primary: ["보습", "윤기"], secondary: ["탄력"], notFor: ["볼륨"], onsetTime: "즉각~2주", duration: "6개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1~2회", interval: "6개월" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["보습", "윤기"], notRecommended: ["HA알러지"], skinType: "모든피부" }, pros: ["쥬비덤라인", "FDA승인"], cons: ["비용"], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["HA알러지"], warnings: [] }, pricing: { range: "30~50만원", average: "40만원", factors: [] }, comparison: { vs: { "물광주사": "스킨바이브=쥬비덤" }, bestWith: ["보톡스"] }, tags: ["HA", "보습", "쥬비덤"] },

    { id: "neuradem", name: "뉴라덤", nameEn: "Neuradem", brand: "Medytox", category: "스킨부스터", subcategory: "PDRN", mechanism: {detailed: "재생+보습동시효과", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "28~55세", youngWarning: null },
      concerns: { primary: ["피부결"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "뉴라덤은 독일산 PN(폴리뉴클레오티드) 스킨부스터입니다. 리쥬란과 유사한 효과로 피부 재생에 효과적입니다.",
                "likes": [
                        "PN 성분으로 재생",
                        "리쥬란 대안",
                        "피부 탄력 개선",
                        "잔주름 개선",
                        "독일 품질"
                ],
                "dislikes": [
                        "리쥬란보다 인지도 낮음",
                        "여러 회차 필요",
                        "효과 체감 시간 필요",
                        "취급 병원 적음"
                ],
                "tips": [
                        "리쥬란 대안으로",
                        "3~4주 간격 3~5회",
                        "MTS와 병행",
                        "재생 목적에 적합"
                ],
                "overall": "리쥬란의 독일산 대안으로 PN 성분 재생을 원할 때 고려해보세요."
        }, effects: { primary: ["재생", "보습"], secondary: ["탄력"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "3~6개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["재생+보습"], notRecommended: ["해산물알러지"], skinType: "모든피부" }, pros: ["복합효과"], cons: ["여러회필요"], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["해산물알러지"], warnings: [] }, pricing: { range: "15~30만원", average: "20만원", factors: [] }, comparison: { vs: {}, bestWith: ["리쥬란"] }, tags: ["PDRN", "HA", "복합"] },

    { id: "asce-exo", name: "ASCE+샤이닝", nameEn: "ASCE+ Shining", brand: "ExoCoBio", category: "스킨부스터", subcategory: "엑소좀", mechanism: {detailed: "엑소좀성장인자피부재생", },
      
      review: {
                "summary": "ASCE+ 엑소좀은 줄기세포 유래 엑소좀으로 피부 재생을 촉진합니다. 최신 재생 시술로 주목받고 있습니다.",
                "likes": [
                        "줄기세포 유래 엑소좀",
                        "강력한 재생 효과",
                        "피부결 개선",
                        "MRF와 시너지",
                        "최신 트렌드"
                ],
                "dislikes": [
                        "가격 높음",
                        "효과 검증 중",
                        "취급 병원 적음",
                        "과장 광고 주의"
                ],
                "tips": [
                        "MRF, MTS와 병행",
                        "흉터/재생에 효과적",
                        "정품 확인 중요",
                        "과대광고 주의"
                ],
                "overall": "최신 재생 시술로 MRF와 함께하면 시너지 효과가 있습니다."
        }, effects: { primary: ["재생", "탄력"], secondary: ["피부결"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "3~6개월" }, procedure: { duration: "30~40분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["재생", "안티에이징"], notRecommended: [], skinType: "모든피부" }, pros: ["최신재생기술"], cons: ["비용높음"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "30~60만원", average: "45만원", factors: [] }, comparison: { vs: { "엑소좀": "유사" }, bestWith: ["MRF"] }, tags: ["엑소좀", "재생"] },

    { id: "cellexo", name: "세렉소", nameEn: "Cellexo", brand: "에이바이오", category: "스킨부스터", subcategory: "엑소좀", mechanism: {detailed: "세포외소포체 재생촉진", },
      
      review: {
                "summary": "셀렉소는 엑소좀 스킨부스터로 피부 재생과 톤 개선에 효과적입니다. 국산 엑소좀 제품으로 가성비가 좋습니다.",
                "likes": [
                        "엑소좀 효과",
                        "피부 재생",
                        "국산 가성비",
                        "톤 개선",
                        "MTS와 병행"
                ],
                "dislikes": [
                        "효과 검증 더 필요",
                        "수입산보다 인지도 낮음",
                        "여러 회차 필요",
                        "엑소좀 품질 편차"
                ],
                "tips": [
                        "ASCE보다 가성비로",
                        "MTS와 함께 사용",
                        "3~4주 간격",
                        "재생 목적에"
                ],
                "overall": "가성비 있는 국산 엑소좀으로 재생 효과를 원할 때 고려하세요."
        }, effects: { primary: ["재생"], secondary: ["탄력"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "3~6개월" }, procedure: { duration: "30~40분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["재생"], notRecommended: [], skinType: "모든피부" }, pros: ["재생효과"], cons: ["비용"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "25~50만원", average: "35만원", factors: [] }, comparison: { vs: {}, bestWith: ["MRF"] }, tags: ["엑소좀", "재생"] },

    { id: "volbella-skin", name: "볼벨라스킨", nameEn: "Volbella Skin", brand: "Allergan", category: "스킨부스터", subcategory: "HA", mechanism: {detailed: "저점도HA보습윤기", },
      
      review: {
                "summary": "볼벨라 스킨은 알레간의 스킨부스터형 필러입니다. 잔주름과 피부결 개선에 효과적인 섬세한 제형입니다.",
                "likes": [
                        "알레간 품질",
                        "잔주름 개선",
                        "피부결 매끈함",
                        "자연스러운 효과",
                        "입술에도 사용"
                ],
                "dislikes": [
                        "가격 높음",
                        "다른 스킨부스터와 비교",
                        "효과 순함",
                        "필러보다 볼륨 약함"
                ],
                "tips": [
                        "잔주름/피부결에 적합",
                        "입술 자연스럽게 할 때",
                        "1cc 단위 시술",
                        "프리미엄 원할 때"
                ],
                "overall": "프리미엄 스킨부스터로 섬세한 피부결 개선에 적합합니다."
        }, effects: { primary: ["보습", "윤기"], secondary: ["잔주름"], notFor: ["볼륨"], onsetTime: "즉각~2주", duration: "6개월~1년" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1~2회", interval: "6개월" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["보습", "윤기"], notRecommended: ["HA알러지"], skinType: "모든피부" }, pros: ["쥬비덤품질"], cons: ["비용"], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["HA알러지"], warnings: [] }, pricing: { range: "25~45만원", average: "35만원", factors: [] }, comparison: { vs: {}, bestWith: ["보톡스"] }, tags: ["HA", "쥬비덤", "보습"] },

    { id: "belotero-revive", name: "벨로테로리바이브", nameEn: "Belotero Revive", brand: "Merz", category: "스킨부스터", subcategory: "HA", mechanism: {detailed: "보습강화HA스킨부스터", },
      
      review: {
                "summary": "벨로테로 리바이브는 갈더마의 스킨부스터입니다. 히알루론산으로 보습하고 글리세롤로 영양을 공급합니다.",
                "likes": [
                        "HA + 글리세롤",
                        "보습 + 영양 동시",
                        "자연스러운 효과",
                        "갈더마 품질",
                        "다운타임 적음"
                ],
                "dislikes": [
                        "가격 있음",
                        "여러 회차 필요",
                        "볼륨 효과 없음",
                        "다른 제품과 비교"
                ],
                "tips": [
                        "보습 + 영양 동시 원할 때",
                        "3~4주 간격 3회",
                        "건성 피부에 추천",
                        "스킨바이브와 비교"
                ],
                "overall": "보습과 영양을 동시에 원하는 분에게 좋은 스킨부스터입니다."
        }, effects: { primary: ["보습", "탄력"], secondary: ["윤기"], notFor: ["볼륨"], onsetTime: "즉각~2주", duration: "6~9개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "2~3회", interval: "4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["보습", "탄력"], notRecommended: ["HA알러지"], skinType: "모든피부" }, pros: ["보습강화"], cons: [], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["HA알러지"], warnings: [] }, pricing: { range: "20~40만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: ["리프팅"] }, tags: ["HA", "보습"] },

    { id: "dermatoxin", name: "더마톡신", nameEn: "Dermatoxin", brand: "다양", category: "스킨부스터", subcategory: "특수", mechanism: {detailed: "피부보톡스+보습동시", },
      
      review: {
                "summary": "더마톡신은 보톡스를 피부 전체에 미세하게 주입하는 스킨보톡스 기법입니다. 모공 축소와 피지 조절에 효과적입니다.",
                "likes": [
                        "모공 축소",
                        "피지 감소",
                        "매끈한 피부결",
                        "광채 효과",
                        "땀/유분 조절"
                ],
                "dislikes": [
                        "3~4개월마다 재시술",
                        "비용 누적",
                        "표정근엔 효과 없음",
                        "전체 얼굴 필요"
                ],
                "tips": [
                        "지성/모공 고민에 추천",
                        "얼굴 전체에 시술",
                        "3개월 유지",
                        "여름 전 추천"
                ],
                "overall": "모공과 피지가 고민인 지성 피부에 효과적입니다."
        }, effects: { primary: ["모공", "피지"], secondary: ["보습", "윤기"], notFor: ["리프팅"], onsetTime: "1~2주", duration: "3~6개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "20대~40대", bestFor: ["모공", "피지+보습"], notRecommended: ["보톡스알러지"], skinType: "지성" }, pros: ["모공+보습"], cons: ["효과짧음"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["보톡스알러지"], warnings: [] }, pricing: { range: "20~40만원", average: "30만원", factors: [] }, comparison: { vs: { "스킨보톡스": "더마톡신=HA추가" }, bestWith: [] }, tags: ["보톡스", "HA", "모공"] },

    { id: "stemcell", name: "줄기세포배양액", nameEn: "Stem Cell CM", brand: "다양", category: "스킨부스터", subcategory: "재생", mechanism: {detailed: "성장인자풍부배양액피부재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 65, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["재생", "피부결"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "줄기세포 시술은 자가 지방 줄기세포나 배양 성장인자를 이용한 재생 시술입니다. 안티에이징과 재생에 효과적입니다.",
                "likes": [
                        "강력한 재생 효과",
                        "자가세포 사용 가능",
                        "안티에이징",
                        "자연스러운 볼륨",
                        "피부 질감 개선"
                ],
                "dislikes": [
                        "가격 매우 높음",
                        "채취 과정 필요",
                        "효과 편차",
                        "과장 광고 많음"
                ],
                "tips": [
                        "정식 시술인지 확인",
                        "과대광고 주의",
                        "검증된 병원에서만",
                        "비용 대비 효과 고려"
                ],
                "overall": "프리미엄 재생 시술이지만 과장 광고가 많으니 주의하세요."
        }, effects: { primary: ["재생"], secondary: ["탄력"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "3~6개월" }, procedure: { duration: "30~40분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["재생", "안티에이징"], notRecommended: [], skinType: "모든피부" }, pros: ["재생효과"], cons: ["비용"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "20~50만원", average: "35만원", factors: [] }, comparison: { vs: {}, bestWith: ["MRF"] }, tags: ["줄기세포", "재생"] },

    { id: "picoway", name: "피코웨이", nameEn: "PicoWay", brand: "Candela", category: "색소/미백", subcategory: "피코레이저", mechanism: {detailed: "532+785+1064nm색소파쇄", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["기미잡티", "색소침착"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "피코웨이는 듀얼 파장(532nm, 1064nm) 피코레이저입니다. 색소, 문신, 피부결 개선에 효과적인 프리미엄 장비입니다.",
                "likes": [
                        "듀얼 파장",
                        "색소 + 피부결 동시",
                        "문신 제거 효과",
                        "다운타임 적음",
                        "프리미엄 장비"
                ],
                "dislikes": [
                        "가격 높음",
                        "여러 회차 필요",
                        "피코슈어와 비교됨",
                        "병원마다 세팅 다름"
                ],
                "tips": [
                        "기미/색소에 효과적",
                        "피코슈어와 비교 상담",
                        "5~10회 권장",
                        "가을/겨울 집중"
                ],
                "overall": "프리미엄 피코레이저로 색소와 피부결을 동시에 개선합니다."
        }, effects: { primary: ["기미", "색소"], secondary: ["피부결"], notFor: ["리프팅"], onsetTime: "3~5회후", duration: "유지관리" }, procedure: { duration: "15~30분", anesthesia: "불필요~마취크림", sessions: "5~10회", interval: "2~4주" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음~1일", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["기미", "색소", "문신"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["다파장", "효과적"], cons: ["여러회"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: ["자외선차단"] }, pricing: { range: "10~25만원", average: "15만원", factors: [] }, comparison: { vs: { "피코슈어": "피코웨이=3파장" }, bestWith: ["미백주사"] }, tags: ["피코", "기미", "3파장"] },

    { id: "picoplus", name: "피코플러스", nameEn: "PicoPlus", brand: "Lutronic", category: "색소/미백", subcategory: "피코레이저", mechanism: {detailed: "4파장피코초레이저", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["기미잡티", "색소침착"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "피코플러스는 4파장 피코레이저(1064/532/595/660nm)입니다. 다양한 색소에 대응할 수 있는 만능 피코입니다.",
                "likes": [
                        "4파장 다양한 대응",
                        "컬러 문신도 가능",
                        "색소/톤 개선",
                        "피부결 개선",
                        "국산 장비"
                ],
                "dislikes": [
                        "가격 높음",
                        "여러 회차 필요",
                        "수입 피코와 비교됨",
                        "파장별 효과 차이"
                ],
                "tips": [
                        "다양한 색소에 대응",
                        "컬러 문신은 피코플러스",
                        "5~10회 권장",
                        "병원 장비 확인"
                ],
                "overall": "다양한 파장으로 여러 색소와 문신에 대응하는 국산 피코레이저입니다."
        }, effects: { primary: ["기미", "색소"], secondary: ["피부결"], notFor: ["리프팅"], onsetTime: "3~5회후", duration: "유지관리" }, procedure: { duration: "15~30분", anesthesia: "불필요~마취크림", sessions: "5~10회", interval: "2~4주" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음~1일", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["기미", "색소"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["국산", "가성비"], cons: ["여러회"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: ["자외선차단"] }, pricing: { range: "8~20만원", average: "12만원", factors: [] }, comparison: { vs: {}, bestWith: ["미백주사"] }, tags: ["피코", "국산", "기미"] },

    { id: "picocare", name: "피코케어", nameEn: "PicoCare", brand: "원텍", category: "색소/미백", subcategory: "피코레이저", mechanism: {detailed: "피코초펄스색소파쇄", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["기미잡티", "색소침착"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "피코케어는 국산 피코레이저로 가성비 있게 색소 치료가 가능합니다. 기미, 잡티, 피부톤 개선에 효과적입니다.",
                "likes": [
                        "국산 가성비",
                        "색소 개선",
                        "피부톤 균일화",
                        "다운타임 적음",
                        "검증된 효과"
                ],
                "dislikes": [
                        "수입 피코보다 약하다는 평",
                        "여러 회차 필요",
                        "기미 완치 어려움",
                        "유지 관리 필요"
                ],
                "tips": [
                        "가성비 피코 원할 때",
                        "정기 토닝으로 관리",
                        "5~10회 권장",
                        "자외선 차단 필수"
                ],
                "overall": "가성비 있게 피코토닝을 받고 싶을 때 좋은 선택입니다."
        }, effects: { primary: ["기미", "색소"], secondary: [], notFor: ["리프팅"], onsetTime: "3~5회후", duration: "유지관리" }, procedure: { duration: "15~30분", anesthesia: "불필요", sessions: "5~10회", interval: "2~4주" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["기미"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["가성비"], cons: ["여러회"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "5~15만원", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["미백주사"] }, tags: ["피코", "국산"] },

    { id: "starwalker", name: "스타워커", nameEn: "StarWalker", brand: "Fotona", category: "색소/미백", subcategory: "피코레이저", mechanism: {detailed: "피코+나노펄스복합", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["기미잡티", "색소침착"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "스타워커는 포토나의 프리미엄 엔디야그/피코 복합 레이저입니다. 색소, 문신, 피부 재생까지 다양하게 사용됩니다.",
                "likes": [
                        "포토나 프리미엄",
                        "다양한 모드",
                        "색소 + 재생",
                        "문신 제거 효과",
                        "검증된 브랜드"
                ],
                "dislikes": [
                        "가격 높음",
                        "여러 회차 필요",
                        "세팅 복잡",
                        "병원마다 활용 다름"
                ],
                "tips": [
                        "포토나 라인 선호 시",
                        "다양한 모드 활용",
                        "5~10회 권장",
                        "전문 병원에서"
                ],
                "overall": "포토나의 프리미엄 레이저로 다양한 피부 문제에 대응합니다."
        }, effects: { primary: ["색소", "문신"], secondary: ["피부결"], notFor: ["리프팅"], onsetTime: "3~5회후", duration: "유지관리" }, procedure: { duration: "15~30분", anesthesia: "불필요~마취크림", sessions: "5~10회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음~1일", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["문신제거", "색소"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["문신효과적"], cons: ["비용"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "15~30만원", average: "20만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["피코", "문신"] },

    { id: "spectra", name: "스펙트라VRM", nameEn: "Spectra VRM", brand: "Lutronic", category: "색소/미백", subcategory: "Q스위치", mechanism: {detailed: "나노초펄스멜라닌파쇄", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["기미잡티", "피부톤"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "스펙트라는 엔디야그 레이저의 대표 장비입니다. 레이저 토닝의 원조로 기미, 피부톤 개선에 많이 사용됩니다.",
                "likes": [
                        "토닝의 원조",
                        "기미/피부톤 개선",
                        "다운타임 적음",
                        "검증된 장비",
                        "대중적인 가격"
                ],
                "dislikes": [
                        "피코보다 효과 약함",
                        "많은 회차 필요",
                        "기미 완치 어려움",
                        "구형 장비라는 평"
                ],
                "tips": [
                        "정기 토닝으로 관리",
                        "피코 전 입문용",
                        "2주 간격 10회 이상",
                        "자외선 차단 필수"
                ],
                "overall": "레이저 토닝의 기본으로 꾸준한 관리에 적합합니다."
        }, effects: { primary: ["기미", "색소"], secondary: ["피부결"], notFor: ["리프팅"], onsetTime: "5~10회후", duration: "유지관리" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "10~20회", interval: "1~2주" }, recovery: { painLevel: 1, painDescription: "따끔", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["기미", "유지관리"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["순한토닝"], cons: ["여러회"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "3~8만원", average: "5만원", factors: [] }, comparison: { vs: { "피코": "스펙트라=순함/여러회" }, bestWith: ["피코토닝"] }, tags: ["Q스위치", "토닝"] },

    { id: "helios", name: "헬리오스", nameEn: "Helios", brand: "Lutronic", category: "색소/미백", subcategory: "Q스위치", mechanism: {detailed: "나노초펄스색소파쇄", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["기미잡티", "피부톤"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "헬리오스는 국산 엔디야그 레이저로 스펙트라의 대안입니다. 토닝과 색소 치료에 가성비 있게 사용됩니다.",
                "likes": [
                        "국산 가성비",
                        "토닝 효과",
                        "색소 개선",
                        "다운타임 적음",
                        "스펙트라 대안"
                ],
                "dislikes": [
                        "스펙트라/피코보다 약함",
                        "많은 회차 필요",
                        "효과 순함",
                        "기미 완치 어려움"
                ],
                "tips": [
                        "가성비 토닝 원할 때",
                        "정기 관리용",
                        "2주 간격 권장",
                        "피코로 업그레이드 고려"
                ],
                "overall": "가성비 있는 국산 토닝 레이저로 정기 관리에 적합합니다."
        }, effects: { primary: ["기미", "색소"], secondary: [], notFor: ["리프팅"], onsetTime: "5~10회후", duration: "유지관리" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "10~20회", interval: "1~2주" }, recovery: { painLevel: 1, painDescription: "따끔", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["기미"], notRecommended: ["광과민증"], skinType: "모든피부" }, pros: ["순함"], cons: ["여러회"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "3~8만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["피코토닝"] }, tags: ["Q스위치", "토닝"] },

    { id: "bbl", name: "BBL", nameEn: "BroadBand Light", brand: "Sciton", category: "색소/미백", subcategory: "IPL", mechanism: {detailed: "다파장광색소+혈관+재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 65, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["기미잡티", "홍조"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "BBL(BroadBand Light)은 사이톤의 IPL 장비입니다. 색소, 홍조, 피부결 개선에 효과적인 프리미엄 광치료입니다.",
                "likes": [
                        "프리미엄 IPL",
                        "색소 + 홍조 동시",
                        "피부결 개선",
                        "광노화 개선",
                        "다운타임 적음"
                ],
                "dislikes": [
                        "가격 높음",
                        "여러 회차 필요",
                        "일반 IPL과 비교됨",
                        "병원마다 세팅 다름"
                ],
                "tips": [
                        "프리미엄 IPL 원할 때",
                        "3~4주 간격 5회 이상",
                        "포에버영 BBL 모드",
                        "자외선 차단 필수"
                ],
                "overall": "프리미엄 광치료로 색소와 홍조를 동시에 개선합니다."
        }, effects: { primary: ["색소", "홍조"], secondary: ["탄력"], notFor: ["리프팅"], onsetTime: "3~5회후", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요~마취크림", sessions: "3~5회", interval: "3~4주" }, recovery: { painLevel: 1.5, painDescription: "고무줄튕김", downtime: "없음~3일", commonSideEffects: ["홍반", "딱지"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["색소", "홍조", "피부리쥬비"], notRecommended: ["광과민증"], skinType: "밝은피부" }, pros: ["다목적"], cons: ["어두운피부주의"], safety: {
        seriousSideEffects: ["화상"], contraindications: ["광과민증"], warnings: ["어두운피부주의"] }, pricing: { range: "15~35만원", average: "25만원", factors: [] }, comparison: { vs: { "IPL": "BBL=고급버전" }, bestWith: ["스킨케어"] }, tags: ["BBL", "IPL", "색소"] },

    { id: "erbium-mole", name: "어븀야그점제거", nameEn: "Erbium Mole Removal", brand: "다양", category: "점/사마귀", subcategory: "레이저", mechanism: {detailed: "2940nm물흡수조직기화", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["점", "사마귀"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "어븀야그 점제거는 CO2보다 순한 레이저로 점을 제거합니다. 색소침착 위험이 적고 회복이 빠릅니다.",
                "likes": [
                        "CO2보다 순함",
                        "색소침착 적음",
                        "회복 빠름",
                        "섬세한 제거",
                        "얇은 피부에 적합"
                ],
                "dislikes": [
                        "깊은 점은 CO2가 나음",
                        "CO2보다 약함",
                        "재발 가능",
                        "가격 차이"
                ],
                "tips": [
                        "얕은 점에 추천",
                        "눈가 등 민감부위에",
                        "CO2와 비교 상담",
                        "관리는 동일하게"
                ],
                "overall": "순한 점제거를 원하거나 민감한 부위에 적합합니다."
        }, effects: { primary: ["점제거"], secondary: [], notFor: [], onsetTime: "즉각(딱지후)", duration: "영구적" }, procedure: { duration: "10~30분", anesthesia: "마취크림", sessions: "1회", interval: "필요시" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "5~10일", commonSideEffects: ["딱지"], recoveryTips: ["딱지보호"] }, suitability: { idealAge: "전연령", bestFor: ["얕은점"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["얕은점에적합", "흉터적음"], cons: ["깊은점재발가능"], safety: {
        seriousSideEffects: ["흉터"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "5천~2만원/개", average: "1만원/개", factors: [] }, comparison: { vs: { "CO2": "어븀=얕은점" }, bestWith: [] }, tags: ["점제거", "어븀야그"] },

    { id: "cryo", name: "냉동치료", nameEn: "Cryotherapy", brand: "다양", category: "점/사마귀", subcategory: "냉동", mechanism: {detailed: "-196도액체질소조직괴사", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 10, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["사마귀"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "냉동치료는 액체질소로 사마귀, 검버섯 등을 얼려서 제거합니다. 간단하고 저렴한 피부 병변 제거법입니다.",
                "likes": [
                        "간단한 시술",
                        "저렴함",
                        "사마귀에 효과적",
                        "마취 불필요",
                        "바로 일상 가능"
                ],
                "dislikes": [
                        "통증 있음",
                        "물집 생김",
                        "여러 회차 필요",
                        "색소침착 가능"
                ],
                "tips": [
                        "사마귀는 냉동이 기본",
                        "2~3주 간격 반복",
                        "물집 터뜨리지 말기",
                        "검버섯은 레이저가 나을 수도"
                ],
                "overall": "사마귀 제거의 기본적인 방법으로 간단하고 저렴합니다."
        }, effects: { primary: ["사마귀", "티눈"], secondary: ["잡티"], notFor: ["깊은점"], onsetTime: "1~2주", duration: "영구적" }, procedure: { duration: "5~10분", anesthesia: "불필요", sessions: "1~3회", interval: "2~3주" }, recovery: { painLevel: 2, painDescription: "시림", downtime: "1~2주", commonSideEffects: ["물집", "딱지"], recoveryTips: ["물집터뜨리지않기"] }, suitability: { idealAge: "전연령", bestFor: ["사마귀", "티눈"], notRecommended: ["냉감과민"], skinType: "모든피부" }, pros: ["간단함", "저렴함"], cons: ["색소침착가능"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["냉감과민"], warnings: [] }, pricing: { range: "1~3만원", average: "2만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["냉동", "사마귀"] },

    { id: "encore", name: "앙코르", nameEn: "eCO2 Encore", brand: "Lutronic", category: "흉터/모공", subcategory: "프랙셔널", mechanism: {detailed: "CO2레이저미세홀재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["모공", "흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "앙코르는 CO2 프락셔널 레이저로 흉터, 모공, 피부 재생에 효과적입니다. 강력한 리서페이싱 효과를 제공합니다.",
                "likes": [
                        "강력한 재생 효과",
                        "흉터/모공 개선",
                        "콜라겐 리모델링",
                        "검증된 효과",
                        "깊은 치료 가능"
                ],
                "dislikes": [
                        "5~7일 다운타임",
                        "통증 있음",
                        "붉음 오래감",
                        "여러 회차 필요"
                ],
                "tips": [
                        "심한 흉터에 효과적",
                        "다운타임 각오 필수",
                        "가을/겨울 추천",
                        "재생크림 열심히"
                ],
                "overall": "심한 흉터나 모공에 강력한 효과를 원할 때 선택합니다."
        }, effects: { primary: ["흉터", "모공"], secondary: ["피부결"], notFor: ["색소"], onsetTime: "1~3개월", duration: "영구적개선" }, procedure: { duration: "30~60분", anesthesia: "마취크림필수", sessions: "3~5회", interval: "4~6주" }, recovery: { painLevel: 3, painDescription: "화끈", downtime: "7~14일", commonSideEffects: ["홍반", "각질"], recoveryTips: ["보습", "자외선차단"] }, suitability: { idealAge: "20대~50대", bestFor: ["깊은흉터", "모공"], notRecommended: ["켈로이드"], skinType: "밝은피부" }, pros: ["강력한효과"], cons: ["다운타임김"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["켈로이드"], warnings: ["자외선차단필수"] }, pricing: { range: "30~60만원", average: "40만원", factors: [] }, comparison: { vs: { "프락셀": "앙코르=CO2" }, bestWith: ["스킨부스터"] }, tags: ["프랙셔널", "CO2", "흉터"] },

    { id: "eco2-mosaic", name: "에코투/모자이크", nameEn: "eCO2/Mosaic", brand: "다양", category: "흉터/모공", subcategory: "프랙셔널", mechanism: {detailed: "미세홀형성재생촉진", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["여드름흉터", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      
      review: {
                "summary": "eCO2 모자이크는 루트로닉의 CO2 프락셔널입니다. 흉터, 모공, 피부 재생에 효과적인 국산 대표 장비입니다.",
                "likes": [
                        "국산 대표 프락셔널",
                        "흉터/모공 개선",
                        "피부 재생",
                        "검증된 효과",
                        "다양한 세팅"
                ],
                "dislikes": [
                        "5~7일 다운타임",
                        "통증",
                        "붉음 지속",
                        "여러 회차 필요"
                ],
                "tips": [
                        "앙코르와 비교",
                        "심한 흉터에 효과적",
                        "다운타임 각오",
                        "가을/겨울에"
                ],
                "overall": "국산 CO2 프락셔널의 대표로 흉터와 모공 개선에 효과적입니다."
        }, effects: { primary: ["흉터", "모공"], secondary: ["피부결"], notFor: [], onsetTime: "1~3개월", duration: "영구적개선" }, procedure: { duration: "30~60분", anesthesia: "마취크림", sessions: "3~5회", interval: "4~6주" }, recovery: { painLevel: 2.5, painDescription: "화끈", downtime: "5~10일", commonSideEffects: ["홍반", "각질"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["흉터", "모공"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["효과적"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "20~50만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, tags: ["프랙셔널", "흉터"] },

    { id: "pico-fractional", name: "피코프랙셔널", nameEn: "Pico Fractional", brand: "다양", category: "흉터/모공", subcategory: "프랙셔널", mechanism: {detailed: "피코초레이저LIOB효과", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["모공", "피부결"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "피코 프락셔널은 피코레이저에 프락셔널 핸드피스를 장착한 시술입니다. 모공, 흉터, 피부결 개선에 효과적입니다.",
                "likes": [
                        "모공/흉터 개선",
                        "피코의 빠른 회복",
                        "CO2보다 다운타임 짧음",
                        "피부결 개선",
                        "콜라겐 리모델링"
                ],
                "dislikes": [
                        "CO2보다 약함",
                        "여러 회차 필요",
                        "가격 높음",
                        "깊은 흉터엔 부족"
                ],
                "tips": [
                        "모공/얕은 흉터에 적합",
                        "3~4주 간격 5회 이상",
                        "CO2 프락셔널과 비교",
                        "다운타임 짧게 원하면"
                ],
                "overall": "다운타임 부담 없이 모공과 피부결을 개선하고 싶을 때 추천합니다."
        }, effects: { primary: ["모공", "피부결"], secondary: ["흉터"], notFor: ["깊은흉터"], onsetTime: "4~6주", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "3~5회", interval: "3~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~40대", bestFor: ["모공", "피부결"], notRecommended: ["깊은흉터"], skinType: "모든피부" }, pros: ["다운타임적음", "피부결"], cons: ["깊은흉터한계"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: [], warnings: [] }, pricing: { range: "10~25만원", average: "15만원", factors: [] }, comparison: { vs: { "프락셀": "피코프랙=다운타임적음" }, bestWith: ["토닝"] }, tags: ["피코", "프랙셔널", "모공"] },

    { id: "acne-extraction", name: "압출+관리", nameEn: "Acne Extraction", brand: "수기", category: "여드름/트러블", subcategory: "관리", mechanism: {detailed: "피지압출후진정스킨케어", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 12, maximum: 50, optimal: "12~40세", youngWarning: null },
      concerns: { primary: ["여드름", "블랙헤드"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "여드름 압출은 면포, 농포를 직접 짜내는 기본적인 여드름 치료입니다. PDT, 레이저와 병행하면 효과적입니다.",
                "likes": [
                        "즉각적인 여드름 제거",
                        "염증 감소",
                        "다른 시술과 병행",
                        "기본 치료",
                        "비용 저렴"
                ],
                "dislikes": [
                        "통증 있음",
                        "흉터 위험",
                        "재발 가능",
                        "숙련자가 해야 안전"
                ],
                "tips": [
                        "혼자 짜지 말고 병원에서",
                        "PDT/레이저와 병행",
                        "압출 후 진정 관리",
                        "깊은 여드름은 주사로"
                ],
                "overall": "여드름 치료의 기본이지만 반드시 전문가에게 받으세요."
        }, effects: { primary: ["여드름"], secondary: ["모공"], notFor: ["염증여드름"], onsetTime: "즉각", duration: "유지관리" }, procedure: { duration: "30~60분", anesthesia: "불필요", sessions: "정기관리", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["홍반"], recoveryTips: ["진정팩"] }, suitability: { idealAge: "10대~30대", bestFor: ["면포성여드름"], notRecommended: ["염증심함"], skinType: "지성" }, pros: ["즉각피지제거"], cons: ["자극"], safety: {
        seriousSideEffects: ["흉터"], contraindications: ["염증심함"], warnings: ["전문가에게"] }, pricing: { range: "3~10만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨케어", "LED"] }, tags: ["여드름", "압출"] },

    { id: "bluelight", name: "블루라이트", nameEn: "Blue Light", brand: "다양", category: "여드름/트러블", subcategory: "광선치료", mechanism: {detailed: "P.acnes포르피린자극살균", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 12, maximum: 50, optimal: "15~40세", youngWarning: null },
      concerns: { primary: ["여드름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "블루라이트 치료는 415nm 청색광으로 여드름균을 살균합니다. 염증성 여드름에 보조적으로 사용됩니다.",
                "likes": [
                        "여드름균 살균",
                        "무통증",
                        "다운타임 없음",
                        "다른 치료와 병행",
                        "순한 치료"
                ],
                "dislikes": [
                        "단독 효과 약함",
                        "여러 회차 필요",
                        "심한 여드름엔 부족",
                        "보조 치료 개념"
                ],
                "tips": [
                        "PDT/레이저와 병행",
                        "주 2~3회 권장",
                        "가벼운 여드름에",
                        "LED와 유사"
                ],
                "overall": "여드름 치료의 보조 수단으로 다른 시술과 함께 받으면 좋습니다."
        }, effects: { primary: ["여드름살균"], secondary: [], notFor: ["흉터"], onsetTime: "꾸준히", duration: "유지관리" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "정기관리", interval: "주2~3회" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "10대~30대", bestFor: ["가벼운여드름"], notRecommended: ["심한여드름"], skinType: "지성" }, pros: ["무통증", "부작용없음"], cons: ["단독효과미미"], safety: {
        seriousSideEffects: ["없음"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "1~5만원", average: "3만원", factors: [] }, comparison: { vs: { "PDT": "블루라이트=순함" }, bestWith: ["스킨케어"] }, tags: ["블루라이트", "여드름"] },

    { id: "punch", name: "펀치절제술", nameEn: "Punch Excision", brand: "수기", category: "흉터/모공", subcategory: "흉터치료", mechanism: {detailed: "펀치로흉터절제후봉합", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["여드름흉터"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      
      review: {
                "summary": "펀치 기법은 깊은 아이스픽 흉터를 펀치로 제거하고 봉합하는 시술입니다. 깊고 좁은 흉터에 효과적입니다.",
                "likes": [
                        "깊은 흉터 제거",
                        "아이스픽에 효과적",
                        "한 번에 제거",
                        "다른 시술로 안 되는 흉터에",
                        "검증된 방법"
                ],
                "dislikes": [
                        "봉합 흉터 남을 수 있음",
                        "1~2주 다운타임",
                        "모든 흉터에 불가",
                        "숙련자 필요"
                ],
                "tips": [
                        "아이스픽 흉터 전용",
                        "레이저로 안 되는 경우",
                        "봉합 관리 중요",
                        "서브시전과 병행"
                ],
                "overall": "레이저로 개선 안 되는 깊은 아이스픽 흉터의 마지막 수단입니다."
        }, effects: { primary: ["아이스픽흉터"], secondary: [], notFor: ["넓은흉터"], onsetTime: "2~3개월", duration: "영구적" }, procedure: { duration: "30~60분", anesthesia: "국소마취", sessions: "1회", interval: "필요시" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "7~14일", commonSideEffects: ["딱지"], recoveryTips: ["봉합관리"] }, suitability: { idealAge: "20대~40대", bestFor: ["깊은아이스픽"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["깊은흉터제거"], cons: ["흉터교환"], safety: {
        seriousSideEffects: ["흉터"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "5~15만원/개", average: "10만원/개", factors: [] }, comparison: { vs: {}, bestWith: ["프락셀"] }, tags: ["흉터", "펀치절제"] },

    { id: "steroid-inj", name: "스테로이드주사", nameEn: "Steroid Injection", brand: "다양", category: "흉터/모공", subcategory: "흉터치료", mechanism: {detailed: "트리암시놀론콜라겐억제", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 60, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["켈로이드"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "스테로이드 주사는 켈로이드, 비후성 흉터에 스테로이드를 주입해 흉터를 평평하게 만듭니다.",
                "likes": [
                        "켈로이드 치료",
                        "볼록한 흉터 평평하게",
                        "효과 검증됨",
                        "비교적 간단",
                        "보험 적용 가능"
                ],
                "dislikes": [
                        "피부 위축 가능",
                        "여러 회차 필요",
                        "재발 가능",
                        "주사 부위 움푹 패일 수 있음"
                ],
                "tips": [
                        "켈로이드/비후성 흉터에",
                        "4주 간격 반복",
                        "너무 많이 맞으면 위축",
                        "레이저와 병행"
                ],
                "overall": "켈로이드와 볼록한 흉터에 기본적인 치료법입니다."
        }, effects: { primary: ["켈로이드", "비후성흉터"], secondary: [], notFor: ["위축성흉터"], onsetTime: "4~6주", duration: "유지관리" }, procedure: { duration: "10분", anesthesia: "불필요", sessions: "3~6회", interval: "4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사부위함몰"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["켈로이드", "비후성흉터"], notRecommended: ["위축성흉터", "당뇨"], skinType: "무관" }, pros: ["켈로이드효과"], cons: ["함몰가능", "여러회"], safety: {
        seriousSideEffects: ["피부위축"], contraindications: ["감염"], warnings: ["과다주의"] }, pricing: { range: "3~10만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["레이저"] }, tags: ["켈로이드", "스테로이드"] },

    // ===== 최종 배치: 128~200 =====
    { id: "botulax", name: "보툴렉스", nameEn: "Botulax", brand: "휴젤", category: "주름/보톡스", subcategory: "보톡스브랜드", mechanism: {detailed: "보툴리눔톡신A형", },
      
      review: {
                "summary": "보툴렉스는 대웅제약의 국산 보톡스입니다. 나보타와 함께 국산 보톡스의 양대산맥으로 효과가 검증되었습니다.",
                "likes": [
                        "국산 대표 브랜드",
                        "가성비 좋음",
                        "효과 검증됨",
                        "다양한 부위 사용",
                        "안전성 확보"
                ],
                "dislikes": [
                        "수입산보다 짧다는 평도",
                        "브랜드별 차이",
                        "개인차 있음",
                        "내성 가능"
                ],
                "tips": [
                        "나보타와 비교",
                        "가성비 원하면 국산",
                        "정품 확인 중요",
                        "효과 보고 브랜드 선택"
                ],
                "overall": "가성비 좋은 국산 보톡스로 나보타와 함께 많이 사용됩니다."
        }, effects: { primary: ["주름"], secondary: [], notFor: [], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "부위별", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["보톡스"], notRecommended: ["신경근육질환"], skinType: "무관" }, pros: ["국산가성비"], cons: [], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["보톡스", "국산"] },

    { id: "meditoxin", name: "메디톡신", nameEn: "Meditoxin", brand: "메디톡스", category: "주름/보톡스", subcategory: "보톡스브랜드", mechanism: {detailed: "보툴리눔톡신A형", },
      
      review: {
                "summary": "메디톡신은 메디톡스의 보톡스 제품입니다. 국산 보톡스 중 역사가 오래되고 검증된 제품입니다.",
                "likes": [
                        "오랜 역사",
                        "검증된 효과",
                        "가성비",
                        "다양한 부위",
                        "국산 브랜드"
                ],
                "dislikes": [
                        "나보타/보툴렉스와 비교됨",
                        "지속 기간 개인차",
                        "브랜드 인지도",
                        "병원마다 취급 다름"
                ],
                "tips": [
                        "국산 보톡스 중 선택",
                        "병원 취급 브랜드 확인",
                        "효과는 대동소이",
                        "가격 비교"
                ],
                "overall": "국산 보톡스의 원조급으로 검증된 효과를 제공합니다."
        }, effects: { primary: ["주름"], secondary: [], notFor: [], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "부위별", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["보톡스"], notRecommended: ["신경근육질환"], skinType: "무관" }, pros: ["국산"], cons: [], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["보톡스", "국산"] },

    { id: "volbella", name: "쥬비덤볼벨라", nameEn: "Juvederm Volbella", brand: "Allergan", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "Vycross섬세부위용", },
      
      review: {
                "summary": "볼벨라는 알레간의 입술/잔주름 전용 필러입니다. 부드러운 제형으로 섬세한 부위에 자연스럽게 사용됩니다.",
                "likes": [
                        "입술 전용 최적화",
                        "자연스러운 결과",
                        "잔주름에 효과적",
                        "부드러운 제형",
                        "알레간 품질"
                ],
                "dislikes": [
                        "볼륨용 아님",
                        "가격 높음",
                        "6~12개월 유지",
                        "다른 부위엔 부적합"
                ],
                "tips": [
                        "입술, 눈밑 잔주름에",
                        "자연스러운 입술 원할 때",
                        "볼륨은 볼루마로",
                        "소량씩 자연스럽게"
                ],
                "overall": "입술과 잔주름에 특화된 섬세한 필러입니다."
        }, effects: { primary: ["입술", "잔주름"], secondary: [], notFor: ["볼륨"], onsetTime: "즉각", duration: "12개월" }, procedure: { duration: "15~20분", anesthesia: "마취크림", sessions: "1회", interval: "1년" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "20대~50대", bestFor: ["입술"], notRecommended: [], skinType: "무관" }, pros: ["섬세부위적합"], cons: ["비용"], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "40~60만원", average: "50만원", factors: [] }, comparison: { vs: {}, bestWith: ["보톡스"] }, tags: ["필러", "입술"] },

    { id: "volift", name: "쥬비덤볼리프트", nameEn: "Juvederm Volift", brand: "Allergan", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "Vycross주름용", },
      
      review: {
                "summary": "볼리프트는 알레간의 팔자주름/입술 라인용 필러입니다. 볼루마와 볼벨라의 중간 정도 제형입니다.",
                "likes": [
                        "팔자주름에 최적",
                        "적당한 볼륨감",
                        "자연스러운 결과",
                        "12~18개월 유지",
                        "알레간 품질"
                ],
                "dislikes": [
                        "가격 높음",
                        "볼루마보다 볼륨 약함",
                        "재시술 필요",
                        "부위 제한적"
                ],
                "tips": [
                        "팔자주름에 추천",
                        "볼루마/볼벨라와 비교",
                        "중간 볼륨 원할 때",
                        "자연스러움 우선"
                ],
                "overall": "팔자주름과 입가 라인에 적당한 볼륨을 주는 필러입니다."
        }, effects: { primary: ["팔자"], secondary: [], notFor: [], onsetTime: "즉각", duration: "15개월" }, procedure: { duration: "20분", anesthesia: "마취크림", sessions: "1회", interval: "1~1.5년" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["팔자주름"], notRecommended: [], skinType: "무관" }, pros: ["자연스러움"], cons: [], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "40~60만원", average: "50만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필러", "팔자"] },

    { id: "belotero-filler", name: "벨로테로", nameEn: "Belotero", brand: "Merz", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "CPM기술", },
      
      review: {
                "summary": "벨로테로는 갈더마의 필러 라인입니다. 다양한 제형으로 부위별 맞춤 시술이 가능합니다.",
                "likes": [
                        "다양한 라인업",
                        "자연스러운 결과",
                        "갈더마 품질",
                        "부위별 최적화",
                        "CPM 기술"
                ],
                "dislikes": [
                        "가격 높음",
                        "알레간만큼 유명하진 않음",
                        "병원마다 취급 다름",
                        "제형별 특성 파악 필요"
                ],
                "tips": [
                        "갈더마 선호 시",
                        "부위별 제형 선택",
                        "레스틸렌과 비교",
                        "자연스러움 원하면"
                ],
                "overall": "갈더마의 프리미엄 필러로 자연스러운 결과를 원할 때 좋습니다."
        }, effects: { primary: ["주름", "볼륨"], secondary: [], notFor: [], onsetTime: "즉각", duration: "6~12개월" }, procedure: { duration: "20분", anesthesia: "마취크림", sessions: "1회", interval: "6~12개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["주름"], notRecommended: [], skinType: "무관" }, pros: ["자연스러움"], cons: [], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "30~50만원", average: "40만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필러", "벨로테로"] },

    { id: "teosyal", name: "테오시알", nameEn: "Teosyal", brand: "Teoxane", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "순수HA", },
      
      review: {
                "summary": "테오시알은 스위스 테옥산의 필러입니다. 유럽에서 인기 있는 프리미엄 필러로 다양한 라인업이 있습니다.",
                "likes": [
                        "스위스 품질",
                        "다양한 라인업",
                        "유럽 인기 브랜드",
                        "자연스러운 결과",
                        "안전성"
                ],
                "dislikes": [
                        "국내 인지도 낮음",
                        "가격 높음",
                        "취급 병원 적음",
                        "다른 브랜드와 비교"
                ],
                "tips": [
                        "유럽 브랜드 선호 시",
                        "레디에스 HA 원할 때",
                        "병원에 취급 확인",
                        "알레간/갈더마와 비교"
                ],
                "overall": "유럽에서 검증된 프리미엄 필러로 자연스러운 결과를 제공합니다."
        }, effects: { primary: ["주름", "볼륨"], secondary: [], notFor: [], onsetTime: "즉각", duration: "9~12개월" }, procedure: { duration: "20분", anesthesia: "마취크림", sessions: "1회", interval: "9~12개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["주름"], notRecommended: [], skinType: "무관" }, pros: ["순수HA"], cons: [], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "25~45만원", average: "35만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필러", "테오시알"] },

    { id: "chaeum", name: "더채움", nameEn: "Chaeum", brand: "휴젤", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "SHAPE기술", },
      
      review: {
                "summary": "채움은 휴젤의 국산 필러 브랜드입니다. 가성비 좋은 국산 필러로 다양한 부위에 사용됩니다.",
                "likes": [
                        "국산 가성비",
                        "다양한 라인업",
                        "휴젤 품질",
                        "비용 부담 적음",
                        "검증된 효과"
                ],
                "dislikes": [
                        "수입산보다 짧다는 평",
                        "브랜드 인지도",
                        "효과 개인차",
                        "지속 기간"
                ],
                "tips": [
                        "가성비 필러 원할 때",
                        "수입산과 비교 상담",
                        "국산도 효과 좋음",
                        "병원 추천 따라"
                ],
                "overall": "가성비 좋은 국산 필러로 부담 없이 시술받고 싶을 때 추천합니다."
        }, effects: { primary: ["볼륨"], secondary: [], notFor: [], onsetTime: "즉각", duration: "9~12개월" }, procedure: { duration: "20분", anesthesia: "마취크림", sessions: "1회", interval: "9~12개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["볼륨"], notRecommended: [], skinType: "무관" }, pros: ["국산가성비"], cons: [], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "20~40만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필러", "국산"] },

    { id: "neuramis", name: "뉴라미스", nameEn: "Neuramis", brand: "메디톡스", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "HICE기술", },
      
      review: {
                "summary": "뉴라미스는 메디톡스의 국산 필러입니다. 메디톡신과 함께 메디톡스의 대표 제품으로 가성비가 좋습니다.",
                "likes": [
                        "국산 가성비",
                        "다양한 라인업",
                        "검증된 효과",
                        "메디톡스 품질",
                        "비용 절감"
                ],
                "dislikes": [
                        "수입산과 비교됨",
                        "지속 기간 개인차",
                        "브랜드 선호도",
                        "효과 편차"
                ],
                "tips": [
                        "가성비 필러로",
                        "채움과 비교",
                        "국산 필러 중 선택",
                        "효과는 충분함"
                ],
                "overall": "국산 필러의 대표주자로 가성비 있게 필러를 맞고 싶을 때 좋습니다."
        }, effects: { primary: ["볼륨"], secondary: [], notFor: [], onsetTime: "즉각", duration: "9~12개월" }, procedure: { duration: "20분", anesthesia: "마취크림", sessions: "1회", interval: "9~12개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["볼륨"], notRecommended: [], skinType: "무관" }, pros: ["국산가성비"], cons: [], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "15~35만원", average: "25만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필러", "국산"] },

    { id: "yvoire", name: "이보아르", nameEn: "Yvoire", brand: "LG화학", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "HA필러", },
      
      review: {
                "summary": "이보아르는 LG화학의 프리미엄 국산 필러입니다. 국산이지만 프리미엄 라인으로 효과와 지속력이 좋습니다.",
                "likes": [
                        "프리미엄 국산",
                        "LG화학 품질",
                        "지속력 좋음",
                        "다양한 라인업",
                        "수입산 대안"
                ],
                "dislikes": [
                        "국산 중 비쌈",
                        "수입산과 비교됨",
                        "병원마다 취급 다름",
                        "인지도"
                ],
                "tips": [
                        "프리미엄 국산 원하면",
                        "수입산 대비 가성비",
                        "볼류마/클래식 라인",
                        "병원 추천 따라"
                ],
                "overall": "프리미엄 국산 필러로 수입산 대비 가성비 있게 좋은 효과를 원할 때."
        }, effects: { primary: ["볼륨"], secondary: [], notFor: [], onsetTime: "즉각", duration: "9~12개월" }, procedure: { duration: "20분", anesthesia: "마취크림", sessions: "1회", interval: "9~12개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["볼륨"], notRecommended: [], skinType: "무관" }, pros: ["국산"], cons: [], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "15~35만원", average: "25만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필러", "국산"] },

    { id: "clarity2", name: "클래리티2", nameEn: "Clarity II", brand: "Lutronic", category: "제모", subcategory: "레이저", mechanism: {detailed: "듀얼파장제모", },
      
      review: {
                "summary": "클래리티2는 루트로닉의 듀얼 파장 레이저 제모기입니다. 755nm와 1064nm로 다양한 피부에 대응합니다.",
                "likes": [
                        "듀얼 파장",
                        "다양한 피부 타입",
                        "젠틀맥스 대안",
                        "국산 장비",
                        "효과 검증됨"
                ],
                "dislikes": [
                        "젠틀맥스와 비교됨",
                        "통증 있음",
                        "여러 회차 필요",
                        "병원마다 세팅 다름"
                ],
                "tips": [
                        "국산 제모기 원하면",
                        "젠틀맥스와 비교",
                        "755nm가 제모에 효과적",
                        "4~6주 간격"
                ],
                "overall": "국산 듀얼 파장 제모기로 젠틀맥스의 좋은 대안입니다."
        }, effects: { primary: ["제모"], secondary: ["색소"], notFor: [], onsetTime: "5~6회후", duration: "영구감모" }, procedure: { duration: "부위별", anesthesia: "쿨링", sessions: "6~10회", interval: "4~6주" }, recovery: { painLevel: 2, painDescription: "고무줄튕김", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "전연령", bestFor: ["제모"], notRecommended: ["흰털"], skinType: "모든피부" }, pros: ["듀얼파장"], cons: [], safety: {
        seriousSideEffects: ["화상"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["제모", "듀얼"] },

    { id: "lightsheer", name: "라이트쉬어", nameEn: "LightSheer", brand: "Lumenis", category: "제모", subcategory: "레이저", mechanism: {detailed: "810nm다이오드", },
      
      review: {
                "summary": "라이트쉬어는 루메니스의 다이오드 레이저 제모기입니다. 넓은 부위를 빠르게 시술할 수 있습니다.",
                "likes": [
                        "빠른 시술",
                        "넓은 부위에 효과적",
                        "통증 적음",
                        "검증된 장비",
                        "다이오드 대표"
                ],
                "dislikes": [
                        "젠틀맥스보다 약하다는 평",
                        "가는 털 효과 제한",
                        "여러 회차 필요",
                        "병원마다 다름"
                ],
                "tips": [
                        "넓은 부위 빠르게",
                        "팔다리 전체에 적합",
                        "가는 털은 한계",
                        "10회 이상 계획"
                ],
                "overall": "넓은 부위를 빠르고 편하게 제모하고 싶을 때 적합합니다."
        }, effects: { primary: ["제모"], secondary: [], notFor: ["흰털"], onsetTime: "5~6회후", duration: "영구감모" }, procedure: { duration: "부위별", anesthesia: "쿨링", sessions: "6~10회", interval: "4~6주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "전연령", bestFor: ["제모"], notRecommended: ["흰털"], skinType: "모든피부" }, pros: ["검증된장비"], cons: [], safety: {
        seriousSideEffects: ["화상"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["제모", "다이오드"] },

    { id: "eliteiq", name: "엘리트IQ", nameEn: "Elite iQ", brand: "Cynosure", category: "제모", subcategory: "레이저", mechanism: {detailed: "알렉산드라이트+야그", },
      
      review: {
                "summary": "엘리트iQ는 사이노슈어의 최신 듀얼 파장 레이저입니다. 제모와 피부 치료를 동시에 할 수 있습니다.",
                "likes": [
                        "최신 장비",
                        "듀얼 파장",
                        "제모 + 피부 치료",
                        "스킨텔 기술",
                        "사이노슈어 품질"
                ],
                "dislikes": [
                        "가격 높음",
                        "취급 병원 적음",
                        "젠틀맥스와 비교됨",
                        "신규 장비라 후기 적음"
                ],
                "tips": [
                        "최신 장비 원하면",
                        "제모 + 톤 개선 동시에",
                        "병원 장비 확인",
                        "젠틀맥스와 비교"
                ],
                "overall": "최신 기술의 프리미엄 레이저 제모를 원할 때 고려하세요."
        }, effects: { primary: ["제모"], secondary: [], notFor: ["흰털"], onsetTime: "5~6회후", duration: "영구감모" }, procedure: { duration: "부위별", anesthesia: "쿨링", sessions: "6~10회", interval: "4~6주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: ["자외선차단"] }, suitability: { idealAge: "전연령", bestFor: ["제모"], notRecommended: ["흰털"], skinType: "모든피부" }, pros: ["듀얼파장"], cons: [], safety: {
        seriousSideEffects: ["화상"], contraindications: ["광과민증"], warnings: [] }, pricing: { range: "부위별", average: "부위별", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["제모"] },

    { id: "lllt", name: "LLLT", nameEn: "Low Level Laser Therapy", brand: "다양", category: "탈모", subcategory: "레이저", mechanism: {detailed: "650nm저출력모낭활성화", },
      
      review: {
                "summary": "저출력레이저(LLLT)는 약한 레이저로 모낭을 자극해 탈모를 치료합니다. 헬멧형 홈케어 기기도 있습니다.",
                "likes": [
                        "비침습적",
                        "부작용 거의 없음",
                        "홈케어 가능",
                        "다른 치료와 병행",
                        "FDA 승인 기기 있음"
                ],
                "dislikes": [
                        "효과 순함",
                        "꾸준히 해야 함",
                        "단독 효과 제한적",
                        "진행된 탈모엔 부족"
                ],
                "tips": [
                        "탈모 예방/초기에",
                        "미녹시딜과 병행",
                        "매일 꾸준히",
                        "홈케어 기기 고려"
                ],
                "overall": "탈모 예방과 초기 탈모에 보조적으로 사용하면 좋습니다."
        }, effects: { primary: ["탈모개선"], secondary: [], notFor: ["고도탈모"], onsetTime: "3~6개월", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "정기관리", interval: "주2~3회" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "20대~60대", bestFor: ["초기탈모", "예방"], notRecommended: ["고도탈모"], skinType: "무관" }, pros: ["무통증", "부작용없음"], cons: ["효과느림"], safety: {
        seriousSideEffects: ["없음"], contraindications: [], warnings: [] }, pricing: { range: "3~10만원/회", average: "5만원/회", factors: [] }, comparison: { vs: {}, bestWith: ["메조", "PRP"] }, tags: ["탈모", "LLLT"] },

    { id: "finasteride", name: "피나스테리드", nameEn: "Finasteride", brand: "프로페시아등", category: "탈모", subcategory: "약물", mechanism: {detailed: "5알파환원효소억제", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 65, optimal: "20~55세", youngWarning: "여성 금기" },
      concerns: { primary: ["탈모"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "피나스테리드는 남성형 탈모 치료의 대표 약물입니다. DHT를 억제해 탈모 진행을 막고 발모를 촉진합니다.",
                "likes": [
                        "탈모 진행 억제",
                        "발모 효과",
                        "검증된 효과",
                        "경구 복용 편리",
                        "장기 사용 가능"
                ],
                "dislikes": [
                        "성기능 부작용 가능",
                        "여성 사용 불가",
                        "평생 복용 필요",
                        "중단 시 재진행"
                ],
                "tips": [
                        "남성형 탈모에 필수",
                        "3~6개월 후 효과 판단",
                        "부작용 모니터링",
                        "미녹시딜과 병행"
                ],
                "overall": "남성형 탈모 치료의 기본으로 효과가 검증된 약물입니다."
        }, effects: { primary: ["탈모방지"], secondary: ["발모"], notFor: ["여성"], onsetTime: "3~6개월", duration: "복용중" }, procedure: { duration: "매일복용", anesthesia: "불필요", sessions: "지속복용", interval: "매일" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["성기능장애"], recoveryTips: [] }, suitability: { idealAge: "20대~60대남성", bestFor: ["남성형탈모"], notRecommended: ["여성", "임산부"], skinType: "무관" }, pros: ["효과검증"], cons: ["성기능부작용"], safety: {
        seriousSideEffects: ["우울"], contraindications: ["여성", "간질환"], warnings: ["남성전용"] }, pricing: { range: "월3~10만원", average: "월5만원", factors: [] }, comparison: { vs: {}, bestWith: ["미녹시딜"] }, tags: ["탈모약", "DHT"] },

    { id: "minoxidil", name: "미녹시딜", nameEn: "Minoxidil", brand: "로게인등", category: "탈모", subcategory: "약물", mechanism: {detailed: "혈류증가모낭자극", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 70, optimal: "20~60세", youngWarning: null },
      concerns: { primary: ["탈모"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "미녹시딜은 바르는 탈모 치료제의 대표입니다. 남녀 모두 사용 가능하며 모낭에 영양을 공급합니다.",
                "likes": [
                        "남녀 모두 사용",
                        "바르는 간편함",
                        "효과 검증됨",
                        "처방전 없이 구매",
                        "피나와 병행"
                ],
                "dislikes": [
                        "매일 발라야 함",
                        "두피 자극 가능",
                        "초기 탈락 있음",
                        "중단 시 재진행"
                ],
                "tips": [
                        "5% 농도 권장 (남성)",
                        "여성은 2~3%",
                        "피나스테리드와 병행",
                        "6개월 이상 꾸준히"
                ],
                "overall": "탈모 치료의 기본으로 피나스테리드와 함께 사용하면 효과적입니다."
        }, effects: { primary: ["발모"], secondary: [], notFor: [], onsetTime: "3~6개월", duration: "사용중" }, procedure: { duration: "매일도포", anesthesia: "불필요", sessions: "지속사용", interval: "1~2회/일" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["두피자극"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["탈모전반"], notRecommended: ["심장질환"], skinType: "무관" }, pros: ["남녀가능", "외용"], cons: ["두피자극"], safety: {
        seriousSideEffects: ["심장박동"], contraindications: ["심장질환"], warnings: [] }, pricing: { range: "월2~5만원", average: "월3만원", factors: [] }, comparison: { vs: {}, bestWith: ["피나스테리드"] }, tags: ["탈모약", "외용"] },

    { id: "hpl", name: "HPL주사", nameEn: "HPL Injection", brand: "다양", category: "바디/지방", subcategory: "지방분해주사", mechanism: {detailed: "고장성용액지방세포파괴", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 65, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["탈모"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "HPL(하이브리드 펄스 라이트)은 IPL의 업그레이드 버전입니다. 색소, 홍조, 피부결 개선에 효과적인 광치료입니다.",
                "likes": [
                        "IPL 업그레이드",
                        "색소/홍조 동시 개선",
                        "피부 톤 균일화",
                        "다운타임 적음",
                        "광노화 개선"
                ],
                "dislikes": [
                        "여러 회차 필요",
                        "일반 IPL보다 비쌈",
                        "BBL과 비교됨",
                        "효과 개인차"
                ],
                "tips": [
                        "IPL 업그레이드로",
                        "3~4주 간격 5회 이상",
                        "자외선 차단 필수",
                        "봄가을 추천"
                ],
                "overall": "IPL보다 업그레이드된 광치료로 색소와 홍조 개선에 효과적입니다."
        }, effects: { primary: ["지방감소"], secondary: [], notFor: ["대량지방"], onsetTime: "2~4주", duration: "영구적" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["마사지"] }, suitability: { idealAge: "20대~50대", bestFor: ["국소지방"], notRecommended: ["대량지방"], skinType: "무관" }, pros: ["지방분해"], cons: ["붓기"], safety: {
        seriousSideEffects: ["괴사"], contraindications: ["감염"], warnings: [] }, pricing: { range: "5~15만원/회", average: "10만원/회", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["지방분해"] },

    { id: "ppc", name: "윤곽주사/PPC", nameEn: "PPC Injection", brand: "다양", category: "바디/지방", subcategory: "지방분해주사", mechanism: {detailed: "포스파티딜콜린지방세포막파괴", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["지방", "이중턱"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "PPC 주사(지방분해주사)는 포스파티딜콜린을 주입해 지방세포를 분해합니다. 이중턱, 볼살 등 국소 지방에 사용됩니다.",
                "likes": [
                        "국소 지방 감소",
                        "비수술적",
                        "이중턱에 효과적",
                        "다운타임 짧음",
                        "가격 부담 적음"
                ],
                "dislikes": [
                        "붓기/멍 있음",
                        "여러 회차 필요",
                        "효과 제한적",
                        "넓은 부위 어려움"
                ],
                "tips": [
                        "이중턱, 볼살에 적합",
                        "2~4주 간격 3~5회",
                        "붓기 1~2주 각오",
                        "지방 적은 사람은 효과 적음"
                ],
                "overall": "이중턱 등 국소 지방을 비수술로 줄이고 싶을 때 고려하세요."
        }, effects: { primary: ["지방감소"], secondary: [], notFor: ["대량지방"], onsetTime: "2~4주", duration: "영구적" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["마사지"] }, suitability: { idealAge: "20대~50대", bestFor: ["얼굴지방"], notRecommended: ["대량지방"], skinType: "무관" }, pros: ["얼굴적합"], cons: ["붓기"], safety: {
        seriousSideEffects: ["괴사"], contraindications: ["감염"], warnings: [] }, pricing: { range: "5~15만원/회", average: "10만원/회", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["지방분해", "윤곽"] },

    { id: "kybella", name: "카이벨라", nameEn: "Kybella", brand: "Allergan", category: "바디/지방", subcategory: "지방분해주사", mechanism: {detailed: "데옥시콜산지방세포파괴", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["이중턱"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "카이벨라(벨라카이라)는 FDA 승인 이중턱 치료 주사입니다. 디옥시콜산으로 지방세포를 영구 파괴합니다.",
                "likes": [
                        "FDA 승인",
                        "영구적 지방 파괴",
                        "이중턱 전용",
                        "비수술적",
                        "효과 검증됨"
                ],
                "dislikes": [
                        "붓기 심함 (1~2주)",
                        "가격 높음",
                        "2~6회 필요",
                        "턱 이외 부위 어려움"
                ],
                "tips": [
                        "이중턱 전용으로",
                        "2~4회 권장",
                        "붓기 각오 필수",
                        "PPC보다 강력"
                ],
                "overall": "이중턱 치료의 프리미엄 옵션으로 FDA 승인된 효과를 원할 때."
        }, effects: { primary: ["이중턱"], secondary: [], notFor: ["대량지방"], onsetTime: "4~6주", duration: "영구적" }, procedure: { duration: "20분", anesthesia: "불필요", sessions: "2~4회", interval: "1개월" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "5~10일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "20대~50대", bestFor: ["이중턱"], notRecommended: ["턱밑감염"], skinType: "무관" }, pros: ["FDA승인", "이중턱특화"], cons: ["붓기심함"], safety: {
        seriousSideEffects: ["신경손상"], contraindications: ["감염"], warnings: ["숙련자에게"] }, pricing: { range: "30~60만원/회", average: "45만원/회", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["이중턱", "FDA"] },

    { id: "vanquish", name: "반퀴시", nameEn: "Vanquish", brand: "BTL", category: "바디/지방", subcategory: "지방감소", mechanism: {detailed: "RF열에너지지방사멸", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["지방", "바디라인"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "밴퀴시는 비접촉 RF로 복부 지방을 감소시킵니다. 피부에 닿지 않고 열로 지방을 줄입니다.",
                "likes": [
                        "비접촉 편안함",
                        "통증 없음",
                        "복부 지방 감소",
                        "다운타임 없음",
                        "넓은 부위 한번에"
                ],
                "dislikes": [
                        "4~6회 필요",
                        "효과 서서히",
                        "비용 높음",
                        "쿨스컬프팅과 비교됨"
                ],
                "tips": [
                        "복부 지방에 적합",
                        "주 1~2회 x 4~6회",
                        "온열 느낌만 있음",
                        "식이조절 병행"
                ],
                "overall": "편하고 아프지 않게 복부 지방을 줄이고 싶을 때 좋습니다."
        }, effects: { primary: ["지방감소"], secondary: [], notFor: ["국소지방"], onsetTime: "4~6주", duration: "영구적" }, procedure: { duration: "45분", anesthesia: "불필요", sessions: "4~6회", interval: "주1회" }, recovery: { painLevel: 0.5, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["열감"], recoveryTips: ["수분섭취"] }, suitability: { idealAge: "20대~50대", bestFor: ["복부전체"], notRecommended: ["금속임플란트"], skinType: "무관" }, pros: ["비접촉", "무통증"], cons: ["여러회"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["금속임플란트"], warnings: [] }, pricing: { range: "20~40만원/회", average: "30만원/회", factors: [] }, comparison: { vs: {}, bestWith: ["엠스컬프"] }, tags: ["RF", "지방"] },

    { id: "trusculpt", name: "트루스컬프", nameEn: "truSculpt", brand: "Cutera", category: "바디/지방", subcategory: "지방감소", mechanism: {detailed: "모노폴라RF지방가열", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["지방", "바디라인"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "트루스컬프는 RF로 지방을 줄이고 피부를 타이트닝합니다. 지방감소와 탄력 개선을 동시에 제공합니다.",
                "likes": [
                        "지방 + 탄력 동시",
                        "RF 기반 안전함",
                        "여러 부위 가능",
                        "다운타임 적음",
                        "통증 적음"
                ],
                "dislikes": [
                        "2~4회 필요",
                        "효과 2~3개월 후",
                        "쿨스컬프팅과 비교됨",
                        "비용 높음"
                ],
                "tips": [
                        "지방 + 탄력 원하면",
                        "4~6주 간격",
                        "쿨스컬프팅 대안",
                        "식이조절 병행"
                ],
                "overall": "지방감소와 피부 탄력을 동시에 원할 때 좋은 선택입니다."
        }, effects: { primary: ["지방감소"], secondary: [], notFor: [], onsetTime: "6~12주", duration: "영구적" }, procedure: { duration: "15~60분", anesthesia: "불필요", sessions: "1~2회", interval: "6~12주" }, recovery: { painLevel: 1.5, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["열감"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["지방감소"], notRecommended: ["페이스메이커"], skinType: "무관" }, pros: ["짧은시술"], cons: [], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "30~60만원/부위", average: "45만원/부위", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["RF", "지방"] },

    { id: "sculpsure", name: "스컬프슈어", nameEn: "SculpSure", brand: "Cynosure", category: "바디/지방", subcategory: "지방감소", mechanism: {detailed: "1060nm레이저지방가열파괴", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["지방", "바디라인"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "스컬프슈어는 레이저로 지방세포를 파괴하는 비수술 지방감소 시술입니다. 25분 시술로 편리합니다.",
                "likes": [
                        "25분 짧은 시술",
                        "레이저 기반",
                        "다양한 부위",
                        "다운타임 없음",
                        "FDA 승인"
                ],
                "dislikes": [
                        "효과 6~12주 후",
                        "2~3회 필요",
                        "쿨스컬프팅과 비교됨",
                        "비용 높음"
                ],
                "tips": [
                        "짧은 시술 원하면",
                        "복부/옆구리에 적합",
                        "6주 후 효과 판단",
                        "쿨스컬프팅과 비교"
                ],
                "overall": "짧은 시간에 편하게 지방감소를 원할 때 고려하세요."
        }, effects: { primary: ["지방감소"], secondary: [], notFor: [], onsetTime: "6~12주", duration: "영구적" }, procedure: { duration: "25분", anesthesia: "불필요", sessions: "1~2회", interval: "6주" }, recovery: { painLevel: 1.5, painDescription: "따뜻~뜨거움", downtime: "없음", commonSideEffects: ["열감"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["복부", "옆구리"], notRecommended: [], skinType: "무관" }, pros: ["짧은시술", "FDA승인"], cons: [], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "30~60만원/부위", average: "45만원/부위", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["레이저", "지방", "FDA"] },

    { id: "lpg", name: "LPG엔더몰로지", nameEn: "LPG Endermologie", brand: "LPG", category: "바디/지방", subcategory: "바디케어", mechanism: {detailed: "롤러+석션림프순환", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["셀룰라이트"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "LPG 엔더몰로지는 롤러와 흡입으로 셀룰라이트를 관리합니다. 체형 관리와 림프 순환에 효과적입니다.",
                "likes": [
                        "셀룰라이트 개선",
                        "림프 순환",
                        "체형 관리",
                        "통증 없음",
                        "전신 관리 가능"
                ],
                "dislikes": [
                        "효과 일시적",
                        "꾸준히 해야 함",
                        "비용 누적",
                        "지방감소는 아님"
                ],
                "tips": [
                        "셀룰라이트에 효과적",
                        "주 1~2회 꾸준히",
                        "에스테틱 관리로",
                        "다이어트와 병행"
                ],
                "overall": "셀룰라이트와 체형 관리를 위한 에스테틱 케어입니다."
        }, effects: { primary: ["셀룰라이트"], secondary: ["바디라인"], notFor: ["지방제거"], onsetTime: "10회이상", duration: "유지관리" }, procedure: { duration: "35~45분", anesthesia: "불필요", sessions: "10~20회", interval: "주2~3회" }, recovery: { painLevel: 1, painDescription: "마사지감", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["셀룰라이트"], notRecommended: ["정맥류"], skinType: "무관" }, pros: ["무통증"], cons: ["여러회", "유지필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["정맥류"], warnings: [] }, pricing: { range: "10~20만원/회", average: "15만원/회", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["셀룰라이트", "마사지"] },

    { id: "blackpeel", name: "블랙필", nameEn: "Black Peel", brand: "다양", category: "필링", subcategory: "화학필링", mechanism: {detailed: "카본도포후레이저제거", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["모공", "피지"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "블랙필은 카본 성분 필링으로 모공과 피지를 관리합니다. 카본필링의 업그레이드 버전입니다.",
                "likes": [
                        "모공 딥클렌징",
                        "피지 조절",
                        "즉각적인 효과",
                        "다운타임 없음",
                        "지성피부에 최적"
                ],
                "dislikes": [
                        "효과 일시적",
                        "여러 회차 필요",
                        "건성엔 건조",
                        "카본필링과 유사"
                ],
                "tips": [
                        "지성/모공 고민에",
                        "2주 간격 정기 관리",
                        "레이저와 병행",
                        "유지 관리 필요"
                ],
                "overall": "지성 피부의 모공 관리를 위한 업그레이드 카본필링입니다."
        }, effects: { primary: ["모공", "피지"], secondary: ["톤업"], notFor: [], onsetTime: "즉각", duration: "유지관리" }, procedure: { duration: "30~40분", anesthesia: "불필요", sessions: "정기관리", interval: "2~4주" }, recovery: { painLevel: 1, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "10대~40대", bestFor: ["모공", "지성피부"], notRecommended: [], skinType: "지성" }, pros: ["무통증", "다운타임없음"], cons: ["유지필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "5~15만원/회", average: "10만원/회", factors: [] }, comparison: { vs: {}, bestWith: ["토닝"] }, tags: ["필링", "모공"] },

    { id: "jessner", name: "제스너필링", nameEn: "Jessner Peel", brand: "다양", category: "필링", subcategory: "화학필링", mechanism: {detailed: "레조시놀+살리실산+락틱산", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["피부결", "각질"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "제스너필은 살리실산+젖산+레조르시놀 복합 필링입니다. 중간 강도로 색소, 여드름, 피부결에 효과적입니다.",
                "likes": [
                        "복합 성분 효과",
                        "색소 개선",
                        "여드름 흉터",
                        "피부결 개선",
                        "검증된 필링"
                ],
                "dislikes": [
                        "3~7일 다운타임",
                        "각질/붉음",
                        "자외선 민감",
                        "민감피부 주의"
                ],
                "tips": [
                        "중간 강도 필링 원할 때",
                        "색소+여드름 동시에",
                        "다운타임 각오",
                        "가을/겨울 추천"
                ],
                "overall": "색소와 여드름 흉터를 동시에 개선하는 중간 강도 필링입니다."
        }, effects: { primary: ["색소", "피부결"], secondary: [], notFor: ["민감성"], onsetTime: "1~2주", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "3~5회", interval: "3~4주" }, recovery: { painLevel: 2, painDescription: "따가움", downtime: "5~7일", commonSideEffects: ["각질"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["색소"], notRecommended: ["민감성"], skinType: "정상/지성" }, pros: ["효과적"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["민감성"], warnings: [] }, pricing: { range: "5~15만원/회", average: "10만원/회", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필링", "색소"] },

    { id: "aladdin", name: "알라딘필", nameEn: "Aladdin Peel", brand: "다양", category: "필링", subcategory: "화학필링", mechanism: {detailed: "미백+재생성분복합", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["피부결", "피부톤"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "알라딘 필은 병원용 고강도 필링입니다. 깊은 색소, 잔주름, 피부결 개선에 효과적입니다.",
                "likes": [
                        "고강도 효과",
                        "색소 개선",
                        "잔주름 개선",
                        "피부 리뉴얼",
                        "검증된 효과"
                ],
                "dislikes": [
                        "5~7일 다운타임",
                        "붉음/각질 심함",
                        "민감피부 불가",
                        "자외선 주의"
                ],
                "tips": [
                        "확실한 효과 원할 때",
                        "다운타임 각오 필수",
                        "가을/겨울에만",
                        "자외선 차단 철저"
                ],
                "overall": "확실한 필링 효과를 원하고 다운타임 감수할 때 선택하세요."
        }, effects: { primary: ["미백", "피부결"], secondary: ["재생"], notFor: ["민감성"], onsetTime: "1~2주", duration: "유지관리" }, procedure: { duration: "30분", anesthesia: "불필요", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "3~5일", commonSideEffects: ["각질"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["미백"], notRecommended: ["민감성"], skinType: "정상/지성" }, pros: ["미백효과"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["민감성"], warnings: [] }, pricing: { range: "10~25만원/회", average: "15만원/회", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["필링", "미백"] },

    { id: "iontophoresis", name: "이온토", nameEn: "Iontophoresis", brand: "다양", category: "스킨케어", subcategory: "관리", mechanism: {detailed: "이온화전류앰플딥딜리버리", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["피부결"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "이온토포레시스는 전류로 유효성분 침투를 높이는 시술입니다. 비타민C, 미백 성분 등의 흡수를 촉진합니다.",
                "likes": [
                        "성분 흡수 촉진",
                        "비침습적",
                        "다운타임 없음",
                        "다른 시술과 병행",
                        "비용 저렴"
                ],
                "dislikes": [
                        "단독 효과 약함",
                        "보조 시술 개념",
                        "효과 체감 어려움",
                        "매번 해야 함"
                ],
                "tips": [
                        "다른 시술 후 마무리로",
                        "미백 성분과 함께",
                        "정기 관리로",
                        "비용 부담 적음"
                ],
                "overall": "다른 시술의 효과를 높이는 보조 관리로 활용하세요."
        }, effects: { primary: ["앰플침투"], secondary: [], notFor: [], onsetTime: "즉각", duration: "유지관리" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "정기관리", interval: "주1~2회" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["앰플효과극대화"], notRecommended: ["페이스메이커"], skinType: "모든피부" }, pros: ["앰플효과↑"], cons: ["단독효과적음"], safety: {
        seriousSideEffects: ["없음"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "1~5만원", average: "3만원", factors: [] }, comparison: { vs: {}, bestWith: ["앰플"] }, tags: ["이온토", "관리"] },

    { id: "ultrasound-care", name: "초음파관리", nameEn: "Ultrasound Care", brand: "다양", category: "스킨케어", subcategory: "관리", mechanism: {detailed: "초음파진동노폐물제거", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["피부결"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "초음파 관리는 초음파로 유효성분 침투와 피부 탄력을 높입니다. 에스테틱 기본 관리 중 하나입니다.",
                "likes": [
                        "성분 침투 촉진",
                        "탄력 개선",
                        "순한 시술",
                        "다운타임 없음",
                        "기본 관리"
                ],
                "dislikes": [
                        "효과 순함",
                        "정기적으로 해야 함",
                        "드라마틱한 변화 없음",
                        "보조 관리 개념"
                ],
                "tips": [
                        "정기 피부 관리로",
                        "앰플/세럼과 함께",
                        "다른 시술과 병행",
                        "편안한 관리"
                ],
                "overall": "부담 없는 정기 피부 관리의 기본입니다."
        }, effects: { primary: ["딥클렌징"], secondary: ["앰플침투"], notFor: [], onsetTime: "즉각", duration: "유지관리" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "정기관리", interval: "주1~2회" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["딥클렌징"], notRecommended: [], skinType: "모든피부" }, pros: ["순한클렌징"], cons: ["단독효과적음"], safety: {
        seriousSideEffects: ["없음"], contraindications: [], warnings: [] }, pricing: { range: "1~5만원", average: "3만원", factors: [] }, comparison: { vs: {}, bestWith: ["앰플"] }, tags: ["초음파", "클렌징"] },

    { id: "rf-care", name: "RF케어", nameEn: "RF Care", brand: "다양", category: "스킨케어", subcategory: "관리", mechanism: {detailed: "고주파열에너지콜라겐자극", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 65, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "RF 관리는 고주파로 콜라겐을 자극해 탄력을 개선합니다. 에스테틱에서 많이 사용하는 기본 탄력 관리입니다.",
                "likes": [
                        "탄력 개선",
                        "콜라겐 자극",
                        "순한 시술",
                        "다운타임 없음",
                        "정기 관리 적합"
                ],
                "dislikes": [
                        "써마지보다 약함",
                        "여러 회차 필요",
                        "효과 순함",
                        "보조 관리 개념"
                ],
                "tips": [
                        "정기 탄력 관리로",
                        "주 1회 꾸준히",
                        "병원 시술 사이 유지용",
                        "홈케어 기기도 있음"
                ],
                "overall": "부담 없이 탄력을 관리하는 기본 에스테틱 케어입니다."
        }, effects: { primary: ["탄력"], secondary: [], notFor: [], onsetTime: "꾸준히", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "정기관리", interval: "주1~2회" }, recovery: { painLevel: 0.5, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["탄력관리"], notRecommended: ["페이스메이커"], skinType: "모든피부" }, pros: ["무통증"], cons: ["효과미미"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "3~10만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["앰플"] }, tags: ["RF", "탄력"] },

    { id: "calming-pack", name: "쿨링/진정팩", nameEn: "Calming Pack", brand: "다양", category: "스킨케어", subcategory: "관리", mechanism: {detailed: "쿨링+수분공급", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 12, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["피부진정"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "진정팩은 레이저/필링 후 피부를 진정시키는 관리입니다. 붉음과 열감을 완화하고 회복을 돕습니다.",
                "likes": [
                        "피부 진정",
                        "시술 후 필수",
                        "붉음 완화",
                        "회복 촉진",
                        "편안함"
                ],
                "dislikes": [
                        "단독 시술 아님",
                        "효과 일시적",
                        "필수 관리 개념",
                        "비용 추가"
                ],
                "tips": [
                        "레이저 후 필수",
                        "재생크림과 함께",
                        "집에서도 쿨링팩",
                        "진정 성분 확인"
                ],
                "overall": "레이저/필링 후 피부 진정을 위한 필수 마무리 케어입니다."
        }, effects: { primary: ["진정"], secondary: ["보습"], notFor: [], onsetTime: "즉각", duration: "일시적" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "시술후", interval: "시술후" }, recovery: { painLevel: 0, painDescription: "시원함", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["시술후진정"], notRecommended: [], skinType: "모든피부" }, pros: ["진정효과"], cons: ["일시적"], safety: {
        seriousSideEffects: ["없음"], contraindications: [], warnings: [] }, pricing: { range: "1~3만원", average: "2만원", factors: [] }, comparison: { vs: {}, bestWith: ["모든시술후"] }, tags: ["진정", "팩"] },

    { id: "ldm", name: "LDM", nameEn: "Local Dynamic Micro-massage", brand: "Wellcomet", category: "스킨케어", subcategory: "관리", mechanism: {detailed: "다중주파수초음파세포재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 65, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["피부결", "재생"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "LDM은 저주파 초음파로 피부 재생과 탄력을 개선합니다. 민감피부도 가능한 순한 시술입니다.",
                "likes": [
                        "민감피부 가능",
                        "재생 효과",
                        "탄력 개선",
                        "다운타임 없음",
                        "순한 시술"
                ],
                "dislikes": [
                        "효과 순함",
                        "여러 회차 필요",
                        "드라마틱한 변화 없음",
                        "정기 관리 필요"
                ],
                "tips": [
                        "민감피부에 추천",
                        "시술 후 진정으로",
                        "정기 관리로",
                        "재생 목적에"
                ],
                "overall": "민감피부도 편하게 받을 수 있는 순한 재생 관리입니다."
        }, effects: { primary: ["재생", "진정"], secondary: ["탄력"], notFor: [], onsetTime: "꾸준히", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "정기관리", interval: "주1~2회" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["재생", "진정"], notRecommended: [], skinType: "모든피부" }, pros: ["무통증", "진정효과"], cons: [], safety: {
        seriousSideEffects: ["없음"], contraindications: [], warnings: [] }, pricing: { range: "5~15만원", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["시술후"] }, tags: ["LDM", "재생"] },

    { id: "hollywood-peel", name: "할리우드필", nameEn: "Hollywood Peel", brand: "다양", category: "스킨케어", subcategory: "필링", mechanism: {detailed: "스펙트라피코레이저카본필링", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["피부결", "피부톤"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "할리우드필은 카본필링의 다른 이름입니다. 카본 로션을 바르고 레이저로 모공을 관리합니다.",
                "likes": [
                        "모공 딥클렌징",
                        "즉각적인 광채",
                        "피지 조절",
                        "다운타임 없음",
                        "셀럽들이 받아서 유명"
                ],
                "dislikes": [
                        "효과 일시적",
                        "여러 회차 필요",
                        "건성엔 건조",
                        "지속 관리 필요"
                ],
                "tips": [
                        "행사 전 광채 관리",
                        "지성피부에 추천",
                        "2주 간격",
                        "카본필링과 동일"
                ],
                "overall": "행사 전 즉각적인 광채와 모공 관리를 원할 때 좋습니다."
        }, effects: { primary: ["톤업", "모공"], secondary: ["피부결"], notFor: [], onsetTime: "즉각", duration: "유지관리" }, procedure: { duration: "30~40분", anesthesia: "불필요", sessions: "정기관리", interval: "2~4주" }, recovery: { painLevel: 1, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "20대~40대", bestFor: ["행사전", "광채"], notRecommended: [], skinType: "모든피부" }, pros: ["즉각광채", "다운타임없음"], cons: ["유지필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "10~25만원", average: "15만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["할리우드필", "광채"] },

    { id: "mesotherapy-face", name: "메조테라피", nameEn: "Mesotherapy Face", brand: "다양", category: "스킨부스터", subcategory: "주사", mechanism: {detailed: "멀티인젝터진피영양공급", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["피부결"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "얼굴 메조테라피는 비타민, 히알루론산 등을 피부에 직접 주입합니다. 보습, 탄력, 미백에 효과적입니다.",
                "likes": [
                        "성분 직접 주입",
                        "보습/탄력 개선",
                        "다양한 칵테일",
                        "맞춤 시술 가능",
                        "즉각 효과"
                ],
                "dislikes": [
                        "주사 자국",
                        "여러 회차 필요",
                        "성분별 효과 다름",
                        "비용 누적"
                ],
                "tips": [
                        "물광주사와 유사",
                        "2~4주 간격",
                        "원하는 성분으로 맞춤",
                        "스킨부스터와 비교"
                ],
                "overall": "원하는 성분을 직접 주입해 맞춤 관리가 가능합니다."
        }, effects: { primary: ["영양공급"], secondary: ["탄력"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "2~3개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["영양공급"], notRecommended: ["알러지"], skinType: "모든피부" }, pros: ["영양직접전달"], cons: ["여러회"], safety: {
        seriousSideEffects: ["알러지"], contraindications: ["성분알러지"], warnings: [] }, pricing: { range: "10~25만원/회", average: "15만원/회", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["메조", "영양"] },

    { id: "nose-filler", name: "코필러", nameEn: "Nose Filler", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "고점도HA콧대/코끝교정", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 50, optimal: "22~45세", youngWarning: null },
      concerns: { primary: ["코높이"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "코필러는 수술 없이 코 라인을 높이고 다듬습니다. 코끝, 콧대를 자연스럽게 교정할 수 있습니다.",
                "likes": [
                        "비수술 코 성형",
                        "즉각적인 효과",
                        "다운타임 적음",
                        "자연스러운 결과",
                        "수정 가능"
                ],
                "dislikes": [
                        "영구적이지 않음 (1~2년)",
                        "혈관 막힘 위험",
                        "코끝은 한계",
                        "숙련자 필수"
                ],
                "tips": [
                        "경험 많은 의사 필수",
                        "콧대 위주로",
                        "코끝은 수술이 나음",
                        "레디에세 많이 사용"
                ],
                "overall": "수술 부담 없이 코 라인을 개선하고 싶을 때 좋지만 신중하게."
        }, effects: { primary: ["코높이"], secondary: [], notFor: ["큰변화"], onsetTime: "즉각", duration: "12~18개월" }, procedure: { duration: "15~20분", anesthesia: "마취크림", sessions: "1회", interval: "1~1.5년" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기"], recoveryTips: ["안경피하기"] }, suitability: { idealAge: "20대~50대", bestFor: ["낮은코", "작은보정"], notRecommended: ["큰변화원하는경우"], skinType: "무관" }, pros: ["비수술", "즉각효과"], cons: ["유지필요", "제한적"], safety: {
        seriousSideEffects: ["혈관폐색", "실명위험"], contraindications: [], warnings: ["숙련자에게필수"] }, pricing: { range: "30~60만원", average: "40만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["코", "필러"] },

    { id: "temple-filler", name: "관자놀이필러", nameEn: "Temple Filler", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "측두부HA볼륨", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 65, optimal: "35~60세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["볼륨손실"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "관자놀이 필러는 꺼진 관자놀이를 채워 얼굴 볼륨을 복원합니다. 동안 효과와 리프팅 효과가 있습니다.",
                "likes": [
                        "동안 효과",
                        "얼굴 볼륨 복원",
                        "리프팅 효과",
                        "자연스러운 결과",
                        "노화 개선"
                ],
                "dislikes": [
                        "1~2년 재시술",
                        "비용 높음",
                        "볼륨 많이 필요",
                        "혈관 주의"
                ],
                "tips": [
                        "볼루마/레디에세 사용",
                        "리프팅과 병행",
                        "자연스럽게 조금씩",
                        "동안 원하면 필수"
                ],
                "overall": "관자놀이가 꺼져 나이 들어 보인다면 효과적인 시술입니다."
        }, effects: { primary: ["관자놀이볼륨"], secondary: ["동안"], notFor: [], onsetTime: "즉각", duration: "12~18개월" }, procedure: { duration: "15~20분", anesthesia: "마취크림", sessions: "1회", interval: "1~1.5년" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "40대~60대", bestFor: ["관자놀이꺼짐"], notRecommended: [], skinType: "무관" }, pros: ["동안효과"], cons: ["비용"], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "40~70만원", average: "50만원", factors: [] }, comparison: { vs: {}, bestWith: ["스컬트라"] }, tags: ["관자놀이", "필러", "볼륨"] },

    { id: "cheek-filler", name: "광대필러", nameEn: "Cheek Filler", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "고점도HA광대볼륨", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["광대볼륨"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "볼필러는 꺼진 볼을 채워 동안을 만들고 리프팅 효과를 줍니다. 중안면 볼륨 복원에 효과적입니다.",
                "likes": [
                        "동안 효과",
                        "리프팅 효과",
                        "볼륨 복원",
                        "팔자 개선",
                        "자연스러운 결과"
                ],
                "dislikes": [
                        "1~2년 재시술",
                        "비용 높음",
                        "과하면 부자연스러움",
                        "숙련자 필요"
                ],
                "tips": [
                        "볼루마 많이 사용",
                        "자연스럽게 조금씩",
                        "실리프팅과 병행",
                        "팔자까지 개선됨"
                ],
                "overall": "볼 볼륨과 리프팅 효과로 동안을 원할 때 효과적입니다."
        }, effects: { primary: ["광대볼륨"], secondary: ["리프팅효과"], notFor: [], onsetTime: "즉각", duration: "12~18개월" }, procedure: { duration: "20분", anesthesia: "마취크림", sessions: "1회", interval: "1~1.5년" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "30대~50대", bestFor: ["광대꺼짐", "볼륨손실"], notRecommended: ["광대튀어나온경우"], skinType: "무관" }, pros: ["볼륨회복", "리프팅효과"], cons: ["비용"], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "40~80만원", average: "50만원", factors: [] }, comparison: { vs: {}, bestWith: ["보톡스"] }, tags: ["광대", "필러", "볼륨"] },

    { id: "marionette-filler", name: "마리오네트필러", nameEn: "Marionette Filler", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "입꼬리주름HA충전", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 필요 없음" },
      concerns: { primary: ["마리오네트주름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "마리오네트 필러는 입꼬리에서 턱으로 내려가는 주름을 채웁니다. 인상을 밝게 하고 처진 느낌을 개선합니다.",
                "likes": [
                        "처진 인상 개선",
                        "밝은 표정",
                        "팔자와 함께 효과적",
                        "자연스러운 결과",
                        "즉각 효과"
                ],
                "dislikes": [
                        "1~2년 재시술",
                        "비용 있음",
                        "과하면 부자연스러움",
                        "숙련자 필요"
                ],
                "tips": [
                        "팔자필러와 함께",
                        "자연스럽게 조금씩",
                        "볼리프트/볼루마 사용",
                        "표정 고려해서"
                ],
                "overall": "처지고 우울해 보이는 인상을 밝게 바꾸고 싶을 때 효과적입니다."
        }, effects: { primary: ["구각주름"], secondary: ["동안"], notFor: [], onsetTime: "즉각", duration: "9~12개월" }, procedure: { duration: "15~20분", anesthesia: "마취크림", sessions: "1회", interval: "9~12개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "40대~60대", bestFor: ["입꼬리주름"], notRecommended: [], skinType: "무관" }, pros: ["인상개선"], cons: [], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: [] }, pricing: { range: "30~50만원", average: "40만원", factors: [] }, comparison: { vs: {}, bestWith: ["보톡스"] }, tags: ["마리오네트", "주름"] },

    { id: "bunny-botox", name: "번니보톡스", nameEn: "Bunny Lines Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "비근부보툴리눔", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "28~55세", youngWarning: null },
      concerns: { primary: ["코주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "버니 보톡스는 코를 찡그릴 때 생기는 코 옆 주름을 개선합니다. 코 양옆 토끼 주름을 없애줍니다.",
                "likes": [
                        "버니라인 제거",
                        "자연스러운 표정",
                        "간단한 시술",
                        "다운타임 없음",
                        "3~6개월 유지"
                ],
                "dislikes": [
                        "효과 미미할 수 있음",
                        "재시술 필요",
                        "비용 대비 효과",
                        "다른 부위와 함께"
                ],
                "tips": [
                        "미간보톡스와 함께",
                        "소량으로 충분",
                        "표정 습관 있으면 추천",
                        "3~4개월 유지"
                ],
                "overall": "코를 찡그리는 습관이 있어 주름이 생겼다면 고려하세요."
        }, effects: { primary: ["코주름"], secondary: [], notFor: [], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "5분", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["코주름"], notRecommended: [], skinType: "무관" }, pros: ["간편"], cons: ["반복필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "3~8만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["미간보톡스"] }, tags: ["보톡스", "코주름"] },

    { id: "gummy-botox", name: "거미보톡스", nameEn: "Gummy Smile Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "상순거근보툴리눔", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["잔주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "거미스마일 보톡스는 웃을 때 잇몸이 과도하게 보이는 것을 개선합니다. 윗입술 근육을 이완시킵니다.",
                "likes": [
                        "거미스마일 개선",
                        "자연스러운 웃음",
                        "간단한 시술",
                        "다운타임 없음",
                        "즉각 효과"
                ],
                "dislikes": [
                        "3~4개월 유지",
                        "재시술 필요",
                        "웃음 어색할 수 있음",
                        "적정량 중요"
                ],
                "tips": [
                        "소량으로 시작",
                        "자연스러움 우선",
                        "웃음 연습 필요할 수도",
                        "입술필러와 병행"
                ],
                "overall": "거미스마일이 콤플렉스라면 간단하게 개선할 수 있습니다."
        }, effects: { primary: ["잇몸노출감소"], secondary: [], notFor: ["심한경우"], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "5분", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "20대~40대", bestFor: ["거미스마일"], notRecommended: ["심한경우"], skinType: "무관" }, pros: ["비수술교정"], cons: ["반복필요", "제한적"], safety: {
        seriousSideEffects: ["비대칭"], contraindications: ["신경근육질환"], warnings: ["적정용량"] }, pricing: { range: "5~15만원", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["보톡스", "거미스마일"] },

    { id: "mouth-corner-botox", name: "입꼬리보톡스", nameEn: "Mouth Corner Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "구각하제근보툴리눔", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 65, optimal: "30~60세", youngWarning: null },
      concerns: { primary: ["입꼬리주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "입꼬리 보톡스는 처진 입꼬리를 올려 밝은 인상을 만듭니다. DAO 근육을 이완시키는 시술입니다.",
                "likes": [
                        "입꼬리 상승",
                        "밝은 인상",
                        "간단한 시술",
                        "다운타임 없음",
                        "우울한 표정 개선"
                ],
                "dislikes": [
                        "효과 미미할 수 있음",
                        "3~4개월 유지",
                        "필러와 병행 필요할 수도",
                        "적정량 중요"
                ],
                "tips": [
                        "마리오네트 필러와 함께",
                        "소량으로",
                        "과하면 어색함",
                        "표정 변화 관찰"
                ],
                "overall": "처진 입꼬리로 우울해 보인다면 시도해볼 만합니다."
        }, effects: { primary: ["입꼬리상승"], secondary: [], notFor: [], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "5분", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["처진입꼬리"], notRecommended: [], skinType: "무관" }, pros: ["인상개선"], cons: ["반복필요", "효과제한적"], safety: {
        seriousSideEffects: ["비대칭"], contraindications: ["신경근육질환"], warnings: ["적정용량"] }, pricing: { range: "5~15만원", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["마리오네트필러"] }, tags: ["보톡스", "입꼬리"] },

    { id: "chin-botox", name: "턱보톡스(사과턱)", nameEn: "Chin Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "이근보툴리눔", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["사과턱"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "턱보톡스(턱끝)는 턱 끝 울퉁불퉁한 근육을 이완시킵니다. 매끈한 턱 라인을 만들어줍니다.",
                "likes": [
                        "턱끝 매끈하게",
                        "오렌지필 개선",
                        "간단한 시술",
                        "다운타임 없음",
                        "턱필러와 시너지"
                ],
                "dislikes": [
                        "효과 미미할 수 있음",
                        "3~4개월 유지",
                        "단독 효과 제한적",
                        "재시술 필요"
                ],
                "tips": [
                        "턱필러와 함께",
                        "오렌지필 피부에 추천",
                        "소량으로 충분",
                        "사각턱보톡스와 별개"
                ],
                "overall": "턱끝이 울퉁불퉁하다면 턱필러와 함께 받으면 효과적입니다."
        }, effects: { primary: ["턱우물주름"], secondary: [], notFor: [], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "5분", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["턱우물주름"], notRecommended: [], skinType: "무관" }, pros: ["간편"], cons: ["반복필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "3~8만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["턱필러"] }, tags: ["보톡스", "턱"] },

    { id: "neck-botox", name: "목주름보톡스", nameEn: "Neck Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "광경근보툴리눔", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 30, maximum: 65, optimal: "35~60세", youngWarning: "20대에게는 필요 없음" },
      concerns: { primary: ["목주름"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "목보톡스(네페르티티)는 목의 광경근을 이완시켜 목주름과 턱선을 개선합니다. 목 리프팅 효과가 있습니다.",
                "likes": [
                        "목주름 개선",
                        "턱선 리프팅",
                        "칠면조 목 개선",
                        "다운타임 없음",
                        "즉각 효과"
                ],
                "dislikes": [
                        "용량 많이 필요",
                        "3~4개월 유지",
                        "비용 높음",
                        "재시술 필요"
                ],
                "tips": [
                        "40~60유닛 필요",
                        "목 밴드 있으면 효과적",
                        "레이저와 병행",
                        "정기적으로"
                ],
                "overall": "목주름과 처진 턱선이 고민이라면 효과적인 시술입니다."
        }, effects: { primary: ["목주름", "밴드"], secondary: [], notFor: [], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "10~15분", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "40대~60대", bestFor: ["목주름", "칠면조목"], notRecommended: [], skinType: "무관" }, pros: ["비수술목관리"], cons: ["반복필요"], safety: {
        seriousSideEffects: ["삼킴불편"], contraindications: ["신경근육질환"], warnings: ["적정용량"] }, pricing: { range: "20~50만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: ["목스킨부스터"] }, tags: ["보톡스", "목"] },

    { id: "hyperhidrosis-botox", name: "다한증보톡스", nameEn: "Hyperhidrosis Botox", brand: "다양", category: "다한증/액취", subcategory: "보톡스", mechanism: {detailed: "보툴리눔콜린신경차단", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 60, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["다한증"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "다한증 보톡스는 겨드랑이, 손, 발의 과도한 땀을 줄입니다. 땀샘 신경을 차단해 6개월 이상 효과가 지속됩니다.",
                "likes": [
                        "땀 감소 효과 확실",
                        "6~12개월 지속",
                        "일상 개선",
                        "냄새 감소",
                        "검증된 치료"
                ],
                "dislikes": [
                        "주사 통증 (특히 손/발)",
                        "비용 높음",
                        "재시술 필요",
                        "보상성 다한증 가능"
                ],
                "tips": [
                        "겨드랑이가 가장 편함",
                        "손/발은 마취 필요",
                        "여름 전 추천",
                        "미라드라이와 비교"
                ],
                "overall": "다한증으로 일상이 불편하다면 확실한 효과를 볼 수 있습니다."
        }, effects: { primary: ["땀감소"], secondary: [], notFor: ["심한다한증"], onsetTime: "3~7일", duration: "6개월~1년" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1회", interval: "6개월~1년" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사부위불편"], recoveryTips: [] }, suitability: { idealAge: "10대~50대", bestFor: ["겨드랑이다한증", "손다한증"], notRecommended: ["심한경우"], skinType: "무관" }, pros: ["간편", "효과적"], cons: ["반복필요"], safety: {
        seriousSideEffects: ["근육약화"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "30~60만원", average: "40만원", factors: ["부위"] }, comparison: { vs: { "미라드라이": "보톡스=반복, 미라드라이=영구" }, bestWith: [] }, tags: ["다한증", "보톡스"] },

    // ===== 170~200: 최종 31개 =====
    { id: "eyelid-botox", name: "눈밑보톡스", nameEn: "Lower Eyelid Botox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "안륜근하부보툴리눔", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["눈밑잔주름"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "눈꺼풀 보톡스(눈매교정)는 눈 뜨는 근육을 조절해 눈매를 또렷하게 합니다. 졸린 눈을 개선합니다.",
                "likes": [
                        "눈매 또렷하게",
                        "졸린 눈 개선",
                        "비수술적",
                        "다운타임 없음",
                        "자연스러운 효과"
                ],
                "dislikes": [
                        "효과 미미할 수 있음",
                        "3~4개월 유지",
                        "심한 안검하수는 수술",
                        "적정량 중요"
                ],
                "tips": [
                        "가벼운 처짐에 효과적",
                        "소량으로 시작",
                        "안검하수 심하면 수술 고려",
                        "눈가보톡스와 별개"
                ],
                "overall": "가벼운 눈 처짐으로 졸려 보인다면 시도해볼 만합니다."
        }, effects: { primary: ["눈밑잔주름"], secondary: [], notFor: [], onsetTime: "3~7일", duration: "3~6개월" }, procedure: { duration: "5~10분", anesthesia: "불필요", sessions: "1회", interval: "3~6개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "없음", commonSideEffects: ["주사자국"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["눈밑잔주름"], notRecommended: [], skinType: "무관" }, pros: ["간편"], cons: ["반복필요"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "5~15만원", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["눈가보톡스"] }, tags: ["보톡스", "눈밑"] },

    { id: "aquagold", name: "아쿠아골드", nameEn: "AquaGold", brand: "AquaGold", category: "스킨부스터", subcategory: "특수", mechanism: {detailed: "20개미세금침동시주입", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["피부결", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "아쿠아골드는 20개의 24K 금 미세바늘로 약물을 주입합니다. 보톡스, 필러, 스킨부스터를 동시에 넣습니다.",
                "likes": [
                        "복합 성분 주입",
                        "미세바늘로 통증 적음",
                        "모공/탄력/광채 동시",
                        "다운타임 적음",
                        "할리우드 인기"
                ],
                "dislikes": [
                        "가격 높음",
                        "여러 회차 필요",
                        "효과 순함",
                        "일반 주사보다 약할 수 있음"
                ],
                "tips": [
                        "행사 전 광채 관리",
                        "2~4주 간격 3회",
                        "스킨보톡스 효과",
                        "프리미엄 관리로"
                ],
                "overall": "프리미엄 복합 시술로 전체적인 피부 개선을 원할 때 좋습니다."
        }, effects: { primary: ["모공", "피부결"], secondary: ["보습"], notFor: ["볼륨"], onsetTime: "즉각~1주", duration: "2~3개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1~3회", interval: "1~2개월" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["모공"], notRecommended: [], skinType: "모든피부" }, pros: ["다운타임적음"], cons: ["비용"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["금알러지"], warnings: [] }, pricing: { range: "30~60만원", average: "45만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["아쿠아골드", "미세금침"] },

    { id: "forehead-filler", name: "이마필러", nameEn: "Forehead Filler", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "HA필러이마볼륨", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 55, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["이마볼륨"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "이마필러는 평평하거나 울퉁불퉁한 이마를 매끈하고 볼륨있게 만듭니다. 동안과 세련된 인상을 줍니다.",
                "likes": [
                        "이마 볼륨 개선",
                        "매끈한 라인",
                        "동안 효과",
                        "즉각 효과",
                        "지방이식 대안"
                ],
                "dislikes": [
                        "혈관 막힘 위험",
                        "1~2년 유지",
                        "비용 높음",
                        "숙련자 필수"
                ],
                "tips": [
                        "경험 많은 의사 필수",
                        "소량씩 여러번",
                        "레디에세 많이 사용",
                        "지방이식과 비교"
                ],
                "overall": "이마가 평평하거나 울퉁불퉁하다면 개선 효과가 큽니다."
        }, effects: { primary: ["이마볼륨"], secondary: [], notFor: [], onsetTime: "즉각", duration: "12~18개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1회", interval: "1~1.5년" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "5~7일", commonSideEffects: ["붓기"], recoveryTips: ["냉찜질"] }, suitability: { idealAge: "20대~40대", bestFor: ["평평한이마"], notRecommended: [], skinType: "무관" }, pros: ["둥근이마"], cons: ["비용"], safety: {
        seriousSideEffects: ["혈관폐색"], contraindications: [], warnings: ["숙련자에게"] }, pricing: { range: "60~120만원", average: "80만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["이마", "필러"] },


    { id: "jawline-lift", name: "자울라인리프팅", nameEn: "Jawline Lift", brand: "다양", category: "리프팅/타이트닝", subcategory: "복합", mechanism: {detailed: "필러+보톡스+실복합", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부", "턱선"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      
      review: {
                "summary": "턱라인 리프팅은 실, HIFU, RF 등으로 턱선을 살리고 이중턱을 개선합니다. V라인 효과를 줍니다.",
                "likes": [
                        "턱선 또렷하게",
                        "이중턱 개선",
                        "V라인 효과",
                        "비수술적",
                        "다양한 방법"
                ],
                "dislikes": [
                        "방법에 따라 다름",
                        "재시술 필요",
                        "비용 편차",
                        "효과 개인차"
                ],
                "tips": [
                        "실+HIFU 병행 효과적",
                        "사각턱보톡스와 함께",
                        "방법 비교 상담",
                        "정기 관리"
                ],
                "overall": "턱선과 이중턱을 개선해 V라인을 원할 때 다양한 방법이 있습니다."
        }, effects: { primary: ["턱선"], secondary: ["V라인"], notFor: [], onsetTime: "즉각~2주", duration: "6~12개월" }, procedure: { duration: "40~60분", anesthesia: "마취", sessions: "1회", interval: "6~12개월" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "5~7일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["턱선정리"], notRecommended: [], skinType: "무관" }, pros: ["복합효과"], cons: ["비용"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "100~200만원", average: "150만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부", "탄력저하", "턱선"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["턱선", "복합"] },

    { id: "full-face-lift", name: "풀페이스리프팅", nameEn: "Full Face Lift", brand: "다양", category: "리프팅/타이트닝", subcategory: "복합", mechanism: {detailed: "HIFU+RF+실복합", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 40, maximum: 65, optimal: "45~60세", youngWarning: "30대 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 5, category: "aggressive", firstTimerOk: false },
      
      review: {
                "summary": "풀페이스 리프팅은 얼굴 전체를 실, HIFU, RF 등으로 리프팅합니다. 종합적인 안티에이징 시술입니다.",
                "likes": [
                        "전체적인 리프팅",
                        "종합 안티에이징",
                        "비수술적",
                        "다양한 조합",
                        "동안 효과"
                ],
                "dislikes": [
                        "비용 높음",
                        "다운타임 있을 수 있음",
                        "재시술 필요",
                        "시술 조합에 따라 다름"
                ],
                "tips": [
                        "실+HIFU+RF 조합",
                        "예산에 따라 선택",
                        "병원 추천 따라",
                        "정기 관리 계획"
                ],
                "overall": "전체적인 얼굴 리프팅을 원할 때 종합적인 시술 계획을 세우세요."
        }, effects: { primary: ["전체리프팅"], secondary: [], notFor: [], onsetTime: "즉각~4주", duration: "1~2년" }, procedure: { duration: "90~120분", anesthesia: "마취", sessions: "1회", interval: "1~2년" }, recovery: { painLevel: 3, painDescription: "뻐근함", downtime: "7~14일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "40대~60대", bestFor: ["전체처짐"], notRecommended: [], skinType: "무관" }, pros: ["종합적개선"], cons: ["비용높음"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "300~600만원", average: "400만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 40, maximum: 65, optimal: "45~60세", youngWarning: "30대 이하에게는 과한 시술. 처짐이 심하지 않으면 불필요" },
      concerns: { primary: ["처진피부", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 5, category: "aggressive", firstTimerOk: false },
      tags: ["풀페이스", "복합"] },

    { id: "neck-lift", name: "넥리프팅", nameEn: "Neck Lift", brand: "다양", category: "리프팅/타이트닝", subcategory: "복합", mechanism: {detailed: "HIFU/RF/실목리프팅", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["목주름", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      
      review: {
                "summary": "목리프팅은 목주름과 처짐을 개선하는 시술입니다. 실, HIFU, 보톡스 등 다양한 방법이 있습니다.",
                "likes": [
                        "목주름 개선",
                        "칠면조 목 개선",
                        "비수술적",
                        "다양한 방법",
                        "얼굴과 함께 효과적"
                ],
                "dislikes": [
                        "목은 효과 제한적",
                        "재시술 필요",
                        "비용 있음",
                        "얼굴보다 어려움"
                ],
                "tips": [
                        "목보톡스와 병행",
                        "HIFU/슈링크 효과적",
                        "풀페이스와 함께",
                        "꾸준한 관리"
                ],
                "overall": "목 나이가 신경쓰인다면 얼굴 리프팅과 함께 받으세요."
        }, effects: { primary: ["목탄력"], secondary: [], notFor: [], onsetTime: "2~4주", duration: "6개월~1년" }, procedure: { duration: "30~60분", anesthesia: "마취크림", sessions: "1~2회", interval: "6개월" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "3~7일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "40대~60대", bestFor: ["목노화"], notRecommended: [], skinType: "무관" }, pros: ["목관리"], cons: ["효과제한적"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "50~150만원", average: "80만원", factors: [] }, comparison: { vs: {}, bestWith: ["목보톡스"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 65, optimal: "40~60세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["목주름", "처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["목", "리프팅"] },

    { id: "cog-rose", name: "로즈실리프팅", nameEn: "Rose Thread", brand: "다양", category: "리프팅/타이트닝", subcategory: "실리프팅", mechanism: {detailed: "360도가시PDO리프팅", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 60, optimal: "38~55세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      
      review: {
                "summary": "코그로즈는 장미 가시 모양의 실로 강력한 리프팅을 제공합니다. 일반 코그실보다 고정력이 강합니다.",
                "likes": [
                        "강력한 고정력",
                        "즉각 리프팅",
                        "콜라겐 재생",
                        "1~2년 유지",
                        "처짐 심할 때"
                ],
                "dislikes": [
                        "당김감 있음",
                        "멍/붓기 1~2주",
                        "가격 높음",
                        "숙련자 필요"
                ],
                "tips": [
                        "처짐 심할 때 효과적",
                        "민트실과 비교",
                        "HIFU와 병행",
                        "다운타임 각오"
                ],
                "overall": "강력한 리프팅을 원할 때 선택하는 프리미엄 실리프팅입니다."
        }, effects: { primary: ["리프팅"], secondary: ["콜라겐"], notFor: [], onsetTime: "즉각", duration: "1~2년" }, procedure: { duration: "30~60분", anesthesia: "국소마취", sessions: "1회", interval: "1~2년" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "5~7일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["즉각리프팅"], notRecommended: ["켈로이드"], skinType: "무관" }, pros: ["즉각효과"], cons: ["부작용가능"], safety: {
        seriousSideEffects: ["실튀어나옴"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "80~180만원", average: "120만원", factors: [] }, comparison: { vs: {}, bestWith: ["필러"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 60, optimal: "38~55세", youngWarning: "30대 초반 이하에게는 과한 시술" },
      concerns: { primary: ["처진피부", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["실리프팅", "로즈"] },

    { id: "dermapen", name: "더마펜", nameEn: "Dermapen", brand: "Dermapen", category: "흉터/모공", subcategory: "재생", mechanism: {detailed: "자동미세바늘콜라겐유도", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 60, optimal: "20~55세", youngWarning: null },
      concerns: { primary: ["모공", "흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "더마펜은 자동 마이크로니들 기기로 MTS를 진행합니다. 피부 재생과 유효성분 흡수를 높입니다.",
                "likes": [
                        "자동화로 균일한 시술",
                        "피부 재생",
                        "성분 흡수 촉진",
                        "모공/흉터 개선",
                        "다운타임 1~2일"
                ],
                "dislikes": [
                        "시술 중 따끔함",
                        "붉음 1~2일",
                        "여러 회차 필요",
                        "MRF보다 약함"
                ],
                "tips": [
                        "성장인자/엑소좀과 함께",
                        "2~4주 간격 5회 이상",
                        "흉터에 효과적",
                        "홈케어와 구분"
                ],
                "overall": "피부 재생과 흉터 개선을 위한 기본적인 니들링 시술입니다."
        }, effects: { primary: ["모공", "흉터"], secondary: ["피부결"], notFor: ["심한흉터"], onsetTime: "4~6주", duration: "유지관리" }, procedure: { duration: "30~40분", anesthesia: "마취크림", sessions: "4~6회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "20대~50대", bestFor: ["모공"], notRecommended: ["활동성여드름"], skinType: "모든피부" }, pros: ["재생효과"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "10~25만원", average: "15만원", factors: [] }, comparison: { vs: {}, bestWith: ["앰플"] }, tags: ["더마펜", "재생"] },

    { id: "tixel", name: "틱셀", nameEn: "Tixel", brand: "Novoxel", category: "흉터/모공", subcategory: "열치료", mechanism: {detailed: "직접열전달표피재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["모공", "흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "틱셀은 티타늄 열전달로 레이저 없이 프락셔널 효과를 냅니다. 레이저보다 다운타임이 짧습니다.",
                "likes": [
                        "레이저 없이 프락셔널",
                        "다운타임 짧음 (2~3일)",
                        "눈가도 가능",
                        "탄력/주름 개선",
                        "통증 적음"
                ],
                "dislikes": [
                        "프락셀보다 약함",
                        "여러 회차 필요",
                        "깊은 흉터엔 부족",
                        "가격 있음"
                ],
                "tips": [
                        "눈가 주름에 효과적",
                        "프락셀 대안으로",
                        "2~4주 간격",
                        "다운타임 짧게 원하면"
                ],
                "overall": "다운타임 부담 없이 프락셔널 효과를 원할 때 좋은 대안입니다."
        }, effects: { primary: ["피부결", "잔주름"], secondary: [], notFor: ["깊은흉터"], onsetTime: "1~2주", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "3~5회", interval: "3~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "2~4일", commonSideEffects: ["홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "30대~50대", bestFor: ["피부결"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["다운타임적음"], cons: ["깊은효과한계"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "15~30만원", average: "20만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, tags: ["틱셀", "피부결"] },

    { id: "fotona4d", name: "포토나4D", nameEn: "Fotona 4D", brand: "Fotona", category: "리프팅/타이트닝", subcategory: "레이저", mechanism: {detailed: "구강내+외부레이저복합", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["탄력저하", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "포토나4D는 4가지 모드로 피부 속부터 바깥까지 리프팅합니다. 비침습적 풀페이스 리프팅의 대표입니다.",
                "likes": [
                        "4가지 모드 종합",
                        "비침습적 리프팅",
                        "탄력+리프팅 동시",
                        "다운타임 적음",
                        "자연스러운 효과"
                ],
                "dislikes": [
                        "비용 높음",
                        "여러 회차 필요",
                        "효과 서서히",
                        "HIFU와 비교됨"
                ],
                "tips": [
                        "종합 리프팅 원하면",
                        "3~4주 간격 3~5회",
                        "HIFU와 병행 가능",
                        "입안 레이저 포함"
                ],
                "overall": "비침습적으로 종합 리프팅을 원할 때 효과적인 시술입니다."
        }, effects: { primary: ["리프팅", "탄력"], secondary: ["피부결"], notFor: [], onsetTime: "즉각~4주", duration: "6개월~1년" }, procedure: { duration: "60~90분", anesthesia: "불필요~마취크림", sessions: "3~4회", interval: "1개월" }, recovery: { painLevel: 2, painDescription: "따뜻함", downtime: "없음~1일", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["종합리프팅"], notRecommended: [], skinType: "모든피부" }, pros: ["비침습", "복합효과"], cons: ["비용"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "50~100만원", average: "70만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, tags: ["포토나", "4D"] },

    { id: "smoothliftin", name: "스무스리프틴", nameEn: "SmoothLiftin", brand: "Fotona", category: "리프팅/타이트닝", subcategory: "레이저", mechanism: {detailed: "Er:YAG구강내조사", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "스무스리프틴은 포토나의 입안 레이저입니다. 입안에서 팔자주름과 턱선을 개선합니다.",
                "likes": [
                        "입안 시술로 흉터 없음",
                        "팔자 개선",
                        "턱선 리프팅",
                        "다운타임 없음",
                        "자연스러운 효과"
                ],
                "dislikes": [
                        "효과 순함",
                        "여러 회차 필요",
                        "포토나4D 일부",
                        "단독보다 병행"
                ],
                "tips": [
                        "포토나4D에 포함",
                        "팔자 고민에 효과적",
                        "3~5회 권장",
                        "다른 시술과 병행"
                ],
                "overall": "입안에서 시술해 흉터 걱정 없이 팔자를 개선할 수 있습니다."
        }, effects: { primary: ["턱밑탄력"], secondary: [], notFor: [], onsetTime: "2~4주", duration: "6개월" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 1, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["턱밑탄력"], notRecommended: [], skinType: "무관" }, pros: ["무통증"], cons: ["효과제한적"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "20~40만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: ["포토나4D"] }, tags: ["구강내", "리프팅"] },

    { id: "retinol-peel", name: "레티놀필링", nameEn: "Retinol Peel", brand: "다양", category: "필링", subcategory: "화학필링", mechanism: {detailed: "비타민A유도체세포회전", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 55, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["피부결", "주름"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "레티놀 필링은 비타민A 유도체로 각질 제거와 콜라겐 생성을 촉진합니다. 잔주름, 색소에 효과적입니다.",
                "likes": [
                        "각질 제거",
                        "콜라겐 생성",
                        "잔주름 개선",
                        "색소 개선",
                        "피부 리뉴얼"
                ],
                "dislikes": [
                        "2~5일 각질/붉음",
                        "자외선 민감",
                        "임산부 금지",
                        "민감피부 주의"
                ],
                "tips": [
                        "저농도부터 시작",
                        "자외선 차단 필수",
                        "임신 계획 시 중단",
                        "가을/겨울 추천"
                ],
                "overall": "잔주름과 색소 개선을 위한 효과적인 비타민A 필링입니다."
        }, effects: { primary: ["피부결"], secondary: ["잔주름"], notFor: ["임산부"], onsetTime: "1~2주", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "4~6회", interval: "2~4주" }, recovery: { painLevel: 1.5, painDescription: "따끔", downtime: "3~7일", commonSideEffects: ["각질"], recoveryTips: ["보습"] }, suitability: { idealAge: "30대~50대", bestFor: ["노화피부"], notRecommended: ["임산부"], skinType: "정상/지성" }, pros: ["재생효과"], cons: ["각질심함"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["임산부"], warnings: [] }, pricing: { range: "10~25만원", average: "15만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨케어"] }, tags: ["레티놀", "필링"] },

    { id: "vi-peel", name: "VI필", nameEn: "VI Peel", brand: "Vitality", category: "필링", subcategory: "화학필링", mechanism: {detailed: "TCA+레티놀복합", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["피부결", "색소침착"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "VI필은 미국산 중간강도 화학적 필링입니다. 색소, 여드름 흉터, 잔주름에 효과적인 복합 필링입니다.",
                "likes": [
                        "색소 개선 효과적",
                        "여드름 흉터에 효과",
                        "잔주름 개선",
                        "피부톤 균일화",
                        "검증된 필링"
                ],
                "dislikes": [
                        "5~7일 다운타임",
                        "각질 벗겨짐",
                        "자외선 민감",
                        "민감피부 주의"
                ],
                "tips": [
                        "가을/겨울 추천",
                        "자외선 차단 필수",
                        "제스너필과 비교",
                        "1~2회로도 효과"
                ],
                "overall": "색소와 흉터 개선을 위한 효과적인 중간강도 필링입니다."
        }, effects: { primary: ["색소", "피부결"], secondary: [], notFor: ["민감성"], onsetTime: "1~2주", duration: "유지관리" }, procedure: { duration: "30분", anesthesia: "불필요", sessions: "3~5회", interval: "4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "5~7일", commonSideEffects: ["각질"], recoveryTips: ["보습"] }, suitability: { idealAge: "30대~50대", bestFor: ["색소"], notRecommended: ["민감성"], skinType: "모든피부" }, pros: ["효과적"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["민감성"], warnings: [] }, pricing: { range: "15~35만원", average: "25만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["VI필", "복합"] },

    { id: "velashape", name: "벨라쉐이프", nameEn: "VelaShape", brand: "Syneron", category: "바디/지방", subcategory: "바디케어", mechanism: {detailed: "복합에너지셀룰라이트", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["셀룰라이트"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "벨라쉐이프는 RF+적외선+진공+롤러로 셀룰라이트와 체형을 관리합니다. 복합 기술로 지방과 탄력을 동시에 케어합니다.",
                "likes": [
                        "셀룰라이트 개선",
                        "체형 관리",
                        "피부 탄력",
                        "통증 적음",
                        "다운타임 없음"
                ],
                "dislikes": [
                        "효과 서서히",
                        "여러 회차 필요",
                        "비용 누적",
                        "지방 감소는 제한적"
                ],
                "tips": [
                        "주 1~2회 x 6~8회",
                        "식이조절 병행",
                        "셀룰라이트에 효과적",
                        "LPG와 비교"
                ],
                "overall": "셀룰라이트와 체형 관리를 위한 복합 에스테틱 시술입니다."
        }, effects: { primary: ["셀룰라이트"], secondary: [], notFor: ["지방제거"], onsetTime: "4~6주", duration: "유지관리" }, procedure: { duration: "30~45분", anesthesia: "불필요", sessions: "6~10회", interval: "주1회" }, recovery: { painLevel: 1, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["셀룰라이트"], notRecommended: [], skinType: "무관" }, pros: ["복합효과"], cons: ["여러회"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "10~25만원/회", average: "15만원/회", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["셀룰라이트", "바디"] },

    { id: "liposonix", name: "리포소닉스", nameEn: "Liposonix", brand: "Solta", category: "바디/지방", subcategory: "지방감소", mechanism: {detailed: "고강도초음파지방파괴", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["지방"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "리포소닉스는 고강도 초음파로 지방세포를 파괴합니다. 1회 시술로 허리둘레 1인치 감소 효과가 있습니다.",
                "likes": [
                        "1회로 효과",
                        "비수술적",
                        "지방세포 영구 파괴",
                        "FDA 승인",
                        "검증된 효과"
                ],
                "dislikes": [
                        "통증 있음",
                        "멍/붓기 있을 수 있음",
                        "비용 높음",
                        "얇은 지방엔 부적합"
                ],
                "tips": [
                        "복부 지방 2.5cm 이상에",
                        "쿨스컬프팅과 비교",
                        "1회로도 효과",
                        "통증 각오"
                ],
                "overall": "1회 시술로 확실한 지방감소를 원할 때 고려하세요."
        }, effects: { primary: ["지방감소"], secondary: [], notFor: ["대량지방"], onsetTime: "8~12주", duration: "영구적" }, procedure: { duration: "60분", anesthesia: "불필요~진통제", sessions: "1회", interval: "필요시" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "없음~며칠", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["복부지방"], notRecommended: ["얇은지방층"], skinType: "무관" }, pros: ["1회시술"], cons: ["통증"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "100~200만원", average: "150만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["HIFU", "지방"] },

    { id: "accent-prime", name: "악센트프라임", nameEn: "Accent Prime", brand: "Alma", category: "바디/지방", subcategory: "지방감소", mechanism: {detailed: "복합에너지지방분해", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~50세", youngWarning: null },
      concerns: { primary: ["지방", "탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "악센트프라임은 초음파+RF로 지방감소와 피부탄력을 동시에 제공합니다. 얼굴과 바디 모두 사용 가능합니다.",
                "likes": [
                        "지방 + 탄력 동시",
                        "얼굴/바디 모두 가능",
                        "통증 적음",
                        "다운타임 없음",
                        "복합 효과"
                ],
                "dislikes": [
                        "여러 회차 필요",
                        "효과 서서히",
                        "비용 있음",
                        "다른 장비와 비교됨"
                ],
                "tips": [
                        "4~6회 권장",
                        "지방+탄력 원하면",
                        "얼굴 리프팅에도 사용",
                        "복합 관리로"
                ],
                "overall": "지방감소와 탄력 개선을 동시에 원할 때 좋은 복합 장비입니다."
        }, effects: { primary: ["지방감소"], secondary: ["타이트닝"], notFor: [], onsetTime: "4~8주", duration: "유지관리" }, procedure: { duration: "30~45분", anesthesia: "불필요", sessions: "4~8회", interval: "주1회" }, recovery: { painLevel: 1, painDescription: "따뜻함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "20대~50대", bestFor: ["지방+타이트닝"], notRecommended: [], skinType: "무관" }, pros: ["지방+타이트닝"], cons: ["여러회"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "15~30만원/회", average: "20만원/회", factors: [] }, comparison: { vs: {}, bestWith: [] }, tags: ["지방", "타이트닝"] },

    { id: "galvanic", name: "갈바닉", nameEn: "Galvanic", brand: "다양", category: "스킨케어", subcategory: "관리", mechanism: {detailed: "전류앰플딥딜리버리", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 65, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["피부결"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "갈바닉은 미세전류로 성분 침투와 노폐물 배출을 돕습니다. 에스테틱의 기본 관리 중 하나입니다.",
                "likes": [
                        "성분 침투 촉진",
                        "노폐물 배출",
                        "순한 시술",
                        "다운타임 없음",
                        "기본 관리"
                ],
                "dislikes": [
                        "효과 순함",
                        "보조 관리 개념",
                        "드라마틱한 변화 없음",
                        "정기적으로 해야 함"
                ],
                "tips": [
                        "다른 관리와 함께",
                        "비타민C 등 침투에",
                        "정기 관리로",
                        "홈케어 기기도 있음"
                ],
                "overall": "성분 침투를 높이는 기본적인 에스테틱 관리입니다."
        }, effects: { primary: ["앰플침투"], secondary: [], notFor: [], onsetTime: "즉각", duration: "유지관리" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "정기관리", interval: "주1~2회" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["앰플효과↑"], notRecommended: ["페이스메이커"], skinType: "모든피부" }, pros: ["앰플효과증대"], cons: ["단독효과적음"], safety: {
        seriousSideEffects: ["없음"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "3~10만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["앰플"] }, tags: ["갈바닉", "침투"] },

    { id: "microcurrent", name: "미세전류", nameEn: "Microcurrent", brand: "다양", category: "스킨케어", subcategory: "관리", mechanism: {detailed: "ATP생성촉진근육탄력", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 65, optimal: "30~60세", youngWarning: null },
      concerns: { primary: ["탄력저하"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "미세전류(마이크로커런트)는 약한 전류로 근육을 자극하고 리프팅합니다. 근육 톤과 탄력 개선에 효과적입니다.",
                "likes": [
                        "근육 톤 개선",
                        "리프팅 효과",
                        "순한 시술",
                        "다운타임 없음",
                        "즉각 효과"
                ],
                "dislikes": [
                        "효과 일시적",
                        "정기적으로 해야 함",
                        "드라마틱한 변화 없음",
                        "보조 관리"
                ],
                "tips": [
                        "정기 관리로",
                        "행사 전 리프팅",
                        "홈케어 기기 인기",
                        "누에라와 유사"
                ],
                "overall": "부담 없이 리프팅과 탄력을 관리하는 기본 케어입니다."
        }, effects: { primary: ["탄력"], secondary: ["윤곽"], notFor: [], onsetTime: "즉각", duration: "일시적" }, procedure: { duration: "30~40분", anesthesia: "불필요", sessions: "정기관리", interval: "주1~2회" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["탄력관리"], notRecommended: ["페이스메이커"], skinType: "모든피부" }, pros: ["무통증"], cons: ["일시적"], safety: {
        seriousSideEffects: ["없음"], contraindications: ["페이스메이커"], warnings: [] }, pricing: { range: "5~15만원", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["앰플"] }, tags: ["미세전류", "탄력"] },

    { id: "cryofacial", name: "크라이오페이셜", nameEn: "Cryo Facial", brand: "다양", category: "스킨케어", subcategory: "관리", mechanism: {detailed: "-10도냉각모공수축", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 60, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["피부진정", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "크라이오페이셜은 냉각으로 피부를 진정시키고 모공을 축소합니다. 시술 후 마무리나 진정에 효과적입니다.",
                "likes": [
                        "즉각 진정 효과",
                        "모공 축소",
                        "붓기 감소",
                        "다운타임 없음",
                        "시술 후 마무리"
                ],
                "dislikes": [
                        "효과 일시적",
                        "단독 효과 제한적",
                        "보조 관리",
                        "비용 대비 효과"
                ],
                "tips": [
                        "레이저 후 진정으로",
                        "여름 광채 관리",
                        "행사 전 마무리",
                        "다른 시술과 함께"
                ],
                "overall": "시술 후 진정이나 즉각적인 광채를 위한 마무리 케어입니다."
        }, effects: { primary: ["모공축소", "진정"], secondary: [], notFor: [], onsetTime: "즉각", duration: "일시적" }, procedure: { duration: "15~20분", anesthesia: "불필요", sessions: "정기관리", interval: "주1~2회" }, recovery: { painLevel: 0.5, painDescription: "시원함", downtime: "없음", commonSideEffects: ["홍반"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["모공", "진정"], notRecommended: ["냉감과민"], skinType: "모든피부" }, pros: ["즉각모공축소"], cons: ["일시적"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["냉감과민"], warnings: [] }, pricing: { range: "3~10만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["시술후"] }, tags: ["크라이오", "모공"] },

    { id: "oxygen-therapy", name: "산소테라피", nameEn: "Oxygen Therapy", brand: "다양", category: "스킨케어", subcategory: "관리", mechanism: {detailed: "산소공급세포활성화", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 15, maximum: 70, optimal: "전연령", youngWarning: null },
      concerns: { primary: ["피부결"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "산소테라피는 고농도 산소를 피부에 공급해 활력을 줍니다. 피부 대사를 촉진하고 광채를 더합니다.",
                "likes": [
                        "피부 활력",
                        "즉각 광채",
                        "순한 시술",
                        "다운타임 없음",
                        "편안한 관리"
                ],
                "dislikes": [
                        "효과 일시적",
                        "보조 관리",
                        "드라마틱한 변화 없음",
                        "정기적으로"
                ],
                "tips": [
                        "행사 전 광채",
                        "다른 시술과 함께",
                        "정기 관리로",
                        "답답한 피부에"
                ],
                "overall": "피부에 활력과 광채를 주는 순한 에스테틱 관리입니다."
        }, effects: { primary: ["활력"], secondary: ["톤업"], notFor: [], onsetTime: "즉각", duration: "일시적" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "정기관리", interval: "주1~2회" }, recovery: { painLevel: 0, painDescription: "없음", downtime: "없음", commonSideEffects: ["없음"], recoveryTips: [] }, suitability: { idealAge: "전연령", bestFor: ["피로한피부"], notRecommended: [], skinType: "모든피부" }, pros: ["즉각활력"], cons: ["일시적"], safety: {
        seriousSideEffects: ["없음"], contraindications: [], warnings: [] }, pricing: { range: "3~10만원", average: "5만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨케어"] }, tags: ["산소", "활력"] },

    { id: "snowflake-peel", name: "스노우플라워필링", nameEn: "Snowflower Peel", brand: "다양", category: "필링", subcategory: "화학필링", mechanism: {detailed: "순한AHA각질제거", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["피부결", "각질"], secondary: [], notEffective: [] },
      intensity: { level: 1, category: "gentle", firstTimerOk: true },
      
      review: {
                "summary": "눈꽃필링은 미세분말로 각질을 부드럽게 제거합니다. 크리스탈 필링의 업그레이드 버전입니다.",
                "likes": [
                        "순한 각질 제거",
                        "피부결 개선",
                        "다운타임 적음",
                        "민감피부도 가능",
                        "즉각 효과"
                ],
                "dislikes": [
                        "효과 순함",
                        "깊은 필링 아님",
                        "여러 회차 필요",
                        "정기 관리 필요"
                ],
                "tips": [
                        "민감피부 필링으로",
                        "정기 각질 관리",
                        "다른 필링과 비교",
                        "가볍게 원할 때"
                ],
                "overall": "민감피부도 가능한 순한 각질 관리 필링입니다."
        }, effects: { primary: ["각질"], secondary: ["톤업"], notFor: [], onsetTime: "즉각~1주", duration: "유지관리" }, procedure: { duration: "20~30분", anesthesia: "불필요", sessions: "정기관리", interval: "2~4주" }, recovery: { painLevel: 1, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["약간각질"], recoveryTips: ["보습"] }, suitability: { idealAge: "전연령", bestFor: ["민감성피부"], notRecommended: [], skinType: "민감성/건성" }, pros: ["순함"], cons: ["효과약함"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "5~15만원", average: "10만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨케어"] }, tags: ["순한필링", "민감성"] },

    { id: "reblith", name: "리블리스", nameEn: "Reblith", brand: "Jetema", category: "스킨부스터", subcategory: "엑소좀", mechanism: {detailed: "엑소좀성장인자피부재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["피부결", "재생"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "리블리스는 PN(폴리뉴클레오티드) 기반 스킨부스터입니다. 피부 재생과 탄력 개선에 효과적입니다.",
                "likes": [
                        "PN 재생 효과",
                        "탄력 개선",
                        "리쥬란 대안",
                        "피부 질감 개선",
                        "검증된 성분"
                ],
                "dislikes": [
                        "여러 회차 필요",
                        "리쥬란과 비교됨",
                        "효과 체감 시간",
                        "가격 있음"
                ],
                "tips": [
                        "리쥬란 대안으로",
                        "3~4주 간격 3~5회",
                        "MTS와 병행",
                        "재생 목적에"
                ],
                "overall": "PN 성분으로 피부 재생을 원할 때 리쥬란의 좋은 대안입니다."
        }, effects: { primary: ["재생"], secondary: ["탄력"], notFor: ["볼륨"], onsetTime: "2~4주", duration: "3~6개월" }, procedure: { duration: "30분", anesthesia: "마취크림", sessions: "3~5회", interval: "2~4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "30대~50대", bestFor: ["재생"], notRecommended: [], skinType: "모든피부" }, pros: ["재생효과"], cons: ["비용"], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "30~50만원", average: "40만원", factors: [] }, comparison: { vs: {}, bestWith: ["MRF"] }, tags: ["엑소좀", "재생"] },

    { id: "mesobotox", name: "메조보톡스", nameEn: "Mesobotox", brand: "다양", category: "주름/보톡스", subcategory: "보톡스", mechanism: {detailed: "희석보툴리눔피부톡신", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "28~55세", youngWarning: null },
      concerns: { primary: ["모공", "피부결"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "메조보톡스(스킨보톡스)는 보톡스를 피부 전체에 얕게 주입합니다. 모공 축소와 피지 조절, 탄력에 효과적입니다.",
                "likes": [
                        "모공 축소",
                        "피지 감소",
                        "피부 탄력",
                        "광채 효과",
                        "표정 영향 없음"
                ],
                "dislikes": [
                        "3~4개월 유지",
                        "비용 누적",
                        "재시술 필요",
                        "효과 개인차"
                ],
                "tips": [
                        "더마톡신과 동일",
                        "지성/모공 고민에",
                        "3개월마다 유지",
                        "여름 전 추천"
                ],
                "overall": "모공과 피지 조절을 위한 효과적인 스킨보톡스입니다."
        }, effects: { primary: ["모공", "피지"], secondary: ["잔주름"], notFor: ["리프팅"], onsetTime: "1~2주", duration: "3~4개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1회", interval: "3~4개월" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "20대~40대", bestFor: ["모공"], notRecommended: [], skinType: "지성" }, pros: ["모공효과"], cons: ["효과짧음"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["신경근육질환"], warnings: [] }, pricing: { range: "15~30만원", average: "20만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "28~55세", youngWarning: null },
      concerns: { primary: ["모공", "피부결"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["메조보톡스", "모공"] },

    { id: "tl-booster", name: "톡스앤룩스부스터", nameEn: "Tox Lux Booster", brand: "다양", category: "스킨부스터", subcategory: "복합", mechanism: {detailed: "스킨보톡스+HA동시", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "28~55세", youngWarning: null },
      concerns: { primary: ["피부결", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "TL부스터는 보톡스+필러+스킨부스터를 혼합한 복합 주사입니다. 탄력과 보습을 동시에 제공합니다.",
                "likes": [
                        "복합 효과",
                        "탄력 + 보습",
                        "즉각 효과",
                        "다운타임 적음",
                        "맞춤 조합 가능"
                ],
                "dislikes": [
                        "효과 지속 짧음",
                        "정기 시술 필요",
                        "비용 있음",
                        "조합에 따라 다름"
                ],
                "tips": [
                        "탄력+보습 동시에",
                        "2~4주 간격",
                        "병원마다 조합 다름",
                        "맞춤 칵테일로"
                ],
                "overall": "여러 효과를 한번에 원할 때 효율적인 복합 주사입니다."
        }, effects: { primary: ["모공", "보습"], secondary: [], notFor: [], onsetTime: "1~2주", duration: "3~6개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1~3회", interval: "2~3개월" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~2일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "20대~40대", bestFor: ["모공+보습"], notRecommended: [], skinType: "지성/복합성" }, pros: ["복합효과"], cons: [], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "20~40만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: [] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "28~55세", youngWarning: null },
      concerns: { primary: ["피부결", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["복합", "부스터"] },

    // ===== 198~200: 마지막 3개 =====
    { id: "co2-resurfacing", name: "CO2리서페이싱", nameEn: "CO2 Resurfacing", brand: "다양", category: "흉터/모공", subcategory: "프랙셔널", mechanism: {detailed: "CO2레이저표피재생", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["여드름흉터", "흉터"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      
      review: {
                "summary": "CO2 리서페이싱은 CO2 레이저로 피부 표면을 갈아 재생시킵니다. 흉터, 주름, 피부결 개선에 강력한 효과가 있습니다.",
                "likes": [
                        "강력한 재생 효과",
                        "흉터/주름 개선",
                        "피부결 리뉴얼",
                        "검증된 효과",
                        "한 번에 큰 변화"
                ],
                "dislikes": [
                        "7~14일 다운타임",
                        "통증 있음",
                        "붉음 오래감",
                        "색소침착 주의"
                ],
                "tips": [
                        "심한 흉터에 효과적",
                        "다운타임 각오 필수",
                        "가을/겨울 필수",
                        "자외선 차단 철저"
                ],
                "overall": "확실한 피부 리뉴얼을 원하고 다운타임을 감수할 때 선택합니다."
        }, effects: { primary: ["흉터", "주름"], secondary: [], notFor: [], onsetTime: "1~3개월", duration: "영구적개선" }, procedure: { duration: "30~60분", anesthesia: "마취크림필수", sessions: "1~3회", interval: "2~3개월" }, recovery: { painLevel: 3, painDescription: "화끈", downtime: "7~14일", commonSideEffects: ["홍반"], recoveryTips: ["보습", "자외선차단"] }, suitability: { idealAge: "30대~50대", bestFor: ["깊은주름", "흉터"], notRecommended: ["켈로이드"], skinType: "밝은피부" }, pros: ["강력한효과"], cons: ["다운타임김"], safety: {
        seriousSideEffects: ["색소침착"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "50~100만원", average: "70만원", factors: [] }, comparison: { vs: {}, bestWith: ["스킨부스터"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 25, maximum: 60, optimal: "30~55세", youngWarning: null },
      concerns: { primary: ["여드름흉터", "흉터", "모공"], secondary: [], notEffective: [] },
      intensity: { level: 4, category: "aggressive", firstTimerOk: false },
      tags: ["CO2", "리서페이싱"] },

    { id: "scar-subcision", name: "흉터서브시전", nameEn: "Scar Subcision", brand: "수기", category: "흉터/모공", subcategory: "흉터치료", mechanism: {detailed: "피하박리술섬유밴드절단", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["여드름흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      
      review: {
                "summary": "흉터 서브시전은 패인 흉터 아래 섬유화를 끊어 올리는 시술입니다. 롤링 스카, 박스 스카에 효과적입니다.",
                "likes": [
                        "패인 흉터 올림",
                        "롤링 스카에 효과적",
                        "물리적 박리",
                        "다른 시술과 병행",
                        "검증된 방법"
                ],
                "dislikes": [
                        "멍/붓기 1~2주",
                        "여러 회차 필요",
                        "깊은 아이스픽엔 제한적",
                        "숙련자 필요"
                ],
                "tips": [
                        "롤링/박스 스카에",
                        "프락셀, 필러와 병행",
                        "3~5회 반복",
                        "다운타임 각오"
                ],
                "overall": "패인 여드름 흉터 치료의 핵심 시술입니다."
        }, effects: { primary: ["패인흉터"], secondary: [], notFor: ["아이스픽"], onsetTime: "1~3개월", duration: "영구적" }, procedure: { duration: "30~60분", anesthesia: "국소마취", sessions: "2~4회", interval: "4~6주" }, recovery: { painLevel: 2.5, painDescription: "뻐근함", downtime: "7~14일", commonSideEffects: ["붓기", "멍"], recoveryTips: ["압박"] }, suitability: { idealAge: "20대~40대", bestFor: ["롤링흉터"], notRecommended: ["켈로이드"], skinType: "모든피부" }, pros: ["근본개선"], cons: ["다운타임"], safety: {
        seriousSideEffects: ["감염"], contraindications: ["켈로이드"], warnings: [] }, pricing: { range: "20~50만원", average: "30만원", factors: [] }, comparison: { vs: {}, bestWith: ["프락셀"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 18, maximum: 55, optimal: "20~50세", youngWarning: null },
      concerns: { primary: ["여드름흉터", "롤링흉터"], secondary: [], notEffective: [] },
      intensity: { level: 3, category: "moderate", firstTimerOk: false },
      tags: ["서브시전", "흉터"] },

    { id: "hand-rejuv", name: "손등회춘", nameEn: "Hand Rejuvenation", brand: "다양", category: "필러/볼륨", subcategory: "HA필러", mechanism: {detailed: "HA필러손등젊어보이게", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 70, optimal: "40~60세", youngWarning: "30대 이하에게는 필요 없음" },
      concerns: { primary: ["손등노화"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "손등 동안 시술은 필러, 레이저, 스킨부스터로 손등 노화를 개선합니다. 볼륨과 잡티를 동시에 케어합니다.",
                "likes": [
                        "손등 볼륨 복원",
                        "잡티/주름 개선",
                        "동안 손 효과",
                        "비수술적",
                        "즉각 효과"
                ],
                "dislikes": [
                        "비용 높음",
                        "재시술 필요",
                        "손등 붓기 있을 수 있음",
                        "일상 불편"
                ],
                "tips": [
                        "레디에세 필러 효과적",
                        "IPL로 잡티 제거",
                        "스킨부스터 병행",
                        "손도 자외선 차단"
                ],
                "overall": "손등이 나이 들어 보인다면 효과적인 동안 시술입니다."
        }, effects: { primary: ["손등볼륨"], secondary: [], notFor: [], onsetTime: "즉각", duration: "6~12개월" }, procedure: { duration: "20~30분", anesthesia: "마취크림", sessions: "1회", interval: "6~12개월" }, recovery: { painLevel: 2, painDescription: "뻐근함", downtime: "3~5일", commonSideEffects: ["붓기"], recoveryTips: [] }, suitability: { idealAge: "40대~60대", bestFor: ["손등노화"], notRecommended: [], skinType: "무관" }, pros: ["손노화개선"], cons: [], safety: {
        seriousSideEffects: ["드묾"], contraindications: [], warnings: [] }, pricing: { range: "30~60만원", average: "40만원", factors: [] }, comparison: { vs: {}, bestWith: ["래디에스"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 35, maximum: 70, optimal: "40~60세", youngWarning: "30대 이하에게는 필요 없음" },
      concerns: { primary: ["손등노화", "볼륨손실"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["손등", "회춘"] },

    { id: "lituo", name: "리투오", nameEn: "Re2O", brand: "리투오", category: "스킨부스터", subcategory: "hADM", mechanism: {detailed: "세포외기질(콜라겐,엘라스틴)직접주입 피부구조근본개선", },
      
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["피부결", "피부톤"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      
      review: {
                "summary": "리투어는 PLLA+HA 복합 필러입니다. 즉각 볼륨과 콜라겐 재생을 동시에 제공하는 차세대 필러입니다.",
                "likes": [
                        "즉각 볼륨 + 콜라겐",
                        "PLLA+HA 복합",
                        "오래 지속",
                        "자연스러운 효과",
                        "차세대 필러"
                ],
                "dislikes": [
                        "가격 높음",
                        "아직 대중화 중",
                        "효과 검증 더 필요",
                        "취급 병원 적음"
                ],
                "tips": [
                        "스컬트라+필러 원할 때",
                        "콜라겐 재생 원하면",
                        "새로운 제품이라 후기 확인",
                        "병원에 취급 확인"
                ],
                "overall": "즉각 효과와 콜라겐 재생을 동시에 원할 때 차세대 옵션입니다."
        }, effects: { primary: ["피부밀도", "탄력"], secondary: ["피부결"], notFor: ["볼륨"], onsetTime: "즉각+점진", duration: "6개월~1년" }, procedure: { duration: "30~40분", anesthesia: "마취크림", sessions: "2~3회", interval: "4주" }, recovery: { painLevel: 2, painDescription: "따끔", downtime: "1~3일", commonSideEffects: ["붓기", "홍반"], recoveryTips: ["보습"] }, suitability: { idealAge: "30대~50대", bestFor: ["피부탄력저하", "피부결"], notRecommended: [], skinType: "모든피부" }, pros: ["ECM직접보충", "근본적개선", "즉각+장기효과"], cons: ["비용높음"], safety: {
        seriousSideEffects: ["드묾"], contraindications: ["인체조직알러지"], warnings: [] }, pricing: { range: "30~60만원/회", average: "45만원/회", factors: [] }, comparison: { vs: { "리쥬란": "리투오=hADM/ECM직접보충" }, bestWith: ["리프팅시술"] }, 
      // === AI Recommendation Fields ===
      ageRange: { minimum: 20, maximum: 60, optimal: "25~55세", youngWarning: null },
      concerns: { primary: ["피부결", "피부톤"], secondary: [], notEffective: [] },
      intensity: { level: 2, category: "moderate", firstTimerOk: true },
      tags: ["hADM", "ECM", "스킨부스터", "차세대"] }
  ]
};

// 유틸리티 함수
function getTreatmentById(id) {
  return DB_EXTENDED.treatments.find(t => t.id === id);
}

function getTreatmentsByCategory(category) {
  return DB_EXTENDED.treatments.filter(t => t.category === category);
}

function getTreatmentsByTag(tag) {
  return DB_EXTENDED.treatments.filter(t => t.tags.includes(tag));
}

function searchTreatments(query) {
  const q = query.toLowerCase();
  return DB_EXTENDED.treatments.filter(t => 
    t.name.includes(q) || 
    t.nameEn.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.includes(q)) ||
    t.mechanism.keywords.some(k => k.toLowerCase().includes(q))
  );
}

console.log("DB_EXTENDED 로드 완료:", DB_EXTENDED.treatments.length, "개 시술");

// ========== FAQ 템플릿 및 생성 함수 ==========

const FAQ_TEMPLATES = {
  // 카테고리별 공통 FAQ
  "리프팅/타이트닝": [
    { q: "효과는 언제부터 보이나요?", a: "시술 후 1~2주 내 초기 효과, 1~3개월에 걸쳐 콜라겐 재생으로 최대 효과" },
    { q: "유지 기간은 얼마나 되나요?", a: "개인차가 있으나 보통 6개월~2년, 관리에 따라 연장 가능" },
    { q: "처짐이 심해도 효과 있나요?", a: "경미~중등도 처짐에 효과적, 심한 처짐은 실리프팅이나 수술 고려" }
  ],
  "스킨부스터": [
    { q: "얼마나 자주 맞아야 하나요?", a: "초기 2~4주 간격 3~4회, 이후 2~3개월 유지 시술" },
    { q: "다른 시술과 병행 가능한가요?", a: "대부분 병행 가능, 레이저/보톡스와 2주 간격 권장" },
    { q: "효과가 바로 보이나요?", a: "즉시 수분감 개선, 광채는 2~4주 후 본격적으로" }
  ],
  "주름/보톡스": [
    { q: "효과는 언제 나타나나요?", a: "3~7일 후 효과 시작, 2주 후 최대 효과" },
    { q: "얼마나 자주 맞아야 하나요?", a: "보통 3~6개월 간격, 반복 시 효과 기간 늘어남" },
    { q: "표정이 어색해지지 않나요?", a: "적정량 시술 시 자연스러움, 과다 시술 시 뻣뻣할 수 있음" }
  ],
  "필러/볼륨": [
    { q: "얼마나 오래 유지되나요?", a: "부위와 제품에 따라 6개월~2년, HA필러는 녹일 수 있음" },
    { q: "멍이 많이 드나요?", a: "개인차 있으나 보통 1주 내 소실, 중요 일정 전 여유 권장" },
    { q: "부작용은 없나요?", a: "일시적 붓기/멍 흔함, 드물게 혈관 폐색 위험으로 숙련된 의사 중요" }
  ],
  "색소/미백": [
    { q: "몇 회 시술해야 효과 보나요?", a: "보통 3~5회 이상, 색소 깊이에 따라 다름" },
    { q: "시술 후 바로 외출 가능한가요?", a: "가능하나 자외선 차단 필수, 시술 당일 약간 붉을 수 있음" },
    { q: "재발하지 않나요?", a: "자외선/호르몬에 따라 재발 가능, 지속적 관리와 선크림 중요" }
  ],
  "흉터/모공": [
    { q: "완전히 없어지나요?", a: "크게 개선되나 100% 제거는 어려움, 70~80% 호전 기대" },
    { q: "다운타임이 길나요?", a: "시술 강도에 따라 3일~2주, 약한 시술은 당일 일상 가능" },
    { q: "몇 번 받아야 하나요?", a: "보통 3~5회 이상, 심한 흉터는 10회 이상 필요할 수 있음" }
  ],
  "바디/지방": [
    { q: "살이 다시 찌지 않나요?", a: "지방세포 감소는 영구적, 남은 세포가 커질 수 있어 관리 필요" },
    { q: "운동/다이어트로 안 되는데 효과 있나요?", a: "부분 지방 감소에 효과적, 전체 체중 감량과 병행 권장" },
    { q: "아프나요?", a: "시술 종류에 따라 다름, 비침습은 불편감 적음, 주사는 약간 통증" }
  ],
  "제모": [
    { q: "영구 제모인가요?", a: "80~90% 영구 감소, 일부 잔털 유지 시술 필요할 수 있음" },
    { q: "몇 회 받아야 하나요?", a: "부위에 따라 5~10회, 털 주기에 맞춰 4~6주 간격" },
    { q: "여름에 받아도 되나요?", a: "가능하나 시술 전후 2주 자외선 노출 최소화" }
  ],
  "탈모": [
    { q: "효과를 보려면 얼마나 걸리나요?", a: "최소 3~6개월 꾸준히, 1년 이상 지속 치료 권장" },
    { q: "모발 이식과 뭐가 다른가요?", a: "비수술로 기존 모발 강화, 이식은 새 모발 심는 수술" },
    { q: "계속 받아야 하나요?", a: "탈모는 진행성이므로 유지 치료 권장" }
  ],
  "스킨케어": [
    { q: "얼마나 자주 받아야 하나요?", a: "피부 상태에 따라 2~4주 간격, 유지는 월 1회" },
    { q: "집에서 관리와 뭐가 다른가요?", a: "전문 장비와 고농도 성분, 더 깊은 층까지 작용" },
    { q: "민감성 피부도 가능한가요?", a: "대부분 가능, 자극 적은 프로그램 선택" }
  ]
};

// 강도별 추가 FAQ
const INTENSITY_FAQ = {
  gentle: [
    { q: "첫 시술로 적합한가요?", a: "네, 부담 없이 시작하기 좋은 입문 시술입니다" }
  ],
  moderate: [
    { q: "통증은 어느 정도인가요?", a: "중간 정도, 마취크림 사용 시 충분히 견딜 수 있음" }
  ],
  aggressive: [
    { q: "마취가 필요한가요?", a: "마취크림 필수, 경우에 따라 수면마취 권장" },
    { q: "회복 기간은 얼마나 되나요?", a: "시술에 따라 3일~2주, 중요 일정 전 충분한 여유 필요" }
  ]
};

// 가격대별 추가 FAQ
const PRICE_FAQ = {
  premium: { q: "왜 이렇게 비싼가요?", a: "FDA 승인 정품 장비, 숙련된 시술, 높은 효과와 안전성" },
  budget: { q: "저렴한데 효과 있나요?", a: "충분히 효과적, 가성비 좋은 선택지" }
};

// 시술별 FAQ 생성 함수
function generateFAQ(treatment) {
  const faqs = [];

  // 1. 카테고리 기본 FAQ
  const categoryFaq = FAQ_TEMPLATES[treatment.category];
  if (categoryFaq) {
    faqs.push(...categoryFaq);
  }

  // 2. 강도별 FAQ
  if (treatment.intensity && INTENSITY_FAQ[treatment.intensity.category]) {
    faqs.push(...INTENSITY_FAQ[treatment.intensity.category]);
  }

  // 3. 가격대 FAQ (100만원 이상이면 premium)
  if (treatment.pricing && treatment.pricing.average) {
    const avgPrice = parseInt(treatment.pricing.average.replace(/[^0-9]/g, ''));
    if (avgPrice >= 100) {
      faqs.push(PRICE_FAQ.premium);
    } else if (avgPrice <= 20) {
      faqs.push(PRICE_FAQ.budget);
    }
  }

  // 4. 시술 고유 정보 기반 FAQ
  if (treatment.procedure) {
    if (treatment.procedure.sessions && treatment.procedure.sessions !== "1회") {
      faqs.push({
        q: "몇 회 시술이 필요한가요?",
        a: `권장 ${treatment.procedure.sessions}, ${treatment.procedure.interval || '의사와 상담'} 간격`
      });
    }
    if (treatment.procedure.anesthesia) {
      faqs.push({
        q: "마취는 어떻게 하나요?",
        a: treatment.procedure.anesthesia
      });
    }
  }

  // 5. 효과 관련 FAQ
  if (treatment.effects) {
    if (treatment.effects.onsetTime) {
      faqs.push({
        q: "효과는 언제부터 나타나나요?",
        a: treatment.effects.onsetTime
      });
    }
    if (treatment.effects.duration) {
      faqs.push({
        q: "효과는 얼마나 지속되나요?",
        a: `평균 ${treatment.effects.duration}, 개인차와 관리에 따라 다름`
      });
    }
  }

  // 6. 부작용 관련 FAQ
  if (treatment.recovery && treatment.recovery.commonSideEffects) {
    faqs.push({
      q: "부작용은 없나요?",
      a: `일시적으로 ${treatment.recovery.commonSideEffects.join(', ')} 가능, 대부분 자연 소실`
    });
  }

  // 7. 연령 관련 FAQ
  if (treatment.ageRange && treatment.ageRange.youngWarning) {
    faqs.push({
      q: "젊은 나이에 받아도 되나요?",
      a: treatment.ageRange.youngWarning
    });
  }

  // 중복 제거 (질문 기준)
  const uniqueFaqs = [];
  const seenQuestions = new Set();
  for (const faq of faqs) {
    if (!seenQuestions.has(faq.q)) {
      seenQuestions.add(faq.q);
      uniqueFaqs.push(faq);
    }
  }

  return uniqueFaqs.slice(0, 8); // 최대 8개
}

// 모든 시술에 FAQ 추가
function enrichTreatmentsWithFAQ() {
  DB_EXTENDED.treatments.forEach(treatment => {
    treatment.faq = generateFAQ(treatment);
  });
  console.log("FAQ 추가 완료: 모든 시술에 FAQ 생성됨");
}

// 자동 실행
enrichTreatmentsWithFAQ();

// 특정 시술 FAQ 조회
function getTreatmentFAQ(treatmentId) {
  const treatment = getTreatmentById(treatmentId);
  return treatment ? treatment.faq : null;
}

console.log("FAQ 시스템 로드 완료");

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DB_EXTENDED, getTreatmentById, getTreatmentsByCategory, getTreatmentsByTag, searchTreatments, getTreatmentFAQ, generateFAQ };
}
