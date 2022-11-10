import { FcCalendar } from "react-icons/fc";
import { GoPerson } from "react-icons/go";
import { TbChevronRight } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import "../style/Style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ButtonPage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    alert("Your payment is successful");
    navigate("/lastpage");
  };
  let details = JSON.parse(localStorage.getItem("roomes"));
  return (
    <div id="whole-page">
      <h1
        style={{
          color: "#202843",
          fontSize: "1.4705882352941178em",
          marginTop: "30px",
          fontWeight: "bold",
        }}
      >
        Secure booking — only takes 2 minutes!
      </h1>
      <div className="box1">
        <FcCalendar style={{ height: "50px", width: "50px" }} />
        <div>
          <p id="box1-p1">
            Free cancellation before Tue, Aug 30, 6:00pm (property local time)
          </p>
          <p id="box1-p2">
            You can change or cancel this stay for a full refund if plans
            change. Because flexibility matters.
          </p>
        </div>
      </div>
      <div className="twopage">
        <div>
          <div className="box2">
            <div>
              <GoPerson style={{ height: "25px", width: "30px" }} />
            </div>
            <div>
              <p>
                <b>Room 1:</b> 2 Adults 1 King Bed Smoking
              </p>
              <p
                style={{
                  color: "green",
                  display: "flex",
                  marginTop: "7px",
                  alignItems: "center",
                }}
              >
                <TbChevronRight />
                Free parking <TbChevronRight />
                Free WiFi
              </p>
              {/* name.......  */}
              <div style={{ display: "flex" }}>
                <div className="inputdiv">
                  <p className="name">First Name</p>
                  <input
                    type="text"
                    placeholder="(e.g. John)"
                    className="input"
                  />
                </div>
                <div className="inputdiv">
                  <p className="name">Last Name</p>
                  <input
                    type="text"
                    placeholder="(e.g. Smith)"
                    className="input"
                  />
                </div>
              </div>
              {/* mobile no. ....  */}
              <div className="inputdiv">
                <p className="name">Mobile phone number</p>
                <div style={{ display: "flex" }}>
                  <select className="country">
                    <option value="usa">
                      USA +1 <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="india">
                      INDIA +91 <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="china">
                      CHINA +86 <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="uk">
                      UK +44 <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      TURKY +90 <FiChevronDown style={{ color: "black" }} />
                    </option>
                  </select>
                  <input
                    type="text"
                    className="input"
                    placeholder="So the property can reach you"
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* protect your hotel */}

          <div className="box3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <IoShieldCheckmarkSharp
                style={{ width: "25px", height: "40px" }}
              />
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginLeft: "15px",
                }}
              >
                Protect your hotel
              </h3>
              <button
                style={{
                  background: "#2f7000",
                  marginLeft: "15px",
                  fontWeight: "bold",
                  color: "white",
                  borderRadius: "5px",
                  padding: "0px 5px",
                }}
              >
                Recommended
              </button>
            </div>
            <div className="alertbox">
              <p>
                <MdError />
                <b> Important</b>: Trip cancellation due to government travel
                advisories, fear of travel, or change of mind is not covered.
                Travel insurance may provide coverage for COVID-19 diagnosed
                illness. COVID-19 is a foreseen event and certain other
                coverages will not apply
              </p>
            </div>
          </div>
          {/* card details  */}

          <div className="box4">
            <div>
              <AiFillCreditCard style={{ height: "25px", width: "30px" }} />
            </div>
            <div>
              <p
                style={{
                  color: "green",
                  display: "flex",
                  marginTop: "10px",
                  marginBottom: "14px",
                  alignItems: "center",
                }}
              >
                <TbChevronRight /> We use secure transmission <TbChevronRight />{" "}
                We protect your personal information
              </p>
              <p>Debit/Credit Card</p>
              <hr style={{ borderTop: "1px solid #616161" }} />
              <div
                style={{ display: "flex", height: "60px", marginTop: "15px" }}
                className="carddetail"
              >
                <img
                  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
                  alt=""
                />
                <img
                  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"
                  alt=""
                />
                <img
                  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg"
                  alt=""
                />
                <img
                  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg"
                  alt=""
                />
                <img
                  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg"
                  alt=""
                />
                <img
                  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg"
                  alt=""
                />
                <img
                  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"
                  alt=""
                />
              </div>
              <div className="inputdiv">
                <p className="name">Name on Card</p>
                <input type="text" className="input" style={{ width: "75%" }} />
              </div>
              <div className="inputdiv">
                <p className="name">Debit/Credit card number</p>
                <input
                  type="number"
                  className="input"
                  style={{ width: "50%" }}
                />
              </div>
              <div className="inputdiv">
                <p className="name">Expiration date</p>
                <div style={{ display: "flex" }}>
                  <select
                    className="country"
                    style={{ width: "25%", marginRight: "10px" }}
                  >
                    <option value="usa">
                      Month <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="india">
                      January
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="china">
                      February
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="uk">
                      March
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      April
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      May
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      June
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      July
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      August
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      September
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      October
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      November
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      December
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                  </select>
                  <select className="country" style={{ width: "25%" }}>
                    <option value="usa">
                      Year <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="india">
                      2020
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="china">
                      2021
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="uk">
                      2022
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      2024
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      2025
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      2026
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                    <option value="turky">
                      2027
                      <FiChevronDown style={{ color: "black" }} />
                    </option>
                  </select>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="inputdiv">
                  <p className="name">Security code</p>
                  <input
                    type="number"
                    className="input"
                    style={{ width: "30%" }}
                  />
                </div>
                <div className="inputdiv">
                  <p className="name">Billing ZIP code</p>
                  <input
                    type="number"
                    className="input"
                    style={{ width: "60%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* manage your booking part  */}
          <div className="box5">
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "13px",
              }}
            >
              Manage your booking
            </h2>
            <hr
              style={{ borderTop: "1px solid #616161", marginBottom: "17px" }}
            />
            <p style={{ fontSize: "17px", color: "black" }}>
              <b>Confirmation email</b>
            </p>
            <p>
              Please enter the email address where you would like to receive
              your confirmation.
            </p>
            <div className="inputdiv">
              <p className="name">Email adress</p>
              <input
                type="email"
                placeholder="(e.g. xyz@gmail.com)"
                className="input"
                style={{ width: "55%" }}
              />
            </div>
            <hr style={{ borderTop: "1px solid #616161", marginTop: "20px" }} />
            <p style={{ fontSize: "17px", color: "black", marginTop: "10px" }}>
              <b>Create an account</b>
            </p>
            <p
              style={{
                color: "green",
                display: "flex",
                marginTop: "7px",
                alignItems: "center",
              }}
            >
              <TbChevronRight /> Earn points for free travel <TbChevronRight />{" "}
              Save with Member Prices <TbChevronRight /> Easily access your
              itineraries
            </p>
            <p style={{ marginButtom: "10px" }}>
              Enter a password to create an account using the email address
              above.
            </p>
            <div className="inputdiv">
              <p className="name">Create an password</p>
              <input
                type="password"
                placeholder="6 - 30 characters, no spaces"
                className="input"
                style={{ width: "35%" }}
              />
            </div>
            <div className="inputdiv">
              <p className="name">Confirm password</p>
              <input
                type="password"
                className="input"
                style={{ width: "35%" }}
              />
            </div>
            <p style={{ marginTop: "11px" }}>
              By creating an account, I agree to the
              <a
                style={{ color: "#4d4dd8" }}
                href="https://www.expedia.com/lp/lg-legal"
              >
                {" "}
                Terms of Use,
              </a>
              <a
                style={{ color: "#4d4dd8" }}
                href="https://www.expedia.com/lp/lg-privacypolicy"
              >
                {" "}
                Privacy Policy
              </a>{" "}
              <a
                style={{ color: "#4d4dd8" }}
                href="https://www.expedia.com/lp/b/exp-rewards-terms"
              >
                , and Expedia Rewards Terms and Conditions.
              </a>{" "}
            </p>
          </div>

          {/* Important Information  */}

          <div className="box6">
            <p
              style={{
                fontSize: "17px",
                color: "black",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <b>Important information about your booking</b>
            </p>
            <div className="overflow">
              <li>
                Cancellations or changes made after 11:59pm (property local
                time) on Sep 1, 2022 or no-shows are subject to a property fee
                equal to 100% of the total amount paid for the reservation.
              </li>
              <li>
                The host will greet guests on arrival. For more details, please
                contact the property using the information on the booking
                confirmation.
              </li>
              <li>
                To register at this property, guests who are Indian citizens
                must provide a valid photo identity card issued by the
                Government of India; travelers who are not citizens of India
                must present a valid passport and visa.
              </li>
              <li>
                You'll be asked to pay the following charges at the property:{" "}
              </li>
              <p>
                1. Christmas Eve (24 December) Gala Dinner per adult: INR
                4500.00
              </p>
              <p>
                2. Christmas Eve (24 December) Gala Dinner per child: INR
                2250.00 (from 6 to 12 years old)
              </p>
              <p>
                3. New Year's Eve (31 December) Gala Dinner per adult: INR
                8500.00
              </p>
              <p>
                4. New Year's Eve (31 December) Gala Dinner per child: INR
                4250.00 (from 6 to 12 years old)
              </p>
            </div>
            <p>
              By clicking on the button below, I acknowledge that I have
              reviewed the{" "}
              <a
                style={{ color: "#4d4dd8" }}
                href="https://www.expedia.com/privacy?rfrr=HOT.CKO.Privacy"
              >
                Privacy Statement
              </a>
              and{" "}
              <a
                style={{ color: "#4d4dd8" }}
                href="https://travel.state.gov/content/passports/en/alertswarnings.html"
              >
                {" "}
                Government Travel Advice
              </a>{" "}
              and have reviewed and accept the{" "}
              <a
                style={{ color: "#4d4dd8" }}
                href="https://www.expedia.com/Checkout/V1/HotelRulesAndRestrictions?tripid=8132b31c-00d9-59d2-a079-de7141902c86&rfrr=HOT.CKO.Rules&np=1"
              >
                Rules & Restrictions
              </a>
              and{" "}
              <a
                style={{ color: "#4d4dd8" }}
                href="https://www.expedia.com/terms?rfrr=HOT.CKO.Terms"
              >
                Terms of Use
              </a>
            </p>
            <p
              style={{
                color: "green",
                display: "flex",
                marginTop: "7px",
                alignItems: "center",
              }}
            >
              <TbChevronRight /> Change of plans? No problem. You can cancel for
              free
            </p>
            <button id="complete-btn" onClick={handleClick}>
              Complete Booking {">"}
            </button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <HiLockClosed />
              &nbsp;&nbsp;
              <p>
                We use secure transmission and encrypted storage to protect your
                personal information.
              </p>
            </div>
          </div>
        </div>
        <div>
          {/* trip details  */}

          <div className="box7">
            <div style={{}}>
              <img
                style={{ padding: "4px", width: "100%", borderRadius: "10px" }}
                src={details?.images[0]?.src}
                alt={details.title}
              />
            </div>
            <div style={{ padding: "20px" }}>
              <p>
                <b>{details.title}</b>
              </p>
              <p>
                <b>{details.rating}/5</b> Very good ({details.reviews} reviews)
              </p>
              <p>
                Guests rated this property {details.rating}/5 for cleanliness
              </p>
              <p style={{ marginTop: "10px", marginBottom: "10px" }}>
                1 Room: King, Executive Room, Balcony, River View
              </p>
              <p>
                <b>Check-in</b>: Fri, Sep 9
              </p>
              <p>
                <b>Check-out</b>: Sat, Sep 10
              </p>
              <p>1-night stay</p>
            </div>
          </div>

          {/* price details  */}

          <div className="box8">
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Price details
            </h3>
            <hr
              style={{
                borderTop: "1px solid #616161",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>1 room x 1 night</p>
              <p>${+details.price}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Taxes and fees !</p>
              <p>${Math.floor(+details.price * 0.28)}</p>
            </div>
            <hr
              style={{
                borderTop: "1px solid #616161",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>
                <b>Total</b>
              </p>
              <p>
                <b>${+details.price + Math.floor(+(details.price * 0.28))}</b>
              </p>
            </div>
            <hr
              style={{
                borderTop: "1px solid #616161",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            />
            <p>
              <b>Not included in your total</b>
            </p>
            <p style={{ marginBottom: "20px" }}>
              Mandatory charge: Collected at property.
            </p>
            <p style={{ fontSize: ".7em" }}>
              Taxes and Fees due at the property are based on current exchange
              rates, and are payable in local currency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ButtonPage;
