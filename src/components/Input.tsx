import type { NombreParcial } from "../types/NotaParcial";

interface InputProps {
    label: string;
    max: number;
    value:  number | '';
    name: NombreParcial;
    onChange: (name: NombreParcial, value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, max, value, name, onChange }) => {

    const noValido = value !== '' && value > max;

    return (
        <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl">
            <label className="block text-lg font-bold text-gray-700 mb-2">
                {label}
            </label>

            <p className="text-sm text-gray-500 mb-3">Máx: {max}</p>

            <input 
                type="number" 
                value={value} 
                onChange={(e) => onChange(name, e.target.value)}
                min={0} 
                max={max} 
                placeholder={`0 - ${max}`} 
                className={`w-full p-3 border-2 rounded-lg text-3xl font-extrabold text-center font-mono transition duration-150
                    ${noValido ? 'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-600' : 'border-blue-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800'}
                `}
            />

            {
                noValido && (
                    <p className="text-red-500 text-sm mt-1 animate-pulse">
                        ¡La nota no puede exceder {max} puntos!
                    </p>
                )
            }
        </div>
    );
}

export default Input;