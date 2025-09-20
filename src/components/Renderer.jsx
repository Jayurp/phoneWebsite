import { motion } from "framer-motion";
import ImageSafe from "./ImageSafe";
import BackgroundSafe from "./BackgroundSafe";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaShieldAlt,
  FaCloud,
  FaCog,
  FaChartLine,
} from "react-icons/fa";
import { useState, useEffect } from "react"; // Import useEffect for gallery image selection
import ModelViewer from "./3DCanvas";
import RotateImage from "../assets/360.jpg";

const iconMap = {
  FaBriefcase,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaShieldAlt,
  FaCloud,
  FaCog,
  FaChartLine,
};

const MotionDiv = motion.div;

export default function Renderer({ blocks }) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="container section text-center text-gray-500">
        No content available for this page.
      </div>
    );
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-hidden">
      {blocks.map((block, index) => {
        const hasBackground =
          block.type === "hero" ||
          (block.type === "image_text" && block.background);
        const sectionContent = (
          <div className="container">
            {block.type === "hero" && (
              <div className="text-center py-16 md:py-24 lg:py-32 relative z-10">
                <motion.h1
                  className="h-display text-white mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {block.title}
                </motion.h1>
                <motion.p
                  className="text-body text-primary-dark mb-8 max-w-2xl mx-auto text-muted"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {block.subtitle}
                </motion.p>
                <motion.button
                  className="bg-primary text-secondary py-3 px-8 rounded-full h3 hover:bg-gray-80 transition-colors duration-300 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {block.cta}
                </motion.button>
              </div>
            )}

            {block.type === "features" && (
              <div className="text-center">
                <h2 className="h1 text-primary mb-4">{block.title}</h2>
                <p className="text-body text-muted mb-12 max-w-3xl mx-auto">
                  {block.subtitle}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {block.items.map((feature, i) => {
                    const IconComponent = iconMap[feature.icon];
                    return (
                      <MotionDiv
                        key={i}
                        className="bg-secondary p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                          amount: 0.4,
                        }}
                        custom={i}
                      >
                        {IconComponent && (
                          <div className="p-4 rounded-full bg-accent/10 text-primary mb-4 transition-transform duration-300 hover:scale-110">
                            <IconComponent className="w-10 h-10" />
                          </div>
                        )}
                        <h3 className="h3 text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-body text-muted">
                          {feature.description}
                        </p>
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>
            )}

            {block.type === "image_text" && (
              <div
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  block.imageRight ? "md:flex-row-reverse" : ""
                }`}
              >
                <MotionDiv
                  className="md:w-1/2 w-full"
                  initial={{
                    opacity: 0,
                    x: block.imageRight ? 50 : -50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                >
                  <ImageSafe
                    src={block.image}
                    alt={block.title}
                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                    width={560}
                    height={380}
                  />
                </MotionDiv>
                <MotionDiv
                  className="md:w-1/2 w-full text-center md:text-left"
                  initial={{
                    opacity: 0,
                    x: block.imageRight ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                >
                  <h2 className="h1 text-primary mb-4">{block.title}</h2>
                  <p className="text-body text-muted mb-6">
                    {block.description}
                  </p>
                  {block.cta && (
                    <button className="bg-primary text-secondary py-3 px-8 rounded-full h3 hover:bg-gray-800 transition-colors duration-300 shadow-md">
                      {block.cta}
                    </button>
                  )}
                </MotionDiv>
              </div>
            )}

            {block.type === "testimonials" && (
              <div className="text-center">
                <h2 className="h1 text-primary mb-4">{block.title}</h2>
                <p className="text-body text-muted mb-12 max-w-3xl mx-auto">
                  {block.subtitle}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {block.items.map((testimonial, i) => (
                    <MotionDiv
                      key={i}
                      className="bg-secondary p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      custom={i}
                    >
                      <ImageSafe
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-accent"
                        width={80}
                        height={80}
                      />
                      <p className="text-body text-muted italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-semibold text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-caption text-accent">
                        {testimonial.role}
                      </p>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            )}

            {block.type === "product_cards" && (
              <div className="text-center">
                <h2 className="h1 text-primary mb-4">{block.title}</h2>
                <p className="text-body text-muted mb-12 max-w-3xl mx-auto">
                  {block.subtitle}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {block.items.map((card, i) => (
                    <MotionDiv
                      key={i}
                      className="bg-gray-100 p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      custom={i}
                    >
                      <Link to={card.path} className="block w-full">
                        <ImageSafe
                          src={card.image}
                          alt={card.title}
                          className="w-full h-48 object-contain rounded-xl mb-6 shadow-md transform transition-transform duration-300 group-hover:scale-105"
                          width={300}
                          height={192}
                        />

                        <h3 className="h3 text-primary mb-2">{card.title}</h3>
                        <p className="text-body text-muted mb-6">
                          {card.description}
                        </p>
                        <button className="bg-primary text-secondary py-2 px-6 rounded-full text-body font-medium hover:bg-gray-800 transition-colors duration-300 shadow-md">
                          {card.cta || "Learn More"}
                        </button>
                      </Link>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            )}

            {block.type === "cta_banner" && (
              <div className="bg-primary text-secondary p-12 rounded-2xl text-center shadow-lg">
                <h2 className="h1 mb-4">{block.title}</h2>
                <p className="text-body mb-8 max-w-2xl mx-auto opacity-90">
                  {block.subtitle}
                </p>
                <button className="bg-secondary text-primary py-3 px-8 rounded-full h3 hover:bg-gray-100 transition-colors duration-300 shadow-md">
                  {block.cta}
                </button>
              </div>
            )}
            {block.type === "product_detail" && (
              <ProductDetailBlockRenderer block={block} />
            )}
          </div>
        );

        return (
          <MotionDiv
            key={index}
            className={`section ${
              block.type === "hero" ? "relative overflow-hidden" : ""
            } ${hasBackground ? "text-secondary" : "text-primary"}`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {hasBackground && block.background && (
              <BackgroundSafe
                src={block.background.image}
                className="absolute inset-0 w-full h-full object-cover z-0"
                overlay={`linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.5))`}
              />
            )}
            {sectionContent}
          </MotionDiv>
        );
      })}
    </div>
  );
}

// Separate component for Product Detail block to manage its state
function ProductDetailBlockRenderer({ block }) {
  const [mainImage, setMainImage] = useState(block.image);

  // Reset mainImage when block.image changes (e.g., navigating between product detail pages)
  useEffect(() => {
    setMainImage(block.image);
  }, [block.image]);

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const thumbnailVariants = {
    active: { borderColor: "#000000", scale: 1.05 },
    inactive: { borderColor: "#cbd5e1", scale: 1 },
  };

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center mb-12"
      >
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-wrap md:flex-nowrap md:flex-col gap-2 overflow-x-auto md:overflow-y-auto max-h-[400px] pb-2 pt-2 md:pb-0 px-1 md:px-0 no-scrollbar items-center justify-center md:justify-start md:w-[10rem]">
            {block.gallery.map((imgSrc, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                onClick={() => setMainImage(imgSrc)}
                animate={mainImage === imgSrc ? "active" : "inactive"}
                variants={thumbnailVariants}
              >
                <ImageSafe
                  src={imgSrc}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-contain"
                  width={96}
                  height={96}
                />
              </motion.div>
            ))}
          </div>
          {/* Image version */}

          {mainImage !== RotateImage && (
            <ImageSafe
              src={mainImage}
              alt={block.title}
              className="rounded-2xl shadow-xl w-full object-contain overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
              width={600}
              height={400}
            />
          )}
          {/* 3D model version */}
          {mainImage === RotateImage && (
            <div className="rounded-2xl shadow-xl w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <ModelViewer />
            </div>
          )}
        </div>
        <div>
          <h1 className="h1 text-primary mb-4">{block.title}</h1>
          <p className="text-body text-muted mb-6">{block.subtitle}</p>
          <p className="text-body text-primary mb-8">{block.description}</p>
          {block.cta && (
            <button className="bg-primary text-secondary py-3 px-8 rounded-full h3 hover:bg-gray-800 transition-colors duration-300 shadow-md">
              {block.cta}
            </button>
          )}
        </div>
      </motion.div>

      {block.features && block.features.length > 0 && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="h2 text-primary mb-6 text-center">Key Features</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
            {block.features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-center text-body text-muted bg-gray-50 p-4 rounded-lg shadow-md-light"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={i}
              >
                <FaCog className="text-accent mr-3 w-6 h-6 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
