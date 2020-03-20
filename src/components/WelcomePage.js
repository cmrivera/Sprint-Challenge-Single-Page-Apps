import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>

               <Nav>
             <Link to="/Characters">              <Button variant="outlined" color="primary"> Characters
            </Button>	           
          </Link>	              
          <Link to="/Search">	           
            <Button variant="outline" color="primary"> Search	
            </Button>            
          </Link>	             
          <Link to="/Locations">	           
            <Button variant="outlined" color="primary">	Locations            
          </Link>
          </Nav>

        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
