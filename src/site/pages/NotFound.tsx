import { Section } from "../../components/ui/Section";
import { Button } from "../../components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="paper" innerClassName="min-h-[60svh] flex flex-col justify-center">
      <p className="font-mono text-caption text-ink-soft">404</p>
      <h1 className="mt-4 max-w-[18ch] font-display text-h1 md:text-[3.25rem] md:leading-[1.05]">
        Nothing lives at this address.
      </h1>
      <p className="mt-6 max-w-[44ch] text-lede text-ink-soft">
        The page may have moved when I rebuilt the site. Everything is still
        here, just under a different link.
      </p>
      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
        <Button to="/">Go home</Button>
        <Button variant="quiet" to="/work">
          See the work
        </Button>
      </div>
    </Section>
  );
}
