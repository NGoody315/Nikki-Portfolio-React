const Resume = () => {
    return (
        <div className="tech-res row">
            <div className='column'>
            <a href='/Jeanne Goodridge Resume 2021 - tech.docx' download>
                <img src={`${process.env.PUBLIC_URL}/tech-resume.png`} />
            </a>
            <h5>Coding Resume</h5>
            <h6>Click to Download</h6>
            </div>
            <div className='column'>
            <a href='/2020 Resume - teaching.doc' download>
                <img src={`${process.env.PUBLIC_URL}/teaching-resume.png`} />
            </a>
            <h5>Teaching Resume</h5>
            <h6>Click to Download</h6>
            </div>
        </div>
    )
}

export default Resume
