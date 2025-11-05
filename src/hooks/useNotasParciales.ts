import { useState, useEffect, useCallback } from "react";
import type { Parciales, NombreParcial } from "../types/NotaParcial";

const useNotasParciales = () => {
    const [nota, setNota] = useState<Parciales>({
        parcial1: "",
        parcial2: "",
        parcial3: "",
        total: 0,
    })

    const MAX_P1_P2 = 30;
    const MAX_P3 = 40;
    const MAX_TOTAL = MAX_P1_P2 * 2 + MAX_P3;
    const NOTA_MINIMA_PASAR = 60;

    const obtenerNotaParcialMaxima = (nombreParcial: NombreParcial): number => {
        if (nombreParcial === "parcial1" || nombreParcial === "parcial2") {
            return MAX_P1_P2;
        }

        return MAX_P3;
    };

    const calcularTotal = useCallback(() => {
        const p1 = Number(nota.parcial1) || 0;
        const p2 = Number(nota.parcial2) || 0;
        const p3 = Number(nota.parcial3) || 0;

        return p1 + p2 + p3;
    }, [nota.parcial1, nota.parcial2, nota.parcial3]);

    useEffect(() => {
        setNota((prev) => ({
            ...prev,
            total: calcularTotal(),
        }));
    }, [calcularTotal]);

    const hanldeCambiarNota = (nombreParcial: NombreParcial, valor: string) => {
        const max = obtenerNotaParcialMaxima(nombreParcial);
        const numValue = Number(valor);

        if (valor === "") {
            setNota((prev) => ({
                ...prev,
                [nombreParcial]: ""
            }));
            return;
        }

        if (isNaN(numValue) || numValue < 0 || numValue > max) {
            return;
        }

        setNota((prev) => ({
            ...prev, [nombreParcial]: numValue
        }));
    };

    return {
        nota,
        hanldeCambiarNota,
        obtenerNotaParcialMaxima,
        MAX_TOTAL,
        NOTA_MINIMA_PASAR,
    };
}

export default useNotasParciales;