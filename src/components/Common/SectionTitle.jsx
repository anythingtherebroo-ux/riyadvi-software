function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 px-4 text-center sm:mb-16">

      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-sm text-gray-400 sm:mt-5 sm:text-base">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;