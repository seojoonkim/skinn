// Wikimedia Commons CC 라이선스 이미지 매핑
// 카테고리별 대표 이미지 (CC BY 4.0 / CC0 / Public Domain)
// 출처: https://commons.wikimedia.org

const categoryImages = {
    // HIFU 계열
    "HIFU": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Doctor_performs_Ultherapy_procedure.jpg/400px-Doctor_performs_Ultherapy_procedure.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Diagram_showing_liver_lesioning_using_a_HIFU_transducer_2.png/400px-Diagram_showing_liver_lesioning_using_a_HIFU_transducer_2.png"
    ],
    
    // RF 계열
    "RF": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Quantum_RF_for_Anti-Aging_of_the_Skin_by_Dr._Marwah.webp/400px-Quantum_RF_for_Anti-Aging_of_the_Skin_by_Dr._Marwah.webp",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Electrotherapy_Machine_%28cosmetic%29.jpg/400px-Electrotherapy_Machine_%28cosmetic%29.jpg"
    ],
    
    // 보톡스
    "보톡스": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ampoule_with_Botulinum_Neurotoxine_%28highly_toxic_for_humans%29%2C_used_for_%22beauty_injections%22_into_the_skin%2C_with_centimeter_scale_to_indicate_size.jpg/400px-Ampoule_with_Botulinum_Neurotoxine_%28highly_toxic_for_humans%29%2C_used_for_%22beauty_injections%22_into_the_skin%2C_with_centimeter_scale_to_indicate_size.jpg"
    ],
    
    // 필러
    "필러": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ultrasonography_of_hip_joint_injection_by_anterior_longitudinal_approach.jpg/400px-Ultrasonography_of_hip_joint_injection_by_anterior_longitudinal_approach.jpg"
    ],
    
    // 레이저
    "레이저": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/V-beam-laser-acne-ama-regenerative-medicine.jpg/400px-V-beam-laser-acne-ama-regenerative-medicine.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dr._Braun_works_with_the_Soprano_laser_for_hair_removal.jpg/400px-Dr._Braun_works_with_the_Soprano_laser_for_hair_removal.jpg"
    ],
    
    // 피코레이저
    "피코레이저": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/QuantaDiscoveryPicoLaser.tif/lossy-page1-400px-QuantaDiscoveryPicoLaser.tif.jpg"
    ],
    
    // 스킨케어
    "스킨케어": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Skin_care_cosmetics.jpg/400px-Skin_care_cosmetics.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Box_of_Korean_cosmetics.jpg/400px-Box_of_Korean_cosmetics.jpg"
    ],
    
    // 지방분해
    "지방분해": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Liposuction-zh.svg/400px-Liposuction-zh.svg.png"
    ],
    
    // 실리프팅
    "실리프팅": [],
    
    // MRF (마이크로니들)
    "MRF": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Quantum_RF_for_Anti-Aging_of_the_Skin_by_Dr._Marwah.webp/400px-Quantum_RF_for_Anti-Aging_of_the_Skin_by_Dr._Marwah.webp"
    ],
    
    // 스킨부스터
    "스킨부스터": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Skin_care_cosmetics.jpg/400px-Skin_care_cosmetics.jpg"
    ],
    
    // 제모
    "제모": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dr._Braun_works_with_the_Soprano_laser_for_hair_removal.jpg/400px-Dr._Braun_works_with_the_Soprano_laser_for_hair_removal.jpg"
    ],
    
    // 여드름
    "여드름": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/V-beam-laser-acne-ama-regenerative-medicine.jpg/400px-V-beam-laser-acne-ama-regenerative-medicine.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Salicylic_acid_for_treatment_of_acne.jpg/400px-Salicylic_acid_for_treatment_of_acne.jpg"
    ],
    
    // IPL
    "IPL": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dr._Braun_works_with_the_Soprano_laser_for_hair_removal.jpg/400px-Dr._Braun_works_with_the_Soprano_laser_for_hair_removal.jpg"
    ],
    
    // 초음파
    "초음파": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Doctor_performs_Ultherapy_procedure.jpg/400px-Doctor_performs_Ultherapy_procedure.jpg"
    ],
    
    // 기본 피부과
    "default": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Electrotherapy_Machine_%28cosmetic%29.jpg/400px-Electrotherapy_Machine_%28cosmetic%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Skin_care_cosmetics.jpg/400px-Skin_care_cosmetics.jpg"
    ]
};

// 시술 ID → 카테고리 매핑
const treatmentCategoryMap = {
    // HIFU
    "ulthera": "HIFU",
    "shurink-universe": "HIFU",
    "doublo-gold": "HIFU",
    "ultraformer-mpt": "HIFU",
    "sofwave": "HIFU",
    
    // RF
    "thermage-flx": "RF",
    "inmode": "RF",
    "oligio": "RF",
    "morpheus8": "RF",
    "scarlet-potenza": "MRF",
    "secret-rf": "MRF",
    "sylfirm-x": "MRF",
    "agnes": "RF",
    
    // 보톡스
    "botox": "보톡스",
    "botulax": "보톡스",
    "skin-botox": "보톡스",
    "lower-eyelid-botox": "보톡스",
    
    // 필러
    "filler": "필러",
    "juvelook": "필러",
    "skin-booster": "스킨부스터",
    
    // 레이저
    "pico-toning": "피코레이저",
    "laser-toning": "레이저",
    "fraxel": "레이저",
    "co2-resurfacing": "레이저",
    "ipl": "IPL",
    "laser-hair-removal": "제모",
    
    // 리프팅
    "thread-lift": "실리프팅",
    "pdo-cog-thread": "실리프팅",
    "mint-lift": "실리프팅",
    "emface": "RF",
    
    // 기타
    "rejuran": "스킨부스터",
    "exosome": "스킨부스터",
    "acne-treatment": "여드름",
    "lipolysis": "지방분해"
};

// 시술 ID로 이미지 배열 가져오기
function getTreatmentImages(treatmentId) {
    const category = treatmentCategoryMap[treatmentId] || "default";
    return categoryImages[category] || categoryImages["default"];
}

// Export
if (typeof module !== 'undefined') {
    module.exports = { categoryImages, treatmentCategoryMap, getTreatmentImages };
}
