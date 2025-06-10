import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nick Stettnisch",
  initials: "NS",
  url: "http://localhost:3000",
  location: "Anklam, MV",
  locationLink: "",
  description:
    "Berufseinsteiger im Bereich Anwendungsentwicklung mit Schwerpunkt Web-Entwicklung und Systemintegrator",
  summary:
    "Schulische Ausbildung beendet am 1.09.2024 | Momentan auf Job suche",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Symphony",
    "PHP",
    "HTML",
    "CSS",
    "MySQL",
    "Wordpress",
    "Google Analytics",
    "Google Tagging"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "nickstettnisch@gmail.com",
    tel: "+49 1622472872",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Inhorni",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://de.linkedin.com/in/nick-stettnisch-50794128b",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://de.linkedin.com/in/nick-stettnisch-50794128b",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
            {
      company: "Buchwardt und Shabo GmbH",
      href: "https://www.hellosystem.de/",
      badges: [],
      location: "Greifswald DE",
      title: "Fachinformatiker",
      logoUrl: "#",
      start: "April 2025",
      end: "Juni 2025",
      description:
        "Erstellung einer vollständig funktionsfähigen Unternehmenswebsite mit Fokus auf Nutzerfreundlichkeit und responsivem Design. Zusätzlich Betreuung von Kundenprojekten rund um Webseitenerstellung, technische Umsetzung sowie Konfiguration von DNS- und Hosting-Einstellungen.",
    },
        {
      company: "ED-EL Großschlachterei und Fleischhandel GmbH",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Freiberufliches Projekt Webentwicklung",
      logoUrl: "#",
      start: "September 2024",
      end: "November 2024",
      description:
        "Erstellung einer vollständig funktionsfähige Unternehmenswebsite mit Fokus auf Nutzerfreundlichkeit und responsivem Design.",
    },
    {
      company: "GSWE GmbH",
      href: "https://gswe.de/",
      badges: [],
      location: "Remote",
      title: "Fullstack Entwickler",
      logoUrl: "/gswe.jfif",
      start: "Juli 2023",
      end: "August 2023",
      description:
        "Fokus auf Webentwicklung mit Symphony(PHP) und React. Entwicklung von neuen Webanwendungs Funktionen für Kunden.",
    },

  ],
  education: [
    {
      school: "Wirtschafts Akademie Nord Greifswald",
      href: "https://www.wa-nord.de",
      degree: "Fachabitur Informatik",
      logoUrl: "/wanord.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Regionale Schule Käthe Kollwitz Anklam",
      href: "https://www.kollwitzschule-anklam.de",
      degree: "Mittlere Reife",
      logoUrl: "/kwz.png",
      start: "2016",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Schmiede Blecken",
      href: "https://github.com/Inhorni/SchmiedeBlecken",
      dates: "Oktober 2023 - November 2023",
      active: true,
      description:
        "Entwicklung einer einfachen, aber effektiven Webanwendung für eine traditionelle Schmiede, die bisher keine Online-Präsenz hatte. Ziel war es, ihre handwerkliche Kunst digital erlebbar zu machen und neue Kunden anzusprechen.",
      technologies: [
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Inhorni/SchmiedeBlecken",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proj2.png",
      video:
        "",
    },
    {
      title: "WeAreNord",
      href: "https://we-are-nord.de/",
      dates: "Januar 2024 - Februar 2024",
      active: true,
      description:
        "Entwicklung einer Schüler-Website, die kreative Projekte und Produkte der Schüler präsentiert und zum Verkauf anbietet.",
      technologies: [
        "Angular.js",
        "Shopware",
        "SASS",
        "Linux Server",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://we-are-nord.de/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project1.png",
      video: "",
    },
    {
      title: "Pestalotzi Schule Demmin",
      href: "https://github.com/Armooooon/Schulwebsite",
      dates: "Juni 2024 - August 2024",
      active: true,
      description:
        "Klassenprojekt zur Erstellung einer modernen Website für eine Schule in Demmin, um Informationen übersichtlich darzustellen und die Schulgemeinschaft online zu stärken.",
      technologies: [
        "Bootstrap",
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Armooooon/Schulwebsite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proj4.png",
      video: "",
    },
    {
      title: "ED-EL Fleisch",
      href: "",
      dates: "September 2024 - Jetzt",
      active: true,
      description:
        "Entwicklung einer ansprechenden und modernen Homepage für einen echten Kunden für eine Großschlachterei nähe Kölns. Ziel war es, Qualität, Tradition und Transparenz digital widerzuspiegeln und Kunden sowie Partner gezielt anzusprechen.",
      technologies: [
        "Next.js",
        "React.js",
        "Javascript",
        "TailwindCSS",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Inhorni",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proje3.png",
      video:
        "",
    },
                {
      title: "HelloSystem",
      href: "",
      dates: "Mai 2025 - Juni 2025",
      active: true,
      description:
        "Konzeption und Umsetzung einer schlanken, überzeugenden Homepage für eine spezialisierte Unternehmensberatung in Greifswald. Ziel war es, Expertise, Branchenfokus und individuelle Lösungsansätze übersichtlich und ansprechend darzustellen",
      technologies: [
        "Wordpress",
        "CSS",
        "Elementor",
        "HTML",
        "Google Analytics",
        "Google Tags",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.hellosystem.de/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projecthello.png",
      video:
        "",
    },
  ],
} as const;
