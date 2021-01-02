function bindKeysEvent(val)
{
  const audio = document.querySelector(`audio[data-key='${val}']`);
  if(!audio) return;
  const key = document.querySelector(`[data-key='${val}']`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
function bindTransionEnd()
{
    const keys = document.querySelectorAll(".key");
    for(const key of keys)
    {
        stop(key);
    }
     function stop(key){
        key.addEventListener("transitionend", (event) => {
            
            event.target.classList.remove("playing");
        });
    }
};
window.addEventListener("keyup",(event)=>{
    bindKeysEvent(event.keyCode);
    bindTransionEnd();
});
function touching(val)
{
    bindKeysEvent(val);
    bindTransionEnd();
}
window.addEventListener("load", () => {
    bindKeysEvent();
    bindTransionEnd();
});