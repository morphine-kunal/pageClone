import { useState } from "react";

interface AccordionProps {
    title: string;
    points: Array<string | { name: string; about: string } | { name: string; about: string }[]>;
    description?: string;
    color?: string;
  }

const Accordion: React.FC<AccordionProps> = ({
  title,
  points,
  description,
  color
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white text-lg">
      <div className="flex flex-col">
        <div
          className="flex justify-between pb-8 cursor-pointer fold-bold"
          onClick={toggleAccordion}
          style={{color: `${color}`}}
        >
          <p>{title}</p>
          <div>{isOpen ? "˅" : ">"}</div>
        </div>
      </div>
      {isOpen && (
        <>
          {description && (
            <div className="md:text-md text-white text-sm">
              <p>{description}</p>
            </div>
          )}
          <div className="flex flex-col gap-2 justify-between mb-4">
            {points.map((point, index) => (
              <div key={index}>
                {typeof point === "string" ? (
                  <ul className="flex gap-x-6 justify-between flex-col">
                    <li className="text-md text-[#3D3D3A] list-disc list-inside">
                      {point}
                    </li>
                  </ul>
                ) : Array.isArray(point) ? (
                  <div className={`flex gap-x-6 justify-between ${typeof point[0] === "string" ? "flex-col" : "flex-row"}`}>
                    <div className="flex">
                      {point.map((subPoint, subIndex) => (
                        <div key={subIndex} className="flex">
                          <h3 className="text-[#89B4C7]">{subPoint.name}</h3>
                          <p className="md:text-md text-sm">{subPoint.about}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-x-6 justify-between mt-4">
                    <div>
                      <h3 className="text-[#89B4C7] text-lg ">{point.name}</h3>
                      <p className="md:text-md text-sm">{point.about}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Accordion;
