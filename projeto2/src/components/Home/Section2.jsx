function Section2(props){


    try {
        return(
            <>
            <div className="d-flex flex-row flex-wrap col-11 offset-1 ">
                {props.children}
            </div>
            
            </>
        )
        
    } catch (error) {
        <h1>deu ruim</h1>
        
    }
   
}
export default Section2