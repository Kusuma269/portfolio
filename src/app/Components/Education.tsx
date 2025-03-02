export const EducationFlipBox = () => {
    return (
        <div className="container" id="skills">
             <h1 className="main-heading">EDUCATION DETAILS</h1>
            <div className="grid-container">
                <div className="flip-container">
                    <div className="flip-box">
                        <div className="flip-box-front">
                            B.Tech
                        </div>
                        <div className="flip-box-back">
                            <h2>Electrical & Electronics Engineering</h2>
                            <p>Pragati Engineering College|  Surampalem|2019 - 2023</p>
                            <p>Grade: 7.28/10</p>
                        </div>
                    </div>
                </div>

               
                <div className="flip-container">
                    <div className="flip-box">
                        <div className="flip-box-front">
                            Intermediate
                        </div>
                        <div className="flip-box-back">
                            <h2>Intermediate</h2>
                            <p>Gayatri Junior College<br></br> | MPC  | 2017- 2019</p>
                            <p>Grade: 8.89/10</p>
                        </div>
                    </div>
                </div>

             
                <div className="flip-container">
                    <div className="flip-box">
                        <div className="flip-box-front">
                            Secondary School <br>
                            </br> of Education
                        </div>
                        <div className="flip-box-back">
                            <h2>Secondary School of Education</h2>
                            <p>Sri Chaitanya Techno School | 2016 - 2017</p>
                            <p>Grade: 9.8/10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationFlipBox;