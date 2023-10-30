import Link from "next/link";
import { AvatarLogo } from "../avatar-logo/avatar-logo";
import { ButtonIcon } from "../ui/button-icon";
import Typography from "../ui/typography";

const Hero = () => {
  return (
    <div className="  flex flex-col items-center   justify-center  gap-5">
      <AvatarLogo
        src="/images/avatarlogo2.png"
        alt="Avatar"
        className="h-64 w-64"
      />
      <div className="text-center max-w-lg space-y-2">
        <Typography variant="h1" component="h1" className="text-primary">
          Samatar Barkadleh
        </Typography>
        <Typography variant="h3" component="h3">
          Full-stack Next.js Developer
        </Typography>
        <Typography variant="p" component="p">
          Software Engineer. I create complex and modern web applications with
          Next.js using T3-Stack , Firebase or Strapi. Hire me to bring your
          future SaaS idea to life.
        </Typography>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link href="https://github.com/samatarmoussa111" target="_blank">
          <ButtonIcon variant="secondary" iconName="Github" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCdQdNHEc4L84BXa-3CPS64A"
          target="_blank"
        >
          <ButtonIcon variant="secondary" iconName="Youtube" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/samatar-barkadleh-1155b528a/"
          target="_blank"
        >
          <ButtonIcon variant="secondary" iconName="Linkedin" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
