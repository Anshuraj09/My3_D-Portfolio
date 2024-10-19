import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodersrank } from "react-icons/si";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Modal Component
const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Notification</h2>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-tertiary text-white py-2 px-4 rounded hover:bg-primary transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "b6b71d58-32c7-4a14-bd08-75ab66760c4b");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          setModalMessage("Thank you! I will get back to you as soon as possible.");
          setModalOpen(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setModalMessage("Ahh, something went wrong. Please try again.");
          setModalOpen(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setModalMessage("Ahh, something went wrong. Please try again.");
        setModalOpen(true);
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-8">
          <p className='text-white font-medium mb-4'>Connect with me:</p>
          <ul className='flex flex-col space-y-2'>
            <li className="flex items-center">
              <FaLinkedin className="text-secondary mr-2" />
              <a
                href='https://www.linkedin.com/in/anshuraj09/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-tertiary transition-colors'
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center">
              <FaGithub className="text-secondary mr-2" />
              <a
                href='https://github.com/Anshuraj09'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-tertiary transition-colors'
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center">
              <SiCodersrank className="text-secondary mr-2" />
              <a
                href='https://codolio.com/profile/anshuraj.09'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-tertiary transition-colors'
              >
                Codolio
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">📧</span>
              <a
                href='mailto:anshuraj2771@gmail.com'
                className='text-secondary hover:text-tertiary transition-colors'
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      {/* Modal for success/error messages */}
      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
