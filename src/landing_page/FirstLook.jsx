import vanmoof from "../images/company_logos/vanmoof.svg";
import bamboo from "../images/company_logos/bamboohr.png";
import agropulse from "../images/company_logos/agropulse.png";
import spotify from "../images/company_logos/spotify.svg";
import angloamerican from "../images/company_logos/angloamerican.png";
import meero from "../images/company_logos/meero.svg";

const FirstLook = () => {
  return (
    <div className="mt-[80px]">
      <div>
        <h1 className="text-center text-7xl font-medium text-base-dark">
          Bring <span className="underline underline-offset-2">clarity</span> to
          your team
        </h1>
      </div>
      <div className="mx-auto my-7 w-8/12">
        <p className="text-center text-2xl font-medium">
          Slite is a modern knowledge base that drives action with structured
          docs, thoughtful collaboration and confident descision making
        </p>
      </div>
      <div className="mx-auto mb-10 mt-5 flex items-center justify-center">
        <form action="" className="flex flex-row">
          <input
            placeholder="name@company.com"
            type="text"
            name="email"
            id="email"
            className="h-20 w-[350px] rounded-l-full border border-base-dark bg-primary-light p-5"
          />
          <button className="-mx-9 rounded-l-full rounded-r-full bg-button-blue p-5 px-8 font-medium text-bg-card">
            Start For Free
          </button>
        </form>
      </div>
      <div>
        <img
          src="../images/landingImage.png"
          alt=""
          className="mx-auto flex items-center justify-center "
        />
        <img
          src="../images/changesMiniBanner.png"
          alt=""
          className="mx-auto -mt-[150px] flex items-center justify-center"
        />
      </div>
      <div className="my-8">
        <p className="text-center">200,00+ teams have found focus with Slite</p>
        <div className="mx-auto my-10 flex w-10/12 flex-row items-center justify-evenly">
          <img src={vanmoof} alt="" />
          <img src={bamboo} alt="" />
          <img src={agropulse} alt="" />
          <img src={spotify} alt="" />
          <img src={angloamerican} alt="" />
          <img src={meero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstLook;
