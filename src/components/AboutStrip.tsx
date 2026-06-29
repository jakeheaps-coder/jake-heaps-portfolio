import headshot from "../assets/jake-headshot.jpeg";
import signature from "../assets/signature.svg";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

/**
 * A condensed personal presence near the top of the brief — so there's a
 * face and a person before the proof, not only in the closing letter.
 * The full signed letter still closes the document.
 */
export default function AboutStrip() {
  return (
    <section className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-16 md:py-20">
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-[120px_minmax(0,1fr)] md:gap-12">
            <figure className="m-0">
              <img
                src={headshot}
                alt="Jake Heaps"
                width={800}
                height={800}
                loading="lazy"
                className="plate aspect-square w-28 object-cover md:w-[120px]"
              />
            </figure>
            <div>
              <Eyebrow>The author</Eyebrow>
              <p className="measure mt-3 text-lede text-ink">
                I&rsquo;m Jake. I build AI operating systems for companies, and
                Domo is my flagship case. I led the transformation there, and
                this brief is that work, measured and itemized. I built the
                systems, then spent a year getting people to actually use them.
                The full letter is at the end; the proof is in between.
              </p>
              <img
                src={signature}
                alt="Jake Heaps signature"
                className="mt-5 h-12 w-auto md:h-14"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
