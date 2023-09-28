import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Link } from 'react-router-dom';
export const ExampleTree = () => (
  <Tree label={<h1><Link to='/editRole'>Super Admin</Link></h1>}>
    <TreeNode label={<h2><Link to='/editRole'>City Admin</Link></h2>}>
    
      <TreeNode label={<h3><Link to='/editRole'>Billing Admin</Link></h3>} />
      <TreeNode label={<h3><Link to='/editRole'>Disptach Admin</Link></h3>} />
      <TreeNode label={<h3><Link to='/editRole'>Data Checker</Link></h3>} />
      </TreeNode>
  </Tree>
);