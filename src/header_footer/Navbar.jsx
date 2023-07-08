// TODO: Fix Routing and add Link instead of a href
const Navbar = () => {
  const navBarOptions = ["Product", "Templates", "Pricing", "Blog", "Sign In"];
  return (
    <header>
      <div className="flex flex-row justify-between">
        <div className="logo m-8">
          <h1 className="text-3xl font-semibold">slite</h1>
        </div>
        <div className="justify-evenely flex flex-row">
          <div className="flex flex-row justify-evenly">
            {navBarOptions.map((item, index) => (
              <div className="mx-3 my-8 p-2 text-sm font-light" key={index}>
                <a href="/">{item}</a>
              </div>
            ))}
            <div className="mx-3 my-8 rounded-l-full rounded-r-full border border-base-dark p-2 text-sm font-light">
              <a href="/">Request a Demo</a>
            </div>
            <div className="mx-3 my-8 rounded-l-full rounded-r-full bg-button-blue px-3 py-2 text-sm font-light text-bg-card">
              <a href="/">Start for free</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
