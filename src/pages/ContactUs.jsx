import Renderer from '../components/Renderer';
import { pageData } from '../data/data';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const iconMap = {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
};

export default function ContactUs() {
  const contactUsContent = pageData.pages.find(page => page.name === "Contact Us");

  if (!contactUsContent) {
    return <div className="container section text-center text-red-500">Contact Us page content not found.</div>;
  }

  const formBlock = contactUsContent.content.find(block => block.type === 'contact_form');
  const infoBlock = contactUsContent.content.find(block => block.type === 'contact_info');

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="contact-us-page">
      <Renderer blocks={contactUsContent.content.filter(block => block.type === 'hero')} />

      {formBlock && (
        <motion.section
          className="section bg-gray-50"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <h2 className="h1 text-center text-primary mb-4">{formBlock.title}</h2>
            <p className="text-body text-muted text-center mb-12 max-w-2xl mx-auto">{formBlock.subtitle}</p>

            <form className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-soft">
              {formBlock.formFields.map((field, index) => (
                <motion.div key={index} className="mb-6" variants={itemVariants} custom={index}>
                  <label htmlFor={field.label.toLowerCase().replace(/\s/g, '-')} className="block text-primary font-medium mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.label.toLowerCase().replace(/\s/g, '-')}
                      placeholder={field.placeholder}
                      rows="5"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-y"
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      id={field.label.toLowerCase().replace(/\s/g, '-')}
                      placeholder={field.placeholder}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className="w-full bg-primary text-secondary py-3 px-6 rounded-full h3 hover:bg-gray-800 transition-colors duration-300 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formBlock.cta}
              </motion.button>
            </form>
          </div>
        </motion.section>
      )}

      {infoBlock && (
        <motion.section
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container text-center">
            <h2 className="h1 text-primary mb-4">{infoBlock.title}</h2>
            <p className="text-body text-muted mb-12 max-w-2xl mx-auto">{infoBlock.subtitle}</p>

            <div className="grid md:grid-cols-3 gap-8">
              {infoBlock.items.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <motion.div
                    key={index}
                    className="bg-secondary p-8 rounded-2xl shadow-soft flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                    variants={itemVariants}
                    custom={index}
                  >
                    {IconComponent && (
                      <div className="p-4 rounded-full bg-accent/10 text-primary mb-4">
                        <IconComponent className="w-10 h-10" />
                      </div>
                    )}
                    <h3 className="h3 text-primary mb-2">{item.label}</h3>
                    <p className="text-body text-muted break-words">{item.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}