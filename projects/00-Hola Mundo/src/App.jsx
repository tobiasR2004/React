import './App.css'
import './index.css'
import { XFollowCard } from './XFollowCard'

export function App(){
    const tobias = {
         name: `tobias Romani`}   
    
    return(
        <div className='App'>
            <XFollowCard {...tobias}> 
                tobiasromani6960 
            </XFollowCard>

            <XFollowCard  name ='Vorterix' initialIsFollowing={true}
            >
                'VorterixOficial' 
            </XFollowCard>

            <XFollowCard name='YouTube' 
            >
                youtube
            </XFollowCard>
        </div>        
    )
}