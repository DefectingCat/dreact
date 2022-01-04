type DreactNode = (DreactElement | TextElement)[];

export interface DreactElement {
  type: 'div';
  props: {
    children: DreactNode;
    [key: string]: string | DreactNode;
  };
}

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
  ...children: DreactNode
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
    [key: string]: string | DreactNode;
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
