RPS_Game(player_!, player_2) {
    if (player_1 == 'rock') {
        if (player_2 == 'rock') {
            return 'draw';
        } else if (player_2 == 'paper') {
            return 'player 2';
        } else {
            return 'player 1';
        }
    } else if (player_1 == 'paper') {
        if (player_2 == 'rock') {
            return 'player 1';
        } else if (player_2 == 'paper') {
            return 'draw';
        } else {
            return 'player 2';
        }
    } else {
        if (player_2 == 'rock') {
            return 'player 2';
        } else if (player_2 == 'paper') {
            return 'player 1';
        } else {
            return 'draw';
        }
    }
}

 //SHORTER WAY
RPS_GameModularArithmetic (player_1, player_2) {
      const lookUp = ['rock', 'paper', 'scissors'];
      result = (3 + (lookUp.indexOf(player_1) - lookUp.indexOf(player_2))) % 3;
      if (!result) {
      return 'draw';
    }
      return 'player ' + result;
}