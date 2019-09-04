window.addEventListener('keydown', function(e) {
  const audio = document.querySelector('[data-key=' + e.key + ']');
  console.log(audio);
});
