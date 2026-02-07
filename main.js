/**
 * Ping Coming Soon 페이지용 자바스크립트 파일
 * 
 * 이 파일은 이메일 구독 폼의 유효성 검사 및 제출 처리를 담당합니다.
 * GEMINI.md 규칙에 따라 상세한 한글 주석이 작성되었습니다.
 */

// DOM(Document Object Model) 요소들을 변수에 저장합니다.
// 이렇게 하면 매번 HTML에서 요소를 찾지 않아도 되어 성능이 좋아집니다.
const form = document.getElementById('subscribeForm');           // 사용자가 작성하는 전체 폼
const emailInput = document.getElementById('emailInput');        // 이메일을 입력하는 칸
const errorMessage = document.getElementById('errorMessage');    // "올바른 메일을 입력하세요"라는 경고 문구

/**
 * 이메일의 형식이 올바른지 확인하는 도우미 함수입니다.
 * @param {string} email - 사용자가 입력한 이메일 글자들
 * @returns {boolean} - 형식이 맞으면 true(참), 틀리면 false(거짓)
 * 
 * [초보자를 위한 정규식 설명]
 * 이 정규식은 마치 '이메일 탐지기'와 같아요.
 * 1. ^[^\s@]+ : 시작할 때 공백이나 @가 없어야 합니다.
 * 2. @ : 중간에 반드시 골뱅이(@)가 하나 있어야 합니다.
 * 3. [^\s@]+ : 골뱅이 뒤에도 글자가 최소 한 개는 있어야 합니다 (도메인 이름).
 * 4. \. : 그 뒤에 반드시 점(.)이 하나 찍혀 있어야 합니다.
 * 5. [^\s@]+$ : 마지막으로 점 뒤에도 글자가 있어야 합니다 (예: com, net 등).
 */
function validateEmail(email) {
    // 정규식(Regular Expression)을 사용하여 이메일 패턴을 정의합니다.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // 입력받은 이메일이 이 패턴과 일치하는지 검사하여 결과를 돌려줍니다.
    return emailRegex.test(email);
}

/**
 * 사용자가 'Notify Me' 버튼을 눌렀을 때(폼 제출) 실행될 동작을 설정합니다.
 */
form.addEventListener('submit', function (e) {
    // 1. 브라우저의 기본 동작(페이지 새로고침)이 일어나지 않게 막습니다.
    // 이렇게 해야 우리가 원하는 유효성 검사를 먼저 할 수 있습니다.
    e.preventDefault();

    // 2. 입력된 이메일 값에서 양쪽의 불필요한 공백을 제거합니다.
    const email = emailInput.value.trim();

    // 3. 위에서 만든 함수를 사용해 이메일이 유효한지 검사합니다.
    if (!validateEmail(email)) {
        // ❌ 이메일 형식이 틀린 경우
        // 입력창 테두리를 빨간색으로 바꾸고, 숨겨져 있던 에러 메시지를 보여줍니다.
        emailInput.classList.add('border-red-400');      // 빨간색 테두리 클래스 추가
        errorMessage.classList.remove('hidden');         // 'hidden'(숨김) 클래스 제거하여 노출
    } else {
        // ✅ 이메일 형식이 올바른 경우
        // 빨간색 테두리와 에러 메시지를 모두 지웁니다.
        emailInput.classList.remove('border-red-400');   // 빨간색 테두리 제거
        errorMessage.classList.add('hidden');            // 메시지를 다시 숨김

        // 4. 사용자에게 성공 메시지를 보여줍니다. (실제 서비스라면 여기서 서버로 데이터를 보냅니다)
        alert('구독해 주셔서 감사합니다! 🎉 (Thank you for subscribing!)');

        // 5. 다음 입력을 위해 입력 칸을 깨끗하게 비웁니다.
        emailInput.value = '';
    }
});

/**
 * 사용자가 이메일을 다시 입력하기 시작하면 에러 표시를 실시간으로 지워줍니다.
 * 사용자가 오타를 고치고 있는데 계속 빨간색이면 당황할 수 있으니까요!
 */
emailInput.addEventListener('input', function () {
    // 현재 입력창에 빨간색 테두리가 있는지 확인합니다.
    if (emailInput.classList.contains('border-red-400')) {
        // 빨간색 테두리와 에러 메시지를 즉시 숨깁니다.
        emailInput.classList.remove('border-red-400');
        errorMessage.classList.add('hidden');
    }
});
