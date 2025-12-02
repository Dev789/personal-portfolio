export const resume = {
    basics: {
        name: "Dev Joshi",
        label: "DevOps Engineer",
        email: "joshid647@gmail.com",
        phone: "9638140640",
        location: "Ahmedabad, Gujarat",
        handle: "dev-joshi",
        summary: "DevOps Engineer with proven experience managing and optimizing cloud infrastructure across AWS, GCP, and Azure. Skilled in building and maintaining CI/CD pipelines, automating deployments, implementing monitoring solutions, and ensuring security compliance. Adept at collaborating with cross-functional teams to deliver scalable, cost-efficient, and high-performance solutions.",
    },
    education: [
        {
            institution: "Atmiya University",
            area: "Computer Engineering",
            studyType: "B.Tech",
            startDate: "2018",
            endDate: "2022",
        },
    ],
    experience: [
        {
            company: "Inexture Solutions LTD",
            position: "DevOps Engineer",
            startDate: "May 2025",
            endDate: "Present",
            summary: "Architected and managed multi-cloud and hybrid infrastructure across AWS, GCP, and on-premise servers.",
            highlights: [
                "Spearheaded DevOps efforts for major Abu Dhabi Government client projects.",
                "Established and enforced SOC 2 Type II controls within CI/CD and cloud environments.",
                "Designed and maintained robust CI/CD pipelines (Jenkins, GitHub Workflow) with integrated security.",
                "Collaborated with client technical teams to translate business requirements into secure infrastructure designs.",
            ],
        },
        {
            company: "Ninjatechnolabs",
            position: "DevOps Engineer",
            startDate: "Sep 2023",
            endDate: "May 2025",
            summary: "Oversee and manage the entire cloud infrastructure ensuring optimal performance and scalability.",
            highlights: [
                "Managed cloud infrastructure on AWS, GCP, and other platforms.",
                "Configured CI/CD pipelines using GitHub Workflow and Jenkins.",
                "Provided hands-on support to developers for troubleshooting server and code issues.",
                "Collaborated with development, QA, and operations teams to align infrastructure capabilities.",
            ],
        },
        {
            company: "9series Solutions",
            position: "DevOps Engineer",
            startDate: "Jul 2021",
            endDate: "Sep 2023",
            summary: "Provision, configure, and manage cloud infrastructure on AWS, Azure, and GCP.",
            highlights: [
                "Set up and maintained CI/CD pipelines for automated build, test, and deployment.",
                "Used Ansible and Jenkins to manage and automate server and app configurations.",
                "Implemented monitoring solutions like Datadog and Cronitor.",
                "Ensured security compliance by identifying gaps and meeting SOC2 requirements.",
            ],
        },
    ],
    skills: {
        cloud: [
            { name: "AWS (Advanced)", level: 95 },
            { name: "Azure", level: 80 },
            { name: "GCP", level: 70 },
        ],
        containerization: ["Docker", "Kubernetes (K8s)", "Helm", "OpenShift", "EKS/AKS"],
        iac: ["Terraform (Expert)", "Ansible", "CloudFormation", "Pulumi"],
        cicd: ["Jenkins", "GitLab CI", "GitHub Actions"],
        scripting: ["Python", "Bash"],
        observability: ["Prometheus", "Grafana", "Datadog", "ELK Stack"],
    },

    projects: [
        {
            name: "Intranet Portal Migration & Platform Modernization",
            description: "Migrated a mission-critical employee portal from Liferay DXP 7.2 to 7.4 in a high-security, air-gapped environment. Achieved high availability with a Layer 7 clustered architecture.",
            category: "devops",
            tags: ["Liferay DXP", "Oracle DB", "On-Premise", "High Availability", "Migration"],
            image: "/images/liferay-logo.png",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Migrating a mission-critical portal in a strict air-gapped environment with no CI/CD or observability. Incompatible Oracle database schemas and custom locale requirements (ar_AE) posed significant risks.",
                strategy: "Pivoted from automation-first to a process-first governance approach. Implemented a two-stage migration protocol (Baseline + Verification) and a Layer 7 clustered architecture for high availability.",
                implementation: [
                    "Architecture: Designed a two-node Liferay DXP 7.4 cluster behind a Layer 7 Load Balancer for active-active redundancy.",
                    "Database Migration: Executed a two-stage protocol using the Liferay Data Migration Tool followed by custom SQL integrity checks to resolve schema incompatibilities.",
                    "Localization: Manually configured and verified custom ar_AE (Arabic - UAE) locale support, ensuring full UI/UX compliance.",
                    "Governance: Established strict manual deployment checklists validated by the Change Advisory Board (CAB) to replace automated CI/CD pipelines.",
                    "Quality Assurance: Conducted exhaustive Content Integrity Checks (Manual QA) on staging environments to guarantee 100% data fidelity before production cutover."
                ],
                metrics: [
                    { label: "Data Fidelity", value: "100%", change: "7.2 → 7.4" },
                    { label: "Availability", value: "High", change: "Clustered Setup" },
                    { label: "Downtime Risk", value: "Minimized", change: "Resilient Arch" }
                ]
            }
        },
    ],
};
