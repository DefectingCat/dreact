interface DreactElement {
  type: string;
  props: {
    children: DreactElement[];
    [key: string]: string | DreactElement[];
  };
}

function createElement(
  type: string,
  props: DreactElement['props'],
  ...children: DreactElement[]
): DreactElement {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}
