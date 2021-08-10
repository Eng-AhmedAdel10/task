const navbar = document.querySelector('.navbar')

window.onscroll = () => {
  if (document.documentElement.scrollTop >= 50) {
    navbar.classList.add('background')
  } else {
    navbar.classList.remove('background')
  }
}
