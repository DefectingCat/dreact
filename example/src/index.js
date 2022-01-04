import { createElement, createTextElement, render } from '../../index';

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

// const testElement1 = createElement(
//   'div',
//   null,
//   createElement('h1', { id: 'hello' })
// );

/** @jsx createElement */
const testElement = (
  <div>
    <h1 id="hello">Hello world!</h1>
    <p>This is a test.</p>
  </div>
);

render(testElement, document.querySelector('#root'));
