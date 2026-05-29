"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import LoginInput from "@/components/input/LoginInput"
import Link from "next/link"

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")
    const router = useRouter()

    async function handleLogin(e) {
        e.preventDefault()
        setErro("")

        const res = await fetch("/api/login", { // Ajuste o caminho para sua rota de API
            method: "POST",
            body: JSON.stringify({ email, senha }),
            headers: { "Content-Type": "application/json" }
        })

        const data = await res.json()

        if (!res.ok) {
            setErro(data.mensagem)
            return
        }

        // Se o login for bem-sucedido, o cookie já foi setado pelo backend (HttpOnly)
        // Redirecione o usuário para a dashboard ou home
        router.push("/dashboard") 
    }

    return (
        <main className="lg:flex lg:gap-3 p-2 min-h-full">
            <section className="lg:w-1/2 m-20">
                <div className="flex flex-col items-center gap-3">
                    <i className="bi bi-person-circle text-orange-400 text-9xl"></i>
                    <h2 className="text-center">Bem-vindo ao espaço onde a tradição encontra o seu estilo.</h2>
                </div>

                <form onSubmit={handleLogin}>
                    {erro && <p className="text-red-500 text-center mb-4">{erro}</p>}

                    <LoginInput 
                        nameLabel="Email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="exemplo@gmail.com" 
                    />
                    <LoginInput 
                        nameLabel="Senha" 
                        type="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} 
                        placeholder="exeMpL095@" 
                    />

                    <div className="flex items-center justify-between m-2 gap-5">
                        <button type="submit" className="rounded-2xl bg-gray-900 text-white w-1/2 h-12 flex items-center justify-center p-2 hover:bg-gray-800 transition-colors">
                            Entrar
                        </button>
                        <div className="rounded-2xl w-1/2 h-12 shadow-lg flex justify-center items-center p-2">
                            <Link href={"/"} className="text-orange-400">Esqueceu a senha?</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-black">
                        <span>Não possui uma conta?<span className="text-orange-500 border-b-2 border-transparent hover:border-b-orange-400 transition-all"><Link href={"/auth/cadastro"}> cadastre-se </Link></span></span>
                    </div>
                    <div className="flex items-center justify-center flex-col m-6">
                        <p>ou</p>
                        <div className="w-full h-12 shadow-lg flex items-center justify-center"> 
                            <Link href={"/"
                            } className="text-gray-600 flex gap-2">
                                <img src="/google.png" className="h-6"/> 
                                <span>Entrar com Google</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </section>
            <section className="hidden lg:flex lg:w-1/2 m-10 ml-72 items-center">
                <img src='/barbearialogin.png' alt="Logo Barbearia" className="object-cover rounded-2xl" />
            </section>
        </main>
    )
}