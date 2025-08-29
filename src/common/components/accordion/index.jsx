"use client";;
const Accordion = ({ openIndex, setOpenIndex }) => {

    const toggleAccordion = (index) => {
        setOpenIndex(index);
    };

    const accordionData = [
        { title: "Accordion Item 1", content: "This is the first item's content." },
        { title: "Accordion Item 2", content: "This is the second item's content." },
        { title: "Accordion Item 3", content: "This is the third item's content." },
    ];

    return (
        <div className="w-full h-full  space-y-4 my-4">
            {accordionData.map((item, index) => (
                <div key={index} className=" w-full  rounded-lg cursor-pointer">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className={`w-full flex justify-between items-center p-4 text-sm md:text-lg font-medium ${openIndex === index ? "rounded-t-lg bg-[#00000099] hover:bg-[#00000047]" : "rounded-lg bg-[#00000047] hover:bg-[#00000099]"} 
                               rounded-t-lg text-white cursor-pointer`}
                    >
                        {item.title}
                        <span className={`transform transition-transform text-white text-sm md:text-lg ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                            ▼
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden bg-[#00000099]  transition-all duration-300 ${openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                            }`}
                    >
                        <p className="text-white text-sm md:text-lg">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
