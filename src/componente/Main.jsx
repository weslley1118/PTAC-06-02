import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState(""); 
    const [telefone, setTelefone] = useState("");

    return(
        <main>    
            <h1>Nome</h1>
            <input type="nome" name="" id="" onChange={(event)=> setNome(event.target.value)}/>
            {nome}
            <h1>Telefone</h1>
            <input type="tel" name="" id="" onChange={(event)=> setTelefone(event.target.value)}/>
            {telefone}
            <button>Salvar</button>
        </main>
    );
}