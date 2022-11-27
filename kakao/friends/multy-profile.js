//사진 파일 불러오기 버튼
const uploadBtn = document.querySelector('.upload-button');

uploadBtn.addEventListener('click', () => {
  const inputFile = document.querySelector('.upload-img');
  inputFile.click();
});