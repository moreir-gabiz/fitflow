import { useState } from "react";

function TaskForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Core");
  const [duracao, setDuracao] = useState("");
  const [dificuldade, setDificuldade] = useState("Médio");

  function aoEnviar(evento) {
    evento.preventDefault();

    if (
      titulo.trim() === "" ||
      descricao.trim() === "" ||
      duracao.trim() === ""
    ) {
      return;
    }

    onAdicionar({
      titulo,
      descricao,
      categoria,
      duracao,
      dificuldade,
    });

    setTitulo("");
    setDescricao("");
    setDuracao("");
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="mb-8 rounded-2xl bg-white p-6 shadow-md"
    >
      <h2 className="mb-5 text-xl font-bold text-slate-800">
        Adicionar novo treino
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-600">
            Nome do treino
          </label>

          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex.: Treino de costas"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-600">
            Duração
          </label>

          <input
            type="text"
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
            placeholder="Ex.: 30 min"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-semibold text-slate-600">
            Descrição
          </label>

          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva o treino..."
            rows="3"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-600">
            Categoria
          </label>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option>Core</option>
            <option>Inferiores</option>
            <option>Mobilidade</option>
            <option>Cardio</option>
            <option>Superiores</option>
            <option>Bem-estar</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-600">
            Dificuldade
          </label>

          <select
            value={dificuldade}
            onChange={(e) => setDificuldade(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option>Fácil</option>
            <option>Médio</option>
            <option>Difícil</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 rounded-lg bg-violet-700 px-5 py-2 font-bold text-white transition-colors hover:bg-violet-800"
      >
        + Adicionar treino
      </button>
    </form>
  );
}

export default TaskForm;