import './App.css'
import './index.css'
import { XFollowCard } from './XFollowCard'

const users =  [
        {
        name: 'tobias Romani',
        userName: 'tobiasromani6960',
        initialIsFollowing: true,
        },
        {
        name: 'Vorterix',
        userName: 'VorterixOficial',
        initialIsFollowing: true,   
        },
        {
        name: 'YouTube',
        userName: 'youtube',
        initialIsFollowing: false,
        },
        {   
        name: 'Twitch',
        userName: 'twitch',
        initialIsFollowing: false,
        },
        {
            name: 'Lichi',
            userName: 'lichiiuksd6789',
            initialIsFollowing: false,
        }
    ]

export function App(){  
    return(
        <section className='App'>
        {
            users.map(user => {
                const {name, userName, initialIsFollowing } = user;
                return (
                    <XFollowCard
                        key={userName}
                        name={name}
                        initialIsFollowing={initialIsFollowing}>    
                        {userName}
                        </XFollowCard>
                )
            })
        }
        </section>      
    )
}