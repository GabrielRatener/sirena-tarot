
const images = ['tarot-fool.jpeg', 'tarot-magician.jpeg', 'tarot-rose.png']
const interval = 2000

const random = (min, max) =>
  min + Math.floor((max - min) * Math.random())

const setupAnimation = () => {
  const update = () => {
    const image = document.createElement('img')
    const left = random(0, window.screen.width)
    const rotation = random(0, 180)

    if (document.hidden) {
      return
    }

    image.setAttribute('src', `images/${images[i % images.length]}`)
    image.setAttribute('style', `left: ${left}px; transform: rotate(${rotation}deg)`)

    image.onanimationend = () => {
      container.removeChild(image)
    }

    container.appendChild(image)

    i++
  }

  const container = document.querySelector('#racetrack')
  let i = 0;

  update()
  setInterval(update, interval)
}

window.addEventListener('load', () => {
  setupAnimation()
})
