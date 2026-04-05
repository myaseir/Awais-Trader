interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition bg-white">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-600 font-semibold hover:underline">Learn More →</button>
    </div>
  );
}