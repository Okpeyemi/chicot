export default function ConsultantSection() {
  return (
    <section className="px-4 pt-4 pb-12 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl overflow-hidden ring-neutral-200">
          {/* Header pill */}
          <div className="bg-[#EEC96D] px-6 py-4 text-center text-4xl font-semibold text-neutral-900">
            Consultant en Politiques Publiques
          </div>
          {/* Body */}
          <div className="bg-gradient-to-b from-white to-neutral-100 p-6 sm:p-8 text-3xl">
            <ul className="list-disc space-y-2 pl-6 leading-8 text-neutral-900">
              <li>Élaboration, mise en œuvre et évaluation de politiques publiques</li>
              <li>Analyse des problématiques publiques et des impacts des décisions politiques</li>
              <li>Communication avec les parties prenantes, les médias et le public</li>
              <li>Promotion de l’éthique et de la gouvernance dans les institutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
