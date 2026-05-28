"use client"
export default function agendar(params) {
    return (
        <section  className="flex-col flex md:flex-row justify-center items-center gap-8">
            <div className="w-full  bg-zinc-50 border-b border-zinc-200">
                <h1 className="text-5xl font-bold text-center m-10 ">Agendar</h1>
            </div>
            <div className="flex flex-col gap-2 max-w-sm md:w-1/2">
                <label className="text-sm font-semibold text-amber-500 uppercase tracking-wider" >Seleciona a data do seu corte</label>
                <input type="date" className="bg-zinc-900 text-white border-2 border-zinc-800 rounded-lg px-4 py-3 
            outline-none focus:border-amber-500 transition-colors duration-300
            appearance-none cursor-pointer"></input>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-wider">escolha o serviço que vocẽ deseja</h2>
                <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" value="corte" className="w-4 h-4" />
                        <span>Sobrancelha</span>
                    </label>
                </div>
                <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" value="corte" className="w-4 h-4" />
                        <span>Corte de cabelo masculino</span>
                    </label>
                </div>
                <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" value="corte" className="w-4 h-4" />
                        <span>Barba</span>
                    </label>
                </div>
            </div>
        </section>
    )
}