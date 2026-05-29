"use client"
import { useState } from "react";

export default function Agendar() {
    const [formData, setFormData] = useState({
        data_hora: "",
        servico: "",
        barbeiro: ""
    });

    async function handleAgendar() {
        const response = await fetch("/api/agendamento", { // ajuste o path da sua rota
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (response.ok) {
            alert("Agendado com sucesso!");
        } else {
            alert(data.mensagem);
        }
    }

    return (
        <section className="flex flex-col gap-8 p-10 bg-zinc-50">
            <h1 className="text-5xl font-bold text-center">Agendar</h1>

            {/* Input de Data */}
            <div className="flex flex-col gap-2">
                <label className="text-amber-500 font-bold uppercase">Data</label>
                <input 
                    type="datetime-local" 
                    className="bg-zinc-900 text-white p-3 rounded"
                    onChange={(e) => setFormData({...formData, data_hora: e.target.value})}
                />
            </div>

            {/* Seleção de Serviço (Exemplo simplificado de Radio para evitar múltiplos) */}
            <div>
                <h2 className="text-amber-500 font-bold uppercase">Serviço</h2>
                {["Corte", "Barba", "Sobrancelha"].map(s => (
                    <label key={s} className="flex gap-2">
                        <input 
                            type="radio" 
                            name="servico" 
                            onChange={() => setFormData({...formData, servico: s})} 
                        />
                        {s}
                    </label>
                ))}
            </div>

            {/* Seleção de Barbeiro */}
            <div>
                <h2 className="text-amber-500 font-bold uppercase">Barbeiro</h2>
                {["Roger", "Bruno", "Samuel"].map(b => (
                    <label key={b} className="flex gap-2">
                        <input 
                            type="radio" 
                            name="barbeiro" 
                            onChange={() => setFormData({...formData, barbeiro: b})} 
                        />
                        {b}
                    </label>
                ))}
            </div>

            <button 
                onClick={handleAgendar}
                className="bg-amber-500 text-white font-bold py-4 rounded hover:bg-amber-600 transition"
            >
                FINALIZAR AGENDAMENTO
            </button>
        </section>
    );
}