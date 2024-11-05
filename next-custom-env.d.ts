// @see https://ts.xcatliu.com/basics/declaration-files.html#declare-global
declare global {
  type AsyncFC<T = {}> = (props: T) => Promise<JSX.Element>;
}

export {};
