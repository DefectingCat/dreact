type DreactNode = DreactElement | TextElement;

export interface DreactElement {
  type: string;
  props: {
    children: DreactNode[];
    [key: string]: string | DreactNode[];
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
  type: string,
  props: { [key: string]: string } | null,
  ...children: DreactNode[]
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
    [key: string]: string | DreactNode[];
  };
}

/**
 * Create a Dreact text element.
 * @param text elment text content.
 * @returns
 */
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
