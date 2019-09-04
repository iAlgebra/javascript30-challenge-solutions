window.addEventListener('keydown', function(e) {
  const audio = document.querySelectorAll('[data-key=' + e.key + ']')[1];
  console.log(audio);
});
