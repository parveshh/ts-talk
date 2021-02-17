type Position2D = {
  x: number;
  y: number;
};

// intersection type
type Position3D = Position2D & { z: number };

const position1: Position2D = {
  x: 10,
  y: 20,
};

const position2: Position3D = { z:10,x:10,y:10 };
