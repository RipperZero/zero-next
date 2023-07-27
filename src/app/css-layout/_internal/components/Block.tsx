import { FC, HTMLAttributes, ReactNode } from "react";

import { Divider } from "antd";

type BlockProps = {
  id?: HTMLAttributes<HTMLDivElement>["id"];
  title?: string;
  preserveText?: string;
  content?: ReactNode;
};

const Block: FC<BlockProps> = ({ id, title, preserveText, content }) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div id={id}>
      {!!title && (
        <>
          <p className="my-4 text-center text-2xl font-bold text-stone-600">
            {title}
          </p>
          <Divider />
        </>
      )}

      {!!preserveText && (
        <>
          <pre className="mb-4 whitespace-pre-wrap break-words bg-gray-100">
            {preserveText}
          </pre>
          <Divider />
        </>
      )}

      {!!content && (
        <>
          {content}
          <Divider />
        </>
      )}
    </div>
  );
  // #endregion render functions end
};

export type { BlockProps };
export { Block };
