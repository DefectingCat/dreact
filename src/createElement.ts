interface DreactElement {
  type: string;
  props: {
    children: DreactElement[] | TextElement[];
    [key: string]: string | DreactElement[] | TextElement[];
  };
}

function createElement(
  type: string,
  props: { [key: string]: string },
  ...children: DreactElement[] | string[]
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

interface TextElement {
  type: string;
  props: {
    nodeValue: string;
    children: [];
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
