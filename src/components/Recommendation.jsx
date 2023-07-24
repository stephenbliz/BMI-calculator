import css from './recommendation.module.css';
import {BiSolidFace} from 'react-icons/bi';
import {CgGym} from 'react-icons/cg';
import {GiNightSleep} from 'react-icons/gi';

const Recommendation = () => {
    return (
        <section className={css.container}>
            <div className={css.recomWrapper}>
                <div className={css.faceWrapper}>
                    <BiSolidFace className={css.face}/>
                </div>
                
                <h4>Healthy eating</h4>
                <p>
                    Healthy eating promotes weight control, disease prevention, 
                    better digestion, immunity, better clarity and mood.
                </p>
            </div>

            <div className={css.recomWrapper}>
                <div className={css.gymWrapper}>
                    <CgGym className={css.gym}/>
                </div>
                <h4>Regular exercise</h4>
                <p>
                    Exercise improves fitness, aids weight control, elevate mood,
                    and reduces disease risk, fostering wellness and longevity.
                </p>
            </div>

            <div className={[css.recomWrapper, css.last].join(' ')}>
                <div className={css.nightWrapper}>
                    <GiNightSleep className={css.night}/>
                </div>
                <h4>Adequate sleep</h4>
                <p>
                   Sleep enhances mental clarity, emotional stability and physical
                   wellness, promoting overall restoration and rejuvenation.
                </p>
            </div>
        </section>
    );
}
 
export default Recommendation;