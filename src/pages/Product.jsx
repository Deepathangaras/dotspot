import React from 'react';
import './Product.css'; 
import productImage from '../images/product.png';
import vehicleImg from "../images/vehicle.png";
import AttendanceTrackingImg from "../images/Attnce.jpg";
import Achievement3Img from "../images/dashboard.png";

import FooterComponent from "./navbar/FooterComponent";

const ProductPage = () => {  
  return (
    <div className="main">
<div className="product-page">
      <section className="product-banner" style={{ backgroundImage: `url(${productImage})` }}>
        <div className="overlay">
          <h1 className='our-products'>Our Products</h1>
          
        </div>
      </section>

      <section className="product-section">
        
        <div className="product-info-container">
         
          <div className="product-info">
            <h2>Object Detection and Classification</h2>
            <br></br>
            <p>
              Our object detection system helps classify and detect multiple objects in real time with high accuracy. It can be used in security, retail, and industrial settings.
            </p>
          </div>
          <div className="product-image">
            <img src={vehicleImg } alt="Object Detection and Classification" />
          </div>    
        </div>
 
        {/* Product 2*/}
        <div className="product-info-container">
          <div className="product-image">
            <img src={AttendanceTrackingImg} alt="Workers Monitoring and Attendance Monitoring" />
          </div>
          <div className="product-info">
            <h2>Workers Monitoring and attendance tracking</h2>
            <br></br>
            <p>
              Track and monitor workers’ activities, ensure safety compliance, and automate attendance tracking with real-time data to improve productivity.
            </p>
          </div>
        </div>

        {/* Product 3:*/}
        <div className="product-info-container">

          <div className="product-info">
            <h2>Role-Based Dashboard</h2>
            <br></br>
            <p>
              Our role-based dashboards provide customized views for each role in your organization, offering insights and analytics specific to their responsibilities.
            </p>
          </div>
          <div className="product-image">
            <img src={Achievement3Img} alt="Role-Based Dashboard" />
          </div>
        </div>
      </section>
      </div>
      <FooterComponent/>
    </div>
    
  );
};

export default ProductPage;
