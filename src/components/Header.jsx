import { useState } from "react";
import Relogio from "./Relogio";

function Header() {
  const [mostrarRelogio, setMostrarRelogio] = useState(true);

  return (
    <header className="bg-violet-700 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">
            💜 FitFlow
          </h1>

          <p className="mt-1 text-sm text-violet-100">
            Organize seus treinos e mantenha seu ritmo
          </p>
        </div>

        <div className="flex items-center gap-3">
          {mostrarRelogio && <Relogio />}

          <button
            onClick={() => setMostrarRelogio(!mostrarRelogio)}
            className="rounded-lg border border-violet-400 px-3 py-1 text-xs transition hover:border-white"
          >
            {mostrarRelogio ? "Esconder relógio" : "Mostrar relógio"}
          </button>

          <span className="hidden rounded-full bg-violet-500 px-4 py-2 text-sm font-medium xl:block">
            Seu progresso começa hoje
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;