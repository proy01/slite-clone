export default function VideoLoader() {
  return (
    <div className="justify-center">
      <div className="mt-[80px] text-center">
        <h4 className="mt-4 text-3xl">Move ideas forward.</h4>
        <h3 className="mt-4 text-4xl">Docs, meet Discussion</h3>
        <p className="mx-20 mt-4 text-2xl">
          Decisions don't work on their own, and neither does your team. In
          Slite, decision-making and async discussion comes built-in, inside
          Docs. Say goodbye to scattered conversations and endless Slack
          threads.
        </p>
      </div>
      <div className="mb-10 mt-14 text-center">
        <button className="rounded-l-full rounded-r-full bg-button-blue px-5 py-3 text-lg text-white hover:border hover:bg-primary-light hover:text-base-dark">
          I want that too
        </button>
      </div>
      <div className="mb-10">
        <iframe
          className="mx-auto w-10/12 justify-center"
          height="720"
          src="https://www.youtube.com/embed/K4TOrB7at0Y"
          title="Demo Background Sample Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
