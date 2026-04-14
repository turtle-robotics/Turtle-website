import ButtonLink from "../components/ButtonLink";
import Hero from "../components/Hero";

const NotFound = () => (
  <Hero
    heading="404"
    subheading="Sorry, the page you are looking for does not exist."
  >
    <ButtonLink to="/" style="primary" sizeVariant="default">
      Go Home
    </ButtonLink>
  </Hero>
);

export default NotFound;
