import { BsArrowRightShort } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="mx-10 mb-14 mt-5">
        <img
          src="../assets/company_logos/sliteLogo.svg"
          alt=""
          className="stroke-base-dark"
        />
      </div>
      <div className="lg-mx-auto md:flex md:flex-row md:space-x-14 lg:flex lg:flex-row lg:justify-center">
        <div className="space-y-3">
          <div className="mb-5 sm:mb-7">What's it for?</div>
          <div>Knowledgebase</div>
          <div>Working remotely</div>
          <div>Fix remote meetings</div>
          <div>Onboarding remotely</div>
          <div>Build Human Connection</div>
          <div>Handbooks</div>
        </div>
        <div className="space-y-3">
          <div className="space-y-3 sm:mb-7">How it works</div>
          <div>Features</div>
          <div>Integrations</div>
          <div>Pricing</div>
          <div>What's new</div>
          <div>Help Center</div>
          <div>Contact Support</div>
        </div>
        <div className="space-y-3">
          <div className="space-y-3 sm:mb-7">Resources</div>
          <div>Templates</div>
          <div>Learn</div>
          <div>Blog</div>
          <div>Startup Bibles</div>
          <div>Remote Handbook</div>
          <div>Management Handbook</div>
          <div>Dowload Apps</div>
          <div>Chrome Extention</div>
        </div>
        <div className="space-y-3">
          <div className="space-y-3 sm:mb-7">Slite</div>
          <div>About Us</div>
          <div>Find us on Twitter</div>
          <div>Careers</div>
          <div>Customers</div>
          <div>Press Kit</div>
        </div>
        <div className="space-y-3">
          <div className="space-y-3 sm:mb-7">Compare</div>
          <div>Notion</div>
          <div>Confluence</div>
          <div>Google Docs</div>
          <div>Dropbox Paper</div>
          <div>All Comparisons</div>
        </div>
        <div className="w-3/12">
          <div className="space-y-3 sm:mb-7">
            Remote letter to read on your own time
          </div>
          <div className="mb-5 flex flex-row">
            <input
              type="text"
              className="rounded-l-full rounded-r-full border p-5 pl-2 pr-40"
              placeholder="What's your email?"
            />
            <button className="-py-1 -ml-14 rounded-full bg-button-blue px-5 text-2xl text-white">
              <BsArrowRightShort />
            </button>
          </div>
          <p className="text-sm">
            100% homemade, no tricks or ponies or growth hacking nonsense. Just
            remote things we care about with a short surprising insight every
            week. No rush.
          </p>
        </div>
      </div>
    </div>
  );
}
