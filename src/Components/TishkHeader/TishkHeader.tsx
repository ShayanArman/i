import { pulseAnimation } from '@/styles/styleHelpers';
import { Flex, Text, Title } from '@mantine/core';
import { GiConverseShoe } from "react-icons/gi";

export function TishkHeader({ title, isMobile, onClick, isLoading }: { title: string; isMobile: boolean; onClick: () => void; isLoading: boolean }) {
  return (
    <Flex 
      align="center"
      gap={15}
      onClick={onClick}
      sx={{
        background: 'white',
        cursor: 'pointer',
        padding: "20px",
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
        },
      }}
    >
      <Flex 
        align='center' justify={'center'} w={isMobile ? "4rem" : "6rem"} h={isMobile ? "4rem" : "6rem"}
        sx={{
          padding: isMobile ? "10px" : "10px", 
          borderRadius: "50%", 
          backgroundColor: "white",
          border: isLoading ? "3px solid var(--twitter-blue)" : "3px solid #eee",
          ...(isLoading
          ? {
            animation: `${pulseAnimation} 2s infinite`,
            transition: "all 0.5s ease-in-out",
          }
          : {}),
        }}
        >
          <GiConverseShoe size={ isMobile ? "3rem" : "4rem" } />
        </Flex>
        <Flex direction="column">
        <Title 
          align="center"
          sx={{
            fontSize: isMobile ? "2rem" : "4rem",
            color: "black",
          }}
        >
          { title }
        </Title>
        <Text color="dimmed" italic={true}>Shoe Cleaning Service</Text>
        </Flex>
  </Flex>);
}