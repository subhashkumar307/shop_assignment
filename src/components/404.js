import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Error from './section-components/error';
import Footer from './global-components/footer';

const ErrorPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="404 Page" />
        <Error />
        <Footer />
    </div>
}

export default ErrorPage

