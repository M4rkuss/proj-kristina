function changeLang () {
  document.getElementById('lang-ua').onclick = function () {
    document.getElementById('lang-ru').classList.remove('active-lang')
    document.getElementById('lang-ua').classList.add('active-lang')
  }
  document.getElementById('lang-ru').onclick = function () {
    document.getElementById('lang-ua').classList.remove('active-lang')
    document.getElementById('lang-ru').classList.add('active-lang')
  }
}

changeLang()