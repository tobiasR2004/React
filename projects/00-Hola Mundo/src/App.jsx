import './App.css'

export function App(){
    return(
    <article className='x-followCard'>
        <header className="x-followCard-header">
            <img className="x-followCard-img" alt="icono" src="https://i.pinimg.com/222x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg"></img>
            <div className="x-followCard-header-div">   
                <strong>  Tobias Romani </strong>
                <span className="x-followCard-header-div-cuenta"> @TobiasR26 </span>
            </div>
        </header>



        <aside>
            <button className="x-followCard-button">
                Seguir
            </button>
        </aside>
    </article>
    )
}