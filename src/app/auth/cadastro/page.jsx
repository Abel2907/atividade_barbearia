"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"; // Para redirecionar após o sucesso
import LoginInput from "@/components/input/LoginInput";
import ProgressRegister from "@/components/progress_bar/ProgressRegister";

export default function Cadastro() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: ""
    });

    // Adicionado o estado de carregamento que faltava no seu código
    const [carregando, setCarregando] = useState(false);
    const [estadoAtual, setEstadoAtual] = useState(0);
    const total = 3;

    const funcVoltar = () => {
        if (estadoAtual > 0) { setEstadoAtual(estadoAtual - 1) }
    };

    const funcProsseguir = () => {
        if (estadoAtual < total - 1) { setEstadoAtual(estadoAtual + 1) }
    };

    const handleChange = (e) => {
        // Importante: o 'name' do input deve ser igual à chave no formData (nome, email, senha)
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEnviar = async () => {
        setCarregando(true);
        try {
            // Certifique-se que o caminho da API está correto (ex: /api/auth/register)
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const dados = await response.json();

            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                router.push('/login'); // Redireciona para o login
            } else {
                alert(`Erro: ${dados.mensagem}`);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao conectar com o servidor.");
        } finally {
            setCarregando(false);
        }
    };

    return (
        <main className="lg:flex lg:gap-3 p-2 min-h-full">
            <section className="lg:w-1/2 m-20">
                <h1 className="text-2xl text-center m-4 font-bold">Cadastre-se</h1>
                
                <ProgressRegister 
                    estadoAtual={estadoAtual} 
                    progredir={funcProsseguir} 
                    voltar={funcVoltar} 
                    totalprogressos={total} 
                />

                {estadoAtual === 0 && (
                    <section>
                        {/* O atributo 'name' é CRUCIAL para o handleChange funcionar */}
                        <LoginInput 
                            nameLabel="Nome" name="nome" onChange={handleChange} id="id-nome" type="text" placeholder="João Silva" value={formData.nome} 
                        />
                        <LoginInput 
                            nameLabel="E-mail" name="email" onChange={handleChange} id="id-email" type="email" placeholder="exemplo@gmail.com" value={formData.email} 
                        />
                        <LoginInput 
                            nameLabel="Senha" name="senha" onChange={handleChange} id="id-senha" type="password" placeholder="******" value={formData.senha} 
                        />
                    </section>
                )}

                {estadoAtual === 1 && (
                    <section className="m-10">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="avatar" className="font-bold">Foto de Perfil (Opcional)</label>
                            <input 
                                type="file" id="avatar" accept="image/*" 
                                className="border p-2 rounded-md"
                            />
                            <p className="text-sm text-gray-500 italic">*A API atual ainda não salva imagens, isso pode ser implementado depois.</p>
                        </div>
                    </section>
                )}

                {estadoAtual === 2 && (
                    <section>
                        <div className="bg-green-50 p-4 rounded-md mb-4 text-center border border-green-200">
                            <p className="text-green-800 font-medium">
                                {carregando ? "Enviando dados..." : "Tudo pronto! Clique em enviar para concluir."}
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <button 
                                className="rounded-2xl w-full h-12 shadow-lg flex justify-center items-center bg-orange-500 text-white font-bold disabled:bg-gray-400" 
                                onClick={handleEnviar}
                                disabled={carregando}
                            >
                                {carregando ? "Processando..." : "Finalizar Cadastro"}
                            </button>
                        </div>
                    </section>
                )}
            </section>
            
            <section className="hidden lg:flex lg:w-1/2 m-10 ml-72 items-center">
                <img src='/barbearialogin.png' alt="Logo Barbearia" className="object-cover rounded-2xl" />
            </section>
        </main>
    );
}