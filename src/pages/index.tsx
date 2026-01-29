import { Flex, Title, Text, Button, Blockquote } from '@mantine/core';
import { TishkHeader } from '@/Components/TishkHeader/TishkHeader';
import { useWordByWordText } from '@/hooks/useWordByWordText';
import { containerStyle } from '@/styles/styleHelpers';
import useIsMobile from '@/hooks/useIsMobile';
import { SlChemistry } from "react-icons/sl";
import { GiAtom } from 'react-icons/gi';
import { useState } from 'react';
import Link from "next/link";


export default function Main() {
  const [showAbout, setShowAbout] = useState(false);
  const [readAbout, setReadAbout] = useState(false);

  const isMobile = useIsMobile();

  return (
    <Flex direction="column" w={"100%"} align="center" mt={isMobile ? 5 : 15} style={{paddingLeft: isMobile ? undefined : "1rem", paddingRight: isMobile ? undefined : "1rem"}}>
      <TishkHeader onClick={() => setShowAbout((prev) => { return !prev })} title={"Tishk Shoes"} isMobile={isMobile} isLoading={showAbout} />
      <Flex direction="column" w={"100%"} align="center" gap={showAbout ? 0 : 15} mt={isMobile ? 20 : 20} p={ isMobile ? undefined : "lg"}>
        { showAbout === true &&
          <SummaryWordByWord seenSummary={showAbout} setSeenSummary={setReadAbout} hasReadAbout={readAbout} isMobile={isMobile} />
        }
        { !showAbout && 
          <ProductsBox />
        }
        <ShowAboutButton showAbout={showAbout} setShowAbout={setShowAbout} mt={isMobile ? (showAbout ? 3 : 10) : 5 } />
      </Flex>
    </Flex>
  );
}

function ProductsBox() {
  return (
    <>
      <LinkBox href='https://buy.stripe.com/aFadR8dw19qZ48kgxrgQE00' name='Sneaker Whitening' description="3 Day Turnaround - Pick Up and Dropoff" />
    </>);
}


function ShowAboutButton({ showAbout, setShowAbout, mt }: { showAbout: boolean; setShowAbout: React.Dispatch<React.SetStateAction<boolean>>; mt: number }) {
  return (
    <Flex align='center' justify='center' h={"3rem"} w="5rem" mt={mt}>
      <Button
        onClick={() => setShowAbout((prev) => { return !prev })}
        leftIcon={<SlChemistry />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'var(--twitter-blue)',
            border: 0,
            height: "42px",
            paddingLeft: "20px",
            paddingRight: "20px",
            borderRadius: "15px",
            '&:not([data-disabled])': theme.fn.hover({
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            }),
          },

          leftIcon: {
            marginRight: theme.spacing.md,
          },
        })}
      >
        { showAbout ? `Get Started` : `Learn More...` }
      </Button>
    </Flex>
  )
}

function LinkBox({name, description, href}: {name: string; description: string; href: string}) {
  const [isHovered, setIsHovered] = useState(false);

  const boxStyle = {
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative' as const,
    overflow: 'hidden',
    border: '2px solid rgba(0, 172, 238, 0.1)',
  };

  const hoverStyle = {
    ...boxStyle,
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'none',
    boxShadow: isHovered 
      ? '0 16px 40px rgba(0, 172, 238, 0.3)' 
      : boxStyle.boxShadow,
    background: isHovered
      ? 'linear-gradient(135deg, #00acee 0%, #0095d4 50%, #007bb5 100%)'
      : boxStyle.background,
    border: isHovered ? '2px solid rgba(255, 255, 255, 0.3)' : boxStyle.border,
  };

  return (
    <Link 
      href={href} 
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ textDecoration: 'none' }}
    >
      <Flex 
        direction="column"
        justify="space-between"
        sx={{
          ...hoverStyle, 
          padding: "2rem",
          cursor: 'pointer',
        }} 
        h="15rem" 
        w="20rem"
      >
        {/* Icon at the top */}
        <Flex align="center" gap={12}>
          <Flex
            align="center"
            justify="center"
            sx={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: isHovered 
                ? 'rgba(255, 255, 255, 0.25)' 
                : 'linear-gradient(135deg, #00acee 0%, #007bb5 100%)',
              backdropFilter: isHovered ? 'blur(10px)' : 'none',
              transition: 'all 0.3s ease',
              fontSize: '30px',
              color: 'white',
            }}
          >
            <Flex
              align="center"
              justify="center"
              sx={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: isHovered 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'linear-gradient(135deg, #00acee 0%, #007bb5 100%)',
                transition: 'all 0.3s ease',
                fontSize: '30px',
                color: isHovered ? 'white' : 'white',
              }}
            >
              <GiAtom />
            </Flex>
          </Flex>
        </Flex>

        {/* Text content at the bottom */}
        <Flex direction="column" gap={8}>
          <Text 
            size="xl" 
            weight={700} 
            sx={{
              color: isHovered ? "white" : "black",
              transition: 'color 0.3s ease',
              lineHeight: 1.2,
            }}
          >
            {name}
          </Text>
          <Text 
            size="md" 
            sx={{
              color: isHovered ? "rgba(255, 255, 255, 0.9)" : "#666",
              transition: 'color 0.3s ease',
            }}
          >
            {description}
          </Text>
        </Flex>

        {/* Subtle shine effect on hover */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transform: isHovered ? 'translateX(200%)' : 'translateX(0)',
            transition: 'transform 0.6s ease',
            pointerEvents: 'none',
          }}
        />
      </Flex>
    </Link>
  );
}

const SummaryWordByWord = ({
  hasReadAbout,
  seenSummary,
  setSeenSummary,
  isMobile
}: {
  seenSummary: boolean;
  hasReadAbout: boolean;
  setSeenSummary: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}) => {
  const textContent = `We believe Vancouver should have clean Nikes. With our Shoe Cleaning Service, we'll have your sneakers looking spick-and-span sparkling white again.`;
  const { visibleText } = useWordByWordText({
    text: [textContent],
    wordDelay: hasReadAbout ? 0 : 100, // No delay if already read
    finalDelay: hasReadAbout ? 0 : 2000, // No final delay if already read
    opened: (seenSummary && !hasReadAbout) ? true : false,
    onComplete: () => { setSeenSummary(true) }
  });

   // If already read, show full text immediately
  const displayText = hasReadAbout ? textContent : visibleText;

  return (
    <Flex direction="column" align="center" w="100%">
      <Blockquote color="blue" cite="– Thibault">
        Go Anywhere... but make sure you Nikes are Clean
      </Blockquote>
      <Flex direction="column" w={ isMobile ? "100%" : "50%" } miw={isMobile ? "100%" : "50%"} style={{overflow: "scroll", padding: isMobile ? "3px" : "15px"}}>
        <Title ml={5}>
          Backstory
        </Title>
        <Flex style={{...containerStyle, padding: isMobile ? "15px" : "30px", minHeight:"10rem", minWidth: isMobile ? "100%" : "30rem" }}>
          <Text
            style={{
              opacity: 0,
              animation: 'fadeSlideIn 0.8s ease-out forwards',
              animationDelay: `${1}s`,
              fontSize: isMobile ? "1.2rem" : "1.5rem",
              whiteSpace: "normal"
            }}
          >
            { displayText }
          </Text>
          <style>
            {`
              @keyframes fadeSlideIn {
                0% {
                  opacity: 0;
                  transform: translateY(10px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          </style>
        </Flex>
      </Flex>
    </Flex>
  );
};


// About the Service: Pick Up and Drop Off are ALWAYS included. Turnaround time is 3-4 days. We treat your Shoes like our own.