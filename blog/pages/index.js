import Format from "../layout/format.js";
import Section1 from "../components/section1.js"
import Section2 from "@/components/section2.js";
import Popularsection from "@/components/popularsection.js";
import Catagorysection from "@/components/catagorysection.js";

export default function Home() {
  return (
    <Format>
      <Section1/>
      <Section2/>
      <Popularsection/>
      <Catagorysection/>
    </Format>
  );
}
 