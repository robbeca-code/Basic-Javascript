// 업데이트 한 친구가 몇 명인지 개수 가져오기
const updateList = document.querySelector('.update-info');
const updateCount = document.querySelector('.update-count');
updateCount.textContent = updateList.childElementCount;

// 친구 몇 명인지 개수 가져오기
const friendList = document.querySelector('.friends-list');
const friendCount = document.querySelector('.friends-count');
friendCount.textContent = friendList.childElementCount;

// Profile Show Button 클릭했을 때 style 넣기
const profileShowButton = document.querySelectorAll('.profile-show');

profileShowButton.forEach((btn)=>{
  btn.addEventListener('click', () => {
    const parent = btn.parentNode.parentNode;

    if(parent.classList.contains('multy-profile')) {
      btn.classList.toggle('profile-hidden');
      const multyInfo = document.querySelector('.multy-info');
      multyInfo.classList.toggle('info-hidden');
    }
    if(parent.classList.contains('update-profile')) {
      btn.classList.toggle('profile-hidden');
      const updateInfo = document.querySelector('.update-info');
      updateInfo.classList.toggle('info-hidden');
    }
    if(parent.classList.contains('channel')) {
      btn.classList.toggle('profile-hidden');
    }
    if(parent.classList.contains('friends')) {
      btn.classList.toggle('profile-hidden');
      const friendsList = document.querySelector('.friends-list');
      friendsList.classList.toggle('info-hidden');
    }
  });
});