import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="container py-5">
      <h2 className="mb-4">Skills</h2>
      <div className="d-flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="badge bg-secondary">{s}</span>
        ))}
      </div>
    </section>
  );
}
