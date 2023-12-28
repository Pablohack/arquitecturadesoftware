import { TennisSet } from "./TennisSet.interface";

export interface TennisMatchProps {
  id: number;
  player1: string;
  player2: string;
  winner: TennisSet | string;
  status: string;
  set: TennisSet[];
}
