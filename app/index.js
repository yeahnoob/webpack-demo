import {join as strJoin} from 'lodash/fp'
import {learning_react_ch2} from './learning_react'

function component() {
    var element = document.createElement('div')
    element.innerHTML = strJoin(' ')(['Good', 'Morning!', ' & Let\'s use webpack'])
    learning_react_ch2()
    return element
}

document.body.appendChild(component())
