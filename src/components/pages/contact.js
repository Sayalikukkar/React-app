import React from 'react';

function Contact() {
    return(
        <div>
             <section className="py-4 bg-warning">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home/Contact us
                            </h6>
                        </div>
                    </div>
              </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-left">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" palceholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" palceholder="Enter phone number" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">email Address</label>
                                        <input type="text" className="form-control" palceholder="Enter email address" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" palceholder="Type your message...."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow">Send Message</button>
                                    </div>

                                </div>
                                <div className="col-md-6 border-start">

                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>
                                        #xxx, Nasik, Maharashtra -45xxxx, India
                                    </p>
                                    <p>
                                        Phone: +91 88XXXXXXXX
                                    </p>
                                    <p>
                                        Email: email@admin.com
                                    </p>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Contact;