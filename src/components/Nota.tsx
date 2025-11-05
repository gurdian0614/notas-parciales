import Input from "./Input";
import type { NombreParcial } from "../types/NotaParcial";
import useNotasParciales from "../hooks/useNotasParciales";

const Nota: React.FC = () => {
    const {
        nota,
        hanldeCambiarNota,
        obtenerNotaParcialMaxima,
        MAX_TOTAL,
        NOTA_MINIMA_PASAR,
    } = useNotasParciales();

    const paso = nota.total >= NOTA_MINIMA_PASAR;

    const resultadoBg = paso ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700';

    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-12">
                    Calculadora de Notas Parciales
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <Input
                        label="Primer Parcial"
                        max={obtenerNotaParcialMaxima('parcial1')}
                        value={nota.parcial1}
                        name={'parcial1' as NombreParcial}
                        onChange={hanldeCambiarNota}
                    />

                    <Input
                        label="Segundo Parcial"
                        max={obtenerNotaParcialMaxima('parcial2')}
                        value={nota.parcial2}
                        name={'parcial2' as NombreParcial}
                        onChange={hanldeCambiarNota}
                    />

                    <Input
                        label="Tercer Parcial"
                        max={obtenerNotaParcialMaxima('parcial3')}
                        value={nota.parcial3}
                        name={'parcial3' as NombreParcial}
                        onChange={hanldeCambiarNota}
                    />

                    <div className={`p-8 text-center rounded-2xl shadow-2xl transition duration-500 ease-in-out cursor-defult trnasform hover:scale-[1.01] ${resultadoBg} text-white`}>
                        <h2>Puntuación Total Obtenida</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nota;