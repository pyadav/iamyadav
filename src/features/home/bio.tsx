export function Bio() {
  return (
    <section
      id="bio"
      className="border-y border-neutral-400/20"
      aria-labelledby="bio-heading"
    >
      <div className="space-y-4 text-left leading-relaxed text-neutral-700 px-8 py-12">
        <h1 id="bio-heading" className="sr-only">
          Developer bio
        </h1>

        <p className="text-balance drop-cap">
          <span className="font-semibold">I'm yadav -</span> I help turn ideas
          into beautiful, reliable, and scalable products.
        </p>

        <p className="text-balance">
          I run a dev studio partnering with AI teams to ship production-ready
          interfaces with thoughtful, detail-driven execution.
        </p>

        <div className="space-y-3 pt-2">
          <p>
            I share notes and updates on{" "}
            <a
              href="https://x.com/iamya6av"
              className="link-muted"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
            , and open-source code on{" "}
            <a
              href="https://github.com/pyadav"
              className="link-muted"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
