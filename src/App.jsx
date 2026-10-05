import { useEffect, useState } from "react";
import Header from "./components/Header";
import WorkoutCard from "./components/WorkoutCard";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";

const TREINOS_INICIAIS = [
  {
    id: 1,
    titulo: "Treino de Abdômen",
    descricao:
      "Um treino focado no fortalecimento do core e na resistência abdominal.",
    categoria: "Core",
    duracao: "25 min",
    dificuldade: "Médio",
    concluido: false,
  },
  {
    id: 2,
    titulo: "Pernas e Glúteos",
    descricao:
      "Exercícios para desenvolver força e resistência nos membros inferiores.",
    categoria: "Inferiores",
    duracao: "40 min",
    dificuldade: "Difícil",
    concluido: false,
  },
  {
    id: 3,
    titulo: "Alongamento Relax",
    descricao:
      "Sequência leve para melhorar a mobilidade e relaxar o corpo.",
    categoria: "Mobilidade",
    duracao: "15 min",
    dificuldade: "Fácil",
    concluido: true,
  },
  {
    id: 4,
    titulo: "Cardio Express",
    descricao:
      "Treino rápido para aumentar a frequência cardíaca e gastar energia.",
    categoria: "Cardio",
    duracao: "30 min",
    dificuldade: "Médio",
    concluido: false,
  },
  {
    id: 5,
    titulo: "Braços e Ombros",
    descricao:
      "Treino para fortalecer bíceps, tríceps e a região dos ombros.",
    categoria: "Superiores",
    duracao: "35 min",
    dificuldade: "Difícil",
    concluido: false,
  },
  {
    id: 6,
    titulo: "Yoga Matinal",
    descricao:
      "Movimentos suaves para começar o dia com mais disposição e equilíbrio.",
    categoria: "Bem-estar",
    duracao: "20 min",
    dificuldade: "Fácil",
    concluido: false,
  },
];

const FILTROS = [
  {
    valor: "todos",
    rotulo: "Todos",
  },
  {
    valor: "pendentes",
    rotulo: "Pendentes",
  },
  {
    valor: "concluidos",
    rotulo: "Concluídos",
  },
];

function App() {
  const [treinos, setTreinos] = useState(() => {
    const salvos = localStorage.getItem("fitflow-treinos");

    return salvos ? JSON.parse(salvos) : TREINOS_INICIAIS;
  });

  const [filtro, setFiltro] = useState("todos");

  function adicionarTreino(novoTreino) {
    setTreinos((atual) => [
      ...atual,
      {
        ...novoTreino,
        id: Date.now(),
        concluido: false,
      },
    ]);
  }

  function alternarConcluido(id) {
    setTreinos((atual) =>
      atual.map((treino) =>
        treino.id === id
          ? { ...treino, concluido: !treino.concluido }
          : treino
      )
    );
  }

  function removerTreino(id) {
    setTreinos((atual) => atual.filter((treino) => treino.id !== id));
  }

  const treinosFiltrados = treinos.filter((treino) => {
    if (filtro === "pendentes") {
      return !treino.concluido;
    }

    if (filtro === "concluidos") {
      return treino.concluido;
    }

    return true;
  });

  useEffect(() => {
    localStorage.setItem("fitflow-treinos", JSON.stringify(treinos));
  }, [treinos]);

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Meus treinos
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            Encontre seu próximo desafio 💪
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Escolha um treino e mantenha uma rotina para alcançar seus objetivos.
          </p>
        </section>

        <TaskForm onAdicionar={adicionarTreino} />

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-700">
            Meus treinos ({treinosFiltrados.length})
          </h2>

          <div className="flex gap-2">
            {FILTROS.map((opcao) => (
              <button
                key={opcao.valor}
                onClick={() => setFiltro(opcao.valor)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filtro === opcao.valor
                    ? "bg-violet-700 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-200"
                }`}
              >
                {opcao.rotulo}
              </button>
            ))}
          </div>
        </div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treinosFiltrados.map((treino) => (
            <WorkoutCard
              key={treino.id}
              titulo={treino.titulo}
              descricao={treino.descricao}
              categoria={treino.categoria}
              duracao={treino.duracao}
              dificuldade={treino.dificuldade}
              concluido={treino.concluido}
              onToggle={() => alternarConcluido(treino.id)}
              onRemover={() => removerTreino(treino.id)}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;