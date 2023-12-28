import { TennisSet } from "./Domain/TennisSet";

const tennis = new TennisSet("juanito", "pedro");
try {
  tennis.AddPoint("pedro");
  tennis.AddPoint("pedro");
  tennis.AddPoint("pedro");
  tennis.AddPoint("pedro");
  tennis.AddPoint("juanito");
  tennis.AddPoint("juanito");
  console.log(tennis.getStatusMatch());
  tennis.AddPoint("juanito");
  tennis.AddPoint("pedro");
  tennis.AddPoint("pedro");
} catch (error: any) {
  console.log(error.message);
} finally {
  console.log(tennis.getStatusMatch());
}
