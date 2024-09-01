import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState(""); 
    const [telefone, setTelefone] = useState("");

    const [listaContatos, setListaContatos] = useState([]);
    const registrar = (event) => {
        event.preventDefault();
        setListaContatos([...listaContatos,
            {
                NomeSalvo: nome,
                telefoneSalvo: telefone
            }
        ]);
    };
    console.table(listaContatos);
    return(
        <main>    
            <label htmlFor="nome">Nome</label>
            <input type="nome" name="" id="" onChange={(event)=> setNome(event.target.value)}/>
            {nome}
            <label htmlFor="tel">Telefone</label>
            <input type="tel" name="" id="" onChange={(event)=> setTelefone(event.target.value)}/>
            {telefone}
            <button onClick={(registrar)}>Salvar</button>
            {
                listaContatos.map((contato, index) =>
            <div key={index}>
                <div className="oi">
                <p>{contato.NomeSalvo}</p>
                <p>{contato.telefoneSalvo}</p>
                </div>
                </div>
            )}
        </main>
    );
}