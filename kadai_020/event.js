const htmlText = document.getElementById ('text');
const changeBtn = document.getElementById ('btn');

changeBtn.addEventListener ('click', () => {
  htmlText.textContent = 'ボタンをクリックしました';
});