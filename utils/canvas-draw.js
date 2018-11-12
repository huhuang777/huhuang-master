/**
 * @file 背景描绘 服务 / Commonjs module
 * @module server/canvas
 */

import CanvasNest from 'canvas-nest.js';

const config = {
  color: '255,0,0',
  count: 88,
};

const server = () => {
  // 在 element 地方使用 config 渲染效果
  const element = document.body;
  const cn = new CanvasNest(element, config);
}

export default server

