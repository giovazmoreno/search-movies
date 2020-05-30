import React from 'react';

export const Title = ({children}) => (
    <h1 className="title">{children}</h1>
)

//Si se le pasan las props el componente utilizaria una prop llamada title
//<Title title='Search movies' />
//Si se utiliza la prop especial llamada children, el contenido del componente sera lo que envuelva éste.
//<Title>Search Movies</Title>


/* Para exportar nuestro componente de forma nombrada en el 
export del componente se debe exportar una constante , reemplazando el default por el nombre que tomara el componente */