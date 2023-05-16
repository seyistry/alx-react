import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;
$('<button>Click here to get started</button>').appendTo('body');
$("<p id='count'></p>").appendTo('body');

$('button').on('click', _.debounce(updateCounter, 500));

function updateCounter () {
  $('#count').html((count += 1));
}
