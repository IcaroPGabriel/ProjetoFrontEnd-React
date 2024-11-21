import './Section.css'
import Card from './Card'
import products from '../../mock/products'

function Section(props) {

    try {
        return (
            <>
                <div className='container'>
                    <h1 >{props.title}</h1>
                
                    {props.children}
                </div>
            </>
        )
        
    } catch (error) {
        <h1>deu ruim</h1>
    }
   
 
}
export default Section;