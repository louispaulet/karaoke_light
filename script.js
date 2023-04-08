const audio = document.getElementById('audio');
const text = document.getElementById('text');
const textContent = text.textContent;
let progress = 0;

audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  progress = Math.floor((currentTime / duration) * textContent.length);

  const highlightedText = `<span class="active">${textContent.substring(0, progress)}</span>${textContent.substring(progress)}`;
  text.innerHTML = highlightedText;
});
