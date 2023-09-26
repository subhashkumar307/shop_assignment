import React, { Component } from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner-v3'
import Footer from './global-components/footer';
import Seo from './global-components/seo';
import HomeBanner from './Homebanner';

class presentations extends Component {

    render() {
        const title = "Presentations | APL Apollo Steel Tubes";
        const description = "Get the latest updates on APL Apollo investors, mergers, and earnings presented in a systematic way.";
        const metadata = "steel tube, steel tubes, steel pipe, steel pipes, electrical resistance welding pipe, electrical resistance welding pipes, electrical resistance welding tube, electrical resistance welding tubes, erw pipe, erw pipes, erw tube, erw tubes, erw steel pipe, erw steel pipes, erw steel tube, erw steel tubes, structural steel tube, structural steel pipe, pre engineered construction, pre engineered structure, pre engineered structures, pre engineered building, pre engineered buildings, peb, peb construction, steel construction, tubular construction, steel building, steel buildings, steel structure, steel structures, tubular building, tubular buildings, tubular structure, tubular structures, steel building solution, steel building solutions, steel construction solution, tubular building solutions, tubular construction solution, aalishaan, fabricator app, welder near me, lohar near me, home decor, steel decor, steel furniture, hollow steel section, hss, fabricator, square tube, rectangle tube, MS Pipe, Galvanized Pipe, Galvanized tube, G.P Pipe, Galvanized tube, Hollow Section, G.I Pipe, ERW Steel Pipe Manufacturers in India, ERW Steel tube Manufacturers in India, steel pipes manufacturer, MS pipes manufacturers, steel tube esg";

        let publicUrl = process.env.PUBLIC_URL + '/';
        let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''
        return (
            <div className='top_Container'>
                <Seo title={title} description={description} metadata={metadata} />
                <Navbar />
                {/* <Banner /> */}
                <HomeBanner />
                <div className={"ltn__apartments-plan-area pt-115--- " + CustomClass}>
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="ltn__tab-menu  backgroundColorPersentation ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                                    <div className="container">
                                        <div className="nav">
                                            <a data-bs-toggle="tab" href="#liton_tab_3_1">Investor Presentations</a>
                                            <a data-bs-toggle="tab" href="#liton_tab_3_2">Merger Presentations</a>
                                            <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_3">Earnings Presentations</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content container">
                                    <div className="tab-pane fade" id="liton_tab_3_1">
                                        <div className="ltn__apartments-tab-content-inner pb-70">
                                            <div className="row w-100">

                                                <div className="col-12">
                                                    <div className="tab-content" id="v-tabs-tabContent">
                                                        <div
                                                            className="tab-pane fade show active"
                                                            id="v-tabs-home"
                                                            role="tabpanel"
                                                            aria-labelledby="v-tabs-home-tab"
                                                        >
                                                            <table className="table table-striped custab" cellspacing="0" cellpadding="0">
                                                                <thead>
                                                                    <tr className="headingbar" style={{ background: '#00AAB4', color: '#fff' }}>
                                                                        <th>Financial Year</th>
                                                                        <th className="text-center">Download</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>August 2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="assets/img/others/APL-Apollo-Q1FY24- Investor-ppt.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>May 2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="assets/img/others/APL-Apollo-Investor-PPT_May2023_2.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>

                                                                    {/* <tr>
                                                                        <td>May 2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="assets/img/others/APL-Apollo-Investor-PPT_May2023.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr> */}
                                                                    {/* <tr>
                                                                        <td>May 2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="assets/img/others/APL-Apollo-Investor.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr> */}

                                                                    {/* <tr>
                                                                        <td>May 2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="assets/img/others/APL-Apollo-Investor.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr> */}
                                                                    <tr>
                                                                        <td>February 2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Investor-PPT_Feb23.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>November 2022</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Investor-PPT_Nov22.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>July 2022</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Investor-PPT_July22.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>May 2022</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Investor-PPT_MAY22.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>January 2022</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Investor-PPT_JAN22.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>October 2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Presentation-Q2-Investor-Presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>August 2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Investor-Presentation-9-August.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>August 2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-New-Presentation-Q1FY22-Earnings-v4-1.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>June 2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Tubes-Investor-Presentation-FY21.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>January 2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/Investor-Presentation_APL-Apollo_Jan-2021.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>October 2020</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.s3.amazonaws.com/wp-content/uploads/2020/10/30104139/APL-Apollo-Tubes-Investor-Presentation-October-2020-F.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>August 2020</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/09/Investor-Presentation_Apl-Apollo_-August-2020.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>June 2020</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/09/APL-Apollo-Tubes-Investor-Presentation-June-2020.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>May 2020</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/09/APL-Apollo-Tubes-Investor-PresentationMay-2020-2.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>January 2020</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Investor-Presentation_APL-Apollo_Jan-2020.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>November 2019</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Investor-Presentation_APL-Apollo%20(1)2019.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>November 2018</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Investor-Presentation-Nov-2018-1.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>June 2018</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Investor-Presentation-June-2018.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>March 2018</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Investor-Presentation-March-2018.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>June 2017</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Investor-Presentation-June-2018.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>February 2017</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/investor-presentation-feb-2017.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>June 2016</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/ip-2016-june.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>November 2015</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Investor_Presentation_APL_Novmber_2015.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    {/* <tr>
                                                                    <td>June 2020</td>
                                                                    <td className="text-center">
                                                                        <a className="btn btn-light btn-xs"
                                                                            href="https://aplapollo.com/wp-content/uploads/2020/07/APL-Apollo-Tubes-Investor-Presentation-June-2020.pdf"
                                                                            target="_blank">Download</a>
                                                                    </td>
                                                                </tr> */}
                                                                    {/* <tr>
                                                                    <td>May 2020</td>
                                                                    <td className="text-center">
                                                                        <a className="btn btn-light btn-xs"
                                                                            href="https://aplapollo.com/wp-content/uploads/2020/07/may.pdf"
                                                                            target="_blank">Download</a>
                                                                    </td>
                                                                </tr> */}

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane fade" id="liton_tab_3_2">
                                        <div className="ltn__product-tab-content-inner pb-70">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="">
                                                        <div className="row col-md-12 custyle announce" id="announce">
                                                            <table className="table table-striped custab" cellspacing="0" cellpadding="0">
                                                                <thead>
                                                                    <tr className="headingbar" style={{ background: '#00AAB4', color: '#fff' }}>
                                                                        <th>Title</th>
                                                                        <th className="text-center">Download</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr></tr>
                                                                    <tr>
                                                                        <td>Merger of Apollo Tricoat Tubes Ltd. with APL Apollo Tubes Ltd. | February 2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/Merger-of-Apollo-Tricoat-Tubes-Ltd.-with-APL-Apollo-Tubes-Ltd.-Presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Order of NCLT | November 2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/Order-of-NCLT-30.11.2021.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                    <div className="wpb_column vc_column_container vc_col-sm-4">
                                                        <div className="vc_column-inner">
                                                            <div className="wpb_wrapper"></div>
                                                        </div>
                                                    </div>
                                                    <div className="wpb_column vc_column_container vc_col-sm-8">
                                                        <div className="vc_column-inner">
                                                            <div className="wpb_wrapper">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane fade active show" id="liton_tab_3_3">
                                        <div className="ltn__product-tab-content-inner pb-70">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="">
                                                        <div className="row col-md-12 custyle announce" id="announce">
                                                            <table className="table table-striped custab" cellspacing="0" cellpadding="0">
                                                                <thead>
                                                                    <tr className="headingbar" style={{ background: '#00AAB4', color: '#fff' }}>
                                                                        <th>Financial Year</th>
                                                                        <th>Quarter</th>
                                                                        <th className="text-center">Download</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>August 2023</td>
                                                                        <td>Q1 FY2024</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="assets/img/others/APL-Apollo-Tubes-Q1FY24 -Earningsppt-2.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>May 2023</td>
                                                                        <td>Q4 FY2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="assets/img/others/APL-Apollo-Tubes-Q4FY23-Result-2.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>

                                                                    {/* <tr>
                                                                        <td>May 2023</td>
                                                                        <td>Q4 FY2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="assets/img/others/APL-Apollo-Tubes-Q4FY23-Result.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr> */}
                                                                    {/* <tr>
                                                                        <td>May 2023</td>
                                                                        <td>Q4 FY2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="assets/img/others/APL-Apollo-final.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr> */}
                                                                    <tr>
                                                                        <td>February 2023</td>
                                                                        <td>Q3 FY2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Tubes-Q3FY23-Resuls-Presentation_1.0.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>November 2022</td>
                                                                        <td>Q2 FY2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Tubes-Q2FY23-Resuls-Presentation-1.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>July 2022</td>
                                                                        <td>Q1 FY2023</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Tubes-Earnings-PPT-Q1FY23.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>May 2022</td>
                                                                        <td>Q4 FY2022</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Tubes-Q4FY22_Earnings-1-1.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>January 2022</td>
                                                                        <td>Q3 FY2022</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Tubes-Q3FY22_Earnings.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>October 2021</td>
                                                                        <td>Q2 FY2022</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Tubes-Q2FY22-Earnings-Presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>August 2021</td>
                                                                        <td>Q1 FY2022</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-Apollo-Tubes-Q1FY22-Earnings-Presentation-9-August-1.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>August 2021</td>
                                                                        <td>Q1 FY2022</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-New-Presentation-Q1FY22-Earnings-v4.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>June 2021</td>
                                                                        <td>Q4 FY2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-APOLLO-Q4FY21-Earnings-Presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>January 2021</td>
                                                                        <td>Q3 FY2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/06/APL-APOLLO-Q3FY21-Earnings-presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>October 2020</td>
                                                                        <td>Q2 FY2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.s3.amazonaws.com/wp-content/uploads/2020/10/30104155/APL-Apollo-Tubes-Q2FY21-Earnings-presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>August 2020</td>
                                                                        <td>Q1 FY2021</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/09/APL-Apollo-Tubes-Q1FY21-Earnings-presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>June 2020</td>
                                                                        <td>Q4 FY2020</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/APL-Apollo-Tubes-Q4FY20-Earnings-presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>January 2020</td>
                                                                        <td>Q3 FY2020</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Earnings-Presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>November 2019</td>
                                                                        <td>Q2 FY2020</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/APL-Apollo-Tubes-Q2-Presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>August 2019</td>
                                                                        <td>Q2 FY2020</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/APL-Apollo-Q1-FY20-Earnings-Presentation-final.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>March 2019</td>
                                                                        <td>Q4 FY2019</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/APL-Apollo-Q4-FY19-Earnings-Presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>February 2019</td>
                                                                        <td>Q3 & 9M FY19</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/APL-Apollo-Q3-9M-FY19-Earnings-Presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>November 2018</td>
                                                                        <td>Q2 & H1 FY2019</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Earnings-Presentation-November-2018.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>August 2018</td>
                                                                        <td>Q1 FY2019</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Earnings-Presentation-August-2018.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>May 2018</td>
                                                                        <td>Q4 & FY2018</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Earnings-Presentation-May-2018.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>January 2018</td>
                                                                        <td>Q3 & 9M FY2018</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Earnings-Presentation-JaN-201N.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>December 2017</td>
                                                                        <td>Q2 & H1 FY2018</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Earnings-Presentation-December-2017.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>September 2017</td>
                                                                        <td>Q1 FY2018</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Earnings-presentations-Sept-2017.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>May 2017</td>
                                                                        <td>Q4 & FY2017</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Earnings-Presentation-May-2017.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>January 2017</td>
                                                                        <td>Q3 & 9M FY2017</td>
                                                                        <td className="text-center">
                                                                            <a className="btn btn-light btn-xs"
                                                                                href="https://aplapollo.com/wp-content/uploads/2020/07/Q3-9M-FY17-Earnings-Presentation.pdf"
                                                                                target="_blank">Download</a>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                    <div className="wpb_column vc_column_container vc_col-sm-4">
                                                        <div className="vc_column-inner">
                                                            <div className="wpb_wrapper"></div>
                                                        </div>
                                                    </div>
                                                    <div className="wpb_column vc_column_container vc_col-sm-8">
                                                        <div className="vc_column-inner">
                                                            <div className="wpb_wrapper">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default presentations;


