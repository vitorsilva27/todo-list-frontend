import React from "react";
import * as S from "./styles";

import soccer from "../../assets/soccer.png";

function TaskCard() {
  return (
    <S.Container>
      <S.TopCard>
        <img src={soccer} alt="Icone da Tarefa" />
        <h3>Titulo da Tarefa</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>17/04/2024</strong>
        <span>00:30</span>
      </S.BottomCard>
    </S.Container>
  );
}

export default TaskCard;
