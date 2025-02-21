// document class
function setDocumentClass() {
  const classList = document.documentElement.classList
  classList.add('isInitLoading', 'isLoading')
  if (window.matchMedia('(hover: hover)').matches) classList.add('hover')
}

function setViewVh() {
  const update = () => {
    const height = window.innerHeight
    document.documentElement.style.setProperty('--vh100', `${height}px`)
  }
  window.addEventListener('resize', update)
  update()
}

setDocumentClass()
setViewVh()
