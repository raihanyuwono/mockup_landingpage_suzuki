import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  id?: string;
  classes?: string;
}

function Section({ children, id = "", classes = "" }: Props) {
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

export default Section;
