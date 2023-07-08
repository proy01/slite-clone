export default function Pricing() {
  return (
    <div className="mx-auto mt-[100px] flex w-9/12 flex-row justify-between">
      <div>
        <h2 className="mb-4 text-4xl">A radical change at a fair price.</h2>
        <p className="mb-4">
          Give Slite a try. Save 16% on annual commitment.
          <br />
          Big team? check the <span className="underline">entrprise plan</span>.
        </p>
        <div className="flex flex-row space-x-5">
          <button className="rounded-l-full rounded-r-full bg-button-blue px-5 py-3 text-white hover:border hover:bg-primary-light hover:text-base-dark">
            Start for free
          </button>
          <button className="rounded-l-full rounded-r-full border px-5 py-3">
            Compare all plans <span></span>
          </button>
        </div>
      </div>
      <div className="flex flex-row space-x-10">
        <div className="h-[240px] w-[190px] rounded-lg border">
          <div className="my-5">
            <h3 className="text-center text-3xl">Free</h3>
            <p className="text-center text-sm">Plan</p>
          </div>
          <hr className="solid mx-10" />
          <div className="ml-7 mt-10 text-center">
            <span className="text-xl">$</span>
            <span className="text-6xl">0</span>
            <span className="align-top text-xs">/month</span>
          </div>
          <h4 className="mt-2 text-center text-sm">Up to 50 docs</h4>
        </div>
        <div className="h-[240px] w-[200px] rounded-lg bg-bg-card shadow-lg">
          <div className="my-5">
            <h3 className="text-center text-3xl">Standard</h3>
            <p className="text-center text-sm">Plan</p>
          </div>
          <hr className="solid mx-10" />
          <div className="ml-7 mt-10 text-center">
            <span className="text-xl">$</span>
            <span className="text-6xl">6</span>
            <span className="mr-2 align-top text-xl">67</span>
            <span className="align-top text-xs">/month</span>
          </div>
          <h4 className="mt-2 text-center text-sm">Per user</h4>
        </div>
      </div>
    </div>
  );
}
