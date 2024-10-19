import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Digital Marketing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: meta,
    },
    {
      name: "AWS",
      icon: web,
    },
  ];
  
  const experiences = [
    {
      title: "Cisco Virtual Internship in Networking",
      company_name: "CISCO",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Gained a comprehensive understanding of networking fundamentals including OSI model, TCP/IP, and subnetting.",
        "Configured and managed routers, switches, and firewalls to optimize network performance and security.",
        "Learned about advanced networking concepts such as VPNs, VLANs, and wireless networking technologies.",
        "Troubleshooted and resolved network-related issues in both wired and wireless environments.",
        "Successfully implemented network security protocols including firewalls, access control, and encryption.",
      ],
    },
    {
      title: "SQL Summer Internship",
      company_name: "Celebal Technologies",
      icon: mongodb,
      iconBg: "#E6DEDD",
      date: "May 2024 - July 2024",
      points: [
        "Developed and optimized SQL queries to enhance database performance for large-scale datasets.",
        "Collaborated with data engineers and project teams to ensure efficient data management and retrieval.",
        "Worked on database administration tasks including backups, restoration, and data migration.",
        "Analyzed and resolved SQL query performance issues to improve overall system efficiency.",
        "Contributed to the automation of database processes, reducing manual interventions and improving data accuracy.",
      ],
    },
    {
      title: "Digital Marketing ",
      company_name: "Bada Business Pvt. Ltd.",
      icon: shopify,
      iconBg: "#383E56",
      date: "July 2023 - Nov 2023",
      points: [
        "Developed and executed digital marketing strategies to increase brand visibility and engagement.",
        "Managed social media platforms, creating and scheduling content to target key audiences and boost online presence.",
        "Conducted keyword research and optimized content for SEO, improving search engine rankings and organic traffic.",
        "Analyzed marketing campaign performance using tools like Google Analytics and provided insights for optimization.",
        "Collaborated with the content and design teams to create impactful marketing materials and campaigns.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "Self-employed",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2020 - Jan 2022",
      points: [
        "Acquired extensive knowledge of various technologies, particularly focusing on Microsoft Office Suite, Google Slides, Google Forms, Google Classroom, and Google Ads.",
        "Leveraged hands-on experience to proficiently navigate and utilize these platforms to deliver exceptional results for diverse clients.",
        "Developed and managed digital marketing campaigns using Google Ads, enhancing brand visibility and driving client engagement.",
        "Created engaging presentations and educational materials using Google Slides and Microsoft Office tools to support client initiatives.",
        "Provided comprehensive support and training in Google Classroom, facilitating effective online learning experiences for clients.",
        "Tailored services to meet a wide spectrum of client needs, ensuring precision and efficacy in all deliverables."
      ],   
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "RajBlog Live",
      description:
        "Raj Blog App is a web-based platform that enables users to create, share, and manage blog content effortlessly, providing a convenient and engaging solution for sharing thoughts and expertise with a global audience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://rajblog-app.vercel.app/",
    },
    {
      name: "UNO-Library",
      description:
        "UNO Library is an innovative web-based platform designed to facilitate the exploration, management, and sharing of educational resources and courses. This user-friendly application allows students and educators to access a vast repository of knowledge, providing an efficient solution for enhancing learning experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tailwind,
      source_code_link: "https://github.com/Anshuraj09/UNO-Library.git",
    },
    {
      name: "E-commerce Website",
      description:
        "Digital Shop Management is an innovative solution designed to streamline the management of stock records, employee information, purchase details, and customer data, significantly simplifying operations for organizations of average size. This project addresses the need for efficient data handling without the high costs associated with traditional ledger systems.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: shopify,
      source_code_link: "https://github.com/Anshuraj09/E-Commerce_Project.git",
    },
    {
      name: "A2Z DSA",
      description:
        "A comprehensive platform for practicing Data Structures and Algorithms (DSA), offering a variety of challenges and resources to enhance coding skills. This project aims to provide users with an extensive range of problems to solve, helping them prepare for technical interviews and improve their problem-solving abilities.",
      tags: [
        {
          name: "data structures",
          color: "blue-text-gradient",
        },
        {
          name: "algorithms",
          color: "green-text-gradient",
        },
        {
          name: "coding practice",
          color: "pink-text-gradient",
        },
      ],
      image: tesla, 
      coding_practice_link: "https://github.com/Anshuraj09/A2Z-DSA.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  