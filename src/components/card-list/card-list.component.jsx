import './card-list.styles.css'
import Card from '../card-container/card.component'

const ClassList = ({ monsters }) => {
    return (
        
        <div className="card-list">
            
            {
                monsters.map((monster) => {

                    return (
                        <Card monster={monster} key={monster.id} />

                    )
                })
            }
        </div>
    )
}


export default ClassList