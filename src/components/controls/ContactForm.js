import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../styles/css/ContactForm.css'
import video_1 from '../../styles/videos/video-1.mp4'
import { useIntl } from 'react-intl';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  const MyComponent = () => {
      const intl = useIntl()
      console.log(intl);
      console.log(intl.locale);
      return <div>{`Current locale: ${intl.locale}`}</div>
  }

  return (
    <div className='ContactForm'>
      <video src={video_1} autoPlay loop muted />
      <br></br>
      <h1 style={{color: 'white'}}>Email us at "inquiry@soltechinnovations.com"</h1>
      <br></br>
      <div>{MyComponent}</div>
      <br></br>
      <div className='address' style={{ columns:2, textAlign: 'left'}}>
        <h3 style={{color:'white', textAlign:'left', padding:10}}>
          Phone: +1-416-230-0406
        </h3>
        <h3 style={{color:'white', textAlign:'right', padding:10}}>
          Address: Suite 501, 77 City Center Dr, Mississauga L5B 1MH
        </h3>
        
      </div>
    </div>

    
//     <div className='ContactForm'>
//       <video src={video_1} autoPlay loop muted />
//       <div className='container'>
//         <div className='row'>
//           <div className='col-12 text-center'>
//             <div className='contactForm'>
              
//               <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
//                 {/* Row 1 of form */}
//                 <div className='row formRow'>
//                   <div className='col-6'>
//                     <input
//                       type='text'
//                       name='name'
//                       {...register('name', {
//                         required: {
//                           value: true,
//                           message: 'Please enter your name'
//                         },
//                         maxLength: {
//                           value: 30,
//                           message: 'Please use 30 characters or less'
//                         }
//                       })}
//                       className='form-control formInput'
//                       placeholder='Name'
//                     ></input>
//                     {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
//                   </div>
//                   <div className='col-6'>
//                     <input
//                       type='email'
//                       name='email'
//                       {...register('email', {
//                         required: true,
//                         pattern:
//                           /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//                       })}
//                       className='form-control formInput'
//                       placeholder='Email address'
//                     ></input>
//                     {errors.email && (
//                       <span className='errorMessage'>Please enter a valid email address</span>
//                     )}
//                   </div>
//                 </div>
//                 {/* Row 2 of form */}
//                 <div className='row formRow'>
//                   <div className='col'>
//                     <input
//                       type='text'
//                       name='subject'
//                       {...register('subject', {
//                         required: {
//                           value: true,
//                           message: 'Please enter a subject'
//                         },
//                         maxLength: {
//                           value: 75,
//                           message: 'Subject cannot exceed 75 characters'
//                         }
//                       })}
//                       className='form-control formInput'
//                       placeholder='Subject'
//                     ></input>
//                     {errors.subject && (
//                       <span className='errorMessage'>{errors.subject.message}</span>
//                     )}
//                   </div>
//                 </div>
//                 {/* Row 3 of form */}
//                 <div className='row formRow'>
//                   <div className='col'>
//                     <textarea
//                       rows={3}
//                       name='message'
//                       {...register('message', {
//                         required: true
//                       })}
//                       className='form-control formInput'
//                       placeholder='Message'
//                     ></textarea>
//                     {errors.message && <span className='errorMessage'>Please enter a message</span>}
//                   </div>
//                 </div>

//                 <button className='submit-btn' disabled={disabled} type='submit'>
//                   Submit
//                 </button>
//               </form>
//             </div>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </div>
  );
};

export default ContactForm;