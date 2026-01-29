import Link from "next/link";
export default function Home() {
  return (
    <div>
      Shayan Arman Extraordinaire
    </div>
  );
}

function PageTwo() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full max-w-screen-md px-4 md:px-0">
          <div className="flex flex-col gap-20 py-15">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold tracking-tight text-black">
                Shayan Arman
              </h1>
            </div>

            {/* Hero Section */}
            <div className="flex flex-col gap-6">
              <p className="text-xl leading-relaxed text-gray-800 max-w-[600px]">
                I love to build, ship, and scale. Since 2017, Ive engineered products at Apple and built an AI startup serving thousands worldwide. Currently building Zero Inbox, the first fully AI-powered email organizer.
              </p>
              <Link 
                href="mailto:shayan.arman2@gmail.com?subject=Project%20Inquiry&body=Hi%20Shayan%2C%0A%0AI%27d%20love%20to%20discuss%20a%20potential%20project.%0A%0APROJECT%20DETAILS%0A%0ACompany%2FProduct%20Name%3A%0A%0AWhat%20are%20you%20building%3F%0A%0ATimeline%20%26%20Budget%3A%0A%0ACurrent%20Stage%3A%0A%0AWhat%20do%20you%20need%20help%20with%3F" 
                className="w-fit"
              >
                <button className="cursor-pointer bg-black border-0 h-11 px-6 rounded-lg text-base font-medium text-white hover:bg-gray-800 transition-colors">
                  Lets Talk
                </button>
              </Link>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Results Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Results
              </h2>
              
              <div className="flex flex-col gap-6">
                <ResultItem 
                  metric="10M+" 
                  description="Emails cleaned and organized by Zero Inbox AI"
                />
                <ResultItem 
                  metric="10,000+" 
                  description="Users worldwide across 50+ countries"
                />
                <ResultItem 
                  metric="$18B" 
                  description="Revenue unlocked at Apple with first Siri AirPods experience"
                />
                <ResultItem 
                  metric="100+" 
                  description="Siri integrations shipped (WhatsApp, Tesla, Spotify, Uber)"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Contact Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Contact
              </h2>
              
              <div className="flex flex-col gap-3">
                <ContactLink href="mailto:shayan.arman2@gmail.com" text="Email" />
                <ContactLink href="https://linkedin.com/in/shayan-arman" text="LinkedIn" />
                <ContactLink href="https://github.com/ShayanArman" text="GitHub" />
                <ContactLink href="https://www.youtube.com/@quantumrysics" text="Youtube" />
                <ContactLink href="https://x.com/InboxZero" text="X" />
                <ContactLink href="https://shayanarman.substack.com/" text="Substack" />
                <ContactLink href="https://www.instagram.com/_shayanarman/" text="Instagram" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Services Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Skills
              </h2>
              
              <div className="flex flex-col gap-8">
                <ServiceItem
                  title="AI Integration"
                  description="AI-powered product features and automation. Expert in LLM integration, intelligent data processing, and building AI-first experiences. Built the first fully AI email organizer on the market."
                />
                <ServiceItem
                  title="Technical Leadership"
                  description="Strategic technical guidance for startups and teams. Product architecture, engineering best practices, and scaling strategies. Led platform transitions serving millions of users at Apple."
                />
                <ServiceItem
                  title="Shipping Product, Getting Customers, Increasing Revenue"
                  description="End-to-end product development from concept to scale. Specializing in Product Development, Sales, Marketing, Growing Revenue. Built systems processing thousands of requests per second."
                />
                <ServiceItem
                  title="Magic"
                  description="I can make things happen, you never thought could happen, faster than expected."
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Highlights Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Highlights
              </h2>
              
              <div className="flex flex-col gap-7">
                <HighlightItem
                  title="Zero Inbox"
                  period="2022—2025"
                  description="First fully AI-powered email organizer. Cleaned 10M+ emails for 10,000 users globally with 1,500 paying customers. Built with Next.js, Python, TypeScript, AWS (SQS, RDS, EC2). Scalable architecture processing thousands of emails per second."
                  url="https://zeroinbox.ai"
                />
                <HighlightItem
                  title="Surf Modular Dishwasher"
                  period="2024"
                  description="Patent Pending: designed, and built the worlds first modular dishwasher with a Propulsion Engineer at Relativity Space."
                  url="https://www.kickstarter.com/projects/sarman/surf-dishwasher-patent-pending"
                />
                <HighlightItem
                  title="Privacy-Centric Siri"
                  period="2019—2021"
                  description="Engineered native Swift Siri with single monorepo development. Removed Java server dependency, saving developers hours weekly. Achieved 80% faster on-device response times for customers."
                />
                <HighlightItem
                  title="Siri AirPods Experience"
                  period="2019—2020"
                  description="Built the first Siri AirPods experience, unlocking $18B in new revenue for Apple (Bloomberg, 2021). Increased Siri usage by millions across HomePod, AirPods, and CarPlay."
                />
                <HighlightItem
                  title="Siri Platform Evolution"
                  period="2017—2021"
                  description="Led transition to new Java Siri Platform at Apple, gaining 20% time savings for each developer. Added 100+ new app integrations including WhatsApp, Tesla, Spotify, Uber, and Facebook Messenger."
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Experience Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Experience
              </h2>
              
              <div className="flex flex-col gap-6">
                <ExperienceItem
                  company="Zero Inbox Technologies"
                  period="2022—2025"
                  role="Lead Engineer, Designer & Founder"
                  type="Full-Time"
                  tags={["Product Design", "Full-Stack Development", "AI/ML", "Fundraising"]}
                />
                <ExperienceItem
                  company="Apple"
                  period="2017—2021"
                  role="Software Engineer"
                  type="Full-Time"
                  tags={["iOS Development", "Platform Engineering", "Swift", "Java"]}
                />
                <ExperienceItem
                  company="Percolate"
                  period="2015"
                  role="Full Stack Software Engineer"
                  type="Internship"
                  tags={["Flask", "Python", "Testing Infrastructure"]}
                />
                <ExperienceItem
                  company="CodeHS"
                  period="2015"
                  role="Full Stack Software Engineer"
                  type="Internship"
                  tags={["Django", "Python", "JavaScript"]}
                />
                <ExperienceItem
                  company="Amazon"
                  period="2014"
                  role="Software Engineer"
                  type="Internship"
                  tags={["Java", "AWS SQS", "Backend Systems"]}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Education Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Education
              </h2>
              
              <div className="flex flex-col gap-6">
                <EducationItem
                  school="University of Waterloo"
                  degree="Bachelor of Engineering"
                  period="2011—2016"
                  details="Honors Computer Engineering • GPA: 3.90/4.0 • President's Scholarship of Distinction"
                />
                <EducationItem
                  school="Nanyang Technological University"
                  degree="Study Abroad"
                  period="2014"
                  details="Database Design • Singapore"
                />
                <EducationItem
                  school="Lund University (LTH)"
                  degree="Study Abroad"
                  period="2014"
                  details="Theoretical Biophysics & Compilers • Sweden"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Awards Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Recognition
              </h2>
              
              <div className="flex flex-col gap-5">
                <AwardItem year="2025" title="Antler Fellow: Toronto Cohort" />
                <AwardItem year="2024" title="New Ventures BC Top 26" />
                <AwardItem year="2022" title="YCombinator Selection - Interview Stage" />
                <AwardItem year="2022" title="IRAP Alberta Machine Intelligence Institute $10k Grant" />
                <AwardItem year="2022" title="Futurpreneur $60k Grant" />
                <AwardItem year="2016" title="Waterloo Velocity Fund Finalist" />
                <AwardItem year="2011" title="President's Scholarship of Distinction" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Skills Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Technical Skills
              </h2>
              
              <div className="flex flex-col gap-5">
                <SkillCategory
                  category="Languages"
                  skills="JavaScript, TypeScript, Python, Swift, Objective-C, Java, C#"
                />
                <SkillCategory
                  category="Frontend"
                  skills="React, Next.js, Svelte, HTML/CSS, Mantine"
                />
                <SkillCategory
                  category="Backend"
                  skills="Node.js, Express, Flask, Django, tRPC"
                />
                <SkillCategory
                  category="Databases"
                  skills="PostgreSQL, MongoDB, SQL, Prisma ORM"
                />
                <SkillCategory
                  category="Cloud & DevOps"
                  skills="AWS (EC2, SQS, RDS), Vercel, Linux/Bash"
                />
                <SkillCategory
                  category="Mobile"
                  skills="iOS Development, React Native, Electron"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Footer */}
            <div className="flex flex-col gap-8">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Extraordinaire
              </h2>
              
              <div className="flex flex-col gap-3">
                <p className="text-base text-gray-600">Built in Vancouver, BC</p>
                <p className="text-base text-gray-600">Made with Next.js & Mantine</p>
                <p className="text-base text-gray-600">Hosted on Vercel</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Copyright */}
            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Copyright
              </h2>
              
              <p className="text-base text-gray-600">©2017—2026 shayanarman.com</p>
              <p className="text-base text-gray-600">All rights reserved</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Component helpers
function ResultItem({ metric, description }: { metric: string; description: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-3xl font-bold text-black">{metric}</p>
      <p className="text-base text-gray-600 leading-normal">{description}</p>
    </div>
  );
}

function ContactLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="text-base text-black hover:text-gray-600 transition-colors w-fit">
      {text}
    </Link>
  );
}

function ServiceItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-lg font-semibold text-black">{title}</p>
      <p className="text-base text-gray-600 leading-relaxed max-w-[600px]">{description}</p>
    </div>
  );
}

function HighlightItem({ 
  title, 
  period, 
  description,
  url 
}: { 
  title: string; 
  period: string; 
  description: string;
  url?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 flex-wrap">
        {url ? (
          <Link href={url} className="text-lg font-semibold text-black hover:text-gray-600 transition-colors">
            {title}
          </Link>
        ) : (
          <p className="text-lg font-semibold text-black">{title}</p>
        )}
        <p className="text-sm text-gray-400">{period}</p>
      </div>
      <p className="text-base text-gray-600 leading-relaxed max-w-[600px]">{description}</p>
    </div>
  );
}

function ExperienceItem({ 
  company, 
  period, 
  role, 
  type,
  tags 
}: { 
  company: string; 
  period: string; 
  role: string;
  type: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-3 flex-wrap">
        <p className="text-base font-semibold text-black">{company}</p>
        <p className="text-sm text-gray-400">{period}</p>
      </div>
      <p className="text-base text-gray-600">{role}, {type}</p>
      <p className="text-sm text-gray-400">{tags.join(', ')}</p>
    </div>
  );
}

function EducationItem({ 
  school, 
  degree, 
  period,
  details 
}: { 
  school: string; 
  degree: string; 
  period: string;
  details: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-3 flex-wrap">
        <p className="text-base font-semibold text-black">{school}</p>
        <p className="text-sm text-gray-400">{period}</p>
      </div>
      <p className="text-base text-gray-600">{degree}</p>
      <p className="text-sm text-gray-400">{details}</p>
    </div>
  );
}

function AwardItem({ year, title }: { year: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <p className="text-sm text-gray-400 min-w-[60px]">{year}</p>
      <p className="text-base text-gray-600">{title}</p>
    </div>
  );
}

function SkillCategory({ category, skills }: { category: string; skills: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base font-semibold text-black">{category}</p>
      <p className="text-base text-gray-600">{skills}</p>
    </div>
  );
}