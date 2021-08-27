import './style.css';

function Props({nome, cidade, idade,casado}) {
    return (
      <div className="Teste">
        <p>Nome: {nome}</p>
        <p>Cidade: {cidade}</p>
        <p>Idade: {idade}</p>
        <p>Casado: {casado}</p> 
      </div>
    );
}

export default Props
