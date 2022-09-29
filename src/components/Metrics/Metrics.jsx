import './Metrics.css'
import PropTypes from 'prop-types'
import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

/**
 * Component displaying sport-related user information.
 * 
 * @component
 */
function Metrics({keyData}) {

    return(
        <div className='container-metrics'>
            {keyData &&
                <>
                <div className='metrics'>
                    <div className='image-container-energy'>
                        <img src={energy} alt="energy" />
                    </div>
                    <div className='metrics-description'>
                        <p>{keyData.calorieCount}kCal</p>
                        <span>Calories</span>
                    </div>
                </div>

                <div className='metrics'>
                    <div className='image-container-chicken'>
                        <img src={chicken} alt="chicken" />
                    </div>
                    <div className='metrics-description'>
                        <p>{keyData.proteinCount}g</p>
                        <span>Proteines</span>
                    </div>
                </div>

                <div className='metrics'>
                    <div className='image-container-apple'>
                        <img src={apple} alt="apple" />
                    </div>
                    <div className='metrics-description'>
                        <p>{keyData.carbohydrateCount}g</p>
                        <span>Glucides</span>
                    </div>
                </div>

                <div className='metrics'>
                    <div className='image-container-cheeseburger'>
                        <img src={cheeseburger} alt="cheeseburger" />
                    </div>
                    <div className='metrics-description'>
                        <p>{keyData.lipidCount}g</p>
                        <span>Lipides</span>
                    </div>
                </div>
                </>
            }
        </div>
    )
}

Metrics.propTypes = {
    keyData: PropTypes.shape({
        calorieCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired
    })
}


export default Metrics