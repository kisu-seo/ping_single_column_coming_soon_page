/** 
 * Tailwind CSS 설정 파일
 * 
 * 이 파일은 Tailwind CSS의 기본 설정을 커스터마이징하기 위한 파일입니다.
 * style-guide.md에 정의된 색상, 타이포그라피, 스페이싱을 Tailwind 클래스로 사용할 수 있게 합니다.
 * 
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  // content: Tailwind가 스캔할 파일들 지정 (HTML, JS 파일에서 사용된 클래스를 찾아냄)
  content: ["./**/*.{html,js}"],  // 현재 폴더의 모든 HTML, JS 파일을 스캔

  // theme: Tailwind의 기본 디자인 시스템을 정의
  theme: {
    // extend: 기본 설정을 유지하면서 추가 설정만 확장
    extend: {

      // colors: 커스텀 색상 정의 (style-guide.md의 색상을 그대로 적용)
      colors: {
        // Primary 색상
        'blue-500': '#4C7BF3',      // 메인 파란색 (버튼, 로고 포인트, 소셜 아이콘)

        // Secondary 색상들
        'blue-200': '#C2D3FF',      // 연한 파란색 (소셜 아이콘 테두리 등)
        'red-400': '#FF5466',       // 빨간색 (에러 메시지, 유효성 검사 실패 시)
        'green-500': '#2ECC71',     // 초록색 (성공 상태 표시용, 현재는 미사용)

        // Neutral 색상들
        'blue-950': '#15202A',      // 진한 남색 (제목 "soon!" 텍스트)
        'gray-400': '#969696',      // 회색 (일반 텍스트, 저작권 문구)
        'gray-100': '#EBEBEB',      // 연한 회색 (배경이나 구분선에 사용 가능)
        'gray-50': '#FBFCFF',       // 거의 흰색 (배경색으로 사용 가능)
      },

      // fontFamily: 커스텀 폰트 패밀리 정의
      fontFamily: {
        // 'libre'라는 이름으로 Libre Franklin 폰트를 등록
        // 사용 예: class="font-libre"
        'libre': ['"Libre Franklin"', 'sans-serif'],
      },

      // fontSize: 커스텀 폰트 크기 정의 (style-guide.md의 Text Preset에 맞춤)
      fontSize: {
        // Preset 1: 48px / 줄 간격 125% / 글자 간격 0px (메인 제목용)
        'preset-1': ['48px', { lineHeight: '1.25', letterSpacing: '0px' }],

        // Preset 2: 20px / 줄 간격 125% / 글자 간격 0px (부제목용)
        'preset-2': ['20px', { lineHeight: '1.25', letterSpacing: '0px' }],

        // Preset 3: 16px / 줄 간격 125% / 글자 간격 0px (버튼, 입력 필드용)
        'preset-3': ['16px', { lineHeight: '1.25', letterSpacing: '0px' }],

        // Preset 4: 12px / 줄 간격 125% / 글자 간격 0px (에러 메시지, 저작권 문구용)
        'preset-4': ['12px', { lineHeight: '1.25', letterSpacing: '0px' }],

        // Preset 5: 10px / 줄 간격 125% / 글자 간격 0px (아주 작은 텍스트용, 현재 미사용)
        'preset-5': ['10px', { lineHeight: '1.25', letterSpacing: '0px' }],
      },

      // spacing: 커스텀 간격 정의 (style-guide.md의 Spacing에 맞춤)
      spacing: {
        // spacing-0: 0px (간격 없음)
        'spacing-0': '0px',

        // spacing-100: 8px (작은 간격, 버튼 내부 여백 등)
        'spacing-100': '8px',

        // spacing-200: 16px (중간 간격, 요소 사이 간격)
        'spacing-200': '16px',

        // spacing-300: 24px (일반 간격, 입력 필드 패딩 등)
        'spacing-300': '24px',

        // spacing-400: 32px (큰 간격, 섹션 사이 간격)
        'spacing-400': '32px',

        // spacing-500: 40px (더 큰 간격, 버튼 패딩 등)
        'spacing-500': '40px',

        // spacing-600: 48px (매우 큰 간격, 주요 섹션 간격)
        'spacing-600': '48px',
      },
    },
  },

  // plugins: Tailwind CSS 플러그인 (현재는 사용하지 않음)
  plugins: [],
}
