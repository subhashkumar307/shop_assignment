import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="notfound-page">
          <div className="conatiner">
            <div className="row">
              <div className="col-lg-6 mx-auto text-center">
                <h1>404 - Page Not Found</h1>
                <p>The requested page does not exist.</p>
                <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                  <Link to="/" style={{ color: 'black' }}>Back to Home</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default NotFoundPage;