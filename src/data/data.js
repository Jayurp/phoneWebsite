// import iphone16proModel from "../assets/iphone_16_pro.glb";

export const pageData = {
  businessName: "website",
  websiteDescription:
    "simple website with 5 pages, 3 of them will have same design with some cards in it, other will be home and contact us",
  targetAudience: "retail customers",
  primaryAction: "learn-more",
  mainGoal: "online-sales",
  businessType: "technology",
  voiceTone: ["Friendly", "Modern", "Creative", "Elegant"],
  websiteType: "multi-page",
  sellingProducts: "maybe-later",
  typography: "no-preference",
  brandColors: {
    primary: "#000000",
    secondary: "#ffffff",
  },
  specialEffects: [
    "Animations",
    "Hover Effects",
    "Parallax Scrolling",
    "Smooth Transition",
    "Interactive Elements",
  ],
  pages: [
    {
      name: "Home",
      path: "/",
      content: [
        {
          type: "hero",
          title: "Innovate. Create. Elevate.",
          subtitle:
            "Empowering your vision with cutting-edge technology solutions designed for retail customers.",
          cta: "Discover Our Products",
          background: {
            image:
              "https://images.unsplash.com/photo-1519389950473-47ba0c766d13?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backups: [
              "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg",
              "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
          },
          animation: "parallax",
        },
        {
          type: "features",
          title: "What We Offer",
          subtitle:
            "Explore our comprehensive suite of services designed to propel your business forward.",
          items: [
            {
              icon: "FaBriefcase",
              title: "Smart Solutions",
              description:
                "Tailored technology to streamline operations and enhance efficiency.",
            },
            {
              icon: "FaLightbulb",
              title: "Creative Design",
              description:
                "Visually stunning and user-friendly interfaces that captivate.",
            },
            {
              icon: "FaRocket",
              title: "Rapid Development",
              description:
                "Agile methodologies ensuring quick and high-quality delivery.",
            },
            {
              icon: "FaCode",
              title: "Robust Security",
              description:
                "Protecting your data and systems with industry-leading security protocols.",
            },
            {
              icon: "FaCloud",
              title: "Cloud Integration",
              description:
                "Seamless cloud services for scalability and flexible access.",
            },
            {
              icon: "FaChartLine",
              title: "Analytics & Insights",
              description:
                "Data-driven strategies to understand and grow your customer base.",
            },
          ],
        },
        {
          type: "image_text",
          title: "Transforming Retail Experiences",
          description:
            "Our innovative products help retail businesses engage customers, optimize inventory, and boost sales with intuitive technology.",
          image:
            "https://images.unsplash.com/photo-1563906263546-d44477c7f465?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          backups: [
            "https://cdn.pixabay.com/photo/2017/08/07/00/44/online-2598463_1280.jpg",
            "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          ],
          cta: "Learn More About Our Retail Solutions",
          imageRight: false,
        },
        {
          type: "testimonials",
          title: "What Our Clients Say",
          subtitle:
            "Hear from businesses that have leveraged our technology to achieve remarkable success.",
          items: [
            {
              avatar:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Jane Doe",
              role: "CEO, Retail Innovators",
              quote:
                "The team delivered beyond our expectations. Their solutions are truly transformative!",
            },
            {
              avatar:
                "https://images.unsplash.com/photo-1544723795-3fb6469e3802?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "John Smith",
              role: "Founder, Tech Ventures",
              quote:
                "Exceptional service and outstanding product quality. Highly recommend their expertise.",
            },
            {
              avatar:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Emily White",
              role: "CTO, Digital Solutions",
              quote:
                "Our partnership has been invaluable. Their insights have significantly improved our platform.",
            },
          ],
        },
        {
          type: "cta_banner",
          title: "Ready to Elevate Your Business?",
          subtitle:
            "Join the growing number of businesses thriving with our innovative technology. Get started today!",
          cta: "Get a Free Consultation",
        },
      ],
    },
    {
      name: "New Products",
      path: "/products-new",
      content: [
        {
          type: "hero",
          title: "Product Suite: Innovative Retail Tech",
          subtitle:
            "Explore our range of solutions designed to revolutionize your retail operations.",
          cta: "View All Products",
          background: {
            image:
              "https://images.unsplash.com/photo-1518770660439-463652d807e3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backups: [
              "https://cdn.pixabay.com/photo/2016/09/21/04/46/computer-1684341_1280.jpg",
              "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
          },
        },
        {
          type: "product_cards",
          title: "Featured Retail Solutions",
          subtitle:
            "From inventory management to customer engagement, we have you covered.",
          items: [
            {
              image:
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "POS System Pro",
              description:
                "Advanced point-of-sale system for efficient transactions and reporting.",
              path: "/product-detail/pos-system-pro",
            },
            {
              image:
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Inventory Optimizer",
              description:
                "Smart inventory management to reduce waste and maximize stock availability.",
              path: "/product-detail/inventory-optimizer",
            },
            {
              image:
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Customer Engagement Hub",
              description:
                "Personalized marketing tools and loyalty programs to delight your customers.",
              path: "/product-detail/customer-engagement-hub",
            },
            {
              image:
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Data Analytics Dashboard",
              description:
                "Real-time insights into sales, customer behavior, and market trends.",
              path: "/product-detail/data-analytics-dashboard",
            },
            {
              image:
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Supply Chain Manager",
              description:
                "Optimize your supply chain from procurement to delivery.",
              path: "/product-detail/supply-chain-manager",
            },
            {
              image:
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "E-commerce Accelerator",
              description:
                "Boost your online sales with our integrated e-commerce solutions.",
              path: "/product-detail/ecommerce-accelerator",
            },
          ],
        },
        {
          type: "cta_banner",
          title: "Find the Perfect Product for You",
          subtitle:
            "Our experts are ready to guide you to the best solutions for your retail business.",
          cta: "Schedule a Demo",
        },
      ],
    },
    {
      name: "CPO",
      path: "/products-cpo",
      content: [
        {
          type: "hero",
          title: "Advanced Solutions for Modern Retail",
          subtitle:
            "Dive deeper into specialized tools designed for specific retail challenges.",
          cta: "Explore Solutions",
          background: {
            image:
              "https://images.unsplash.com/photo-1517292984533-df57564d6c41?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backups: [
              "https://cdn.pixabay.com/photo/2015/07/02/10/43/marketing-828854_1280.jpg",
              "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
          },
        },
        {
          type: "product_cards",
          title: "Specialized Retail Software",
          subtitle:
            "Targeted tools to enhance efficiency and customer satisfaction.",
          items: [
            {
              image:
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "AI-Powered Merchandising",
              description:
                "Automate product placement and promotions for maximum impact.",
              path: "/product-detail/ai-powered-merchandising",
            },
            {
              image:
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Omnichannel Integrator",
              description:
                "Unify online and in-store experiences for a seamless customer journey.",
              path: "/product-detail/omnichannel-integrator",
            },
            {
              image:
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Predictive Analytics Engine",
              description:
                "Forecast trends and demand with powerful machine learning.",
              path: "/product-detail/predictive-analytics-engine",
            },
            {
              image:
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Digital Signage Management",
              description:
                "Control and update your in-store displays with ease.",
              path: "/product-detail/digital-signage-management",
            },
            {
              image:
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Self-Checkout Solutions",
              description:
                "Modernize your checkout experience and reduce wait times.",
              path: "/product-detail/self-checkout-solutions",
            },
            {
              image:
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Subscription Management",
              description:
                "Handle recurring revenue models with integrated billing and customer portals.",
              path: "/product-detail/subscription-management",
            },
          ],
        },
        {
          type: "cta_banner",
          title: "Ready to Innovate Your Retail?",
          subtitle:
            "Get in touch to learn how our specialized products can benefit your business.",
          cta: "Contact Sales",
        },
      ],
    },
    {
      name: "Asis+",
      path: "/products-asis-plus",
      content: [
        {
          type: "hero",
          title: "Future-Proofing Your Business",
          subtitle:
            "Cutting-edge technologies designed for the challenges of tomorrow's retail landscape.",
          cta: "See Our Vision",
          background: {
            image:
              "https://images.unsplash.com/photo-1504384308092-d04b901ad5a8?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backups: [
              "https://cdn.pixabay.com/photo/2017/09/25/11/55/web-design-2785233_1280.jpg",
              "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
          },
        },
        {
          type: "product_cards",
          title: "Emerging Technologies for Retail",
          subtitle:
            "Stay ahead of the curve with our innovative and forward-thinking solutions.",
          items: [
            {
              image:
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "AR/VR Shopping Experience",
              description:
                "Immersive virtual try-ons and product visualizations for customers.",
              path: "/product-detail/ar-vr-shopping-experience",
            },
            {
              image:
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Blockchain for Supply Chain",
              description:
                "Enhanced transparency and traceability for your entire supply chain.",
              path: "/product-detail/blockchain-for-supply-chain",
            },
            {
              image:
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "IoT-Powered Store Monitoring",
              description:
                "Real-time data from in-store sensors for optimized operations and security.",
              path: "/product-detail/iot-powered-store-monitoring",
            },
            {
              image:
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Robotic Process Automation",
              description:
                "Automate repetitive tasks to free up staff for more critical functions.",
              path: "/product-detail/robotic-process-automation",
            },
            {
              image:
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "AI Chatbots for Support",
              description:
                "Instant customer service and personalized recommendations 24/7.",
              path: "/product-detail/ai-chatbots-for-support",
            },
            {
              image:
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Biometric Authentication",
              description:
                "Secure and frictionless access for both customers and employees.",
              path: "/product-detail/biometric-authentication",
            },
          ],
        },
        {
          type: "cta_banner",
          title: "Step Into the Future of Retail",
          subtitle:
            "Embrace the next generation of retail technology with our expert guidance.",
          cta: "Discover Our Innovations",
        },
      ],
    },
    {
      name: "Asis",
      path: "/products-asis",
      content: [
        {
          type: "hero",
          title: "Product Suite: Innovative Retail Tech",
          subtitle:
            "Explore our range of solutions designed to revolutionize your retail operations.",
          cta: "View All Products",
          background: {
            image:
              "https://images.unsplash.com/photo-1518770660439-463652d807e3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backups: [
              "https://cdn.pixabay.com/photo/2016/09/21/04/46/computer-1684341_1280.jpg",
              "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
          },
        },
        {
          type: "product_cards",
          title: "Featured Retail Solutions",
          subtitle:
            "From inventory management to customer engagement, we have you covered.",
          items: [
            {
              image:
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "POS System Pro",
              description:
                "Advanced point-of-sale system for efficient transactions and reporting.",
              path: "/product-detail/pos-system-pro",
            },
            {
              image:
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Inventory Optimizer",
              description:
                "Smart inventory management to reduce waste and maximize stock availability.",
              path: "/product-detail/inventory-optimizer",
            },
            {
              image:
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Customer Engagement Hub",
              description:
                "Personalized marketing tools and loyalty programs to delight your customers.",
              path: "/product-detail/customer-engagement-hub",
            },
            {
              image:
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Data Analytics Dashboard",
              description:
                "Real-time insights into sales, customer behavior, and market trends.",
              path: "/product-detail/data-analytics-dashboard",
            },
            {
              image:
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Supply Chain Manager",
              description:
                "Optimize your supply chain from procurement to delivery.",
              path: "/product-detail/supply-chain-manager",
            },
            {
              image:
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "E-commerce Accelerator",
              description:
                "Boost your online sales with our integrated e-commerce solutions.",
              path: "/product-detail/ecommerce-accelerator",
            },
          ],
        },
        {
          type: "cta_banner",
          title: "Find the Perfect Product for You",
          subtitle:
            "Our experts are ready to guide you to the best solutions for your retail business.",
          cta: "Schedule a Demo",
        },
      ],
    },
    {
      name: "Contact Us",
      path: "/contact-us",
      content: [
        {
          type: "hero",
          title: "Get in Touch with Us",
          subtitle:
            "We're here to answer your questions and help you find the perfect solutions.",
          cta: "Send Us a Message",
          background: {
            image:
              "https://images.unsplash.com/photo-1543286386-77943d922572?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backups: [
              "https://cdn.pixabay.com/photo/2015/07/28/22/05/contact-us-865003_1280.jpg",
              "https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
          },
          animation: "fade-in",
        },
        {
          type: "contact_form",
          title: "Send Us a Message",
          subtitle:
            "Fill out the form below and we'll get back to you as soon as possible.",
          formFields: [
            { label: "Name", type: "text", placeholder: "Your Name" },
            { label: "Email", type: "email", placeholder: "Your Email" },
            {
              label: "Subject",
              type: "text",
              placeholder: "Subject of your inquiry",
            },
            { label: "Message", type: "textarea", placeholder: "Your Message" },
          ],
          cta: "Submit Message",
        },
        {
          type: "contact_info",
          title: "Or Reach Us Directly",
          subtitle: "Prefer to talk? Here's how you can find us.",
          items: [
            { icon: "FaEnvelope", label: "Email", value: "info@website.com" },
            { icon: "FaPhone", label: "Phone", value: "+1 (555) 123-4567" },
            {
              icon: "FaMapMarkerAlt",
              label: "Address",
              value: "123 Tech Lane, Innovation City, TX 78701",
            },
          ],
        },
      ],
    },
    {
      name: "Product Detail",
      path: "/product-detail/:productId",
      content: [
        {
          type: "product_detail",
          products: {
            "iphone-16-pro": {
              title: "POS System Pro: The Future of Retail Transactions",
              subtitle:
                "Streamline your sales, manage inventory, and gain customer insights with our advanced point-of-sale system.",
              image:
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "POS System Pro is an all-in-one solution designed for modern retail environments. It integrates seamlessly with your existing infrastructure, offering robust features for inventory tracking, employee management, sales analytics, and customer loyalty programs. Experience faster checkouts, reduced errors, and a more efficient operation.",
              features: [
                "Intuitive Touchscreen Interface",
                "Real-time Inventory Sync",
                "Integrated Customer Loyalty",
                "Advanced Sales Reporting",
                "Secure Payment Processing",
                "Multi-store Management",
              ],
              cta: "Request a Demo",
              gallery: [
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufdDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHfx8fA%3D%3D",
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fsA%3D%3D",
              ],
              relatedProducts: [
                "Inventory Optimizer",
                "Customer Engagement Hub",
              ],
            },
            "inventory-optimizer": {
              title: "Inventory Optimizer: Smart Stock Management",
              subtitle:
                "Never run out of popular items or be overstocked again. Our AI-driven inventory system predicts demand and optimizes your stock levels.",
              image:
                "https://images.unsplash.com/photo-1588196749597-9ff0b7ee9d66?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Inventory Optimizer uses advanced algorithms to analyze sales data, seasonal trends, and supplier lead times to provide precise recommendations for purchasing and stock rotation. Reduce carrying costs, minimize waste, and ensure your shelves are always stocked with what customers want.",
              features: [
                "AI-Powered Demand Forecasting",
                "Automated Reorder Points",
                "Supplier Management Tools",
                "Multi-warehouse Support",
                "Real-time Stock Alerts",
                "Detailed Performance Reports",
              ],
              cta: "Optimize Your Inventory",
              gallery: [
                "https://images.unsplash.com/photo-1588196749597-9ff0b7ee9d66?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1621939106248-adac10857321?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1621939106248-adac10857321?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: ["POS System Pro", "Supply Chain Manager"],
            },
            "customer-engagement-hub": {
              title: "Customer Engagement Hub: Build Lasting Relationships",
              subtitle:
                "Connect with your customers on a deeper level. Personalize interactions, run targeted campaigns, and build strong loyalty.",
              image:
                "https://images.unsplash.com/photo-1542740943-b92497677d29?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our Customer Engagement Hub provides tools for CRM, email marketing, SMS campaigns, and loyalty programs. Segment your audience, automate personalized messages, and track engagement to foster customer satisfaction and repeat business.",
              features: [
                "Integrated CRM",
                "Personalized Marketing Campaigns",
                "Customizable Loyalty Programs",
                "Omnichannel Communication",
                "Customer Segmentation",
                "Performance Analytics",
              ],
              cta: "Boost Customer Loyalty",
              gallery: [
                "https://images.unsplash.com/photo-1542740943-b92497677d29?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "Data Analytics Dashboard",
                "E-commerce Accelerator",
              ],
            },
            "data-analytics-dashboard": {
              title: "Data Analytics Dashboard: Unlock Business Insights",
              subtitle:
                "Transform raw data into actionable insights with our intuitive analytics dashboard. Understand sales trends, customer behavior, and operational efficiency.",
              image:
                "https://images.unsplash.com/photo-1551288259-cd19ad98ea91?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our Data Analytics Dashboard provides real-time reporting and visualization tools. Monitor key performance indicators (KPIs), identify opportunities for growth, and make data-driven decisions to stay competitive. Customizable reports and easy-to-understand charts make complex data accessible.",
              features: [
                "Real-time KPI Monitoring",
                "Customizable Dashboards",
                "Customer Behavior Analysis",
                "Sales and Revenue Forecasting",
                "Operational Efficiency Reports",
                "Integration with POS and Inventory Systems",
              ],
              cta: "Get Data-Driven",
              gallery: [
                "https://images.unsplash.com/photo-1551288259-cd19ad98ea91?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1551288259-cd19ad98ea91?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1551288259-cd19ad98ea91?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "Inventory Optimizer",
                "Customer Engagement Hub",
              ],
            },
            "supply-chain-manager": {
              title: "Supply Chain Manager: Seamless Operations",
              subtitle:
                "Optimize your entire supply chain, from procurement to delivery, ensuring efficiency and cost savings.",
              image:
                "https://images.unsplash.com/photo-1543286386-77943d922572?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our Supply Chain Manager provides end-to-end visibility and control over your logistics. Track shipments, manage suppliers, automate orders, and reduce bottlenecks to enhance operational flow and customer satisfaction.",
              features: [
                "Real-time Shipment Tracking",
                "Automated Order Processing",
                "Supplier Relationship Management",
                "Warehouse Optimization",
                "Inventory Forecasting Integration",
                "Cost Analysis & Reporting",
              ],
              cta: "Streamline Your Supply Chain",
              gallery: [
                "https://images.unsplash.com/photo-1543286386-77943d922572?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "Inventory Optimizer",
                "E-commerce Accelerator",
              ],
            },
            "ecommerce-accelerator": {
              title: "E-commerce Accelerator: Boost Online Sales",
              subtitle:
                "Maximize your online presence and drive more sales with our comprehensive e-commerce solutions.",
              image:
                "https://images.unsplash.com/photo-1533750058223-2895f51600c3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our E-commerce Accelerator provides everything you need to succeed online: robust storefronts, secure payment gateways, seamless inventory integration, and powerful marketing tools. Grow your digital footprint and reach a wider customer base.",
              features: [
                "Customizable Online Storefronts",
                "Secure Payment Gateway Integration",
                "SEO & Marketing Tools",
                "Mobile-Optimized Experience",
                "Inventory & Order Management",
                "Customer Review & Rating Systems",
              ],
              cta: "Launch Your Online Store",
              gallery: [
                "https://images.unsplash.com/photo-1533750058223-2895f51600c3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1563986768605-e421074e2a70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "Customer Engagement Hub",
                "Data Analytics Dashboard",
              ],
            },
            "ai-powered-merchandising": {
              title: "AI-Powered Merchandising: Smart Product Displays",
              subtitle:
                "Automate and optimize your product placement and promotions for maximum sales impact with artificial intelligence.",
              image:
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Leverage AI to analyze customer behavior, sales data, and visual appeal to recommend optimal product layouts, pricing strategies, and promotional displays. Ensure your products always catch the eye of your target audience and drive conversions.",
              features: [
                "Automated Product Recommendations",
                "Visual Merchandising Optimization",
                "Dynamic Pricing Strategies",
                "Seasonal & Trend Analysis",
                "Customer Flow Optimization",
                "A/B Testing for Layouts",
              ],
              cta: "Optimize Your Merchandising",
              gallery: [
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "Predictive Analytics Engine",
                "Digital Signage Management",
              ],
            },
            "omnichannel-integrator": {
              title: "Omnichannel Integrator: Seamless Customer Journeys",
              subtitle:
                "Provide a consistent and unified shopping experience across all customer touchpoints, online and offline.",
              image:
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our Omnichannel Integrator connects your e-commerce platform, physical stores, mobile apps, and customer service systems into a single, cohesive ecosystem. Enable click-and-collect, endless aisle, and unified customer profiles for a truly modern retail experience.",
              features: [
                "Unified Customer Profiles",
                "Click & Collect / BOPIS Support",
                "Seamless Inventory Across Channels",
                "Centralized Order Management",
                "Consistent Brand Experience",
                "Integrated Customer Service",
              ],
              cta: "Unify Your Channels",
              gallery: [
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: ["POS System Pro", "E-commerce Accelerator"],
            },
            "predictive-analytics-engine": {
              title: "Predictive Analytics Engine: Anticipate Future Trends",
              subtitle:
                "Harness the power of machine learning to forecast market trends, customer behavior, and demand with unparalleled accuracy.",
              image:
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our Predictive Analytics Engine goes beyond historical data, using advanced AI models to identify patterns and predict future outcomes. Optimize pricing, tailor promotions, and make strategic decisions based on informed foresight.",
              features: [
                "Advanced AI Forecasting",
                "Market Trend Prediction",
                "Customer Churn Analysis",
                "Optimal Pricing Recommendations",
                "Inventory Demand Prediction",
                "Scenario Planning",
              ],
              cta: "Predict Your Success",
              gallery: [
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "AI-Powered Merchandising",
                "Data Analytics Dashboard",
              ],
            },
            "digital-signage-management": {
              title: "Digital Signage Management: Engage In-Store Customers",
              subtitle:
                "Control and update your in-store digital displays with ease, creating dynamic and engaging experiences for your customers.",
              image:
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our Digital Signage Management system allows you to remotely manage content, schedule promotions, and deliver eye-catching visuals to screens throughout your store. Enhance customer experience, promote special offers, and provide useful information seamlessly.",
              features: [
                "Centralized Content Management",
                "Scheduled Playlists & Campaigns",
                "Dynamic Content Updates",
                "Interactive Display Support",
                "Real-time Performance Monitoring",
                "Multi-Screen Synchronization",
              ],
              cta: "Enhance Your In-Store Presence",
              gallery: [
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "AI-Powered Merchandising",
                "Customer Engagement Hub",
              ],
            },
            "self-checkout-solutions": {
              title: "Self-Checkout Solutions: Modernize Your Store",
              subtitle:
                "Offer a convenient and efficient self-checkout experience to reduce wait times and improve customer satisfaction.",
              image:
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our self-checkout systems are designed for ease of use and reliability. Reduce labor costs, empower customers with independence, and speed up transactions during peak hours. Features include intuitive interfaces, secure payment options, and robust fraud prevention.",
              features: [
                "User-Friendly Interface",
                "Fast & Efficient Transactions",
                "Secure Payment Integration",
                "Fraud Prevention & Security",
                "Assisted Mode for Staff",
                "Analytics on Usage & Flow",
              ],
              cta: "Implement Self-Checkout",
              gallery: [
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: ["POS System Pro", "Omnichannel Integrator"],
            },
            "subscription-management": {
              title: "Subscription Management: Grow Recurring Revenue",
              subtitle:
                "Easily handle recurring billing, customer portals, and subscription lifecycle management to build a predictable revenue stream.",
              image:
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our Subscription Management platform simplifies the complexities of recurring services. Automate billing, offer flexible plans, manage customer subscriptions, and gain insights into churn and retention rates. Perfect for retail businesses looking to diversify revenue models.",
              features: [
                "Automated Recurring Billing",
                "Flexible Subscription Plans",
                "Customer Self-Service Portal",
                "Churn Reduction Tools",
                "Usage-Based Billing Support",
                "Comprehensive Reporting",
              ],
              cta: "Start Your Subscription Service",
              gallery: [
                "https://images.unsplash.com/photo-1549526786-b4d6b5e1b6f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1506157788647-b841029c07e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1579587429643-d34360e2ce1c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "E-commerce Accelerator",
                "Customer Engagement Hub",
              ],
            },
            "ar-vr-shopping-experience": {
              title: "AR/VR Shopping Experience: Immersive Retail",
              subtitle:
                "Offer customers revolutionary augmented and virtual reality experiences, from virtual try-ons to interactive product visualizations.",
              image:
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Transform the way customers interact with your products. Our AR/VR solutions enable virtual fitting rooms, 3D product previews in real environments, and immersive store tours, leading to increased engagement and reduced returns.",
              features: [
                "Virtual Try-On Functionality",
                "3D Product Visualization",
                "Interactive Store Environments",
                "Augmented Reality Apps",
                "Enhanced Customer Engagement",
                "Reduced Return Rates",
              ],
              cta: "Explore Immersive Retail",
              gallery: [
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "E-commerce Accelerator",
                "Digital Signage Management",
              ],
            },
            "blockchain-for-supply-chain": {
              title: "Blockchain for Supply Chain: Trust & Transparency",
              subtitle:
                "Bring unparalleled transparency, traceability, and security to your entire supply chain using decentralized blockchain technology.",
              image:
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our blockchain-based solution provides an immutable ledger for every transaction and movement within your supply chain. Verify authenticity, track origins, reduce fraud, and build greater trust with consumers and partners alike.",
              features: [
                "Immutable Transaction Records",
                "Enhanced Product Traceability",
                "Fraud Prevention",
                "Supplier Verification",
                "Automated Smart Contracts",
                "Increased Trust & Transparency",
              ],
              cta: "Secure Your Supply Chain",
              gallery: [
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "Supply Chain Manager",
                "Data Analytics Dashboard",
              ],
            },
            "iot-powered-store-monitoring": {
              title: "IoT-Powered Store Monitoring: Smart Operations",
              subtitle:
                "Gain real-time insights from in-store sensors for optimized operations, enhanced security, and superior customer experiences.",
              image:
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our IoT solution deploys a network of smart sensors to collect data on foot traffic, dwell times, inventory levels, and environmental conditions. Optimize staffing, prevent theft, and create a more comfortable and efficient shopping environment.",
              features: [
                "Real-time Foot Traffic Analysis",
                "Inventory Shelf Monitoring",
                "Environmental Controls",
                "Enhanced Security & Alerts",
                "Predictive Maintenance for Equipment",
                "Customer Journey Mapping",
              ],
              cta: "Monitor Your Store Smarter",
              gallery: [
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "Predictive Analytics Engine",
                "Digital Signage Management",
              ],
            },
            "robotic-process-automation": {
              title: "Robotic Process Automation: Automate Repetitive Tasks",
              subtitle:
                "Free up your staff from tedious, repetitive tasks by automating workflows with intelligent Robotic Process Automation (RPA).",
              image:
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "RPA bots can handle data entry, report generation, inventory updates, and more, allowing your human workforce to focus on high-value activities like customer engagement and strategic planning. Increase accuracy, speed, and overall operational efficiency.",
              features: [
                "Automated Data Entry",
                "Streamlined Back-Office Operations",
                "Faster Report Generation",
                "Reduced Human Error",
                "Integration with Existing Systems",
                "Scalable Automation",
              ],
              cta: "Automate Your Workflow",
              gallery: [
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: ["POS System Pro", "Inventory Optimizer"],
            },
            "ai-chatbots-for-support": {
              title: "AI Chatbots for Support: Instant Customer Service",
              subtitle:
                "Provide 24/7 instant customer support, answer common queries, and offer personalized recommendations with intelligent AI chatbots.",
              image:
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Our AI chatbots can handle a high volume of customer inquiries, resolve issues quickly, and even guide customers through purchasing decisions. Improve customer satisfaction, reduce support costs, and free up human agents for more complex tasks.",
              features: [
                "24/7 Automated Support",
                "Natural Language Processing (NLP)",
                "Personalized Product Recommendations",
                "Seamless Handoff to Human Agents",
                "Multilingual Support",
                "Performance Analytics & Insights",
              ],
              cta: "Implement AI Support",
              gallery: [
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "Customer Engagement Hub",
                "E-commerce Accelerator",
              ],
            },
            "biometric-authentication": {
              title: "Biometric Authentication: Secure & Frictionless Access",
              subtitle:
                "Enhance security and streamline access for both customers and employees with advanced biometric authentication solutions.",
              image:
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description:
                "Implement fingerprint, facial, or iris recognition for secure payments, employee clock-ins, and privileged access. Reduce fraud, eliminate forgotten passwords, and provide a faster, more convenient experience.",
              features: [
                "Fingerprint Recognition",
                "Facial Recognition",
                "Iris Scanning",
                "Secure Payment Authorization",
                "Employee Access Control",
                "Enhanced Data Security",
              ],
              cta: "Strengthen Security",
              gallery: [
                "https://images.unsplash.com/photo-1522204523234-8729aa67e2e6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1507207611896-cd44675ed2a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ],
              relatedProducts: [
                "IoT-Powered Store Monitoring",
                "POS System Pro",
              ],
            },
          },
        },
      ],
    },
  ],
};