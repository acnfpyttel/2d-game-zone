export interface Bot {
  fillBoard(): Target[];
  shoot(opponentBoard: CellStatus[][]): Cell;
}

export interface Game {
  board1: Board;
  board2: Board;
  bot1: Bot;
  bot2: Bot;
  nextPlayer: Bot;
}

export interface Board {
  fields: CellStatus[][];
  targets: Target[];
}

export interface Target {
  type: 'ship' | 'aircraft' | 'tank';
  cells: Cell[];
}

export interface Cell {
  row: number;
  col: number;
}

export enum CellStatus {
  EMPTY = '0',
  FILLED = '1',
  HIT = '2',
  MISSED = '3',
  COVERED = '4',
}
