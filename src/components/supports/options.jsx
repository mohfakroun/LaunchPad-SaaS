import { MotionConfig, motion } from "framer-motion";

const Testimonial = ({ imgSrc, name, title, company, content }) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full overflow-hidden rounded-xl border-r border-2 border-zinc-900 bg-white shadow-[8px_8px_0_0_rgba(24,24,27,1)] p-7 md:p-10"
    >
      <div className="mb-6 flex items-center gap-6">
        <div className="rounded-lg bg-zinc-900">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "-7deg",
              opacity: 1,
            }}
            exit={{
              rotate: "-7deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="avatar"
            className="size-24 rounded-lg border-2 border-zinc-900"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-3xl font-medium">{name}</span>
          <span className="text-zinc-600">
            {title}:  <span className="text-zinc-900 font-semibold">{company}</span>
          </span>
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className="text-xl leading-relaxed"
      >
        {content}
      </motion.p>
    </motion.div>
  </MotionConfig>
);

export const OPTIONS = [
  {
    title: "Early-Stage Teams",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/9.x/toon-head/svg?seed=Brian&backgroundColor=ffdfbf"
        name="Michael S."
        title="Regional Manager"
        company="Dunder Mifflin"
        content="I don’t need more tools. I need one thing that everyone actually uses. This finally made the team stop emailing spreadsheets around."
      />
    ),
  },
  {
    title: "Growth & Social",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/9.x/toon-head/svg?seed=Kimberly&backgroundColor=ffdfbf"
        name="Ryan H."
        title="Content Strategist"
        company="WUPHF.com"
        content="When you’re moving fast, simplicity matters. This fits into my workflow without slowing things down."
      />
    ),
  },
  {
    title: "Editorial",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/9.x/toon-head/svg?seed=Emery&backgroundColor=ffdfbf"
        name="Kelly K."
        title="Content Writer"
        company="The Office Blog"
        content="I use it to plan posts, track drafts and stay consistent. It’s organised, but still easy to use."
      />
    ),
  },
  {
    title: "Documentation & Knowledge",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/9.x/toon-head/svg?seed=Jude&backgroundColor=ffdfbf"
        name="Toby F."
        title="HR Representative"
        company="Corporate"
        content="It’s useful for documenting processes and keeping everything in one place. Very practical. Very calm."
      />

    ),
  },
  {
    title: "Design",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/9.x/toon-head/svg?seed=Mason&backgroundColor=ffdfbf"
        name="Pam B."
        title="Designer"
        company="Dunder Mifflin"
        content="I like tools that don’t get in the way. This helps me organise ideas without overcomplicating things."
      />
    ),
  },
  {
    title: "Business Strategy",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/9.x/toon-head/svg?seed=Kingston&backgroundColor=ffdfbf"
        name="David W."
        title="Senior Consultant"
        company="Corporate"
        content="Clients care about clarity and outcomes. This makes it easy to show progress without extra noise."
      />
    ),
  },
  {
    title: "Creative Teams",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/9.x/toon-head/svg?seed=Eliza&backgroundColor=ffdfbf"
        name="Dwight S."
        title="Assistant to the Regional Manager"
        company="Dunder Mifflin"
        content="Efficiency is everything. This tool improves productivity and eliminates weakness."
      />
    ),
  },
  {
    title: "Media & Marketing",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/9.x/toon-head/svg?seed=Easton&backgroundColor=ffdfbf"
        name="Jim H."
        title="Sales Representative"
        company="Scranton Branch"
        content="Between shoots, edits and deadlines, this keeps projects moving without micromanagement."
      />
    ),
  },
  {
    title: "Operations & Admin",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/9.x/toon-head/svg?seed=Robert&backgroundColor=ffdfbf"
        name="Andy B."
        title="Video Producer"
        company="Cornell Media"
        content="I don’t label things. I just know where they are. This somehow works with that."
      />

    ),
  },
];
