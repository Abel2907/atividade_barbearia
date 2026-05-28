export default function LoginInput({ id, type, placeholder, nameLabel, value, onChange }) {
    return (
        <div className="relative m-6">
            <input 
                id={id} 
                type={type} 
                value={value} // Adicionado
                onChange={onChange} // Adicionado
                placeholder={placeholder} 
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-all" 
            />
            <label 
                htmlFor={id} 
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 
                peer-focus:-top-3.5 peer-focus:text-orange-400 peer-focus:text-sm"
            >
                {nameLabel}
            </label>
        </div>
    )
}