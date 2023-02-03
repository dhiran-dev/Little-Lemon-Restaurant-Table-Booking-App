import React from 'react'
import restaurantfood from '../assets/restauranfood.jpg';
import greekSalad from '../assets/greek salad.jpg';
import lemondessert from '../assets/lemon dessert.jpg';
import bruchetta from '../assets/bruchetta.jpg';
import RestaurantImage from '../assets/restaurant.jpg'
import ChefsImage from '../assets/chefs.jpg'
import Person1 from '../assets/person1.png'
import Person2 from '../assets/person2.png'
import Person3 from '../assets/person3.png'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <main>
        <section id='hero'>
          <div className='container'>
            <div class='hero-content'>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>Welcome to Little Lemon, a vibrant and cozy restaurant where we serve up delicious, homemade meals made with only the freshest ingredients. Our menu features a wide variety of dishes to suit any taste, from classic comfort food to international flavors.</p>
              <button><Link to="booking">Reserve a table</Link></button>
            </div>
            <img src={restaurantfood} alt='resturant Food' />
          </div>
        </section>
        <section id='highlights'>
          <div className='container'>
            <div className='promo-intro'>
              <div className='promo-header'>
                <h2>This Weeks Specials!!</h2>
              </div>
              <div className='promo-button'>
                <button > Online menu</button>
              </div>
            </div>
            <div className='promo-food'>
              <div className='promo-item'>
                <img src={greekSalad} alt='Greek Salad' />
                <h4>Greek salad <span>$12.99</span></h4>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <button>
                  <h5>Order for delivery</h5>
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4708 1.72713C14.4708 0.8993 13.7206 0.221985 12.8036 0.221985H10.3028V1.72713H12.8036V3.72145L9.9027 6.99513H6.96843V3.23227H3.63404C1.79179 3.23227 0.299652 4.57938 0.299652 6.24256V8.50028H1.96685C1.96685 9.74955 3.08387 10.758 4.46764 10.758C5.85141 10.758 6.96843 9.74955 6.96843 8.50028H10.7029L14.4708 4.24825V1.72713ZM4.46764 9.25285C4.00916 9.25285 3.63404 8.91419 3.63404 8.50028H5.30124C5.30124 8.91419 4.92612 9.25285 4.46764 9.25285Z" fill="black" />
                    <path d="M6.96844 0.974548H2.80045V2.47968H6.96844V0.974548Z" fill="black" />
                    <path d="M14.4708 6.24255C13.087 6.24255 11.97 7.251 11.97 8.50026C11.97 9.74952 13.087 10.758 14.4708 10.758C15.8546 10.758 16.9716 9.74952 16.9716 8.50026C16.9716 7.251 15.8546 6.24255 14.4708 6.24255ZM14.4708 9.25283C14.0123 9.25283 13.6372 8.91417 13.6372 8.50026C13.6372 8.08635 14.0123 7.74769 14.4708 7.74769C14.9293 7.74769 15.3044 8.08635 15.3044 8.50026C15.3044 8.91417 14.9293 9.25283 14.4708 9.25283Z" fill="black" />
                  </svg>
                </button>
              </div>
              <div className='promo-item'>
                <img src={lemondessert} alt='lemondessert' />
                <h4>Lemon dessert<span>$12.99</span></h4>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <button>
                  <h5>Order for delivery</h5>
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4708 1.72713C14.4708 0.8993 13.7206 0.221985 12.8036 0.221985H10.3028V1.72713H12.8036V3.72145L9.9027 6.99513H6.96843V3.23227H3.63404C1.79179 3.23227 0.299652 4.57938 0.299652 6.24256V8.50028H1.96685C1.96685 9.74955 3.08387 10.758 4.46764 10.758C5.85141 10.758 6.96843 9.74955 6.96843 8.50028H10.7029L14.4708 4.24825V1.72713ZM4.46764 9.25285C4.00916 9.25285 3.63404 8.91419 3.63404 8.50028H5.30124C5.30124 8.91419 4.92612 9.25285 4.46764 9.25285Z" fill="black" />
                    <path d="M6.96844 0.974548H2.80045V2.47968H6.96844V0.974548Z" fill="black" />
                    <path d="M14.4708 6.24255C13.087 6.24255 11.97 7.251 11.97 8.50026C11.97 9.74952 13.087 10.758 14.4708 10.758C15.8546 10.758 16.9716 9.74952 16.9716 8.50026C16.9716 7.251 15.8546 6.24255 14.4708 6.24255ZM14.4708 9.25283C14.0123 9.25283 13.6372 8.91417 13.6372 8.50026C13.6372 8.08635 14.0123 7.74769 14.4708 7.74769C14.9293 7.74769 15.3044 8.08635 15.3044 8.50026C15.3044 8.91417 14.9293 9.25283 14.4708 9.25283Z" fill="black" />
                  </svg>
                </button>
              </div>
              <div className='promo-item'>
                <img src={bruchetta} alt='Greek Salad' />
                <h4>Greek salad<span>$12.99</span></h4>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <button>
                  <h5>Order for delivery</h5>
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4708 1.72713C14.4708 0.8993 13.7206 0.221985 12.8036 0.221985H10.3028V1.72713H12.8036V3.72145L9.9027 6.99513H6.96843V3.23227H3.63404C1.79179 3.23227 0.299652 4.57938 0.299652 6.24256V8.50028H1.96685C1.96685 9.74955 3.08387 10.758 4.46764 10.758C5.85141 10.758 6.96843 9.74955 6.96843 8.50028H10.7029L14.4708 4.24825V1.72713ZM4.46764 9.25285C4.00916 9.25285 3.63404 8.91419 3.63404 8.50028H5.30124C5.30124 8.91419 4.92612 9.25285 4.46764 9.25285Z" fill="black" />
                    <path d="M6.96844 0.974548H2.80045V2.47968H6.96844V0.974548Z" fill="black" />
                    <path d="M14.4708 6.24255C13.087 6.24255 11.97 7.251 11.97 8.50026C11.97 9.74952 13.087 10.758 14.4708 10.758C15.8546 10.758 16.9716 9.74952 16.9716 8.50026C16.9716 7.251 15.8546 6.24255 14.4708 6.24255ZM14.4708 9.25283C14.0123 9.25283 13.6372 8.91417 13.6372 8.50026C13.6372 8.08635 14.0123 7.74769 14.4708 7.74769C14.9293 7.74769 15.3044 8.08635 15.3044 8.50026C15.3044 8.91417 14.9293 9.25283 14.4708 9.25283Z" fill="black" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id='testimonials'>
          <div className='container'>
            <h1>Testimonials</h1>
            <div className='test-content'>
              <div className='content'>
                <img src={Person1} alt='person1' />
                <h4>John Doe</h4>
                <h4>5.0</h4>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis?"</p>
              </div>
              <div className='content'>
                <img src={Person2} alt='person2' />
                <h4>Sara Smith</h4>
                <h4>4.5</h4>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis?"</p>
              </div>
              <div className='content'>
                <img src={Person3} alt='person3' />
                <h4>Jack Sparrow</h4>
                <h4>4.7</h4>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis?"</p>
              </div>
            </div>
          </div>
        </section>
        <section id='about'>
          <div className='container'>
            <div className='about-left'>
              <h1>About</h1>
              <p>Welcome to Little Lemon, a vibrant and cozy restaurant where we serve up delicious, homemade meals made with only the freshest ingredients. Our menu features a wide variety of dishes to suit any taste, from classic comfort food to international flavors. Whether you're in the mood for a hearty breakfast, a light lunch, or a satisfying dinner, we have something for everyone.
                Our menu includes everything from omelets and pancakes to sandwiches and salads, as well as a selection of entrees that are sure to please. Our team is dedicated to providing excellent service and a welcoming atmosphere. We strive to make every visit to Little Lemon a memorable one and we look forward to serving you soon.
                Thank you for choosing Little Lemon, we hope to see you soon!</p>
            </div>
            <div className="about-right">
              <img src={ChefsImage} alt="Little Lemon Restaurant" />
              <img src={RestaurantImage} alt="Little Lemon Restaurant Chefs" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main