import React, { ReactElement, forwardRef } from "react";
import { Box, Text, Flex, Heading, Link, ThemeUIStyleObject } from "theme-ui";
import { experienceContent } from "../../../../constants/experience";
import { theme } from "../../../../theme/theme";

type ExperienceProps = {
  sx?: ThemeUIStyleObject;
};

export const Experience = forwardRef(
  ({ sx }: ExperienceProps, ref): ReactElement => {
    return (
      <Box
        sx={{
          ...sx,
          p: [4, 4, 4, 4, 0],
          backgroundColor: "offwhite",
          borderTop: (theme) => [
            `1px solid ${theme.colors?.paleBlue}`,
            null,
            null,
            null,
            "none",
          ],
        }}
        ref={ref}
      >
        <Heading
          sx={{
            mb: 2,
            letterSpacing: 1,
          }}
        >
          <span style={{ color: theme.colors.paleBlue }}>02.</span> EXPERIENCE
        </Heading>

        {experienceContent.map((experience, index) => {
          const isFirstExperienceListed = index === 0;
          return (
            <Box
              sx={{
                fontFamily: "body",
                my: [!isFirstExperienceListed && 3],
              }}
            >
              <Flex sx={{ flexDirection: ["column"] }}>
                <Text>{experience.position} </Text>
                <Link
                  href={experience.website}
                  sx={{
                    my: 1,
                    letterSpacing: 1,
                    color: "brown",
                  }}
                >
                  {experience.company.toUpperCase()}
                </Link>
              </Flex>

              <Text sx={{ fontSize: 1 }}>{experience.period}</Text>

              {experience?.summary?.length &&
                experience.summary.map((resp) => (
                  <Text sx={{ fontSize: [1, 1, 1, 2, 2], my: 2 }} as="li">
                    {resp}
                  </Text>
                ))}
            </Box>
          );
        })}
      </Box>
    );
  }
);
