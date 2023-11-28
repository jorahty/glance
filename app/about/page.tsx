import { Container, Flex, Heading, Text } from '@radix-ui/themes';

export default async function About() {
  return (
    <Container>
      <Flex p="3" gap="3" direction="column">
        <Heading>About</Heading>
        <Text>&quot;Glance&quot; is an organization tool I created for myself</Text>
      </Flex>
    </Container>
  );
}
