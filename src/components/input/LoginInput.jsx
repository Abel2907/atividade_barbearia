export default function LoginInput(props){
    return(
        <div className="relative m-6">
            <input id={props.id} type={props.type} placeholder={` ${props.placeholder}`} className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-all" />
            <label htmlFor={props.id} className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 
            peer-focus:-top-3.5 peer-focus:text-orange-400 peer-focus:text-sm">{props.nameLabel}</label>
        </div>
    )
}