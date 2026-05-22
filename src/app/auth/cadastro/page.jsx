"use client"
import { useState } from "react";
import LoginInput from "@/components/input/LoginInput";

export default function cadastro(){
    const [estadoAtual, setEstadoAtual] = useState(0)
    const total = 3
    const funcVoltar = ()=>{
        if (estadoAtual>0){setEstadoAtual(estadoAtual-1)}
    }
    const funcProsseguir =  ()=>{
        if(estadoAtual<total-1){setEstadoAtual(estadoAtual+1)}
    }
    const [cpf, setCpf] = useState("");
    const handleCPFChange = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value
            .replace(/(\d{3})(\d)/, "$1.$2")      
            .replace(/(\d{3})(\d)/, "$1.$2")      
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")  
            .replace(/(-\d{2})\d+?$/, "$1");     

        setCpf(value);}

    return(
        <main className="lg:flex lg:gap-3 p-2 min-h-full ">
            <section className="lg:w-1/2 m-20">
                <ProgressRegister estadoAtual={estadoAtual} progredir={funcProsseguir} voltar={funcVoltar} totalprogressos={total}></ProgressRegister>
                {estadoAtual===0 &&
                    <section>
                        <LoginInput nameLabel="nome" id="id-nome" type="text" placeholder="Fuluno de Ciclano"  ></LoginInput>
                        <LoginInput nameLabel="email" id="id-email" type="email" placeholder="exemplo@gmail.com"  ></LoginInput>
                        <LoginInput nameLabel="senha" id="id-senha" type="password" placeholder="exeMpL095@ccxs"  ></LoginInput>
                    </section>}
                {estadoAtual===1 &&                     
                    <section>
                        <h4>Comfirmação de Email e Senha</h4>
                        <LoginInput nameLabel="email" id="id-email" type="email" placeholder="exemplo@gmail.com"  ></LoginInput>
                        <LoginInput nameLabel="senha" id="id-senha" type="password" placeholder="exeMpL095@ccxs"  ></LoginInput>
                        <LoginInput nameLabel="senha" id="id-senha" type="password" placeholder="exeMpL095@ccxs"  ></LoginInput>
                    </section>}
                {estadoAtual===2 && <div>ola vc esta no estagio 3 do progresso</div>}
            </section>
            <section className="hidden lg:flex lg:w-1/2  ml-72 items-center ">
                <img src={'/barbearialogin.png'} className="object-cover rounded-2xl" />
            </section>
        </main>
    )
    
}