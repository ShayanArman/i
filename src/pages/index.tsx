import { Flex, Title, Text, Button, Container } from '@mantine/core';
import { useState } from 'react';
import Link from "next/link";

export default function Main() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <Container size="md" px="md">
      <Flex direction="column" gap={80} py={60}>
        {/* Header */}
        <Flex direction="column" gap={16}>
          <Title 
            order={1} 
            style={{ 
              fontSize: '48px', 
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#000'
            }}
          >
            Shayan Arman
          </Title>
        </Flex>

        {/* Hero Section */}
        <Flex direction="column" gap={24}>
          <Text 
            style={{ 
              fontSize: '20px', 
              lineHeight: '1.6',
              color: '#333',
              maxWidth: '600px'
            }}
          >
            I love to build, ship, and scale. Since 2017, I've engineered products at Apple and built an AI startup serving thousands worldwide. Currently building Zero Inbox, the first fully AI-powered email organizer.
          </Text>
          
          <Link 
            href="mailto:shayan.arman2@gmail.com?subject=Project%20Inquiry&body=Hi%20Shayan%2C%0A%0AI%27d%20love%20to%20discuss%20a%20potential%20project.%0A%0APROJECT%20DETAILS%0A%0ACompany%2FProduct%20Name%3A%0A%0AWhat%20are%20you%20building%3F%0A%0ATimeline%20%26%20Budget%3A%0A%0ACurrent%20Stage%3A%0A%0AWhat%20do%20you%20need%20help%20with%3F" 
            style={{ textDecoration: 'none', width: 'fit-content' }}
          >
            <Button
              styles={{
                root: {
                  backgroundColor: '#000',
                  border: 0,
                  height: '44px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                },
              }}
            >
              Let's talk
            </Button>
          </Link>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Results Section */}
        <Flex direction="column" gap={32}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Results
          </Title>
          
          <Flex direction="column" gap={24}>
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
          </Flex>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Contact Section */}
        <Flex direction="column" gap={24}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Contact
          </Title>
          
          <Flex direction="column" gap={12}>
            <ContactLink href="mailto:shayan.arman2@gmail.com" text="Email" />
            <ContactLink href="https://linkedin.com/in/shayan-arman" text="LinkedIn" />
            <ContactLink href="https://github.com/ShayanArman" text="GitHub" />
            <ContactLink href="https://www.youtube.com/@quantumrysics" text="Youtube" />
            <ContactLink href="https://x.com/InboxZero" text="X" />
            <ContactLink href="https://shayanarman.substack.com/" text="Substack" />
            <ContactLink href="https://www.instagram.com/_shayanarman/" text="Instagram" />
          </Flex>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Services Section */}
        <Flex direction="column" gap={32}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Skills
          </Title>
          
          <Flex direction="column" gap={32}>
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
          </Flex>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Highlights Section */}
        <Flex direction="column" gap={32}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Highlights
          </Title>
          
          <Flex direction="column" gap={28}>
            <HighlightItem
              title="Zero Inbox"
              period="2022—2025"
              description="First fully AI-powered email organizer. Cleaned 10M+ emails for 10,000 users globally with 1,500 paying customers. Built with Next.js, Python, TypeScript, AWS (SQS, RDS, EC2). Scalable architecture processing thousands of emails per second."
              url="https://zeroinbox.ai"
            />
            <HighlightItem
              title="Siri Platform Evolution"
              period="2017—2021"
              description="Led transition to new Java Siri Platform at Apple, gaining 20% time savings for each developer. Added 100+ new app integrations including WhatsApp, Tesla, Spotify, Uber, and Facebook Messenger."
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
          </Flex>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Experience Section */}
        <Flex direction="column" gap={32}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Experience
          </Title>
          
          <Flex direction="column" gap={24}>
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
          </Flex>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Education Section */}
        <Flex direction="column" gap={32}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Education
          </Title>
          
          <Flex direction="column" gap={24}>
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
          </Flex>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Awards Section */}
        <Flex direction="column" gap={32}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Recognition
          </Title>
          
          <Flex direction="column" gap={20}>
            <AwardItem
              year="2025"
              title="Antler Fellow: Toronto Cohort"
            />
            <AwardItem
              year="2024"
              title="New Ventures BC Top 26"
            />
            <AwardItem
              year="2022"
              title="YCombinator Selection - Interview Stage"
            />
            <AwardItem
              year="2022"
              title="IRAP Alberta Machine Intelligence Institute $10k Grant"
            />
            <AwardItem
              year="2022"
              title="Futurpreneur $60k Grant"
            />
            <AwardItem
              year="2016"
              title="Waterloo Velocity Fund Finalist"
            />
            <AwardItem
              year="2011"
              title="President's Scholarship of Distinction"
            />
          </Flex>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Skills Section */}
        <Flex direction="column" gap={32}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Technical Skills
          </Title>
          
          <Flex direction="column" gap={20}>
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
          </Flex>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Footer */}
        <Flex direction="column" gap={32}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Extraordinaire
          </Title>
          
          <Flex direction="column" gap={12}>
            <Text style={{ fontSize: '16px', color: '#666' }}>
              Built in Vancouver, BC
            </Text>
            <Text style={{ fontSize: '16px', color: '#666' }}>
              Made with Next.js & Mantine
            </Text>
            <Text style={{ fontSize: '16px', color: '#666' }}>
              Hosted on Vercel
            </Text>
          </Flex>
        </Flex>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#e5e5e5', width: '100%' }} />

        {/* Copyright */}
        <Flex direction="column" gap={12}>
          <Title 
            order={2} 
            style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#666',
              textTransform: 'uppercase'
            }}
          >
            Copyright
          </Title>
          
          <Text style={{ fontSize: '16px', color: '#666' }}>
            ©2017—2026 shayanarman.com
          </Text>
          <Text style={{ fontSize: '16px', color: '#666' }}>
            All rights reserved
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}

// Component helpers
function ResultItem({ metric, description }: { metric: string; description: string }) {
  return (
    <Flex direction="column" gap={8}>
      <Text style={{ fontSize: '32px', fontWeight: 700, color: '#000' }}>
        {metric}
      </Text>
      <Text style={{ fontSize: '16px', color: '#666', lineHeight: '1.5' }}>
        {description}
      </Text>
    </Flex>
  );
}

function ContactLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Text 
        style={{ 
          fontSize: '16px', 
          color: '#000',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#666';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#000';
        }}
      >
        {text}
      </Text>
    </Link>
  );
}

function ServiceItem({ title, description }: { title: string; description: string }) {
  return (
    <Flex direction="column" gap={12}>
      <Text style={{ fontSize: '18px', fontWeight: 600, color: '#000' }}>
        {title}
      </Text>
      <Text style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', maxWidth: '600px' }}>
        {description}
      </Text>
    </Flex>
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
    <Flex direction="column" gap={8}>
      <Flex align="center" gap={12}>
        {url ? (
          <Link href={url} style={{ textDecoration: 'none' }}>
            <Text 
              style={{ 
                fontSize: '18px', 
                fontWeight: 600, 
                color: '#000',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#666';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000';
              }}
            >
              {title}
            </Text>
          </Link>
        ) : (
          <Text style={{ fontSize: '18px', fontWeight: 600, color: '#000' }}>
            {title}
          </Text>
        )}
        <Text style={{ fontSize: '14px', color: '#999' }}>
          {period}
        </Text>
      </Flex>
      <Text style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', maxWidth: '600px' }}>
        {description}
      </Text>
    </Flex>
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
    <Flex direction="column" gap={8}>
      <Flex align="baseline" gap={12} wrap="wrap">
        <Text style={{ fontSize: '16px', fontWeight: 600, color: '#000' }}>
          {company}
        </Text>
        <Text style={{ fontSize: '14px', color: '#999' }}>
          {period}
        </Text>
      </Flex>
      <Text style={{ fontSize: '16px', color: '#666' }}>
        {role}, {type}
      </Text>
      <Text style={{ fontSize: '14px', color: '#999' }}>
        {tags.join(', ')}
      </Text>
    </Flex>
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
    <Flex direction="column" gap={8}>
      <Flex align="baseline" gap={12} wrap="wrap">
        <Text style={{ fontSize: '16px', fontWeight: 600, color: '#000' }}>
          {school}
        </Text>
        <Text style={{ fontSize: '14px', color: '#999' }}>
          {period}
        </Text>
      </Flex>
      <Text style={{ fontSize: '16px', color: '#666' }}>
        {degree}
      </Text>
      <Text style={{ fontSize: '14px', color: '#999' }}>
        {details}
      </Text>
    </Flex>
  );
}

function AwardItem({ year, title }: { year: string; title: string }) {
  return (
    <Flex align="baseline" gap={12}>
      <Text style={{ fontSize: '14px', color: '#999', minWidth: '60px' }}>
        {year}
      </Text>
      <Text style={{ fontSize: '16px', color: '#666' }}>
        {title}
      </Text>
    </Flex>
  );
}

function SkillCategory({ category, skills }: { category: string; skills: string }) {
  return (
    <Flex direction="column" gap={8}>
      <Text style={{ fontSize: '16px', fontWeight: 600, color: '#000' }}>
        {category}
      </Text>
      <Text style={{ fontSize: '16px', color: '#666' }}>
        {skills}
      </Text>
    </Flex>
  );
}

