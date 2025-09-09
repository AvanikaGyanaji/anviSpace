const RoadMapCard = ({ data }) => {
  if (!data) return <p>No Data</p>;
  console.log("RoadMapCard data:", data);

  return (
      <li className="max-w-6xl w-full sticky top-0 scroll-smooth bg-black rounded-2xl border-1 border-[#282828] p-[48px] flex flex-col md:flex-row justify-between align-middle items-center">
        {/* Left */}
        <div className="flex-1 flex md:max-w-[300px] flex-col gap-[50px] items-center lg:items-start">
          <h1 className="text-2xl md:text-[24px] text-left font-semibold mb-4 uppercase">
            {data.title}
          </h1>
          <div className="w-auto rounded-lg overflow-hidden border-1 border-gray-300 shadow-lg">
            <img
              src={data.image}
              alt={data.title}
              className="w-full max-w-[300px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Center Number */}
        <div className="max-w-[100px]">
          <h1
            className="text-[96px] lg:text-[120px] font-[500] leading-none"
            style={{ fontFamily: "instrument sans, sans-serif"}}
          >
            {data.number}
          </h1>
        </div>

        {/* Right */}
        <div className="flex flex-col text-left">
          <div className="flex items-start gap-6">
            <div className="md:max-w-[350px] tracking-wide">
              <h2 className="text-lg md:text-[18px] font-[500]">
                {data.phaseTitle} :{" "}
                <span className="font-normal text-[14px]">
                  {data.phaseDesc}
                </span>
              </h2>

              <div className="mt-6 space-y-6">
                {data.missions?.map((mission, idx) => (
                  <div key={idx}>
                    <h2 className="text-lg md:text-[18px] font-[500]">
                      {mission.title}
                    </h2>
                    <ul className="list-disc list-inside indent-1 mt-2 space-y-1">
                      {mission.points.map((point, i) => (
                        <li key={i}>{point}</li>
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
