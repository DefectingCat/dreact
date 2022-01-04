import { createElement, createTextElement, render } from '../index';

// let DreactElementExample = {
//   type: 'div',
//   props: {
//     id: 'foo',
//     children: [
//       {
//         type: 'p',
//         props: {
//           id: 'my-p',
//           children: ['This is a test.'],
//         },
//       },
//       {
//         type: 'div',
//         props: {
//           children: ['Hello'],
//         },
//       },
//     ],
//   },
// };

const testElement = createElement(
  'div',
  { id: 'foo' },
  createElement('p', { id: 'my-p' }, createTextElement('This is a test.')),
  createElement('div', null, createTextElement('hello'))
);

render(testElement, document.querySelector('#root'));
