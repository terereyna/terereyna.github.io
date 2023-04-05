let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#f6a4b5;">Soy programadora Frontend y me gustaría compartir mis experiencias con ustedes.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
