import Header from "./components/Header";
import WorkoutCard from "./components/WorkoutCard";
import Footer from "./components/Footer";

function App() {
  const treinos = [
    {
      id: 1,
      titulo: "Treino de Abdômen",
      descricao:
        "Um treino focado no fortalecimento do core e na resistência abdominal.",
      categoria: "Core",
      duracao: "25 min",
      dificuldade: "Médio",
    },
    {
      id: 2,
      titulo: "Pernas e Glúteos",
      descricao:
        "Exercícios para desenvolver força e resistência nos membros inferiores.",
      categoria: "Inferiores",
      duracao: "40 min",
      dificuldade: "Difícil",
    },
    {
      id: 3,
      titulo: "Alongamento Relax",
      descricao:
        "Sequência leve para melhorar a mobilidade e relaxar o corpo.",
      categoria: "Mobilidade",
      duracao: "15 min",
      dificuldade: "Fácil",
    },
    {
      id: 4,
      titulo: "Cardio Express",
      descricao:
        "Treino rápido para aumentar a frequência cardíaca e gastar energia.",
      categoria: "Cardio",
      duracao: "30 min",
      dificuldade: "Médio",
    },
    {
      id: 5,
      titulo: "Braços e Ombros",
      descricao:
        "Treino para fortalecer bíceps, tríceps e a região dos ombros.",
      categoria: "Superiores",
      duracao: "35 min",
      dificuldade: "Difícil",
    },
    {
      id: 6,
      titulo: "Yoga Matinal",
      descricao:
        "Movimentos suaves para começar o dia com mais disposição e equilíbrio.",
      categoria: "Bem-estar",
      duracao: "20 min",
      dificuldade: "Fácil",
    },
  ];

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

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treinos.map((treino) => (
            <WorkoutCard
              key={treino.id}
              titulo={treino.titulo}
              descricao={treino.descricao}
              categoria={treino.categoria}
              duracao={treino.duracao}
              dificuldade={treino.dificuldade}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;