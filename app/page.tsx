import { AvatarLogo } from "@/components/avatar-logo/avatar-logo";
import Container from "@/components/container/container";
import Hero from "@/components/hero/hero";
import Header from "@/components/navigation/header";
export default function Home() {
  return (
    <Container className="min-h-screen">
      <Header />
      <Hero />
    </Container>
  );
}
