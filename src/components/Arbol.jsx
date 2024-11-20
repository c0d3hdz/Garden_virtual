import React, { useState } from 'react'
import './style.css'

const ArbolContainer = () => {
    const [nivel, setNivel] = useState(1)

    const incrementarNivel = () => {
        setNivel(nivel + 1)
    }

    const getArbolSize = nivel => {
        switch (nivel) {
            case 1:
                return '100px'
            case 2:
                return '150px'
            case 3:
                return '200px'
            case 4:
                return '250px'
            case 5:
                return '300px'
            case 6:
                return '350px'
            case 7:
                return '400px'
            default:
                return '450px'
        }
    }
    const getSueloPosition = nivel => {
        if(nivel < 3) {
            return '20px'
        }
        if (nivel > 2 && nivel < 8) {
            return `${ -20 * (nivel - 3)}px`
        } else {
            return `${-20 * 7}px`
        }
    }

    const getArbolImage = nivel => {
        return nivel < 2 ? './source/arbol_fase1.png' : './source/arbol_fase2.png'
    }

    return (
        <div>
            <h2 className="Nivel">Nivel {nivel}</h2>
            <img
                className="image"
                src={getArbolImage(nivel)}
                alt={`image-${nivel}`}
                style={{ width: getArbolSize(nivel), height: getArbolSize(nivel) }}
            />
            <br />
            <button className="level" onClick={incrementarNivel}>
                Incrementar Nivel
            </button>
            <img
                className="suelo"
                src="/public/source/suelo.png"
                alt="suelo"
                style={{ bottom: getSueloPosition(nivel), position: 'relative' }}
            />
        </div>
    )
}

export default ArbolContainer
