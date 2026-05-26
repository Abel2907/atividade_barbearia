"use client"
import { useState } from "react";
import LoginInput from "@/components/input/LoginInput";
import ProgressRegister from "@/components/progress_bar/ProgressRegister";
export default function cadastro(){
    const [estadoAtual, setEstadoAtual] = useState(0)
    const total = 3
    const funcVoltar = ()=>{
        if (estadoAtual>0){setEstadoAtual(estadoAtual-1)}
    }
    const funcProsseguir =  ()=>{
        if(estadoAtual<total-1){setEstadoAtual(estadoAtual+1)}
    }
    return(
        <main className="lg:flex lg:gap-3 p-2 min-h-full ">
            <section className="lg:w-1/2 m-20">
                <ProgressRegister estadoAtual={estadoAtual} progredir={funcProsseguir} voltar={funcVoltar} totalprogressos={total}></ProgressRegister>
                {estadoAtual===0 &&
                    <section>
                        <LoginInput nameLabel="nome" id="id-nome" type="text" placeholder="Fuluno de Ciclano"  ></LoginInput>
                        <LoginInput nameLabel="email" id="id-email" type="email" placeholder="exemplo@gmail.com"  ></LoginInput>
                        <LoginInput nameLabel="senha" id="id-senha" type="password" placeholder="exeMpL095@ccxs"  ></LoginInput>
                        <LoginInput nameLabel="" id="id-aniverssario" type="date" placeholder="00/00/0000" ></LoginInput>
                    </section>}
                {estadoAtual===1 &&                     
                    <section className="m-10">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="avatar" className="font-bold">Foto de Perfil</label>
                            <input 
                                type="file" 
                                id="avatar" 
                                accept="image/*" 
                                onChange={(e) => handleFileChange(e)}
                                className="border p-2 rounded-md"
                            />
                        </div>
                    </section>}
                {estadoAtual===2 &&
                    <section>
                        <LoginInput nameLabel="WhatsApp" id="id-tel" type="tel" placeholder="(88) 9 9999-9999" pattern="[0-9]{2} [0-9]{1} [0-9]{4}-[0-9]{4}"></LoginInput>
                        <div className="flex justify-center gap-3 m-5 p-3 flex-col">
                            <h4 className="font-bold">marque as opções que vocẽ tenha se interessar</h4>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" value="corte" className="w-4 h-4" />
                                <span>Corte de Cabelo</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" value="corte" className="w-4 h-4" />
                                <span>Barba</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" value="corte" className="w-4 h-4" />
                                <span>Sobrancelha</span>
                            </label>
                        </div>
                        <div className="flex justify-end">
                            <button className="rounded-2xl w-full h-12 shadow-lg flex justify-center items-cente text-orange-900 p-2">Enviar</button>
                        </div>
                    </section>}
            </section>
            <section className="hidden lg:flex lg:w-1/2 m-10 ml-72 items-center ">
                    <img src={'/barbearialogin.png'} className="object-cover rounded-2xl" />
            </section>
        </main>
    )
    
}