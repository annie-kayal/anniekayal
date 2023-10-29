import React, { ReactElement, forwardRef } from "react";
import { Box, Flex, Text, Heading, ThemeUIStyleObject } from "theme-ui";
import { SlArrowRight } from "react-icons/sl";
import { theme } from "../../../../theme/theme";
import { coreSkills } from "../../../../constants/skills";

type AboutProps = {
  sx?: ThemeUIStyleObject;
};

export const About = forwardRef(({ sx }: AboutProps, ref): ReactElement => {
  const firstColumnOfSkills = coreSkills.slice(0, 4);
  const remainingSkills = coreSkills.slice(4, coreSkills.length);

  return (
    <Box
      ref={ref}
      sx={{
        ...sx,
        fontFamily: "body",
        lineHeight: 3,
        background: "offwhite",
        padding: [0, 4, 4, 4, 0, 0],
        borderTop: (theme) => [
          `1px solid ${theme.colors?.paleBlue}`,
          null,
          null,
          null,
          "none",
        ],
      }}
    >
      <Heading
        sx={{
          mb: 2,
          letterSpacing: 1,
        }}
      >
        <span style={{ color: theme.colors.paleBlue }}>01.</span> ABOUT
      </Heading>

      <Text as="p" sx={{ mt: [3], lineHeight: [4], fontSize: [2] }}>
        As a retail worker turned Software Engineer, the customer journey has
        always been a focus in my career. Experiencing everyday consumer
        struggles guided me towards embarking on the 'Software Engineering
        Immersive' three-month boot camp with General Assembly. Within this
        course, I learned the foundations of web development with a deep focus
        on learning JavaScript.
      </Text>

      <Text sx={{ my: 2, lineHeight: [4], fontSize: [2] }} as="p">
        Since completing the course, I have had the privilege to assist
        beginners in similar boot camps through General Assembly. I started my
        professional engineering career in a tech-first, event-focused company.
        Today, I am currently at Mindful Chef, a health-focused meal kit
        delivery service where you'll find me working on new initiatives to
        ensure ease of use on the web platform and also the app.
      </Text>

      <Text as="p" sx={{ lineHeight: [4], fontSize: [2] }}>
        Here are a few technologies I've recently been using:
      </Text>

      <Flex>
        <Box>
          {firstColumnOfSkills.map((skill) => (
            <Flex sx={{ mt: [3] }}>
              <Text sx={{ fontSize: 1, mr: 1 }}>
                <SlArrowRight />
              </Text>
              <Text>{skill}</Text>
            </Flex>
          ))}
        </Box>

        <Box sx={{ ml: [4] }}>
          {remainingSkills.map((skill) => (
            <Flex sx={{ mt: [3] }}>
              <Text sx={{ fontSize: 1, mr: 1 }}>
                <SlArrowRight />
              </Text>
              <Text>{skill}</Text>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
});
