import "./ContactUs.css"

export default function ContactUs() {
  return (
    <div className="contact-us">
  <h2>Contact Us</h2>
  <p>
    We're here to help! Please fill out the form below and we'll get back to you
    as soon as possible.
  </p>
  <form>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea className="form-control" id="message" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  <div className="contact-info">
        <h3>Our Contact Information</h3>
        <p>
          <strong>Phone:</strong> 1-800-555-1234
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:support@logaxp.com">support@logaxp.com</a>
        </p>
      </div>

</div>

  )
}
