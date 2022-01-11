import React from 'react';

const Contact = () => {
    return (
        <section>

            <div className="bg-info mb-5 pt-5 text-center d-flex flex-column border">
                <h5 >Contact</h5>
                <h2 className="mb-5">Always connect with us</h2>
                <input className="mb-2 w-50 m-auto" type="text" placeholder="Email Address*" />
                <input className="mb-2 w-50 m-auto" type="text" placeholder="Subject*" />
                <textarea className="m-2 w-50 m-auto" name="massage" placeholder="Massage" />
                <button type="" className="bg-primary text-white mt-5 mb-5 m-auto">Submit</button>
            </div>

        </section>
    );
};

export default Contact;