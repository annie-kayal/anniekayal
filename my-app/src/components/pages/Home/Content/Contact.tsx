import React, { ReactElement, forwardRef } from "react";
import { Heading, Text, Flex, Link, Box, ThemeUIStyleObject } from "theme-ui";
import { alpha } from "@theme-ui/color";
import { SlCursor, SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { theme } from "../../../../theme/theme";

type ContactProps = {
  sx?: ThemeUIStyleObject;
};

export const Contact = forwardRef(({ sx }: ContactProps, ref): ReactElement => {
  return (
    <Box
      sx={{
        background: "offwhite",
        p: [4, 4, 4, 4, 0],
        borderTop: (theme) => [
          `1px solid ${theme.colors?.paleBlue}`,
          null,
          null,
          null,
          "none",
        ],
        ...sx,
      }}
      ref={ref}
    >
      <Heading
        sx={{
          mb: 2,
          letterSpacing: 1,
        }}
      >
        <span style={{ color: theme.colors.paleBlue }}>03.</span> CONTACT
      </Heading>
      <Text
        sx={{
          fontFamily: "body",
          fontSize: [2],
          lineHeight: [2],
        }}
      >
        I'm always keen to meet up-and-coming and existing engineers or discuss
        opportunities I'd be interested in. My inbox (whichever you pick) is
        always open. Feel free to drop me a private message or email. I'll try
        my best to get back to you.
      </Text>
      <Flex
        sx={{
          alignItems: "center",
          mt: [4],
          fontSize: [2],
          justifyContent: ["space-between"],
        }}
      >
        <Flex
          sx={{
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Link
            href="mailto: anamikakayal@outlook.com"
            sx={{
              color: "brown",
              display: "flex",
              alignItems: "center",
              fontSize: [4, 4, 4, 4, 6],
              px: [3],
              py: [2],
              border: (theme) => `1px solid ${theme.colors?.brown}`,
              borderRadius: 8,
              ":hover": {
                background: alpha("brown", 0.1),
              },
            }}
          >
            <SlCursor />
          </Link>

          <Text
            sx={{ fontStyle: "italic", mt: [3], fontSize: [1, 1, 1, 1, 2] }}
          >
            Drop an email
          </Text>
        </Flex>

        <Flex style={{ alignItems: "center", flexDirection: "column" }}>
          <Link
            href="https://www.linkedin.com/in/anniekayal/"
            target="_blank"
            sx={{
              color: "brown",
              display: "flex",
              alignItems: "center",
              fontSize: [4, 4, 4, 4, 6],
              px: [3],
              py: [2],
              border: (theme) => `1px solid ${theme.colors?.brown}`,
              borderRadius: 8,
              textAlign: "center",
              ":hover": {
                background: alpha("brown", 0.1),
              },
            }}
          >
            <SlSocialLinkedin />
          </Link>

          <Text
            sx={{
              fontStyle: "italic",
              mt: [3],
              fontSize: [1, 1, 1, 1, 2],
            }}
          >
            Connect on LinkedIn
          </Text>
        </Flex>

        <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
          <Link
            href="https://github.com/annie-kayal"
            target="_blank"
            sx={{
              color: "brown",
              display: "flex",
              alignItems: "center",
              fontSize: [4, 4, 4, 4, 6],
              px: [3],
              py: [2],
              border: (theme) => `1px solid ${theme.colors?.brown}`,
              borderRadius: 8,
              textAlign: "center",
              ":hover": {
                background: alpha("brown", 0.1),
              },
            }}
          >
            <SlSocialGithub />
          </Link>

          <Text
            sx={{
              fontStyle: "italic",
              mt: [3],
              fontSize: [1, 1, 1, 1, 2],
            }}
          >
            Follow on Github
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
});
