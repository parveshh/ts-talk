type Position2D = {
  x: number;
  y: number;
};

type Postion1D = {
  z: number
}
// intersection type
type Position3D = Postion1D & Position2D;

const position1: Position2D = {
  x: 10,
  y: 20,
};

const position2: Position3D = { z:10,x:10,y:10 };
