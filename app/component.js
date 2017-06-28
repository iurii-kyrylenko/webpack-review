import _ from 'lodash'
import { hello } from './style.css'
import icon from './like.png'

function Component () {
  const el = document.createElement('div')
  el.innerHTML = _.join(['webpack', 'review'], ' ')
  el.classList.add(hello)

  const img = new Image()
  img.src = icon
  el.appendChild(img)
  return el
}

export default Component
