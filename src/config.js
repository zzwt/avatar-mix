import { initialColors } from './constants';

export const avatarConfig = {
  faces: 8,
  smiles: 8,
  accessories: 8,
  eyes: 8,
  hair: [
    { x: 70, y: 70 },
    { x: 70, y: 70 },
    { x: 70, y: 70 },
    { x: 90, y: 80 },
    { x: 80, y: 50 },
    { x: 80, y: 70 },
    { x: 100, y: 30 },
    { x: 70, y: 50 },
    { x: 100, y: 40 },
    { x: 90, y: 60 },
    { x: 90, y: 60 },
    { x: 90, y: 70 },
    { x: 100, y: 100 },
    { x: 100, y: 30 },
  ],
  background: {
    enabled: true,
    // color: initialColors[Math.floor(Math.random() * initialColors.length)],
  },
};
