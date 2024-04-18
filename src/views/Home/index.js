import React, { useState } from "react";
import * as S from "./styles";

import Header from "../../components/Header";
import FilterCard from "../../components/FilterCard";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

function Home() {
  const [actived, SetActived] = useState("");
  return (
    <S.Container>
      <Header />

      <S.FilterArea>
        <button type="button" onClick={() => SetActived("all")}>
          <FilterCard title="Todos" actived={actived === "all"} />
        </button>

        <button type="button" onClick={() => SetActived("today")}>
          <FilterCard title="Hoje" actived={actived === "today"} />
        </button>

        <button type="button" onClick={() => SetActived("week")}>
          <FilterCard title="Semana" actived={actived === "week"} />
        </button>

        <button type="button" onClick={() => SetActived("month")}>
          <FilterCard title="Mês" actived={actived === "month"} />
        </button>

        <button type="button" onClick={() => SetActived("year")}>
          <FilterCard title="Ano" actived={actived === "year"} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h1>Tarefas</h1>
      </S.Title>

      <S.Content>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </S.Content>

      <Footer />
    </S.Container>
  );
}

export default Home;
