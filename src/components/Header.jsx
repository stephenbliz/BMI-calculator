import { useState, useRef } from 'react'
import {GiCircleCage} from 'react-icons/gi'
import css from './header.module.css'

const Header = () => {
    const [fields, setFields] = useState({
        height: '',
        weight: '',
        type:'metric'
    })

    const [result, setResult] = useState();
    const heightRef = useRef();
    const weightRef = useRef();

    const calculateBmi = (weight, height)=>{
        if(weightRef.current.value.length > 0 && heightRef.current.value.length > 0){
            if(fields.type === 'metric'){
                const meterHeight = height / 100;
                setResult((weight / meterHeight**2).toFixed(1));
            }else{
                const bmi = weight / height**2;
                setResult((bmi * 703).toFixed(1));
            }
        }else{
            setResult('');
        }
    }

    const handleReset = ()=>{
        fields.weight = '';
        fields.height = '';
        setResult('');
    }
    



    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setFields({...fields, [name]: value});
    }

    return (
        <header className={css.container}>
            <section className={css.description}>
                <GiCircleCage />
                <h1>body mass index calculator</h1>
                <p>
                    Better understand your weight in relation to your
                    height using our body mass index (BMI) calculator.
                    While BMI is not the sole determinant of a healthy
                    weight it offers a valuable starting point to evaluate
                    your overall health and wellbeing.
                </p>
            </section>
            <section className={css.calculation}>
                <h4>Enter your details below</h4>
                <form>
                    <div className={css.radioContainer}>
                        <div className={css.radio}>
                        <input 
                            type="radio"
                            name='type'
                            value='metric'
                            onClick={handleReset}
                            checked={fields.type === 'metric'}
                            onChange={(e)=>handleChange(e)} 
                        /> Metric
                        </div>

                        <div className={css.radio}>
                        <input 
                            type="radio"
                            value='imperial'
                            name='type'
                            onClick={handleReset}
                            checked={fields.type === 'imperial'}
                            onChange={(e)=>handleChange(e)} 
                        /> Imperial
                        </div>
                    </div>

                    <div className={css.inputContainer}>
                        <div className={css.input}>
                            <label>height</label>
                            <input 
                                type="text"
                                placeholder="0"
                                ref={heightRef}
                                value={fields.height} 
                                name='height'
                                onKeyUp={()=>calculateBmi(fields.weight, fields.height)}
                                onChange={(e)=>handleChange(e)} 
                            />
                            {fields.type === 'metric' && <span>cm</span>}
                            {fields.type === 'imperial' && <span>in</span>}
                        </div>

                        <div className={css.input}>
                            <label>Weight</label>
                            <input 
                                type="text"
                                placeholder="0" 
                                name='weight'
                                ref={weightRef}
                                value={fields.weight}
                                onKeyUp={()=>calculateBmi(fields.weight, fields.height)}
                                onChange={(e)=>handleChange(e)}
                                 
                            />
                            {fields.type === 'metric' && <span>kg</span>}
                            {fields.type === 'imperial' && <span>lb</span>}
                        </div>
                    </div>
                </form>

                {!result &&<div className={css.resultDisplay}>
                    <h4>Welcome!</h4>
                    <p>
                        Enter your height and weight and you will see your BMI result.
                    </p>
                    <div className={css.circle}></div>
                </div>}

                {result && <div className={css.resultDisplay}>
                    <div className={css.resultWrapper}>
                        <div className={css.result}>
                            <p>Your BMI is...</p>
                            {<h1>{result}</h1>}
                        </div>

                        {result >= 18.5 && result < 25 && <p className={css.resultComment}>
                            Your BMI suggests that you are healthy weight.
                            Your ideal weight is between <strong>63.3kgs - 85.2kgs</strong>.
                        </p>}

                        {result < 18.5 && <p className={css.resultComment}>
                            Your BMI suggests that you are underweight.
                            Your ideal weight is between <strong>63.3kgs - 85.2kgs</strong>.
                        </p>}

                        {result >= 25 && result < 30 && <p className={css.resultComment}>
                            Your BMI suggests that you are overweight.
                            Your ideal weight is between <strong>63.3kgs - 85.2kgs</strong>.
                        </p>}

                        {result >= 30 && <p className={css.resultComment}>
                            Your BMI suggests that you are obesed.
                            Your ideal weight is between <strong>63.3kgs - 85.2kgs</strong>.
                        </p>}

                        {result =='NaN' && <p className={css.resultComment}>
                            {setResult('')}
                            <p>Inputs must be a number...</p>
                        </p>}
                    </div>
                    <div className={css.circle}></div>
                </div>}
            </section>
        </header>
    );
}
 
export default Header;