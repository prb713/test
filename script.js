// 검정색 화면 클릭 이벤트 리스너 추가
document.getElementById('black-screen').addEventListener('click', function() {
    // 검정색 화면을 숨김 처리
    this.style.display = 'none';
    
    // 이미지 컨테이너를 보이게 함
    const imageContainer = document.getElementById('image-container');
    imageContainer.classList.remove('hidden'); // 숨김 클래스 제거
    imageContainer.classList.add('show'); // show 클래스 추가
});
