import type { ReactNode } from "react";

import SectionTitle from "@/components/SectionTitle";

type ResumeSectionProps = {
  title: string;
  children: ReactNode;
};

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="resume-section">
      <div className="resume-section-layout">
        <div className="resume-section-head">
          <SectionTitle title={title} />
        </div>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}
