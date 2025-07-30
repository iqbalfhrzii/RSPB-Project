import { Button, Container, Text, Title } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Ayo{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Lakukan Pendaftaran Secara Online
              </Text>{' '}
              Sekarang           </Title>

            <Text className={classes.description} mt={30}>
              Daftarkan diri Anda secara online untuk layanan kesehatan rumah sakit dengan mudah dan cepat – Tanpa antre, tanpa ribet!
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}