function Header() {
  return (
    <header className="bg-violet-700 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">
            💜 FitFlow
          </h1>

          <p className="mt-1 text-sm text-violet-100">
            Organize seus treinos e mantenha seu ritmo
          </p>
        </div>

        <span className="hidden rounded-full bg-violet-500 px-4 py-2 text-sm font-medium sm:block">
          Seu progresso começa hoje
        </span>
      </div>
    </header>
  );
}

export default Header;