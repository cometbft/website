import { GradientText } from '@/components/GradientText';
import { Box } from '@/react-handy-box/components/Box';
import { Button } from '@/react-handy-box/components/Button';
import { Icon } from '@/react-handy-box/components/Icon';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Box
        styles={{
          alignItems: 'center',
          height: '100vh',
          justifyContent: 'center',
          overflow: 'hidden',
          rowGap: 'xxloose',
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
          <Image
            alt="CometBFT Logo"
            src="/cometbft-logo.svg"
            height={98}
            width={88}
          />

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

            <Button>View Docs</Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box styles={{ columnGap: 'xtight' }}>
          <Box as="a" href="#">
            <Icon name="github" variant="brands" />
          </Box>

          <Box as="a" href="#">
            <Icon name="telegram" variant="brands" />
          </Box>

          <Box as="a" href="#">
            <Icon name="twitter" variant="brands" />
          </Box>

          <Box as="a" href="#">
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
            left: 0,
            position: 'fixed',
            top: 0,
          }}
        >
          <Image
            alt="Decorative Element"
            src="/orb-top-left.svg"
            height={1200}
            width={1600}
          />
        </Box>

        {/* Orb: Bottom Right */}
        <Box
          styles={{
            bottom: 0,
            position: 'fixed',
            right: 0,
          }}
        >
          <Image
            alt="Decorative Element"
            src="/orb-bottom-right.svg"
            height={1000}
            width={678}
          />
        </Box>

        {/* Outline: Top Right */}
        <Box
          styles={{
            top: 0,
            position: 'fixed',
            right: 0,
            transform: 'translate(25%, -45%)',
          }}
        >
          <Image
            alt="Decorative Element"
            src="/logo-outline.svg"
            height={622}
            width={622}
          />
        </Box>

        {/* Outline: Bottom Left */}
        <Box
          styles={{
            bottom: 0,
            left: 0,
            position: 'fixed',
            transform: 'translate(-45%, 10%)',
          }}
        >
          <Image
            alt="Decorative Element"
            src="/logo-outline.svg"
            height={622}
            width={622}
          />
        </Box>
      </Box>
    </>
  );
}
