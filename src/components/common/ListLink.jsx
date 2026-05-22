import Link from "next/link"
const itens_link = [
    {name: "home", icon:"bi bi-house-fill", link:"/auth/home"},
    {name: "Login", icon:"bi bi-person-add ", link: "/auth/login" },
    {name: "Agendar", icon:"bi bi-calendar-event-fill", link: "/auth/agendar" },
    {name: "serviços", icon:"bi bi-scissors", link: "/" }
]
export default function ListLink ({className}){
    return(
        <ul className={`${className} gap-3 p-5`}>
            {
                itens_link.map((item, index) =>(
                    <li key={index} className="text-amber-700 list-none hover:text-amber-500 transition-colors"> 
                        <Link href={item.link} className="flex items-center">
                            <i className={`${item.icon} mr-1`}></i>
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}