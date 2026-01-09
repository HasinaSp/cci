export default function ChooseLevelIntro() {
  return (
    <section className="bg-slate-50 py-16 text-center text-[#111927]">
      <div className="inline-flex rounded-full bg-gradient-to-l from-white via-[#F8F8F7] to-[#B4C3DE] p-[2px]">
        <button className="flex items-center gap-2 rounded-full border-[2px] border-white bg-gradient-to-l from-white via-[#F8F8F7] to-[#B4C3DE] px-5 py-2 text-sm font-medium text-slate-900">
              <img
                src="/diagnostic/crown.png"
                alt=""
                width={16}
                height={16}
                className="inline-block mr-2"
              />
          Choose your level
        </button>
      </div>
    </section>
  );
}
