import { Box, Flex, Button, Textarea, TextInput, Blockquote, Text } from "@mantine/core";
import { SetStateAction, useState } from "react";
import { TbShoe } from "react-icons/tb";

type FormData = {
  customerName: string;
  pickupAddress: string;
  phoneNumber: string;
  pickupDate: string;
  anythingElse: string;
  errors: {
    customerName?: string;
    pickupAddress?: string;
    phoneNumber?: string;
    anythingElse?: string;
    pickupDate?: string;
  };
}

export const SubmissionForm = ({isMobile}: {isMobile: boolean}) => {
  // Validate the Add Entrepreneur Form
const validateInput = (name: string, value: string) => {
  switch (name) {
    case 'customerName':
      return value.length < 1 ? 'Please enter a valid name' : '';
    case 'pickupAddress':
      return value.length < 7 ? 'Please enter a valid address' : '';
    case 'phoneNumber':
      return value.length < 7 ? 'Please enter a valid phone number' : '';
    default:
      return '';
  }
};


  const handleSubmit = () => {
    const errors: Record<string, string> = {};
    let hasErrors = false;

    // Validate all fields
    Object.entries(formData)
      .filter(([key]) => key !== 'errors')
      .forEach(([key, value]) => {
        const error = validateInput(key, value as string);
        if (error) {
          errors[key] = error;
          hasErrors = true;
        }
      });

    if (hasErrors) {
      setFormData(prev => ({
        ...prev,
        errors
      }));
      return;
    }

    const mailtoLink = `mailto:shayan.arman2@gmail.com?subject=New Order Submission&body=Hey Tishk Shoes! New order incoming!%0D%0AName: ${formData.customerName}%0D%0APhone Number: ${formData.phoneNumber}%0D%0APickup Address: ${formData.pickupAddress}%0D%0APickup Date: ${formData.pickupDate}%0D%0AExtra Info: ${formData.anythingElse}`;
    window.location.href = mailtoLink;
  };
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      errors: {}
    }));
  };
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    pickupAddress: '',
    pickupDate: '',
    phoneNumber: '',
    anythingElse: '',
    errors: {}
  });
  
  return (
    <Box component="form" px={10} sx={{ width: '100%', maxWidth: '500px' }}>
      <Blockquote color="blue" cite="– Thibault">
        Thanks for your Order! Just tell us where to pick them up!
      </Blockquote>
      <TextInput
        required
        label="Name"
        name="customerName"
        radius="lg"
        value={formData.customerName}
        onChange={handleChange}
        error={formData.errors.customerName}
        placeholder="Thibault"
        mt={"sm"}
        mb={isMobile ? undefined : "md"}
      />

      <TextInput
        required
        label="Pickup Address"
        name="pickupAddress"
        radius="lg"
        value={formData.pickupAddress}
        onChange={handleChange}
        placeholder="The Art Building: 1618 West 6th Ave"
        error={formData.errors.pickupAddress}
        mb={isMobile ? undefined : "md"}
      />

      <TextInput
        required
        label="Phone Number"
        name="phoneNumber"
        radius="lg"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="1-672-999-1028"
        error={formData.errors.phoneNumber}
        mb={isMobile ? undefined : "md"}
      />

      <TextInput
        label="Date and (approximate) Time"
        name="pickupDate"
        radius="lg"
        value={formData.pickupDate}
        onChange={handleChange}
        placeholder="Come by tomorrow Sept 28th after 3pm"
        error={formData.errors.pickupDate}
        mb={isMobile ? undefined : "md"}
      />

      <Textarea
        label="Anything Else"
        name="anythingElse"
        radius="lg"
        value={formData.anythingElse}
        onChange={handleChange}
        placeholder="Tell us anything else we need to know to complete your order"
        error={formData.errors.anythingElse}
        minRows={2}
        mb={isMobile ? undefined : "md"}
      />
      <SubmitFormButton handleSubmit={handleSubmit} mt={15} />
    </Box>
  );
};

function SubmitFormButton({ handleSubmit, mt }: { handleSubmit: () => void; mt: number }) {
  return (
    <Flex align='center' justify='center' h={"3rem"} w="5rem" mt={mt}>
      <Button
        onClick={handleSubmit}
        leftIcon={<TbShoe />}
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
        Submit
      </Button>
    </Flex>
  )
}
