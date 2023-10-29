import Container from "@/components/container/container";
import Hero from "@/components/hero/hero";
import Header from "@/components/navigation/header";
import Skills from "@/components/skills/skills";
export default function Home() {
  return (
    <Container className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
    </Container>
  );
}
