import _ from 'lodash'
import './style.css'
import icon from './like.png'
import data from './data.xml'

function component () {
  const el = document.createElement('div')
  el.innerHTML = _.join(['webpack', 'review'], ' ')
  el.classList.add('hello')

  const img = new Image()
  img.src = icon
  el.appendChild(img)
  return el
}

console.log(data)

document.body.appendChild(component())
