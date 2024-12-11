import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the age of AI
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
        Step into a dynamic universe where AI-driven LLMs and diverse products seamlessly merge, creating an interconnected experience that enhances and reshapes your world. This evolving ecosystem leverages cutting-edge technology to transform everyday interactions, pushing the boundaries of what's possible.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/React-port/public/videos/feature-1.mp4"
          title={
            <>
              Aram<b>bhumi</b> Reddy            </>
          }
          description="I am highly driven by a passion for excellence in everything I do, with a Master's in Data Science and over 5 years of experience in the tech industry. I take great pride in my work, ensuring that every project I undertake is completed to the highest standard. My attention to detail is unwavering, as I carefully analyze every aspect of a project to ensure it meets both technical requirements and my personal commitment to quality. This meticulous approach enables me to deliver results that not only meet expectations but exceed them."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="/React-port/public/videos/feature-2.mp4"
            title={
              <>
                py<b>th</b>on
              </>
            }
            description="I started coding in Python long before the rise of LLMs, developing a strong foundation in programming. Today, I harness the power of AI to quickly adapt to any language. For example, despite this being my first time using JavaScript and React, I was able to master the core concepts and deliver a high-quality, industry-level website in just 10 hours. My ability to rapidly learn and apply new technologies has been greatly enhanced by AI tools, allowing me to stay ahead in the fast-evolving tech landscape."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
  <BentoCard
    src="/React-port/public/videos/feature-3.mp4"
    title={
      <>
        Te<b>ch</b> Stack
      </>
    }
    description={
      <span dangerouslySetInnerHTML={{
        __html: "Python<br />Hugging Face<br />Docker<br />AWS<br />Infrastructure as Code (IaC) Tools: Pulumi, Terraform<br />Prometheus<br />Grafana"
      }} />
    }
    isComingSoon
  />
</BentoTilt>


        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="/React-port/public/videos/feature-4.mp4"
            title={
              <>
                Int<b>egr</b>ation
              </>
            }
            description="I specialize in integrating AI into existing technologies and frameworks, enhancing applications without disrupting their core functionality. By leveraging tools like Hugging Face, Docker, and AWS, I seamlessly incorporate AI to improve performance and scalability."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="/React-port/public/videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
