// ナビゲーションメニューのハンバーガー化
const toggleMenu = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('header nav ul');

toggleMenu.addEventListener('click', () => {
navMenu.classList.toggle('open');
});

// タッチイベントの処理
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
button.addEventListener('touchstart', handleTouchStart, false);
button.addEventListener('touchmove', handleTouchMove, false);
button.addEventListener('touchend', handleTouchEnd, false);
});

function handleTouchStart(event) {
  // タッチ開始時の処理
}

function handleTouchMove(event) {
  // タッチ移動時の処理
}

function handleTouchEnd(event) {
  // タッチ終了時の処理
}
