
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SendEmail = () => {
    const [desc, setDesc] = useState('');
    const [email, setEmail] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0vaow7v', 'pontoon_calc', form.current, 'sH3kR-eZh3e7uucnc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="text-end me-3">
                {/* <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" /> */}
             <textarea type="text" className="form-control form-control-sm" placeholder="If Other, Please Explain" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
             <input type="email" className="form-control form-control-sm mt-2" placeholder="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
             <button type="submit" class="btn btn-primary mt-1">Send</button>
            </form>
        </>
    )
}

export default SendEmail