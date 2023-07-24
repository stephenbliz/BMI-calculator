import css from './limitation.module.css';
import {LiaTransgenderSolid} from 'react-icons/lia';
import {PiCakeLight} from 'react-icons/pi';
import {GiBiceps} from 'react-icons/gi';
import {PiBabyLight} from 'react-icons/pi';
import {IoIosBody} from 'react-icons/io';

const Limitation = () => {
    return (
        <section className={css.container}>
            <div>
                <h2 className={css.h2}>Limitations of BMI</h2>
                <p>
                    Although BMI is often a practical indicator of healthy weight, 
                    it is not suited for every person. Specific groups should carefully
                    consider their BMI outcomes, and in certain cases the measurement 
                    may not be beneficial to use.
                </p>
            </div>
            <div className={css.limiWrapper}>
                <div className={css.divGender}>
                    <div className={css.iconWrapper}>
                        <LiaTransgenderSolid className={css.gender}/>  <span>Gender</span>
                    </div> 
                    <p>
                        The development and body fat composition of boys and girls
                        vary with age. Consequently, a child's age and gender are considered
                        when evaluating their BMI.
                    </p>
                </div>

                <div className={css.divAge}>
                    <div className={css.iconWrapper}>
                        <PiCakeLight className={css.age}/>  <span>Age</span>
                    </div> 
                    <p>
                        In aging individuals, increased body fat and muscle loss may cause 
                        BMI to underestimate body fat content.
                    </p>
                </div>

                <div className={css.divMuscle}>
                    <div className={css.iconWrapper}>
                        <GiBiceps className={css.muscle}/>  <span>Muscle</span>
                    </div> 
                    <p>
                        BMI may misclassify muscular individuals as overweight or obese,
                        as it doesn't differentiate muscle from fat.

                    </p>
                </div>

                <div className={css.divPreg}>
                    <div className={css.iconWrapper}>
                        <PiBabyLight className={css.preg}/>  <span>Pregnancy</span>
                    </div> 
                    <p>
                        Expectant mothers experience weight gain due to their growing 
                        baby. Maintaining a healthy pre-pregnancy BMI is advisable to 
                        minimise health risks for both mother and child.
                    </p>
                </div>

                <div className={css.divRace}>
                    <div className={css.iconWrapper}>
                        <IoIosBody className={css.race}/>  <span>Race</span>
                    </div>
                    <p>
                        Certain health concerns may affect individuals of some Black
                        and Asian origins at lower BMIs than others. To learn more, it
                        is adviced to discuss this with your GP or practice nurse.
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default Limitation;