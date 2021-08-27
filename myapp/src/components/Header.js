import Props from './Props';

function Header() {
  return (
    <div>
      <p> Parti do corpo </p>
      
      <Props 
        nome = "Rodrigo"
        cidade = "Icatu -Ma"
        idade ="27"  
        casado = "Solteiro"
      / >
    </div>
  );
}

export default Header;
