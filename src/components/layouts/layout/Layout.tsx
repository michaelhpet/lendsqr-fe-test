import Footer from "../footer";
import Nav from "../nav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
}
