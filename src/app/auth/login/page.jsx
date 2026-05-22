"use client"
import LoginInput from "@/components/input/LoginInput"
import Link from "next/link"
export default function Login(){
    return(
        <main className="lg:flex lg:gap-3 p-2 min-h-full ">
            <section className="lg:w-1/2 m-20">
                <div className="flex flex-col items-center gap-3">
                    <i className="bi bi-person-circle text-orange-400 text-9xl"></i>
                    <span><h2 className="text-center">Bem-vindo ao espaço onde a tradição encontra o seu estilo.</h2></span>
                </div>
                <form>

                    <LoginInput nameLabel="Email" id="id-email" type="email" placeholder="exemplo@gmail.com" ></LoginInput>
                    <LoginInput nameLabel="Senha" id="id-senha" type="password" placeholder="exeMpL095@" ></LoginInput>

                    <div className="flex items-center justify-between m-2 gap-5">
                        {/*  */}<button type="sumbit" className="rounded-2xl bg-gray-900 text-white w-1/2 h-12 flex items-center justify-center p-2">
                            Entrar
                        </button>
                        <div className="rounded-2xl w-1/2 h-12 shadow-lg flex justify-center items-center p-2">
                            <Link href={"/"} className="text-gray-600">
                                Esqueceu a senha?
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center flex-col m-6">
                        <p>ou</p>
                        <div className="w-full h-12 shadow-lg flex items-center justify-center"> 
                            <Link href={"/"} className="text-gray-600">
                                <span><img href=""/></span>
                                <span>Entrar com Google</span>
                            </Link>
                        </div>
                    </div>

                     <div className="flex items-center justify-center text-gray-600">
                        <span>não possuir uma conta?<span className="text-orange-400 border-b-2 border-transparent hover:border-b-orange-400 transition-all"><Link href={"/auth/cadastro"}> cadastre-se </Link></span></span>
                    </div>
                </form>
            </section>
            <section className="hidden lg:flex lg:w-1/2 m-10 ml-72 items-center ">
                    <img src={'/barbearialogin.png'} className="object-cover rounded-2xl" />
            </section>
        </main>
    )
}