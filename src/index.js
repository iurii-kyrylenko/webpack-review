import _ from 'lodash'

function component () {
  const el = document.createElement('div')
  el.innerHTML = _.join(['webpack', 'review'], ' ')
  return el
}

document.body.appendChild(component())
