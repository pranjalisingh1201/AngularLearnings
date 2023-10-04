import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach  = new GolfCoach();

let Coaches: Coach[] = [];

Coaches.push(myCricketCoach);
Coaches.push(myGolfCoach);

for(let tempCoach of Coaches)
{
    console.log(tempCoach.getDailyWorkout());
}