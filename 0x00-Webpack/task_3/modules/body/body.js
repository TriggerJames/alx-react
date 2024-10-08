import $ from 'jquery';
import _ from 'lodash';
import './body.css';

function updateCounter() {
  let count = 0;
  return function() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };
}

const debouncedUpdateCounter = _.debounce(updateCounter(), 300);

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

$('button').on('click', debouncedUpdateCounter);
