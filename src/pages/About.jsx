export default function About({ onNavigate }) {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto space-y-6">
      <button onClick={() => onNavigate('Home')} className="text-green-900 font-medium hover:underline">← Back to Home</button>
      <h1 className="text-4xl font-serif text-neutral-900">About Me</h1>
      <p className="text-neutral-500 leading-relaxed">
        Halo! Saya Fahrunnisa, seorang Web Developer dan UI/UX Designer...
      </p>
    </div>
  );
}