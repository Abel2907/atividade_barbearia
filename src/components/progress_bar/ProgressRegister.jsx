"use client"
export default function ProgressRegister({estadoAtual, progredir, voltar, totalprogressos}){
    const fasesProgresso = Array.from({length: totalprogressos})
    return(
        <div className="bg-orange-400 rounded-2xl"> 
            <ul className="flex justify-between items-center">
                <button className="bg-orange-400 m-4 text-center text-amber-50" onClick={voltar} disabled={estadoAtual===0}>voltar</button>
                {fasesProgresso.map((_, index)=>(
                    <li key={index}>
                        <div
                            className={`${estadoAtual===index? 'text-orange-50': 'text-orange-700'} p-3`}>
                            {index+1}
                        </div>
                    </li>
                ))}
                <button className="bg-orange-400 m-4 text-center text-black" disabled={estadoAtual>=totalprogressos-1} onClick={progredir}>Avança</button>

            </ul>
        </div>
    )
}