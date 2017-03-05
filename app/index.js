import {join as strJoin} from 'lodash/fp';

function component () {
    var element = document.createElement('div');
    element.innerHTML = strJoin(' ')(['Good', 'Morning', 'webpack']);
    return element;
}

document.body.appendChild(component());
