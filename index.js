import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
  // Your Firebase config
  const firebaseConfig = {
  apiKey: "AIzaSyC6FJVv80LXa8BT9gqIgOBQTuNuV2bCnv4",
    authDomain: "my-portofolio-42bd7.firebaseapp.com",
    projectId: "my-portofolio-42bd7",
    storageBucket: "my-portofolio-42bd7.firebasestorage.app",
    messagingSenderId: "1054246054627",
    appId: "1:1054246054627:web:3dda00691937dae7a7f3d6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Handle form submission
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      await addDoc(collection(db, "contacts"), {
        firstName,
        lastName,
        email,
        message,
        timestamp: new Date()
      });
      alert("Merci! Votre message a été envoyé.");
      contactForm.reset();
    } catch (error) {
      console.error("Erreur: ", error);
      alert("Erreur lors de l'envoi. Réessayez plus tard.");
    }
  });