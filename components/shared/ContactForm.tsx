"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { sendEmail } from "../../src/actions";
import { Button } from "../ui/button";

export default function ContactForm() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [formFeedback, setFormFeedback] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message if field is filled
    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let hasErrors = false;
    // Check if all fields are filled
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [key]: true,
        }));
        hasErrors = true;
      }
    });
    if (!hasErrors) {
      // Convert formData to FormData object
      const formDataObject = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObject.append(key, value);
      });

      // Send email if all fields are filled
      sendEmailAction(formDataObject);
    }
  };

  useEffect(() => {
    if (sendEmailState.success) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFormFeedback("Merci ! Nous vous recontacterons bientôt !");
      // Clear feedback after 5 seconds
      const timer = setTimeout(() => {
        setFormFeedback("");
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (sendEmailState.error) {
      setFormFeedback("Erreur lors de l'envoi de l'email. Veuillez réessayer.");
    }
  }, [sendEmailState]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Nom - Prénom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nom - Prénom"
          className={`w-full rounded-md border ${
            formErrors.name ? "border-red-500" : "border-gray-300"
          } bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-accent focus:shadow-md`}
        />
        {/* If name is null when submit */}
        {formErrors.name && (
          <p className="mt-1 text-sm text-red-500">Ce champ est requis.</p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="exemple@email.com"
          className={`w-full rounded-md border ${
            formErrors.email ? "border-red-500" : "border-gray-300"
          } bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-accent focus:shadow-md`}
        />
        {/* If email is null when submit */}
        {formErrors.email && (
          <p className="mt-1 text-sm text-red-500">Ce champ est requis.</p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Votre Message
        </label>
        <textarea
          rows={4}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Description de votre demande"
          className={`w-full resize-none rounded-md border ${
            formErrors.message ? "border-red-500" : "border-gray-300"
          } bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-accent focus:shadow-md`}
        />
        {/* If textarea is null when submit */}
        {formErrors.message && (
          <p className="mt-1 text-sm text-red-500">Ce champ est requis.</p>
        )}
      </div>

      <div className="flex items-center">
        <Button
          type="submit"
          aria-label="Envoyer le formulaire"
          className="bg-green-700 text-white hover:bg-accent"
        >
          Envoyer
        </Button>
        {/* If no formErrors and submission */}
        {formFeedback && (
          <p
            className={`ml-3 text-sm ${
              sendEmailState.success
                ? "font-bold text-green-600"
                : "font-bold text-red-600"
            }`}
          >
            {formFeedback}
          </p>
        )}
      </div>
    </form>
  );
}
