import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 
import video from "../../public/video/conv.mp4";
import vehicleImg from "../images/vehicle.png";
import peopleCountingImg from "../images/people.png";
import intusioImg from "../images/intusio.png";
import faceImg from "../images/face.png";
import LicensePlateImg from "../images/lice.png";
import RealtimeSurveillanceImg from "../images/cam.png";
import safetymonitoringImg from "../images/safety3.png";
import EmergencyResponseImg from "../images/emcr.png";
import AttendanceTrackingImg from "../images/Attnce.jpg";
import VehiclemonitoringImg from "../images/vehiclemonitor.png";
import AchievementImg from "../images/achive.png";
import Achievement2Img from "../images/suc1.png";
import Achievement3Img from "../images/dashboard.png";
import FooterComponent from "./navbar/FooterComponent";


Modal.setAppElement("#root");

const Home = () => {
  const [activeTab, setActiveTab] = useState("object-detection");
  const navigate = useNavigate();
  const handleSolutionClick = (id) => {
    navigate(`/solution/${id}`); 
  };
  const handleAchievementClick = (id) => {
    navigate(`/achievements/${id}`); 
  };
  const renderCards = () => {
    switch (activeTab) {
      case "object-detection":
        return (
          <div className="cards-container">
            <div className="card">
              <img src={vehicleImg} alt="Vehicle" className="cardimages" />
              <h3>Vehicle Entry/Exit</h3>
              <p>Automate vehicle entry/exit within premises.</p>
              <p className="details">A Vehicle Entry/Exit system is a solution designed to monitor, record, and manage the movement of vehicles entering and exiting a specific area, such as a parking facility, restricted zone, or gated community. These systems are commonly used in both commercial and residential settings for security, data collection, and efficient management of vehicle access</p>
              
            </div>
            <div className="card">
              <img src={peopleCountingImg} alt="People Counting" />
              <h3>People Counting</h3>
              <p>Crowd analytics to measure the flow of people.</p>
              <p className="details2">
              A People Counting system is designed to accurately count and monitor the number of individuals entering, exiting, or occupying a specific area in real-time. These systems are widely used across various industries, including retail, transportation, event management, and facility management, to gather valuable insights on foot traffic, optimize resource allocation, and enhance security.
              </p>
             
            </div>
            <div className="card">
              <img src={intusioImg} alt="Employee Access Control" />
              <h3>Employee Access Control</h3>
              <p>Detect and alert intrusions within premises.</p>
              <p className="details3">An Employee Access Control system manages and monitors employee access within an organization, specifying who can enter certain areas and when. It's crucial in facilities like data centers, labs, and hospitals to safeguard sensitive information, assets, and personnel.</p>
             
            </div>
          </div>
        );
      case "security-surveillance":
        return (
          <div className="cards-container">
            <div className="card">
              <img src={faceImg} alt="Facial Recognition" />
              <h3>Facial Recognition</h3>
              <p>Scaled up security access.</p>
              <p className="details4">Facial Recognition is a biometric technology that uses artificial intelligence and computer vision to identify or verify a person's identity based on unique facial features. It is commonly used for security, access control, and authentication across various industries due to its accuracy, speed, and contactless nature.</p>
              
            </div>
            <div className="card">
              <img src={intusioImg} alt="Intrusion Detection" />
              <h3>Intrusion Detection</h3>
              <p>Detect and alert intrusions within premises.</p>
              <p className="details5">Intrusion Detection is a security technology designed to monitor and identify unauthorized access or suspicious activity within a system or physical area. It alerts security teams to potential threats in real-time, enhancing protection for networks, facilities, or restricted zones by quickly identifying and responding to breaches.</p>
              
            </div>
            <div className="card">
              <img
                src={RealtimeSurveillanceImg}
                alt="Real time video Surveillance"
              />
              <h3>Real time video Surveillance</h3>
              <p>Track vehicles entering/exiting premises.</p>
              <p className="details6">Real-time Video Surveillance is a security solution that continuously monitors and analyzes video feeds to detect and respond to incidents as they happen. It enhances security by enabling instant alerts, remote monitoring, and proactive threat detection across various environments like public spaces, workplaces, and critical infrastructure.</p>
              
            </div>
          </div>
        );
      case "Worker monitoring and attendance":
        return (
          <div className="cards-container">
            <div className="card">
              <img
                src={safetymonitoringImg}
                alt="Real time safety monitoring"
              />
              <h3>Real time safety monitoring</h3>
              <p>Monitor workers entry and exit times.</p>
              <p className="details7">Implement a system to monitor and record workers' entry and exit times, allowing for precise tracking of attendance and working hours. This process aids in ensuring compliance, managing productivity, and maintaining accurate records for payroll and analysis purposes</p>
            </div>
            <div className="card">
              <img src={EmergencyResponseImg} alt="Emergency Response" />
              <h3>Emergency Response</h3>
              <p>Track attendance in real-time.</p>
              <p className="details8">Establish a robust emergency response system to handle unexpected incidents swiftly and efficiently. Ensure quick mobilization of resources, effective communication, and prioritization of safety measures to minimize risks and protect lives and assets.</p>
              
            </div>
            <div className="card">
              <img
                src={AttendanceTrackingImg}
                alt="Automated attendance tracking"
              />
              <h3>Automated attendance tracking</h3>
              <p>Ensure workers comply with safety protocols.</p>
              <p className="details9">Implement an automated attendance tracking system to streamline the process of recording employee presence and absences. This system reduces manual errors, increases efficiency, and provides real-time data for better workforce management and compliance</p>
            </div>
          </div>
        );
      case "vehicle-monitoring":
        return (
          <div className="cards-container">
            <div className="card">
              <img src={LicensePlateImg} alt="License Plate Recognition" />
              <h3>License Plate Recognition</h3>
              <p>Automate vehicle entry using license plate recognition.</p>
              <p className="details10">License Plate Recognition (LPR) is a technology that uses optical character recognition (OCR) to automatically detect and read vehicle license plates from images or video feeds. It is commonly used for automated access control, law enforcement, toll collection, and parking management to enhance security and operational efficiency.</p>
              
            </div>
            <div className="card">
              <img src={VehiclemonitoringImg} alt="Vehicle monitoring" />
              <h3>Vehicle monitoring</h3>
              <p>Monitor the speed of vehicles within premises.</p>
              <p className="details11">Vehicle Monitoring is a system that tracks and analyzes vehicle movement, behavior, and location in real-time to enhance security, optimize logistics, and improve traffic management. It is widely used in fleet management, transportation, and security to monitor vehicle performance, prevent theft, and ensure efficient operations.</p>
             
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      {/* Background Video Section */}
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Banner Content */}
      <div className="content">
        <h1>Transforming Vision with AI for Your Business</h1>
        <p>Dotspot - Transforming Vision with AI Precision</p>
        
      </div>

      {/* Spacer to push the statistics box down */}
  <div className="spacer"></div>
      
  {/* Statistics Banner Section */}
  <section className="statistics-box">
    <div className="stat-item">
      <h3>200K+</h3>
      <p>Annotations</p>
    </div>
    <div className="stat-item">
      <h3>100K+</h3>
      <p>Alerts Generated Daily</p>
    </div>
    <div className="stat-item">
      <h3>80+</h3>
      <p>Cameras Operational</p>
    </div>
  </section>


      {/* Solution Section with Tabs */}
      <section className="solution-section">
        <h2>Our Solutions</h2>
        <div className="tabs">
          <button
            className={activeTab === "object-detection" ? "active" : ""}
            onClick={() => setActiveTab("object-detection")}
          >
            Object detection and classification
          </button>
          <button
            className={activeTab === "security-surveillance" ? "active" : ""}
            onClick={() => setActiveTab("security-surveillance")}
          >
            Security and surveillance
          </button>
          <button
            className={
              activeTab === "Worker monitoring and attendance" ? "active" : ""
            }
            onClick={() => setActiveTab("Worker monitoring and attendance")}
          >
            Works monitoring and attendance
          </button>
          <button
            className={activeTab === "vehicle-monitoring" ? "active" : ""}
            onClick={() => setActiveTab("vehicle-monitoring")}
          >
            Vehicle detection
          </button>
        </div>

        {/* Cards Based on Active Tab */}
        <div className="cards-content">{renderCards()}</div>
      </section>

      {/* Our Achievements */}
      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="cards-container1">
          <div className="card">
            <img src={AchievementImg} alt="Achievement1" />
            <h1>AI-Powered Precision Detection for Industrial Environments</h1>
            <p className="ach1">Dotsito’s high-end AI models, tailored for industrial applications, ensure precise detection and counting of object variants in complex settings. With secure multi-user access, teams can monitor, analyze, and respond to insights in real time, enhancing on-site productivity.</p>
          </div>
          <div className="card">
            <img src={Achievement2Img} alt="Achievement2" />
            <h1>Customized object detection and monitoring</h1>
            <p className="ach2">DotSito's advancements include fire and smoke detection for critical early warnings, alongside real-time intruder alerts to protect properties and enable quick responses. With customizable actions and high adaptability, DotSito leads in precise, responsive object detection across diverse environments.</p>
            
          </div>
          <div className="card">
            <img src={Achievement3Img} alt="Achievement3" />
            <h1>customized dashboard</h1>
            <p className="ach3">DotSito's customized dashboard provides real-time insights, enabling users to easily monitor and analyze detected objects and events. Tailored to client needs, it offers clear visuals, trend analysis, and performance metrics, supporting informed decisions and efficient alert management.</p>
            
          </div>
        </div>
      </section>

      <FooterComponent/>    </div>
  );
};

export default Home;
