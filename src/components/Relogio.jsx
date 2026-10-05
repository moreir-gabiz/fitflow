import { useState, useEffect } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("⏰ Relógio do FitFlow MONTADO");

    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("💀 Relógio do FitFlow DESMONTADO");

      clearInterval(intervalo);
    };
  }, []);

  return (
    <span className="rounded-lg bg-violet-900 px-3 py-1 font-mono text-sm text-violet-100">
      {hora}
    </span>
  );
}

export default Relogio;