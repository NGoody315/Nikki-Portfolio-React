import './style.css'

const Portfolio = () => {
    return (
        <div className='row small-up-2 medium-up-3 large-up-4'>
            {/*Run Buddy */}
            <div className='column'>
            <a href='https://ngoody315.github.io/run-buddy/' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/runbuddy.jpg`} />
            </a>
            <h5>Run Buddy</h5>
            <h6>HTML/CSS</h6>
            </div>
            {/*Passwrod Generator */}
            <div className='column'>
            <a href='https://ngoody315.github.io/PasswordGenerator/' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/PasswordGenerator.jpg`} />
            </a>
            <h5>Password Generator</h5>
            <h6>HTML/CSS/JS</h6>
            </div>
            {/*Coding Quiz */}
            <div className='column'>
            <a href='https://ngoody315.github.io/CodingQuiz/' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/CodingQuiz.jpg`} />
            </a>
            <h5>Coding Quiz</h5>
            <h6>HTML/CSS/JS</h6>
            </div>
            {/*Weather App*/}
            <div className='column'>
            <a href='https://ngoody315.github.io/WeatherApp/' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/WeatherApp.jpg`} />
            </a>
            <h5>Weather App</h5>
            <h6>HTML/CSS/JS/APIs</h6>
            </div>
            {/*NOVID*/}
            <div className='column'>
            <a href='https://prestongeyer713.github.io/novid/' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/Novid.jpg`} />
            </a>
            <h5>NoVID</h5>
            <h6>HTML/CSS/JS/APIs</h6>
            </div>
            {/*Love Monster*/}
            <div className='column'>
            <a href='https://github.com/NGoody315/Love-Monster' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/logo-normal-200.png`} />
            </a>
            <h5>Love Monster</h5>
            <h6>JS/MySQL/CSS/Handlebars</h6>
            </div>
        </div>
    )
}

export default Portfolio
