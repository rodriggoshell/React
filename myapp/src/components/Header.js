import Props from './Props';
import styles from './header.module.css';
function Header() {
  return (
    <div className={styles.Blu}>
      <p className="Blu"> Parti do corpo </p>
      
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
