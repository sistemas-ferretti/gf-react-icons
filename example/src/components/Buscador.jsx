import React from 'react'

const Buscador = ({ handleSearch, theme }) => {
    return (
        <div className="input-group w-75 search-input"

        >
            <input
                type="text"
                style={{
                    backgroundColor: "transparent",
                    color: theme === 'light' ? "#2b2a33" : "white",
                }}
                theme={theme}
                className="form-control"
                placeholder="Buscar..."
                onChange={(e) => handleSearch(e.target.value)}
            />

        </div>
    )
}

export default Buscador