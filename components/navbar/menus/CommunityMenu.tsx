const items = [
  {
    icon: "🧑‍🤝‍🧑",
    title: "Join our Discord",
    description:
      "Join with other like minded developers, video creators around",
  },
  {
    icon: "✏️",
    title: "Share your experience",
    description: "Tell your stories and share your experience with us !!",
  },
];

const CommunityMenu = () => {
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
                <div className="text-xs w-48">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityMenu;
