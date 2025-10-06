import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function App() {
  // track panel visibility
  const [panel1Ref, panel1InView] = useInView({ threshold: 0.6 });
  const [panel2Ref, panel2InView] = useInView({ threshold: 0.6 });
  const [panel3Ref, panel3InView] = useInView({ threshold: 0.6 });
  const [panel4Ref, panel4InView] = useInView({ threshold: 0.6 });

  const activePanel = panel1InView
    ? 1
    : panel2InView
    ? 2
    : panel3InView
    ? 3
    : panel4InView
    ? 4
    : 0;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory relative scroll-smooth">
      
      {/* Static Background */}
      <motion.img
        src="/assets/abackground.png"
        alt="Background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
      />


      {/* Layer 1 object */}
      <motion.img
        src="/assets/orin.png"
        alt="Orin"
        className="fixed w-13/100 h-auto object-contain rounded-xl cursor-pointer z-20"
        onClick={() => scrollTo("panel2")}
        animate={
          activePanel === 1
            ? { top: "30%", left: "24%", opacity: 1 }
            : activePanel === 2
            ? { top: "32%", left: "17%", opacity: 1 }
            : { top: "-30%", left: "17%", opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />




      
      {/* Layer 2-1 object */}
      <motion.img
        src="/assets/frame_top.png"
        alt="PCB"
        className="fixed w-20/100 h-auto object-contain rounded-xl cursor-pointer z-50"
        onClick={() => scrollTo("panel3")}
        animate={
          activePanel === 1
            ? { top: "15%", left: "13%", opacity: 1 }
            : activePanel === 3
            ? { top: "15%", left: "13%", opacity: 1 }
            : activePanel === 4
            ? { top: "-30%", left: "13%", opacity: 0 }
            : { top: "110%", left: "13%", opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Layer 2-2 object */}
      <motion.img
        src="/assets/frame_front.png"
        alt="PCB"
        className="fixed w-1/5 h-auto object-contain rounded-xl cursor-pointer z-40"
        onClick={() => scrollTo("panel3")}
        animate={
          activePanel === 1
            ? { top: "33%", left: "13%", opacity: 1 }
            : activePanel === 3
            ? { top: "33%", left: "13%", opacity: 1 }
            : activePanel === 4
            ? { top: "-30%", left: "13%", opacity: 0 }
            : { top: "110%", left: "13%", opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Layer 2-3 object */}
      <motion.img
        src="/assets/frame_back.png"
        alt="PCB"
        className="fixed w-13/100 h-auto object-contain rounded-xl cursor-pointer z-10"
        onClick={() => scrollTo("panel2")}
        animate={
          activePanel === 1
            ? { top: "25%", left: "27%", opacity: 1 }
            : activePanel === 3
            ? { top: "29.5%", left: "21.5%", opacity: 1 }
            : activePanel === 4
            ? { top: "-30%", left: "21.5%", opacity: 0 }
            : { top: "110%", left: "21.5%", opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />


      {/* Layer 3 object */}
      <motion.img
        src="/assets/pcb.png"
        alt="PCB"
        className="fixed w-13/100 h-auto object-contain rounded-xl cursor-pointer z-30"
        onClick={() => scrollTo("panel4")}
        animate={
          activePanel === 1
            ? { top: "31%", left: "23%", opacity: 1 }
            : activePanel === 4
            ? { top: "31%", left: "16%", opacity: 1 }
            : { top: "130%", left: "16%", opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Information Pipeline Image */}
      <motion.img
        src="/assets/Information_pipeline.png"
        alt="Information Pipeline"
        className="fixed w-65/100 h-auto object-contain z-40 pointer-events-none"
        animate={
          activePanel === 1
            ? { top: "110%", left: "35%", opacity: 0 }
            : activePanel === 2
            ? { top: "11%", left: "35%", opacity: 1 }
            : { top: "-30%", left: "35%", opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Panel 1 – all layers stacked */}
      <section id="panel1" ref={panel1Ref} className="h-screen flex bg-gray-100 p-8 snap-start text-white">
        <div className="w-1/2 ml-auto flex flex-col space-y-6 justify-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border rounded-xl bg-white shadow">
              <h3 className="font-bold text-lg">Engineer {i} – Role</h3>
              <div className="flex space-x-4 mt-2">
                <div className="w-20 h-20 bg-gray-300 rounded-full" />
                <p className="text-sm text-gray-600">Short bio goes here...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Panel 2 – Layer 1 focus */}
      <section
        id="panel2"
        ref={panel2Ref}
        className="h-screen flex bg-white p-8 items-center snap-start"
      >
        {/* Empty panel, nothing inside */}
      </section>


      {/* Panel 3 – Layer 2 focus */}
      <section
        id="panel3"
        ref={panel3Ref}
        className="h-screen flex bg-gray-50 p-8 items-center snap-start"
      >
        <div className="w-1/2" />
        <div className="w-1/2 flex flex-col justify-end">
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.15, duration: 0.6 }}
            className="space-y-2"
          >
            {"Layer 2 insight|Key function|Extra detail".split("|").map((pt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-2 rounded bg-gray-100 text-red-500"
              >
                {pt}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>


      {/* Panel 4 – Layer 3 focus */}
      <section id="panel4" ref={panel4Ref} className="h-screen flex bg-white p-8 items-center snap-start text-white">
        <div className="w-1/2" />
        <div className="w-1/2 flex flex-col justify-end">
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.15, duration: 0.6 }}
            className="space-y-2"
          >
            {"Layer 3 purpose|Important note|Closing idea".split("|").map(
              (pt, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-2 bg-gray-100 rounded"
                >
                  {pt}
                </motion.li>
              )
            )}
          </motion.ul>
        </div>
      </section>
    </div>
  );
}
