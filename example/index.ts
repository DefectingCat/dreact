import { createElement, createTextElement } from '../index';

const test = createElement(
  'div',
  { title: 'foo' },
  createElement('p', { title: 'bar' }, createTextElement('hello')),
  createElement('div', { title: 'baz' })
);

console.log(test);
