import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const Text1 = data.text1;
        const Text2 = data.text2;
        const Text3 = data.text3;
        const my_text = `Result is:%0A - Text1: ${Text1} %0A - Text2: ${Text2} %0A - Text3: ${Text3}`
        const token = "5020349627:AAG0Kl5T1G_LX8DMlRadgKEtOAllxlFPMF0";
        const chat_id = -625831457
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

        const api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        alert("Massage successfully sended. Thank you");
    }

    return (
        <section className="container">

            {/* <div className="bg-info mb-5 pt-5 text-center d-flex flex-column border">
                <h5 >Contact</h5>
                <h2 className="mb-5">Always connect with us</h2>
                <input className="mb-2 w-50 m-auto" type="text" placeholder="Email Address*" />
                <input className="mb-2 w-50 m-auto" type="text" placeholder="Subject*" />
                <textarea className="m-2 w-50 m-auto" name="massage" placeholder="Massage" />
                <button type="" className="bg-primary text-white mt-5 mb-5 m-auto">Submit</button>
            </div> */}
            <div>

                <form className="pt-5 pb-5 d-flex bg-info flex-column text-center" onSubmit={handleSubmit(onSubmit)}>
                    <h5 >Contact</h5>
                    <h2 className="mb-5">Always connect with us</h2>
                    <input className="m-auto w-50 p-1" placeholder="Email Address*" {...register("text1")} />
                    <input className="m-auto mt-2 w-50 p-1" placeholder="Subject*" {...register("text2")} />
                    <textarea className="m-auto mt-2 w-50 p-1" placeholder="Massage*" {...register("text3")}/>
                    <input className="m-auto mt-5 bg-primary text-white" type="submit" />
                </form>

            </div>

        </section>
    );
};

export default Contact;