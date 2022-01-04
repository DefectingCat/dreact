import type { DreactElement, TextElement } from './createElement';

function render(
  element: DreactElement | TextElement,
  container: Element | Text
) {
  const dom =
    // The DreactElement type is string, TextElement type TEXT_ELEMENT is string too. so need as string.
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode(element.props.nodeValue as string)
      : document.createElement(element.type);

  const isProperty = (key: string) => key !== 'children';
  if ('setAttribute' in dom) {
    Object.keys(element.props)
      .filter(isProperty)
      .forEach((prop) => dom.setAttribute(prop, element.props[prop] as string));
  }

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}

export default render;
