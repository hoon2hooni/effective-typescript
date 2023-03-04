import _ from "lodash";

interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}

declare const rosters: { [team: string]: BasketballPlayer[] };
{
  const csvData = "...";

  const rawRows = csvData.split("\n");
  const headers = rawRows[0].split(",");
  const rows = rawRows.slice(1).map((rowStr) => {
    const row = {};
    rowStr.split(",").forEach((val, j) => {
      row[headers[j]] = val;
    });
    return row;
  });

  {
    const rows = rawRows
      .slice(1)
      .map((rowStr) =>
        rowStr
          .split(",")
          .reduce(
            (row, val, i) => ((row[headers[i]] = val), row),
            {} as { [key: string]: string }
          )
      );
  }
  {
    const rows = rawRows
      .slice(1)
      .map((rowStr) => _.zipObject(headers, rowStr.split(",")));
    //Dictionary<string> is the same as {[key: string]: string} or Record<string, string>
  }

  {
    let allPlayers = [];
    // ~~~~~~~~~~ Variable 'allPlayers' implicitly has type 'any[]'
    // in some locations where its type cannot be determined
    for (const players of Object.values(rosters)) {
      allPlayers = allPlayers.concat(players);
      // ~~~~~~~~~~ Variable 'allPlayers' implicitly has an 'any[]' type
    }
  }
  {
    let allPlayers: BasketballPlayer[] = [];
    for (const players of Object.values(rosters)) {
      allPlayers = allPlayers.concat(players);
    }
  }
  {
    const allPlayers = Object.values(rosters).flat();
    //flat 메서드는 다차원 배 열을 평탄화해 (flatten) 줍니다. 타입 시그니처는 T[] [] => T[ ] 같은 형태
  }
  {
    const allPlayers = Object.values(rosters).flat();
    const teamToPlayers: { [team: string]: BasketballPlayer[] } = {};
    for (const player of allPlayers) {
      const { team } = player;
      teamToPlayers[team] = teamToPlayers[team] || [];
      teamToPlayers[team].push(player);
    }

    for (const players of Object.values(teamToPlayers)) {
      players.sort((a, b) => b.salary - a.salary);
    }

    const bestPaid = Object.values(teamToPlayers).map((players) => players[0]);
    bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary);
    console.log(bestPaid);
    const bestPaidByLodash = _(allPlayers)
      .groupBy((player) => player.team)
      .mapValues((players) => _.maxBy(players, (p) => p.salary)!)
      .values()
      .sortBy((p) => -p.salary)
      .value(); // Type is BasketballPlayer[]
  }
  //_.a(_.b(_.c(v)))
  //_(v).a().b().c().value()
  
}
