const audio = document.getElementById('audio');
const text = document.getElementById('text');
//const textContent = text.textContent;
const textContent = text.innerHTML;
let progress = 0;

audio.addEventListener('timeupdate', () => {
    
  const currentTime = audio.currentTime;

  const duration = audio.duration;
  if (currentTime-2 > 0)  {
    progress = Math.floor((currentTime / duration) * textContent.length);
  }
    
  else{
    progress = 0
  }

    

  const highlightedText = `<span class="active">${textContent.substring(0, progress)}</span>${textContent.substring(progress)}`;
  text.innerHTML = highlightedText;
});
