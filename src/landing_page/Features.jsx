import { useState, useRef, useLayoutEffect } from "react";

const Features = () => {
  const featureList = [
    "Wiki",
    "Projects",
    "Processes",
    "Onboarding",
    "Meetings",
    "Team Updates",
    "1:1s",
    "User Research",
    "More ->",
  ];
  const [active, setActive] = useState(0);
  const [box, setBox] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const featureRef = useRef();
  const divRef = useRef();

  const onItemClick = (index) => {
    setActive(index);
    const newBox = index * height;
    setBox(newBox);
  };

  useLayoutEffect(() => {
    setHeight(featureRef.current.clientHeight);
    setWidth(divRef.current.clientWidth);
    console.log(height);
  }, [box, width]);

  return (
    <div className="mt-[50px]">
      <h1 className="mx-auto text-center text-5xl font-medium">
        A home for all of your knowledge.
      </h1>
      <p className="mx-auto my-8 text-center text-sm">
        Project, knowledge base, process - bring all your work to life in Docs
      </p>
      <div className="mx-auto mt-8 flex items-center justify-center">
        <div className="relative flex flex-row space-x-16">
          <div ref={divRef}>
            {featureList.map((feature, index) => (
              <div
                className={`p-4 ${
                  index === active ? "rounded-lg drop-shadow-lg" : ""
                }`}
                key={index}
                ref={featureRef}
                onClick={() => {
                  onItemClick(index);
                }}
              >
                {feature}
              </div>
            ))}
            <div
              className={`absolute top-0 -z-10 rounded-lg bg-white drop-shadow-lg transition-all duration-300`}
              style={{
                transform: `translateY(${box}px)`,
                width: width,
                height: height,
              }}
            />
          </div>
          <div>
            <img src="../images/laptop.png" alt="" className="relative" />
            <img
              src="../images/laptopImage.png"
              alt=""
              className="absolute right-20 top-0 -z-10 bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
