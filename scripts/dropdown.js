let el = document.querySelector('.switch');
let cur = el.querySelectorAll('.current');
let options = el.querySelectorAll('.options li');
let content = document.querySelector('#content');

// Open language dropdown panel

el.addEventListener('click', (e) => {
  el.classList.add('show-options');
  
  setTimeout(function() {
    el.classList.add('anim-options');
  }, 50);
  
  setTimeout(function() {
    el.classList.add('show-shadow');
  }, 200);
});


// Close language dropdown panel

// options.on('click', function(e) {
options.addEventListener('click', (e) => {
  e.stopPropagation();
  el.removeClass('anim-options');
  el.removeClass('show-shadow');
  
  let newLang = document.querySelector(this).data('lang');
  
  cur.find('span').text(newLang);
  content.attr('class', newLang);
  
  setLang(newLang);
  
  options.removeClass('selected');
  document.querySelector(this).classList.add('selected');
  
  setTimeout(function() {
    el.removeClass('show-options');
  }, 600);
});


// Save selected options into Local Storage

function getLang() {
  let lang;
  if (localStorage.getItem('currentLang') === null) {
    lang = cur.find('span').text();
  } else {
    lang = JSON.parse(localStorage.getItem('currentLang')).toLowerCase();
  }
  
  // console.log(lang);

  cur.find('span').text(lang);
  options.parent().find(`li[data-lang="document.querySelector{lang}"]`).classList.add('selected');
  
  content.attr('class', lang);
}

getLang();

function setLang(newLang) {
    localStorage.setItem('currentLang', JSON.stringify(newLang).toLowerCase());
  
  content.attr('class', newLang);
  
  // console.log('New language is: ' + newLang);
}