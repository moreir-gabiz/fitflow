function WorkoutCard({
  titulo,
  descricao,
  categoria,
  duracao,
  dificuldade
}) {
  const coresDificuldade = {
    Fácil: "border-green-400 bg-green-50",
    Médio: "border-yellow-400 bg-yellow-50",
    Difícil: "border-red-400 bg-red-50",
  };

  return (
    <article
      className={`rounded-2xl border-t-4 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        coresDificuldade[dificuldade]
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          {categoria}
        </span>

        <span className="text-sm font-medium text-slate-500">
          ⏱️ {duracao}
        </span>
      </div>

      <h2 className="text-xl font-bold text-slate-800">
        {titulo}
      </h2>

      <p className="mt-3 leading-relaxed text-slate-600">
        {descricao}
      </p>

      <div className="mt-5 border-t border-slate-200 pt-4">
        <span className="font-semibold text-slate-700">
          🔥 Dificuldade: {dificuldade}
        </span>
      </div>
    </article>
  );
}

export default WorkoutCard;