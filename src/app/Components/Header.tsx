 const PortfolioHeader = () => {
    return (
        <header className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBMAwbmBeMEcQcNbk-kEenRVtbNCtuoS5UA&s"></img>
            <div className="header-content">
                <h1 className="name">Kusuma Mungi</h1>
            </div>
            <nav className="nav">
                <a href="#about">Home</a>
                <a href="#home">About</a>
                <a href="#projects">Skills</a>
                <a href="#skills">Education</a>
                <a href="#experience">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default PortfolioHeader;