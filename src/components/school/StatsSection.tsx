const stats = [
  { value: "25+", label: "лет успешной работы" },
  { value: "1000+", label: "выпускников" },
  { value: "57", label: "преподавателей" },
  { value: "95%", label: "поступление в вузы" }
];

const StatsSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;