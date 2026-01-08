#!/bin/bash
# TrueKorea 시술 이미지 다운로드 스크립트
# Wikimedia Commons CC 라이선스 이미지
# 사용법: chmod +x download_images.sh && ./download_images.sh

# 이미지 저장 폴더 생성
mkdir -p images

echo "🏥 TrueKorea 시술 이미지 다운로드 시작..."
echo ""

# HIFU
echo "📥 HIFU 이미지 다운로드 중..."
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Doctor_performs_Ultherapy_procedure.jpg/400px-Doctor_performs_Ultherapy_procedure.jpg" -o images/hifu_ultherapy.jpg
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Diagram_showing_liver_lesioning_using_a_HIFU_transducer_2.png/400px-Diagram_showing_liver_lesioning_using_a_HIFU_transducer_2.png" -o images/hifu_diagram.png

# RF
echo "📥 RF 이미지 다운로드 중..."
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Quantum_RF_for_Anti-Aging_of_the_Skin_by_Dr._Marwah.webp/400px-Quantum_RF_for_Anti-Aging_of_the_Skin_by_Dr._Marwah.webp" -o images/rf_quantum.webp
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Electrotherapy_Machine_%28cosmetic%29.jpg/400px-Electrotherapy_Machine_%28cosmetic%29.jpg" -o images/rf_electrotherapy.jpg

# 보톡스
echo "📥 보톡스 이미지 다운로드 중..."
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ampoule_with_Botulinum_Neurotoxine_%28highly_toxic_for_humans%29%2C_used_for_%22beauty_injections%22_into_the_skin%2C_with_centimeter_scale_to_indicate_size.jpg/400px-Ampoule_with_Botulinum_Neurotoxine_%28highly_toxic_for_humans%29%2C_used_for_%22beauty_injections%22_into_the_skin%2C_with_centimeter_scale_to_indicate_size.jpg" -o images/botox_ampoule.jpg

# 필러/주사
echo "📥 필러 이미지 다운로드 중..."
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ultrasonography_of_hip_joint_injection_by_anterior_longitudinal_approach.jpg/400px-Ultrasonography_of_hip_joint_injection_by_anterior_longitudinal_approach.jpg" -o images/filler_injection.jpg

# 레이저
echo "📥 레이저 이미지 다운로드 중..."
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/V-beam-laser-acne-ama-regenerative-medicine.jpg/400px-V-beam-laser-acne-ama-regenerative-medicine.jpg" -o images/laser_vbeam.jpg
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dr._Braun_works_with_the_Soprano_laser_for_hair_removal.jpg/400px-Dr._Braun_works_with_the_Soprano_laser_for_hair_removal.jpg" -o images/laser_soprano.jpg

# 피코레이저
echo "📥 피코레이저 이미지 다운로드 중..."
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/QuantaDiscoveryPicoLaser.tif/lossy-page1-400px-QuantaDiscoveryPicoLaser.tif.jpg" -o images/pico_laser.jpg

# 스킨케어
echo "📥 스킨케어 이미지 다운로드 중..."
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Skin_care_cosmetics.jpg/400px-Skin_care_cosmetics.jpg" -o images/skincare_cosmetics.jpg
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Box_of_Korean_cosmetics.jpg/400px-Box_of_Korean_cosmetics.jpg" -o images/skincare_korean.jpg

# 지방분해
echo "📥 지방분해 이미지 다운로드 중..."
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Liposuction-zh.svg/400px-Liposuction-zh.svg.png" -o images/lipolysis_diagram.png

# 여드름
echo "📥 여드름 치료 이미지 다운로드 중..."
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Salicylic_acid_for_treatment_of_acne.jpg/400px-Salicylic_acid_for_treatment_of_acne.jpg" -o images/acne_treatment.jpg

echo ""
echo "✅ 다운로드 완료!"
echo ""
echo "📁 다운로드된 이미지 목록:"
ls -la images/
echo ""
echo "💡 이미지 라이선스: Wikimedia Commons CC BY 4.0 / CC0"
echo "📎 출처: https://commons.wikimedia.org"
