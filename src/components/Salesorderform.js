import React from "react";
import UseState from "react";
import OrderForm from "./OrderForm";

export default function Salesorderform() {
  function Dropdown() {
    const [selectedOption, setSelectedOption] = UseState("");
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  }

  return (

    <div>
    <div style={{ width: "100%", height: "auto", background: "black" }}>
      <div
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: 400,
          color: "#fff",
          margin: "20px 0",
        }}
      >
        Sales Order Form
      </div>
  
      <div style={{ marginLeft: "3rem" }}>
        <div>
          <div style={{ width: "40%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "16px",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>Company Name</p>
                  <input
                    type="text"
                    id="companyname"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>
  
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "16px",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>Date</p>
                  <input
                    type="date"
                    id="date"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <p style={{ color: "white", fontSize: "20px", marginBottom: "20px" }}>
            Customer/Account Information
          </p>
  
          <div style={{ width: "40%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>Contact Name</p>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="First Name"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>
  
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                      marginTop: "30px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
  
          <div style={{ width: "40%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>Business Name</p>
                  <input
                    type="text"
                    id="business-name"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>
  
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>Phone Number</p>
                  <input
                    type="text"
                    id="phone-number"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>
            </div>
  
            <div style={{ color: "#fff", width: "30%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ marginBottom: "10px" }}>Email Address</p>
                <input
                  type="email"
                  id="email-id"
                  placeholder="example@example.com"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            </div>
  
            <p style={{ color: "#434343", fontSize: "14px", marginTop: "20px" }}>
              Shipping Address (if different from above)
            </p>
  
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>Contact Name</p>
                  <input
                    type="text"
                    id="shipping-first-name"
                    placeholder="First Name"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>
  
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <input
                    type="text"
                    id="shipping-last-name"
                    placeholder="Last Name"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                      marginTop: "30px",
                    }}
                  />
                </div>
              </div>
            </div>
  
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>Business Name</p>
                  <input
                    type="text"
                    id="shipping-business-name"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>
  
              <div style={{ color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>Email</p>
                  <input
                    type="email"
                    id="shipping-email"
                    placeholder="example@example.com"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>
            </div>
  
            <div style={{ color: "#fff" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ marginBottom: "10px" }}>Address</p>
                <input
                  type="text"
                  id="street-address"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                  }}
                />
                <p style={{ fontSize: "12px", color: "#57647e", marginTop: "5px" }}>
                  Street Address
                </p>
              </div>
            </div>
  
            <div style={{ color: "#fff" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  id="street-address-line-2"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                  }}
                />
                <p style={{ fontSize: "12px", color: "#57647e", marginTop: "5px" }}>
                  Street Address Line 2
                </p>
              </div>
            </div>
          </div>
  
          
  
          <div style={{ width: "40%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                id="zip-code"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
              <p style={{ fontSize: "12px", color: "#57647e", marginTop: "5px" }}>
                Zip Code
              </p>
            </div>
          </div>
  
          <div style={{ width: "40%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                id="country"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
              <p style={{ fontSize: "12px", color: "#57647e", marginTop: "5px" }}>
                Country
              </p>
            </div>
          </div>
  
          <div>
            <p style={{ color: "white", fontSize: "20px", marginBottom: "20px" }}>
              Order Information
            </p>
  
          <OrderForm/>
            
          </div>
  
          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <button
              style={{
                padding: "15px 30px",
                borderRadius: "10px",
                border: "none",
                background: "#FF5733",
                color: "#fff",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    
  );
}
