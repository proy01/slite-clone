export default function Blockquote() {
  return (
    <div>
      <hr className="solid mx-auto mb-8 w-7/12 justify-center" />
      <blockquote className="mx-auto w-8/12 text-center text-lg italic">
        Slite let us bring the two most important communication bits in the same
        place: documentation & decision-making. The connection between docs and
        discussions makes decision-making more efficient, transparent &
        contextualized.
      </blockquote>
      <p className="mx-auto mt-3 w-8/12 text-center font-semibold">
        Sebastien Gendreau
      </p>
      <p className="mx-auto mt-1 w-8/12 text-center text-sm">
        CPO of AGORAPULSE
      </p>
      <hr className="solid relative mx-auto mt-8 w-7/12 justify-center" />
      <div className="absolute right-20 -m-10 w-7/12">
        <img
          src="../assets/person.png"
          className="mx-auto h-20 w-20 justify-center rounded-full "
        />
      </div>
    </div>
  );
}
