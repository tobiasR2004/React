import { useState } from 'react';

export function XFollowCard({ children, name = 'uknown', initialIsFollowing}) { 

    const imageSrc = `https://unavatar.io/youtube/${children}`;

    const [isFollowing , setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? `siguiendo`  : `seguir`;
    const buttonClassName = isFollowing ? `x-followCard-button following`
     : `x-followCard-button`;

     const handleClick = () => {
        setIsFollowing(!isFollowing);
     }

 return(
    <article className='x-followCard'>
        <header className="x-followCard-header">
            <img className="x-followCard-img" alt="icono" src={imageSrc}></img>
            <div className="x-followCard-header-div">
                <strong> {name} </strong>
                <span className="x-followCard-header-div-cuenta"> @{children} </span>
            </div>
       

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='x-followCard-text'>{text}</span>
                    <span className='x-followCard-stopFollow'> dejar de seguir </span>
                </button>
            </aside>
         </header>
        
        
    </article>
    )
}

