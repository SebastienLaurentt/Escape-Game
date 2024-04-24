import { Mail, Phone } from 'lucide-react'
import React from 'react'
import ContactForm from '../ContactForm'

const Infos = () => {
  return (
    <div className="flex flex-col gap-y-16 md:flex-row md:justify-between md:gap-x-12">
          <div className="md:w-1/2">
            <h3>Par téléphone ou email</h3>
            <p className="mb-8 md:mb-24 ">
              Mr Alain Bourseau <br /> Président des Galopins
            </p>
            <ul className="flex flex-col gap-y-4 md:gap-y-12">
              <li>
                <div className="flex flex-row gap-x-8  md:gap-y-2 ">
                  <Phone size={48} />
                  <div className="flex flex-col">
                    <span>Téléphone</span>
                    <span>06 24 01 60 30</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row  gap-x-8 md:gap-y-2">
                  <Mail size={48} />
                  <div className="flex flex-col">
                    <span>Email</span>
                    <span>alain.bourseau@wanadoo.fr</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3>Par formulaire de contact</h3>
            <ContactForm />
          </div>
        </div>
  )
}

export default Infos