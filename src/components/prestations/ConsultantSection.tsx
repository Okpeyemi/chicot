export default function ConsultantSection() {
  return (
    <section className="px-4 pt-3 pb-8 sm:pt-4 sm:pb-12 md:pb-16 lg:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden ring-neutral-200">
          {/* Header pill */}
          <div className="bg-[#EEC96D] px-4 py-3 sm:px-6 sm:py-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900">
            Consultant en Politiques Publiques
          </div>
          {/* Body */}
          <div className="bg-gradient-to-b from-white to-neutral-100 p-4 sm:p-6 md:p-8 text-base sm:text-xl md:text-2xl lg:text-3xl">
            <ul className="list-disc space-y-1.5 sm:space-y-2 pl-5 sm:pl-6 leading-6 sm:leading-7 md:leading-8 text-neutral-900">
              <li>Élaboration, mise en œuvre et évaluation de politiques publiques</li>
              <li>Analyse des problématiques publiques et des impacts des décisions politiques</li>
              <li>Communication avec les parties prenantes, les médias et le public</li>
              <li>Promotion de l'éthique et de la gouvernance dans les institutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
