import './style.css';

const Home = () => {
    return(
        <div className='home'>
            <div className='title'>
                <h1>
                    <p>Hi, I'm Nikki!</p>
                    <p>A teacher turned software developer! Thanks for coming to my Portfolio website. Take a look around!</p>
                </h1>
                <div className='person'>
                    <img src={`${process.env.PUBLIC_URL}/blue.jpg`} alt="Nikki Goodridge" />
                </div>
            </div>
        </div>
    )
}

export default Home
