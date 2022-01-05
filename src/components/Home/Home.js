import React from 'react';
import HomepageServices from '../HomepageServices/HomepageServices';
import './Home.css';
import myImage from '../../Images/0001.jpg'
import myImage2 from '../../Images/0002.jpg'
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    return (
         <div>
            <img className="cover img-fluid" src={myImage} alt=""/>
            <div className="d-flex mt-5">
                <img className="w-50 mx-4 mb-5 img-fluid" src={myImage2} alt=""/>
                <h3 className="welcoming w-50">Who wouldn't want to arrange an event that will impress the guests with it's top class lunch or dinner? Appetite House ensures that each guest will have their appetite fulfilled with gourmet dishes smoked with fume and flavor. We aim to perform the best and we aim to be the best. This is Appetite House.</h3>
            </div>
            <HomepageServices></HomepageServices>
            <Reviews></Reviews>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;