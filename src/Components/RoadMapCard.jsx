const RoadMapCard = ({ data, cardIndex }) => {

  if (!data) return <p>No Data</p>;
  // console.log(cardIndex+1, Number(data.index))

  return (
    <li
      className="roadmap-card max-w-[1200px] w-full relative md:sticky top-[20px] z-1 
                 bg-black rounded-2xl max-md:border-1 border-[#efefef]
                 py-[20px] px-[25px] pl-[50px] lg:p-[48px] 
                 flex max-md:flex-wrap flex-row justify-between items-center 
                max-md:gap-4"
      data-index={cardIndex}
    >
      {/* Left Content */}
      <div className="flex-1 flex max-md:w-full md:max-w-[300px] flex-col gap-2 md:gap-[30px] items-center lg:items-start">
        <h1 className="text-2xl md:text-[24px] text-left font-semibold mb-4 uppercase">
          {data.title}
        </h1>
        <div className="w-auto relative rounded-lg overflow-hidden border border-gray-300 shadow-lg">
          <img
            src={data.image}
            alt={data.title}
            className="w-full max-w-[400px] md:max-w-[300px] h-auto object-cover"
          />
          <h1
            className="text-[100px] font-[500] leading-none md:hidden absolute right-2 bottom-0 text-[#00000099]"
            style={{
              fontFamily: "instrument sans, sans-serif",
              WebkitTextStroke: "1px #fff",
            }}
          >
            {data.number}
          </h1>
        </div>
      </div>

      {/* Center Number */}
      <div className="max-w-max max-md:hidden">
        <h1
          className="text-[120px] xl:text-[150px] font-[500] leading-none"
          style={{ fontFamily: "instrument sans, sans-serif" }}
        >
          {data.number}
        </h1>
      </div>

      {/* Right Content */}
      <div className="flex flex-col text-left">
        <div className="flex items-start gap-6 space-y-2">
          <div className="md:max-w-[350px] tracking-wide gap-[10px]">
            <h2 className="text-lg md:text-[18px] font-[500] leading-[20px] mb-[44px]">
              {data.phaseTitle} :{" "}
              <span className="font-normal text-[14px]">{data.phaseDesc}</span>
            </h2>

            <div className="space-y-[24px]">
              {data.missions?.map((mission, idx) => (
                <div key={idx} className="flex flex-col md:gap-[5px]">
                  <h2 className="text-lg md:text-[18px] font-[500]">
                    {mission.title}
                  </h2>
                  <ul className="list-disc list-inside indent-1">
                    {mission.points.map((point, i) => (
                      <li key={i} className="text-[14px]">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RoadMapCard;
