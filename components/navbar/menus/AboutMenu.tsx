const items = [
  {
    icon: "🧑‍🤝",
    title: "Know about us",
    description: "Want to know about us ? Lets Go !!",
  },
  {
    icon: "🫡",
    title: "Our team",
    description: "Currently we are a very small team !!",
  },
];

const AboutMenu = () => {
  return (
    <div className="border rounded-sm shadow-md bg-white absolute top-full text-gray-600">
      <div className="flex cursor-pointer p-4">
        <div className="flex flex-col items-start space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* <div classNameName="bg-white p-1 rounded-sm shadow-sm">
                {item.icon}
              </div> */}
              <div>
                {/* Border - b on hover additional */}
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs w-60">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
