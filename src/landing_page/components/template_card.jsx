export default function TemplateCard({ color, title, image, className }) {
  return (
    <div className={`rounded-xl bg-white ${className} w-[200px]`}>
      <h2 className="p-4 text-2xl">{title}</h2>
      <div className="items-center justify-center">
        <div
          className={`mx-auto my-5 w-[110px] rounded-full`}
          style={{ backgroundColor: color }}
        >
          <img src={image} className="" />
        </div>
      </div>
    </div>
  );
}
