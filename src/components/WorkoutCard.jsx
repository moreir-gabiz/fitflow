function WorkoutCard({
  titulo,
  descricao,
  categoria,
  duracao,
  dificuldade,
  concluido,
  onToggle,
  onRemover,
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
      } ${concluido ? "opacity-60" : ""}`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          {categoria}
        </span>

        <span className="text-sm font-medium text-slate-500">
          ⏱️ {duracao}
        </span>
      </div>

      <h2
        className={`text-xl font-bold text-slate-800 ${
          concluido ? "line-through" : ""
        }`}
      >
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

      <div className="mt-4 flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={concluido}
            onChange={onToggle}
            className="h-4 w-4 accent-violet-700"
          />

          Concluído
        </label>

        <button
          onClick={onRemover}
          className="text-xs font-semibold text-red-500 transition hover:text-red-700"
        >
          Remover
        </button>
      </div>
    </article>
  );
}

export default WorkoutCard;