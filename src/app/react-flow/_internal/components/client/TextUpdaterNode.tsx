"use client";

import { ChangeEvent, CSSProperties, FC, useCallback } from "react";
import { Handle, NodeProps, Position } from "reactflow";

// .text-updater-node {
//     height: 50px;
//     border: 1px solid #eee;
//     padding: 5px;
//     border-radius: 5px;
//     background: white;
//   }

//   .text-updater-node label {
//     display: block;
//     color: #777;
//     font-size: 12px;
//   }

const handleStyle: CSSProperties = {
  left: 10,
};

type TextUpdaterNodeProps = NodeProps<unknown>;

const TextUpdaterNode: FC<TextUpdaterNodeProps> = ({
  isConnectable = false,
}) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);
  // #endregion logic functions end

  // #region render functions start
  return (
    <div
      // className="text-updater-node"
      className="h-[50px] rounded-[5px] border border-solid border-[#eee] bg-white p-[5px]"
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label className="block text-[12px] text-[#777]" htmlFor="text">
          Text:
        </label>
        <input className="nodrag" id="text" name="text" onChange={onChange} />
      </div>
      <Handle
        type="source"
        id="a"
        position={Position.Bottom}
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        id="b"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
  // #endregion render functions end
};

export { TextUpdaterNode };
