# 버튼을 누르면 필터가 적용되는 프로젝트

### * JS
1. 메뉴 내용을 menu라는 object로 저장한 후, 부모 태그를 가져와서 그 안에 menu 내용이 들어갈 태그를 넣습니다.
```js
function displayMenuItems(menu) {
  let displayMenu = menu.map(function(item){

  // item에는 menu의 값이 1개씩 들어갑
  //displayMenu에 return된 값을 배열로 저장하게 됩니다.
  return `<article class="menu-container">
    <img src=${item.img} class="menu-img" alt=${item.title}/>
    <div class="menu-info">
    <header class="menu-header">
    <h4 class="menu-title">${item.title}</h4>
    <h4 class="menu-price">${item.price}</h4>
    </header>
    <p class="menu-description">
    ${item.desc}
    </p>
    </div>
    </article>`;
  });
  
  // innerHTMl이란 함수를 사용할거라서 displayMenu를 ""로 모든 내용을 묶습니다.
  displayMenu = displayMenu.join("");
  
  //sectionContainer이 부모 태그입니다. 이 안에 displayMenu에 있는 아이템을 넣어줍니다.
  sectionContainer.innerHTMl = displayMenu;
}
```
<br/>

2. filter button을 눌렀을 때 해당하는 필터를 적용시켜 브라우저로 보여주었습니다.
* 카테고리 변수를 생성합니다.
```js
// values에 초기값은 all가 됩니다. 그리고 item에는 menu의 값이 들어갑니다.
//item.category는 menu.category와 동일합니다. 그래서 values 안에 item.category의 값이 없으면 넣어주는 것입니다.
const categories = menu.reduce(
  function (values, item) {
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['all']
);
```
<br/>

* 카테고리 버튼의 부모 태그에 자식 태그를 넣어줍니다.
```js
//dataset 객체를 활용해서 필터 적용을 할 수 있게 합니다.
//각 버튼마다 다른 dataset 값이 적용됩니다.
const categoryBtns = categories.map(function(category){
  return `<button type="button" class="filter-btn" data-id=${category}>
    ${category}</button>`;
}).join("");

//btnContainer이 필터 버튼의 부모 태그입니다.
btnContainer.innerHTML = categoryBtns;
```
<br/>

* 카테고리 버튼 중 1개를 클릭했을 때 필터를 적용해서 브라우저에 보여줍니다.
```js
// filterBtns에 카테고리 버튼을 다 넣습니다.
const filterBtns = btnContainer.querySelectorAll('.filter-btn');

// 현재 선택한 버튼의 dataset의 값이 menu.category의 값과 같다면, menuCategory로 return 합니다.
// 만약 all 버튼을 클릭했다면 전체 메뉴를 보여줍니다.
filterBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === category) {
        return menuItem;
      }
    });
    if(category === 'all') {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});
```
