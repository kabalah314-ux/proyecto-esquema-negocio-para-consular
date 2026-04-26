export default function SectionHeader({
  number,
  title,
  subtitle,
  emoji,
}: {
  number: string;
  title: string;
  subtitle?: string;
  emoji: string;
}) {
  return (
    <div className="mb-8 flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
        {number}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
        </div>
        {subtitle && (
          <p className="text-gray-500 mt-1 text-sm">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
