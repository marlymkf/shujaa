import {Botao} from "./styles";
const Button = ({children,...props}) => { 
    return <Botao {...props}>{children}</Botao>;

}
 
export default Button;