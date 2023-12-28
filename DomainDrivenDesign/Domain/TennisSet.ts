import { TennisMatchProps } from "../Persistence/TennisMatch.interface";
import { TennisSet as TennisSetInterface } from "../Persistence/TennisSet.interface";

export class TennisSet {
  private tennisMatch: TennisMatchProps;
  private setPoints: TennisSetInterface[] = [];
  private winner: TennisSetInterface = { PlayerName: "", PlayerScore: 0 };
  private SET_POINTS: Number = 6;

  constructor(player1: string, player2: string) {
    this.setPoints.push({ PlayerName: player1, PlayerScore: 0 });
    this.setPoints.push({ PlayerName: player2, PlayerScore: 0 });
    this.tennisMatch = {
      id: 1,
      player1: player1,
      player2: player2,
      status: "pending",
      set: this.setPoints,
      winner: "sin definir",
    };
  }

  public getStatusMatch() {
    return this.tennisMatch;
  }

  public AddPoint(playerAddPoint: string) {
    const playerIndex = this.FindPlayer(playerAddPoint);
    this.setPoints[playerIndex].PlayerScore += 1;
    this.ValidPoint(playerIndex);
  }
  public getPlayers() {
    return this.setPoints;
  }
  private FindPlayer(playerAddPoint: string): number {
    const playerIndex = this.setPoints.findIndex(
      (player) => player.PlayerName == playerAddPoint
    );
    if (playerIndex === -1) {
      throw new Error("Jugador no existe");
    }
    return playerIndex;
  }
  private ValidPoint(playerIndex: number): string | void {
    const player = this.setPoints[playerIndex];
    if (player.PlayerScore === this.SET_POINTS) {
      this.setWinner(player);
      this.tennisMatch.status = "finished";
      this.tennisMatch.winner = this.winner;
      throw new Error(`Jugador ${player.PlayerName} ha ganado el set point`);
    }
  }

  private setWinMatch() {}

  private setWinner(winner: TennisSetInterface) {
    this.winner.PlayerName = winner.PlayerName;
    this.winner.PlayerScore = winner.PlayerScore;
  }
}
