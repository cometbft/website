import { GradientText } from '@/components/GradientText';
import { Box } from '@/react-handy-box/components/Box';
import { AnchorButton, Button } from '@/react-handy-box/components/Button';
import { Icon } from '@/react-handy-box/components/Icon';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Box
        styles={{
          alignItems: 'center',
          height: '100vh',
          justifyContent: 'space-between',
          overflow: 'hidden',
          paddingY: 'xxloose',
          rowGap: 0,
          stylesForDesktopOrLarger: {
            paddingY: 'normal',
          },
          textAlign: 'center',
          width: '100vw',
        }}
      >
        {/* Header */}
        <Box
          as="header"
          styles={{
            alignItems: 'center',
            position: 'relative',
            rowGap: 'loose',
            zIndex: '1--stickyElements',
          }}
        >
          <Box
            styles={{
              height: 70,
              position: 'relative',
              width: '35vw',
            }}
          >
            <Image alt="CometBFT Logo" src="/logo.svg" fill={true} />
          </Box>

          {/* Hero and button */}
          <Box styles={{ alignItems: 'center', rowGap: 'normal' }}>
            {/* Headline and Subtitle */}
            <Box styles={{ alignItems: 'center', rowGap: 'tight' }}>
              <Box
                styles={{
                  fontName: 'display',
                  fontSize: 'xxlarge',
                  fontWeight: 'bold',
                }}
              >
                <GradientText>Commit</GradientText> with{' '}
                <GradientText>Comet</GradientText>
              </Box>

              <Box
                styles={{
                  fontName: 'display',
                  fontSize: 'xlarge',
                }}
              >
                Future of Cosmos Consensus
              </Box>
            </Box>

            <AnchorButton
              href="https://github.com/cometbft/cometbft/tree/main/docs"
              target="_blank"
            >
              View Docs
            </AnchorButton>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          styles={{
            columnGap: 'tight',
            fontSize: 'xlarge',
            stylesForDesktopOrLarger: {
              columnGap: 'xtight',
              fontSize: 'large',
            },
          }}
        >
          <Box
            as="a"
            href="https://github.com/cometbft/cometbft"
            target="_blank"
          >
            <Icon name="github" variant="brands" />
          </Box>

          <Box as="a" href="https://t.me/CometBFT" target="_blank">
            <Icon name="telegram" variant="brands" />
          </Box>

          <Box as="a" href="https://twitter.com/cometbft" target="_blank">
            <Icon name="twitter" variant="brands" />
          </Box>

          <Box as="a" href="https://discord.gg/cosmosnetwork" target="_blank">
            <Icon name="discord" variant="brands" />
          </Box>
        </Box>
      </Box>

      {/* Decorative Elements */}
      <Box
        styles={{
          pointerEvents: 'none',
        }}
      >
        {/* Orb: Top Left */}
        <Box
          styles={{
            height: '200vw',
            left: 0,
            position: 'fixed',
            stylesForDesktopOrLarger: {
              height: '60vw',
              transform: 'translate(0, 0)',
              width: '60vw',
            },
            top: 0,
            transform: 'translate(-30%, 0)',
            width: '200vw',
          }}
        >
          <Image alt="Decorative Element" src="/orb-top-left.svg" fill={true} />
        </Box>

        {/* Orb: Bottom Right */}
        <Box
          styles={{
            bottom: 0,
            height: '200vw',
            position: 'fixed',
            right: 0,
            stylesForDesktopOrLarger: {
              height: '60vw',
              transform: 'translate(0, 0)',
              width: '60vw',
            },
            transform: 'translate(40%, 0)',
            width: '200vw',
          }}
        >
          <Image
            alt="Decorative Element"
            src="/orb-bottom-right.svg"
            fill={true}
          />
        </Box>

        {/* Outline: Top Right */}
        <Box
          styles={{
            height: '60vw',
            position: 'fixed',
            right: 0,
            stylesForDesktopOrLarger: {
              height: '35vw',
              width: '35vw',
            },
            top: 0,
            transform: 'translate(25%, -25%)',
            width: '60vw',
          }}
        >
          <Image alt="Decorative Element" src="/logo-outline.svg" fill={true} />
        </Box>

        {/* Outline: Bottom Left */}
        <Box
          styles={{
            bottom: 0,
            height: '60vw',
            left: 0,
            position: 'fixed',
            stylesForDesktopOrLarger: {
              height: '35vw',
              width: '35vw',
            },
            transform: 'translate(-8%, 10%) rotate(180deg)',
            width: '60vw',
          }}
        >
          <Image alt="Decorative Element" src="/logo-outline.svg" fill={true} />
        </Box>
      </Box>
    </>
  );
}
