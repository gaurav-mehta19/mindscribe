const items = [
  {
    icon: "📆",
    title: "Comming Soon",
    description: "Check out launches that are comming soon",
  },
  {
    icon: "📆",
    title: "FAQ's",
    description: "Check out launches that are comming soon",
  },
  {
    icon: "📆",
    title: "Launch Archives",
    description: "Check out launches that are comming soon",
  },
  {
    icon: "📆",
    title: "Newsletter",
    description: "Check out launches that are comming soon",
  },
];

const LaunchMenu = () => {
  return (
    <div className="border rounded-sm shadow-md bg-white absolute top-full text-gray-600">
      <div className="flex cursor-pointer p-4">
        <div className="flex flex-col items-start space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-white p-1 rounded-sm shadow-sm">
                {item.icon}
              </div>
              <div>
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

export default LaunchMenu;
