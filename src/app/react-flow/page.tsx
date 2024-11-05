"use client";

import { FC, useCallback, useState } from "react";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  MiniMap,
  Node,
  NodeChange,
  Position,
  ReactFlow as ReactFlowRoot,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

import { Switch } from "antd";

import { produce } from "immer";

import { TextUpdaterNode } from "./_internal/components/client";

type NodeKey = keyof typeof nodeTypes;
const nodeTypes = {
  textUpdater: TextUpdaterNode,
};

const initialNodes: Node<unknown, NodeKey | "output">[] = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "output",
    targetPosition: Position.Top,
    position: { x: 0, y: 200 },
    data: { label: "node 2" },
  },
  {
    id: "node-3",
    type: "output",
    targetPosition: Position.Top,
    position: { x: 200, y: 200 },
    data: { label: "node 3" },
  },
];
const initialEdges: Edge[] = [
  { id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
  { id: "edge-2", source: "node-1", target: "node-3", sourceHandle: "b" },
];

type ReactFlowProps = unknown;

const ReactFlow: FC<ReactFlowProps> = () => {
  // #region hooks start
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(false);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );

  const handleSwitchClick = useCallback(() => {
    setHidden((pre) => {
      const isHidden = !pre;

      setNodes(
        produce((draft) => {
          draft.forEach((draftNode) => {
            draftNode.hidden = isHidden;
          });
        }),
      );

      setEdges(
        produce((draft) => {
          draft.forEach((draftEdge) => {
            draftEdge.hidden = isHidden;
          });
        }),
      );

      return isHidden;
    });
  }, [setEdges, setNodes]);
  // #endregion logic functions end

  // #region render functions start
  return (
    <ReactFlowRoot
      className="bg-sky-400"
      fitView
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Controls />
      <MiniMap />
      <Background variant={BackgroundVariant.Lines} gap={12} size={1} />

      {/* <div className="top=[10px] absolute left-[10px] z-10 select-none">
        <div>
          <label htmlFor="ishidden">
            isHidden
            <input
              id="ishidden"
              // className="react-flow__ishidden"
              type="checkbox"
              checked={hidden}
              onChange={handleIsHiddenChange}
            />
          </label>
        </div>
      </div> */}
      <Switch
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 10,
        }}
        checked={hidden}
        onClick={handleSwitchClick}
        checkedChildren="Show"
        unCheckedChildren="Hidden"
      />
    </ReactFlowRoot>
  );
  // #endregion render functions end
};

export default ReactFlow;
