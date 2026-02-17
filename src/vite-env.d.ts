/// <reference types="vite/client" />

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
