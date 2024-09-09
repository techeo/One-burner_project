import React from "react";
import './ContactSalesPage.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ContactSalesPage = () => {

  const offices = [
    { country: 'NIGERIA', address: '33a, Adeola Odeku, Victoria Island, Lagos.', phone: '+234-(0)-8000000000' },
    { country: 'EGYPT', address: '72, Gamal El-Dewal El-Arabia St., Giza.', phone: '+20-(0)-35942495' },
    { country: 'MALI', address: '22, Badalabougou Est., Bamako.', phone: '+223-(0)-78175387' },
    { country: 'GHANA', address: '45, El-Senoussi Street, Accra', phone: '+233-(0)-27769189' },
    { country: 'KENYA', address: '41, Enterprise Rd., Industrial Area, Nairobi', phone: '+254-(0)-20356766' },
    { country: 'TANZANIA', address: 'Mbezi Beach, P.O.B: 70339, Dar Salaam', phone: '+255-(0)-222210119' },
    { country: 'SOUTH AFRICA', address: '474, Charlton Drive, Port Shepstone, Kwazulu-Natal', phone: '+27-(0)-85792678' },
    { country: 'TUNISIA', address: '13, Rue de Makhtar, Dhraa Gouvernorate Kasserine', phone: '+216-(0)-77367410' },
    { country: 'TOGO', address: '10, Fe rue des Echis, Lome', phone: '+228-(0)-22229600' },
  ];

  return (
    <div className="container">
        <Header/>
    <div className="contact-container">
      <div className="contact-form">
        <form>
          <div className="input-group">
            <div>
              <label>Last Name</label>
              <input type="text"/>
            </div>
            <div>
              <label>First Name</label>
              <input type="text"  />
            </div>
          </div>
          <label>Work Email</label>
          <input type="email"  />
          
          <label>Phone Number</label>
          <input type="tel" />

          <label>Product of Interest</label>
          <select>
            <option>Select an option</option>
            {/* Add options here */}
          </select>

          <div className="input-group">
            <div>
              <label>Company Name</label>
              <input type="text"  />
            </div>
            <div>
              <label>Company Size</label>
              <select>
                <option>Select an option</option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          <label>How can our expert help you?</label>
          <textarea></textarea>

          <button type="submit">Contact Us</button>
        </form>
      </div>

      <div className="contact-info">
      <h2>Request a call from an expert</h2>
        <p>
          Having thoughts on which product works best for you? Fill the form and our
          expert will reach out to you.
        </p>
        <div className="offices-container">
      <h2>Our offices around Africa</h2>
      <div className="offices-grid">
        {offices.map((office, index) => (
          <div key={index} className="office">
            <h3>{office.country}</h3>
            <p>{office.address}</p>
            <p>{office.phone}</p>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactSalesPage;
