/* eslint-disable formatjs/no-literal-string-in-jsx */
import {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { Info } from 'lucide-react'

import { FormExample } from './FormExample'

export function Component() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <Container size="lg" pt="xl" pb="xl">
        <Stack align="center" gap="md">
          <Title order={1} ta="center">
            Construa aplicações incríveis,
            <br /> mais rápido e com as melhores práticas.
          </Title>
          <Text size="lg" c="dimmed" ta="center">
            Um boilerplate React com Vite e TypeScript, pronto para produção.
            Acelere seu desenvolvimento com uma base sólida, escalável e com as
            ferramentas que você ama.
          </Text>
          <Group justify="center" gap="md">
            <Button
              onClick={() =>
                window.open(
                  'https://github.com/tiagovilasboas/react-vite-boilerplate#readme',
                  '_blank',
                )
              }
            >
              Ver Documentação
            </Button>
            <Button
              variant="default"
              onClick={() =>
                window.open(
                  'https://github.com/tiagovilasboas/react-vite-boilerplate',
                  '_blank',
                )
              }
            >
              GitHub
            </Button>
          </Group>
        </Stack>
      </Container>

      {/* Showcase Mantine components */}
      <Container size="lg" pb="xl">
        <Stack gap="xl">
          <Alert
            variant="light"
            color="blue"
            title="Configuração completa"
            icon={<Info size={16} />}
            maw={600}
            mx="auto"
          >
            A biblioteca de componentes Mantine está funcionando! Confira os
            exemplos abaixo.
          </Alert>

          <Group align="stretch" justify="center" gap="xl" wrap="wrap">
            {/* Zod + Mantine Form example */}
            <Card shadow="sm" padding="lg" withBorder maw={400} w="100%">
              <FormExample />
            </Card>

            {/* Badges example */}
            <Stack gap="sm" maw={400} w="100%">
              <Title order={3}>Tech Stack</Title>
              <Group gap="sm" wrap="wrap">
                <Badge>React</Badge>
                <Badge color="gray">Vite</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge color="red">Mantine</Badge>
              </Group>
            </Stack>
          </Group>
        </Stack>
      </Container>
    </main>
  )
}
