import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    return (
        const [formState, setFormState] = useState({ name: '', email: '', message: '' });

        const [errorMessage, setErrorMessage] = useState('');
        const { name, email, message } = formState;
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (!errorMessage) {
            console.log('Submit Form', formState);
          }
        };
      
        const handleChange = (e) => {
          if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
              setErrorMessage('Your email is invalid.');
            } else {
              setErrorMessage('');
            }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
          }
        };
      
        return (
          <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
              </div>
              <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button data-testid="button" type="submit">Submit</button>
            </form>
          </section>

//    const Contact = () => {
//         <div className="container contact-form">
//         <div className="contact-image">
//             <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
//         </div>
//         <form method="post">
//             <h3>Contact Me</h3>
//            <div className="row">
//                 <div className="col-md-6">
//                     <div className="form-group">
//                         <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
//                     </div>
//                     <div className="form-group">
//                         <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
//                     </div>
//                     <div className="form-group">
//                         <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="form-group">
//                         <textarea name="txtMsg" class="form-control" placeholder="Your Message *"></textarea>
//                     </div>
//                 </div>
//             </div>
//         </form>
// </div>
      );
    };

export default Contact
