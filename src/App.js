import ReCAPTCHA from "react-google-recaptcha";
import {useState, createRef} from "react"

function App() {
  const recaptchaRef = createRef()
  const [capchaValue, setCapchaValue] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function onChange(value) {
    setCapchaValue(value)
  }

  function submitForm(e){
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if(!capchaValue){
      setError(true)
      return
    }

    console.log("capcha value:", recaptchaRef.current.getValue() )
    setSuccess(true)
  }

  return (
    <div className="container">
      <section className="page-content">
        <div className="alert alert-info">
          <p>
            This example use <span> react-google-recaptcha</span> package.<br/>
            You can find it <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-google-recaptcha">here</a>.
          </p>
          <p>
            The key used in this example is created by Google <span>for testing purpose</span> only.
          </p>
        </div>
        <h2>React Recaptcha Project</h2>
        <form onSubmit={submitForm}>
          {
            error && 
            <div className="alert alert-danger" role="alert">
              You have to select recaptcha! 
            </div>
          }
          {
            success && 
            <div className="alert alert-success " role="alert">
              Form has been successfully sent!
            </div>
          }
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />         
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
