import React from 'react';
import './styles.css';

function Newsletter() {
    return <section className="newsletter text-center" id="newsletter">
      
    <div className="pricing-header form-signin px-3 py-3 pt-md-5 pb-md-4 mx-auto">
      <h1 className="mb-3 font-weight-normal">Newsletter Signup</h1>
        
        <form action="/" method="POST">  
        <input type="text" className="form-control top" placeholder="First Name" name="fName" required/>
        <input type="text" className="form-control middle" placeholder="Last Name" name="lName" required/>
        <input type="email" className="form-control bottom" placeholder="Email" name="email" required/>
  
        <button className="btn btn-lg btn-info  btn-block" type="submit">Sign up</button>
      </form>
      </div>  
  </section>
}

export default Newsletter;