import { TennisSet as TennisSetInterface } from "../Persistence/TennisSet.interface";

export class TennisSet {
  private setPoints:TennisSetInterface[] =[]
  private SET_POINTS:Number = 6;

  constructor(player1:string,player2:string){
    this.setPoints.push({PlayerName:player1,PlayerScore:0})
    this.setPoints.push({PlayerName:player2,PlayerScore:0})
  }

  public AddPoint(playerAddPoint:String){
    const findPlayer = this.setPoints.findIndex((player)=> player.PlayerName == playerAddPoint);
    console.log(findPlayer)
    this.setPoints[findPlayer].PlayerScore += 1
    // if(-1){
    //   throw new Error('Jugador no existe');
    // }
    return this.setPoints[findPlayer]
  }

  public getPlayers(){
    return this.setPoints;
  }
}