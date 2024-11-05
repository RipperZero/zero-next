import { FC, HTMLAttributes, ReactNode } from "react";

import { Divider } from "antd";
import { Highlight } from "prism-react-renderer";

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
          <div className="flex items-center justify-center">
            <Highlight code={preserveText} language="tsx">
              {({ style, tokens, getLineProps, getTokenProps }) => {
                return (
                  <pre
                    className="w-4/5 whitespace-pre-wrap break-words"
                    style={style}
                  >
                    {tokens.map((line, tokenIndex) => (
                      <div key={tokenIndex} {...getLineProps({ line })}>
                        {line.map((token, lineIndex) => {
                          return (
                            <span
                              key={lineIndex}
                              {...getTokenProps({ token })}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </pre>
                );
              }}
            </Highlight>
          </div>
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
