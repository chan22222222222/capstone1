// ========== Primary Event Listeners (Header buttons, Hero, etc.) ==========
document.addEventListener("DOMContentLoaded", function() {
    const appointmentBtn = document.getElementById('appointmentBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const bookNowBtn = document.getElementById('bookNowBtn');
  
    if (appointmentBtn) {
      appointmentBtn.addEventListener('click', function() {
        alert("Redirecting to the appointment booking page...");
        // e.g. window.location.href = "booking.html";
      });
    }
  
    if (getStartedBtn) {
      getStartedBtn.addEventListener('click', function() {
        alert("Getting started with Gamacare!");
        // Add your own logic for 'Get Started' button.
      });
    }
  
    if (bookNowBtn) {
      bookNowBtn.addEventListener('click', function() {
        alert("Book your appointment now!");
        // Add your own logic for the 'Book Appointment' section button.
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const scheduleNowBtn = document.getElementById('scheduleNowBtn');
    if (scheduleNowBtn) {
      scheduleNowBtn.addEventListener('click', function() {
        alert("Redirecting to scheduling page...");
        // e.g. window.location.href = "booking.html";
      });
    }
  });
  
  // ========== Modal for Services Info (With Doctor Details) ==========
  document.addEventListener("DOMContentLoaded", function() {
    // Extended data for each service
    const servicesInfo = {
      labTests: {
        title: "Laboratory Tests",
        description: "We provide a wide range of laboratory tests...",
        doctor: {
          name: "Dr. Alberto Reyes – Pathologist",
          qualifications: "MD, Board Certified in Pathology",
          experience: "10 years in laboratory diagnostics (tissue biopsies, blood work, infectious disease pathology).",
          hospital: "Gama Care",
          specialtyAreas: "Histopathology, laboratory analysis, microbiology, immunology."
        }
      },
      xray: {
        title: "X-RAY",
        description: "Our state-of-the-art X-ray facilities enable quick imaging...",
        doctor: {
          name: "Dr. Maria Santos – Radiologist",
          qualifications: "MD, Board Certified in Radiology",
          experience: "8 years in diagnostic imaging (mammography, ultrasound, CT scans).",
          hospital: "Gama Care",
          specialtyAreas: "Diagnostic radiology, imaging for cancer, bone fractures, abdominal issues."
        }
      },
      ecg: {
        title: "ECG",
        description: "An ECG measures the electrical activity of your heart...",
        doctor: {
          name: "Dr. Lourdes Cruz – Cardiologist",
          qualifications: "MD, Board Certified in Cardiology",
          experience: "12 years treating heart conditions (hypertension, arrhythmias, coronary artery diseases).",
          hospital: "Gama Care Health Center",
          specialtyAreas: "Echocardiography, stress testing, heart failure management, coronary angiography."
        }
      },
      echo: {
        title: "2-D Echo",
        description: "Our 2-D echocardiogram service provides detailed images of your heart...",
        doctor: {
          name: "Dr. Lourdes Cruz – Cardiologist",
          qualifications: "MD, Board Certified in Cardiology",
          experience: "12 years treating heart conditions...",
          hospital: "Gama Care Health Center",
          specialtyAreas: "Echocardiography, stress testing, heart failure management, coronary angiography."
        }
      },
      ultrasound: {
        title: "Ultrasound",
        description: "Using sound waves, we can visualize internal organs...",
        doctor: {
          name: "Dr. Maria Santos – Radiologist",
          qualifications: "MD, Board Certified in Radiology",
          experience: "8 years in diagnostic imaging (mammography, ultrasound, CT scans).",
          hospital: "Gama Care",
          specialtyAreas: "Diagnostic radiology, imaging for cancer, bone fractures, abdominal issues."
        }
      },
      swab: {
        title: "Swab and Blood",
        description: "We offer swab tests for infections and blood draws...",
        doctor: {
          name: "Dr. Alberto Reyes – Pathologist",
          qualifications: "MD, Board Certified in Pathology",
          experience: "10 years in laboratory diagnostics...",
          hospital: "Gama Care",
          specialtyAreas: "Histopathology, laboratory analysis, microbiology, immunology."
        }
      }
    };
  
    // Get modal elements
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
  
    // Doctor info elements
    const doctorName = document.getElementById("doctorName");
    const doctorQualifications = document.getElementById("doctorQualifications");
    const doctorExperience = document.getElementById("doctorExperience");
    const doctorHospital = document.getElementById("doctorHospital");
    const doctorSpecialtyAreas = document.getElementById("doctorSpecialtyAreas");
  
    const closeBtn = document.querySelector(".modal-content .close");
  
    // Attach event listeners to each service card
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
      card.addEventListener("click", function() {
        const serviceKey = card.getAttribute("data-service");
        if (servicesInfo[serviceKey]) {
          // Fill in service info
          modalTitle.textContent = servicesInfo[serviceKey].title;
          modalDescription.textContent = servicesInfo[serviceKey].description;
  
          // Fill in doctor info if available
          const doc = servicesInfo[serviceKey].doctor;
          if (doc) {
            doctorName.textContent = doc.name;
            doctorQualifications.textContent = "Qualifications: " + doc.qualifications;
            doctorExperience.textContent = "Experience: " + doc.experience;
            doctorHospital.textContent = "Hospital/Clinic: " + doc.hospital;
            doctorSpecialtyAreas.textContent = "Specialty Areas: " + doc.specialtyAreas;
          } else {
            // If no doctor info, clear fields
            doctorName.textContent = "";
            doctorQualifications.textContent = "";
            doctorExperience.textContent = "";
            doctorHospital.textContent = "";
            doctorSpecialtyAreas.textContent = "";
          }
  
          // Show the modal
          modal.style.display = "flex";
        }
      });
    });
  
    // Close modal on "X"
    if (closeBtn) {
      closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
      });
    }
  
    // Close modal if user clicks outside the modal content
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
  // ========== Existing Map & Booking Logic (Contact/Booking) ==========
  document.addEventListener("DOMContentLoaded", function() {
    // Contact page map
    const mapFrame = document.getElementById("mapFrame");
    if (mapFrame) {
      mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4152669455917!2d121.0750107!3d14.7497568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b132a78f80f7%3A0xeca128dc4aa3cc3d!2sGammaCare%20Medical%20Services%20Inc.!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph";
    }
  
    const openDirectionsBtn = document.getElementById("openDirectionsBtn");
    if (openDirectionsBtn) {
      openDirectionsBtn.addEventListener("click", function() {
        window.open(
          "https://www.google.com/maps/place/GammaCare+Medical+Services+Inc./@14.7497568,121.0750107,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b132a78f80f7:0xeca128dc4aa3cc3d!8m2!3d14.7497568!4d121.0775856!16s%2Fg%2F11f6yxm79s?entry=ttu",
          "_blank"
        );
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Hero "Book Now" button (Booking page)
    const bookNowHeroBtn = document.getElementById("bookNowHeroBtn");
    if (bookNowHeroBtn) {
      bookNowHeroBtn.addEventListener("click", function() {
        alert("Redirecting to the booking form...");
        const formSection = document.querySelector(".booking-form-section");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // Booking form submission
    const bookingForm = document.querySelector(".booking-form");
    if (bookingForm) {
      bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Your appointment request has been submitted!");
        // You could add your form submission logic here.
        bookingForm.reset();
      });
    }
  });
  