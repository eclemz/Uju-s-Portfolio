export const ProjectCards = [
  {
    id: 1,
    image: "korie.svg",
    title: "Korie Digitals",
    description: `Korie Digitals is a Software 
    Development Company that builds 
    digital products and offers digital 
    solutions to Businesses. `,
  },

  {
    id: 2,
    image: "ieatz.svg",
    title: "iEatz",
    description: `iEatz is a Software Development 
    Company that builds digital 
    products and offers digital solutions 
    to Businesses. `,
  },

  {
    id: 3,
    image: "ola.svg",
    title: "Ola",
    description: `iEatz is a Software Development 
    Company that builds digital 
    products and offers digital solutions 
    to Businesses. `,
  },
];

export const TestimonialCard = [
  {
    title: "Designer at Studio 4852",
    name: "Nornor",
    desc: `“Uju is a great team player with an exceptional eye for design. She works with precision and brings a level of grit that pushes every project forward. Her ability to collaborate while maintaining high design standards makes her an asset to any team.”`,
  },
  {
    title: "Co-founder at CreatNeste",
    name: "Chidera Onuma",
    desc: `“Uju is the perfect definition for excellence, focus and hard work. She came for internship and wowed all of us with how precise she is and the willingness to learn.”`,
  },
  {
    title: "Service Manager",
    name: "Ukama Kingsley",
    desc: `“Working with Uju has been an absolute pleasure. Not only does she possess exceptional UI/UX Design and project management skills, but she also brings a collaborative spirit that makes teamwork effortless.”`,
  },
];

export const ExperienceCard = [
  {
    icon: "creatneste.svg",
    title: "UX/UI Designer",
    company: "Creatneste",
    date: "Nov, 2025 - Present",
    desc: `**UX Research:** I led user interviews, surveys, and usability testing to gather insights
    into user pain point and behaviour.

    **Design System:** To  ensure a cohesive user interface, I developed and adhered to a design
    system that outlined typography, colours, iconography,, and reusable UI components.
    I created and used components in Figma such as buttons, form elements, and navigation 
    bars, ensuring alignment with brand’s visual identity. 

    **Brand Design:** I worked closely with product managers, developers, and other
    designers  to ensure design consistency and alignment with business goals.

    **Interpersonal Skills:** I facilitate communication and collaboration among team members. I ensure
    regular updates on project status, risks, and issues.
`,
  },
  {
    icon: "jem.svg",
    title: "Frontend Developer",
    company: "Jem Services",
    date: "Jul, 2024 - Present",
    desc: `**Problem-Solving:** I identify and address risks or obstacles affecting task completion.

**Documentation & Reporting:** I maintain records of team progress and performance. Provide
regular status updates and reports.

**Time and Resource Management:** I help manage team schedules and avoid burnout or overload
and ensure optimal use of team resources. 

**Task Management:** I monitor daily progress and report issues or delays to the Service Manager.
`,
  },
];

export const navLinks = [
  { name: "About", type: "hash", to: { pathname: "/", hash: "#about" } },
  { name: "Projects", type: "route", to: "/project" },
  {
    name: "Experience",
    type: "hash",
    to: { pathname: "/", hash: "#experience" },
  },
  {
    name: "Testimonial",
    type: "hash",
    to: { pathname: "/", hash: "#testimonial" },
  },
];
