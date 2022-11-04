const text = [
  {
    title: "Now we are six", content: `When I was one, I had just begun.<br/> When I was two, I was nearly new. When I was three, I was hardly me. When I was four, I was not much more.<br/> When I was five, I was just alive. But now I am six, I'm as clever as clever.<br/> So I think I'll be six now for ever and ever.`
  },
  {
    title: "Dreams", content:"Hold fast to dreams For if dreams die Life is a broken-winged bird That cannot fly.<br/> Hold fast to dreams For when dreams go Life is a barren field Frozen with snow."
  },
  {
    title: "If I can stop one heart from breaking",
    content: "If I can stop one heart from breaking, I shall not live in vain;<br/> If I can ease one life the aching,<br/> Or cool one pain, Or help one fainting robin Unto his nest again,<br/> I shall not live in vain."
  },
  {
    title: "Hug o' war",
    content: "I will not play at tug o' war.<br/> I'd rather play at hug o' war, Where everyone hugs Instead of tugs,<br/> Where everyone giggles And rolls on the rug, Where everyone kisses, And everyone grins,<br/> And everyone cuddles,<br/> And everyone wins"
  },
  {
    title: "The rose family",
    content: "The rose is a rose, And was always a rose.<br/> But the theory now goes That the apple's a rose,<br/> And the pear is, and so's The plum, I suppose.<br/> The dear only knows What will next prove a rose.<br/> You, of course, are a rose - But were always a rose."
  },
  {
    title: "Longing",
    content: "I am not sorry for my soul That it must go unsatisfied,<br/> For it can live a thousand times,<br/> Eternity is deep and wide.<br/> I am not sorry for my soul,<br/> But oh, my body that must go Back to a little drift of dust Without the joy it longed to know."
  },
  {
    title: "Separation",
    content: "Your absence has gone through me Like thread through a needle.<br/> Everything I do is stitched with its color."
  },
  {
    title: "Music, when soft voices die",
    content: "Music, when soft voices die,<br/> Vibrates in the memory – Odours, when sweet violets sicken,<br/> Live within the sense they quicken.<br/> Rose leaves, when the rose is dead, Are heap’d for the belovèd’s bed;<br/> And so thy thoughts, when thou art gone, Love itself shall slumber on."
  }
];

const form = document.querySelector('.choose-form');
const amount = document.querySelector('#amount');
const result = document.querySelector('.content');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if(isNaN(value) || value < 0 || value > 8) {
    const title = text[random].title;
    const content = text[random].content;
    result.innerHTML = `
                        <p class="result">
                          <strong>${title}</strong>
                          <span>${content}<span>
                        </p>
                      `;
  } else {
    let tempText = text.slice(0, value);

    tempText = tempText.map(function(item){
      return `
              <p class="result">
                <strong>${item.title}</strong>
                <span>${item.content}<span>
              </p>
            `;
    }).join("");

    result.innerHTML = tempText;

    /* 이러면 result라는 태그에 마지막 1개만 들어가게 돼서 틀린 코드이다. */
    // for(let i=0; i<texts.length; i++){
    //   const title = texts[i].title;
    //   const content = texts[i].content;
    //   result.innerHTML = `
    //                         <p class="result">
    //                           <strong>${title}</strong>
    //                           <span>${content}<span>
    //                         </p>
    //                       `;
    // }
  }
});