import TemplateCard from "./components/template_card";

export default function Templates() {
  return (
    <div>
      <div className="mt-[80px] text-center">
        <h2 className="text-4xl">Beat the blank canvas with Templates</h2>
        <p className="my-4 text-2xl">
          Ready-to-use Templates for product specs, company handbooks, meeting
          notes and more.
        </p>
        <button className="my-5 rounded-l-full rounded-r-full border border-base-dark p-2 px-9 py-5 font-medium hover:bg-base-dark hover:text-white">
          Browse Templates
        </button>
      </div>
      <div className="mt-20 flex flex-row justify-evenly">
        <TemplateCard
          color="#1e90ff"
          title="Onboarding Meetings"
          image="../assets/templatepngs/meeting.png"
        />
        <TemplateCard
          color="#ff6347"
          title="Weekly Reviews"
          image="../assets/templatepngs/weekly.png"
        />
        <TemplateCard
          color="#ffae42 "
          title="Talent Acquisition"
          image="../assets/templatepngs/talent.png"
        />
        <TemplateCard
          color="#2e8b57"
          title="Product Specifications"
          image="../assets/templatepngs/specs.png"
        />
        <TemplateCard
          color="#b19cd9 "
          title="Product Planning"
          image="../assets/templatepngs/planning.png"
        />
      </div>
    </div>
  );
}
