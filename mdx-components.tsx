import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";
import Typography from "./components/ui/typography";

const components = {
  h1: ({ children }: any) => <Typography variant="h1">{children}</Typography>,
  h2: ({ children }: any) => <Typography variant="h2">{children}</Typography>,
  h3: ({ children }: any) => <Typography variant="h3">{children}</Typography>,
  h4: ({ children }: any) => <Typography variant="h4">{children}</Typography>,
  p: ({ children }: any) => <Typography variant="p">{children}</Typography>,
  code: ({ ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm"
      )}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
