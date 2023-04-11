import { useContext, useEffect, useState } from 'react';
import {
  EdgesContext,
  SelectedNodeContext,
  Edge,
} from '../../../pages/HomePage';
import Connection from './Connection';
import AddEdge from './AddEdge';
import { Typography } from '@mui/material';

const EdgeList = () => {
  const { edges }: any = useContext(EdgesContext);
  const { selectedNode }: any = useContext(SelectedNodeContext);

  const [currentEdges, setCurrentEdges]: any = useState([]);
  useEffect(() => {
    const connections = edges.filter((edge: Edge) => {
      return edge.source === selectedNode;
    });
    setCurrentEdges(connections);
  }, [selectedNode, edges]);

  return (
    <div>
      <Typography variant="h6">Connected Nodes</Typography>
      <div className="connected-edge-list">
        {currentEdges.map(({ target }: any) => {
          return (
            <Connection key={`${selectedNode}->${target}`} edgeName={target} />
          );
        })}
      </div>
      <AddEdge />
    </div>
  );
};

export default EdgeList;
