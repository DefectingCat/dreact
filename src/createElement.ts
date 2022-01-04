export interface DreactElement {
  type: 'div';
  props: {
    children: (DreactElement | TextElement)[];
    [key: string]: string | (DreactElement | TextElement)[];
  };
}

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

/**
 * Create a Dreact element.
 *
 * @param type Element type
 * @param props
 * @param children
 * @returns
 */
function createElement(
  type: 'div',
  props: { [key: string]: string } | null,
  ...children: (DreactElement | TextElement)[]
): DreactElement {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

export interface TextElement {
  type: 'TEXT_ELEMENT';
  props: {
    nodeValue: string;
    children: [];
    [key: string]: string | (DreactElement | TextElement)[];
  };
}

function createTextElement(text: string): TextElement {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

export { createElement, createTextElement };
