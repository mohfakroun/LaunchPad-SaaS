import { CARD_WIDTH } from "./data";

export const Post = ({ imgUrl, tag, title, description }) => {
  return (
    <div
      className="group relative shrink-0 cursor-pointer"
      style={{ width: CARD_WIDTH }}
    >
      <div className="transition-all group-hover:-translate-y-1 duration-500">
        <img
          src={imgUrl}
          className="mb-3 h-[200px] w-full rounded-lg border border-zinc-900 bg-zinc-300 object-cover shadow-[6px_6px_0px_rgb(24,_24,_27)] transition-all group-hover:translate-y-1.5 group-hover:shadow-[0px_0px_0px_rgb(24,_24,_27)]"
          alt={`An image for a fake blog post titled ${title}`}
        />

        <span className="inline-flex items-center rounded-full bg-white px-2 py-1 text-xs font-medium text-zinc-900 mb-2">
          {tag}
        </span>

        <div className="w-full h-[1px] bg-zinc-200"/>
        <p className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-zinc-900 pt-2">
          {title}
        </p>

        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  );
};
