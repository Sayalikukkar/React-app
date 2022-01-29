import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <section className="section footer bg-secondary text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p className="text-white">
                        BetterLorem IpsumGenerator yetanother dummycontent generatoror WordPress
                        BetterLorem IpsumGenerator yetanother dummycontent generatoror WordPress
                        BetterLorem IpsumGenerator yetanother dummycontent generatoror WordPress

                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1"> #65, Mumbai maharashtra India.</p></div>
                        <div><p className="text-white mb-1">+91 8888XXXX70</p></div>
                        <div><p className="text-white mb-1">+91 9999XXXX80</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>
                </div>

            </div>

        </section>
    );

}

export default Footer;