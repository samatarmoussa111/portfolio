import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import { Button } from "../ui/button";
import Typography from "../ui/typography";

const Header = () => {
  return (
    <nav className="py-10 mb-5 flex justify-between items-center">
      <Link href="/">
        <Typography variant="h4">DEVELOPEDBYSB</Typography>
      </Link>
      <ul className="flex items-center ">
        <li>
          <ModeToggle />
        </li>
        <li className="ml-5">
          <Button>Resume</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
