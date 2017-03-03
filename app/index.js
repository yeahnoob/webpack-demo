import * as myLodash from 'lodash/fp';

function component () {
    var element = document.createElement('div');
    element.innerHTML = myLodash.join(' ')(['Goodya', 'Morn', 'webpack']);
    return element;
}

document.body.appendChild(component());