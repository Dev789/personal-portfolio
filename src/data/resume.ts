export const resume = {
    basics: {
        name: "Dev Joshi",
        label: "DevOps & AI Tooling Engineer",
        email: "https://calendly.com/joshid647/30min",
        phone: "9638140640",
        location: "Ahmedabad, Gujarat",
        handle: "dev-joshi",
        url: "/Dev_Joshi_Resume.pdf",
        summary: "Dynamic DevOps Engineer with a strong expertise in Cloud Infrastructure, Security (IAM/SSO), and emerging AI Agentic technologies. Proven track record in leading large-scale migrations, mastering Liferay clustering, and architecting microservices-driven platforms. Adept at translating complex business requirements into robust, cost-efficient infrastructure while maintaining rigorous SOC 2 compliance standards.",
        profiles: [
            {
                network: "LinkedIn",
                username: "dev-joshi",
                url: "https://www.linkedin.com/in/dev-joshi-b82a04150"
            },
            {
                network: "GitHub",
                username: "dev-joshi-ops",
                url: "https://github.com/dev-joshi-ops"
            }
        ]
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
                "Published two open-source MCP tools to enhance AI agent capabilities and developer productivity.",
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
            { name: "Oracle Cloud", level: 60 },
        ],
        containerization: ["Docker", "Kubernetes (K8s)", "Helm", "OpenShift", "EKS/AKS", "GKE AutoPilot"],
        iac: ["Terraform (Expert)", "Ansible", "CloudFormation", "Pulumi"],
        cicd: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "SonarQube"],
        scripting: ["Python", "Bash"],
        observability: ["Prometheus", "Grafana", "Datadog", "ELK Stack"],
        databases: ["Oracle DB", "MongoDB", "PostgreSQL", "MySQL"],
        platforms: ["Liferay DXP", "Kafka"],
        emerging: ["AI Fluency", "Prompt Engineering", "Agentic Workflows", "Claude Skills"],
        security: ["IAM", "SSO", "SOC 2 compliance"]
    },

    projects: [
        {
            name: "Enterprise Intranet: On-Premises Liferay DXP Migration",
            slug: "enterprise-intranet-on-premises-liferay-dxp-migration",
            description: "Orchestrated a high-stakes Government IT Modernization project, migrating a mission-critical Enterprise Intranet from Liferay DXP 7.2 to 7.4. Ensured 100% data sovereignty and localized content integrity for a Middle East Authority.",
            category: "Solutions Architecture",
            tags: ["Bare Metal VMs", "Liferay DXP", "GitLab CI/CD", "Prometheus", "Grafana", "DevSecOps", "Zero Trust"],
            image: "/images/liferay-logo.png",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Navigating strict on-premises infrastructure migration constraints, the Authority faced a critical roadblock: a vendor bug in standard upgrade scripts regarding the ar_AE (Arabic) locale. This defect threatened to corrupt the database schema of the entire Enterprise Intranet, risking data sovereignty breaches.",
                strategy: "Engineered a Parallel-Environment Migration Pattern on bare-metal VMs to ensure a fail-safe transition. By leveraging CI/CD Pipeline Automation, I enforced Infrastructure Parity across all environments and secured a vendor-validated fix for the locale-specific schema transformation.",
                implementation: [
                    "Automated Infrastructure Parity: Leveraged modular GitLab CI/CD pipelines to guarantee absolute environment consistency across isolated Dev, UAT, and Production on-premises servers.",
                    "DevSecOps Hardening: Implemented Zero Trust Security protocols and air-gapped network isolation, integrating SonarQube to scan custom modules for vulnerabilities before deployment.",
                    "Strategic Vendor Collaboration: Diagnosed and escalated a critical product bug in the Liferay upgrade tool, securing a verified resolution that preserved 100% of localized Arabic metadata.",
                    "Real-Time Telemetry: Established advanced observability using Prometheus and Grafana to monitor JVM heap and upgrade telemetry, ensuring a flawless 30-minute production cutover."
                ],
                metrics: [
                    { label: "Migration Downtime", value: "30 Min", change: "vs 4h+ projected" },
                    { label: "Locale Integrity", value: "100%", change: "Verified ar_AE" },
                    { label: "Security Compliance", value: "Current", change: "7.4 Baseline" },
                    { label: "Deployment Success", value: "100%", change: "Dry-Run Validated" }
                ],
                reflection: "This project demonstrated that an Architect must be as skilled in technical communication and vendor negotiation as they are in systems design. Working without the 'infinite' resources of the cloud breed a discipline in resource allocation and deployment timing that is essential for high-security government environments.",
                future: "Strategizing for the next phase of modernization: transitioning the Liferay stack to Kubernetes for horizontal scalability and exploring Hybrid Cloud models to balance performance with strict data sovereignty requirements."
            }
        },
        {
            name: "Cloud Architecture & Cost Optimization",
            slug: "cloud-architecture-cost-optimization",
            description: "Re-architected a Relationship Intelligence Platform on GCP using GKE, achieving 100% cost reduction on external DB dependencies.",
            category: "cloud",
            tags: ["GCP", "GKE", "Bitbucket", "Kubernetes", "Reliability"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "The platform was hemorrhaging $4,200/month on managed database services from a third-party provider while simultaneously suffering from environment drift. Development, staging, and production databases had diverged in schema versions, causing subtle bugs that only surfaced after deployment. The lack of infrastructure as code meant every environment change was a manual, error-prone operation.",
                strategy: "Led DevOps efforts on GCP, overseeing deployments and monitoring while maintaining end-to-end reliability of the infrastructure. I migrated the managed database to a self-hosted, highly available setup within GKE to eliminate external vendor costs and implemented GitOps for deterministic deployments.",
                implementation: [
                    "Orchestration: Architected and maintained a highly available Kubernetes cluster on GKE using Terraform for reproducible infrastructure provisioning.",
                    "Infrastructure: Managed full infrastructure using GKE and Bitbucket for automated flows, enforcing infrastructure-as-code principles across all environments.",
                    "Reliability: Implemented comprehensive monitoring and alerting using Prometheus and Grafana for platform stability, providing granular visibility into cluster health.",
                    "Optimization: Reduced external DB costs by standardizing deployments and migrating databases into StatefulSets with persistent volumes, backed by automated snapshot policies."
                ],
                metrics: [
                    { label: "DB Cost Reduction", value: "100%", change: "Standardization" },
                    { label: "Uptime", value: "99.99%", change: "High Availability" }
                ],
                reflection: "Migrating from a fully managed database to a self-hosted stateful workload on Kubernetes is often seen as taboo, but with careful planning, robust storage classes, and automated backups, the cost savings justified the increased operational responsibility.",
                future: "Implementing a multi-region active-active database cluster to further enhance fault tolerance and reduce cross-region latency for global users."
            }
        },
        {
            name: "Social Media Manager – Event-Driven Architecture",
            slug: "social-media-manager-event-driven-architecture",
            description: "Designed a highly available AWS-based infrastructure with blue/green deployment for a microservices-driven social media management platform.",
            category: "cloud",
            tags: ["AWS", "Kafka", "Python", "Microservices", "Event-Driven"],
            image: "/images/event-streaming.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Processing high-velocity webhook data from Facebook and Instagram with zero data loss and real-time durability. The legacy monolithic architecture was struggling to keep up with traffic spikes during major marketing campaigns, resulting in dropped webhooks, delayed analytics, and dissatisfied clients. The system required a paradigm shift to handle unpredictable loads.",
                strategy: "Architected microservices in Python integrated with Apache Kafka for scalable event processing and AWS best practices. Transitioned the synchronous webhook receivers into asynchronous producers, decoupling the ingestion layer from the heavy data processing workers.",
                implementation: [
                    "Streaming: Built a Kafka-based pipeline using Amazon MSK to handle social media webhooks in real-time, ensuring durable message storage and replayability.",
                    "Deployment: Implemented blue/green strategy via AWS CodeDeploy and Application Load Balancers for zero-downtime releases, allowing safe rollbacks within seconds.",
                    "Security: Enforced strict network isolation using private subnets, IAM role-based access for microservices, and KMS-managed encryption for data at rest.",
                    "Development: Developed core Python services utilizing FastAPI for real-time data ingestion and efficient asynchronous processing."
                ],
                metrics: [
                    { label: "Throughput", value: "High", change: "Event-Driven" },
                    { label: "Downtime", value: "Zero", change: "Blue/Green" }
                ],
                reflection: "Adopting an event-driven architecture fundamentally changed how we thought about failure. With Kafka as our backbone, temporary outages in downstream services no longer meant data loss, only processing delay.",
                future: "Integrating real-time stream processing using Apache Flink to calculate rolling analytics and sentiment scores instantly as social media events arrive."
            }
        },
        {
            name: "Funnel Builder – Multi-Tenant Infrastructure",
            slug: "funnel-builder-multi-tenant-infrastructure",
            description: "Designed and implemented a multi-tenant AWS-based infrastructure for a funnel builder application ensuring high availability and secure isolation.",
            category: "cloud",
            tags: ["AWS", "Multi-Tenant", "Blue/Green", "Security", "Infrastructure"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Scaling a multi-tenant application while maintaining strict security isolation between clients. As the platform onboarded enterprise customers, the shared database architecture became a critical compliance risk and a performance bottleneck. The requirement was to provide dedicated infrastructure per tenant without multiplying the operational overhead.",
                strategy: "Built a highly available AWS setup using network segmentation and a pooled-to-silo hybrid model. Compute resources were shared for cost efficiency, but sensitive tenant data was isolated into dedicated RDS instances and S3 buckets with strict IAM boundary enforcement.",
                implementation: [
                    "Isolation: Implemented fine-grained IAM policies, network segmentation (VPCs), and tenant-specific encryption keys using AWS KMS.",
                    "Deployment: Standardized on blue/green deployment utilizing AWS ECS and CodePipeline for risk-free, automated updates across all tenant environments.",
                    "Automation: Automated infrastructure provisioning using Terraform workspaces, enabling single-click onboarding of new enterprise tenants with secure defaults.",
                    "Resilience: Configured multi-AZ setups with auto-scaling groups and read replicas to ensure high availability during traffic surges from viral marketing funnels."
                ],
                metrics: [
                    { label: "Isolation", value: "Strict", change: "VPC/IAM" },
                    { label: "Availability", value: "99.9%", change: "Multi-AZ" }
                ],
                reflection: "Balancing the cost benefits of multi-tenancy with the security requirements of enterprise clients requires a nuanced infrastructure strategy. Terraform proved invaluable in keeping the complex tenant provisioning process error-free.",
                future: "Migrating the compute layer to AWS EKS to leverage Kubernetes namespaces for enhanced logical isolation and more granular resource quota management."
            }
        },
        {
            name: "University System – Video Encoding Platform",
            slug: "university-system-video-encoding-platform",
            description: "Developed a Python-based microservices platform on AWS for real-time video encoding integrated with AWS SQS.",
            category: "cloud",
            tags: ["AWS", "SQS", "Python", "Video Encoding", "Microservices"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Handling concurrent video encoding jobs efficiently without impacting backend performance. The university's distance learning portal allowed professors to upload massive lecture videos. The monolithic backend attempted to process these synchronously, leading to timeout errors, exhausted memory, and a completely frozen application during peak upload hours.",
                strategy: "Leveraged AWS SQS to decouple video processing from the main backend and used Python microservices for encoding. By introducing an asynchronous queue, the web application could instantly acknowledge uploads while background workers handled the CPU-intensive transcoding tasks at their own pace.",
                implementation: [
                    "Decoupling: Integrated AWS SQS to manage the video processing queue, providing fault tolerance, retries, and dead-letter queues for failed encoding jobs.",
                    "Processing: Developed scalable Python microservices utilizing FFmpeg for real-time encoding, containerized and deployed on AWS ECS.",
                    "Security: Secured the platform with IAM-based access control, presigned S3 URLs for secure uploads/downloads, and strict network segmentation.",
                    "Efficiency: Optimized resource usage for concurrent encoding jobs by configuring ECS to scale based on the depth of the SQS queue, ensuring cost-efficient processing."
                ],
                metrics: [
                    { label: "Processing", value: "Real-time", change: "Queue-based" },
                    { label: "Scalability", value: "High", change: "Microservices" }
                ],
                reflection: "Decoupling heavy workloads via message queues is a textbook architectural pattern, but seeing it instantly resolve cascading system failures in production was a stark reminder of its necessity.",
                future: "Integrating AWS Elemental MediaConvert for advanced DRM support, adaptive bitrate streaming, and eliminating the need to maintain custom FFmpeg container images."
            }
        },
        {
            name: "Real Estate Website – Lambda & MongoDB",
            slug: "real-estate-website-lambda-mongodb",
            description: "Lead DevOps for a multi-tenant real estate platform using AWS Lambda and MongoDB with encrypted cross-VPC connectivity.",
            category: "cloud",
            tags: ["AWS Lambda", "MongoDB", "VPC Peering", "Event-Driven", "Multi-Tenant"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Ensuring secure and performant communication between serverless functions and a central MongoDB database across accounts. The platform's event-driven architecture required hundreds of concurrent Lambda functions to ingest property listing updates, but establishing new database connections for each invocation was overwhelming the MongoDB connection pool.",
                strategy: "Architected a serverless infrastructure leveraging AWS Lambda and established secure cross-VPC connectivity via VPC peering. Implemented MongoDB Atlas with AWS PrivateLink to ensure traffic never traversed the public internet, and utilized MongoDB Data API/connection pooling proxies to handle the serverless connection spikes.",
                implementation: [
                    "Serverless: Migrated key workloads to AWS Lambda for event-driven execution, drastically reducing compute costs during low-traffic night hours.",
                    "Database: Designed MongoDB architecture with high availability and secure peering using AWS PrivateLink for enterprise-grade security.",
                    "Infrastructure: Managed secure cross-VPC networking, strict security group rules, and enforced KMS encryption at rest and TLS in transit.",
                    "Optimization: Achieved significant cost savings using serverless compute models and implemented RDS Proxy-like connection pooling for MongoDB to stabilize database performance."
                ],
                metrics: [
                    { label: "Security", value: "Enhanced", change: "VPC Peering" },
                    { label: "Cost", value: "Lower", change: "Serverless" }
                ],
                reflection: "Serverless architectures offer incredible cost and scaling benefits, but they expose new bottlenecks, specifically around database connections. Designing for serverless requires rethinking how application layers interact with state.",
                future: "Evaluating the migration from traditional MongoDB to a fully Serverless database offering to seamlessly align the data layer's scaling characteristics with the compute layer."
            }
        },
        {
            name: "Hospitality Service Management – Multi-Tenant GCP",
            slug: "hospitality-service-management-multi-tenant-gcp",
            description: "Led DevOps for a multi-tenant hospitality platform on GCP using GKE and GitHub Actions for streamlined CI/CD.",
            category: "cloud",
            tags: ["GCP", "GKE", "GitHub Actions", "Multi-Tenant", "Security"],
            image: "/images/cloud-architecture.jpg",
            link: "#",
            cta: "View Case Study",
            details: {
                challenge: "Managing multi-tenant security and performance optimization for a high-traffic hospitality platform. As the platform grew to support hundreds of boutique hotels, the existing deployment process became a severe bottleneck. Deployments were manual, taking hours, and lacked the isolation required to prevent noisy-neighbor issues affecting premium clients.",
                strategy: "Standardized on GKE for orchestration and GitHub for automated CI/CD, focusing on network segmentation. Implemented Kubernetes namespaces and resource quotas to strictly isolate tenants and guarantee performance baselines, while fully automating the deployment lifecycle.",
                implementation: [
                    "Orchestration: Managed GKE clusters with a focus on multi-tenant isolation, utilizing Network Policies and Pod Security Standards to restrict cross-tenant communication.",
                    "CI/CD: Implemented GitHub Actions for automated, secure deployment pipelines, incorporating container scanning and automated testing before promoting to production.",
                    "Optimization: Applied performance tuning and best practices for high availability, configuring Horizontal Pod Autoscalers and Cluster Autoscaler to handle seasonal booking surges.",
                    "Governance: Enforced network segmentation, identity-aware proxy (IAP) for administrative access, and strict RBAC policies across the GCP organization."
                ],
                metrics: [
                    { label: "Deployment", value: "Automated", change: "GitHub Actions" },
                    { label: "Uptime", value: "99.99%", change: "Fault Tolerance" }
                ],
                reflection: "Transitioning a team from manual deployments to a fully automated CI/CD pipeline on Kubernetes is as much a cultural shift as it is a technical one. The confidence gained from automated testing and rollbacks profoundly accelerated feature delivery.",
                future: "Implementing Anthos Service Mesh to gain deeper observability into inter-service communication and enforce mutual TLS authentication across all microservices."
            }
        },
    ],
    certifications: [
        { 
            name: "AI Fluency Framework & Foundations", 
            issuer: "Anthropic", 
            date: "Apr 2026",
            link: "https://verify.skilljar.com/c/ys6zc4cqbp3y"
        },
        { 
            name: "Introduction to agent skills", 
            issuer: "Anthropic", 
            date: "Apr 2026",
            link: "https://verify.skilljar.com/c/9znximgm9pid"
        },
        { 
            name: "Introduction to subagents", 
            issuer: "Anthropic", 
            date: "Apr 2026",
            link: "https://verify.skilljar.com/c/kfnmw7tzs8fr"
        }
    ],
    openSource: [
        {
          name: "PipelineIQ",
          category: "Tools",
          description: "MCP Server for Jenkins build log analysis and actionable failure prediction. Automates the discovery of build pipeline errors using AI agents.",
          tags: ["Python", "AI", "CI/CD"],
          github: "https://github.com/dev-joshi-ops/PipelineIQ"
        },
        {
          name: "local-llm-hosting",
          category: "Templates",
          description: "Robust, containerized local LLM hosting infrastructure using Apache APISIX and Ollama. Implements VRAM-efficient configurations and high-volume token rate limits.",
          tags: ["Docker", "APISIX", "Ollama"],
          github: "https://github.com/dev-joshi-ops/local-llm-hosting"
        },
        {
          name: "docmost-mcp-server",
          category: "Tools",
          description: "MCP Server integration for Docmost to enable AI agents to read, search, and manage documentation across the organization's workspaces.",
          tags: ["Python", "MCP"],
          github: "https://github.com/dev-joshi-ops/docmost-mcp-server"
        },
        {
          name: "fastapi-react-agentic-scaffold",
          category: "Templates",
          description: "Production-ready scaffolding for building agentic AI applications with a robust FastAPI backend and an interactive React frontend.",
          tags: ["Python", "FastAPI", "React"],
          github: "https://github.com/dev-joshi-ops/fastapi-react-agentic-scaffold"
        },
        {
          name: "liferay-docker",
          category: "Infrastructure",
          description: "Production-ready Docker configurations for Liferay DXP, including optimized JVM settings, clustering support, and multi-version database orchestration.",
          tags: ["Docker", "Liferay", "DevOps"],
          github: "https://github.com/dev-joshi-ops/liferay-docker"
        }
      ]
};
