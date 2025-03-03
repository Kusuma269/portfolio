 export const ProfileSection = () => {
    return (
        <div className="profile-container" id="about">
    <div className="profile-content">
        <div className="profile-image-container1">
            <img 
                src="../../WhatsApp Image 2025-02-27 at 7.51.10 PM.jpeg" 
                alt="Profile" 
                className="profile-image1" 
            />
        </div>
        <div className="profile-text">
            <h1>Hey I&apos;m <span className="highlight">Kusuma Mungi</span></h1>
            <h2>I&apos;m a <span className="highlight">Fresher</span></h2>
            <p>
                I&apos;m a passionate and creative software developer with a strong foundation in both front-end and back-end technologies. 
                I thrive on transforming complex challenges into elegant, user-friendly solutions, whether I&apos;m building responsive web 
                applications or scalable back-end systems. My journey in development is driven by a commitment to continuous learning and a 
                love for coding that emphasizes clean, maintainable code and innovative problem-solving.
            </p>
            <div className="social-icons">
                <i>
                    <img src="https://i.pinimg.com/564x/06/68/e8/0668e8756248014503ce29515f768fcc.jpg" alt="Social Icon 1" />
                </i>
                <i>
                    <img src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/05/Linkedin-logo-purple-PNG.png" alt="Social Icon 2" />
                </i>
                <i>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7nCwuEAIV1aZoOa-6LCbxX9wQ2GyDGgBRA&s" alt="Social Icon 3" />
                </i>
            </div>
            <button className="download-cv">Download CV</button>
        </div>
    </div>
</div>

    );
};

