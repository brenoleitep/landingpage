import mac from "../../assets/mac.jpeg";
import ilustration from "../../assets/ilustration.svg";
import rectangle from "../../assets/rectangle.svg";
import {
  StyledCourse,
  StyledCourses,
  StyledDiv,
  StyledDivCourse,
  StyledDivMain,
  StyledMain,
} from "./style";
import { motion } from "framer-motion";
import AOS from "aos";
import { AiOutlineMinus } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import "aos/dist/aos.css";

const Main = () => {
  return (
    <StyledMain>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { duration: 0.2 },
          default: { ease: "easeIn" },
        }}
      >
        <StyledDiv data-aos="fade-up">
          <img src={mac} alt="Macbook" />
        </StyledDiv>

        <StyledDivMain data-aos="fade-up">
          <h2>Bem vindo ao Shape.</h2>

          <h1>
            Transformando ações <br /> em oportunidades
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            consequuntur necessitatibus dicta? Quibusdam quidem quae, beatae
            perferendis repellat quas cum, temporibus maiores vel excepturi,
            perspiciatis earum dicta esse officia voluptates?
          </p>

          <button>Saiba mais</button>

          <img src={rectangle} alt="" />
        </StyledDivMain>

        <StyledDivCourse data-aos="fade-up">
          <h3>
            Melhores oportunidades de <br /> negócios para você
          </h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            atque, nisi alias laudantium veritatis illum numquam autem eligendi
            ipsum? Inventore quod nostrum, similique omnis at nam aspernatur
            reprehenderit eius nulla.
          </p>

          <StyledCourse data-aos="fade-right">
            <FaGraduationCap
              style={{
                backgroundColor: "#4BC3CC",
              }}
            />

            <StyledCourses>
              <h2>Cursos Profissionais</h2>
              <img src={rectangle} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam animi tempore veniam illum adipisci provident esse
                atque?
              </p>
            </StyledCourses>
          </StyledCourse>

          <StyledCourse data-aos="fade-left">
            <FaGraduationCap
              style={{
                backgroundColor: "#2C7AED",
              }}
            />

            <StyledCourses>
              <h2>Cursos Profissionais</h2>
              <img src={rectangle} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam animi tempore veniam illum adipisci provident esse
                atque?
              </p>
            </StyledCourses>
          </StyledCourse>

          <StyledCourse data-aos="fade-left">
            <FaGraduationCap
              style={{
                backgroundColor: "#4BC3CC",
              }}
            />

            <StyledCourses>
              <h2>Cursos Profissionais</h2>
              <img src={rectangle} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam animi tempore veniam illum adipisci provident esse
                atque?
              </p>
            </StyledCourses>
          </StyledCourse>

          <StyledCourse data-aos="fade-right">
            <FaGraduationCap
              style={{
                backgroundColor: "#2C7AED",
              }}
            />

            <StyledCourses>
              <h2>Cursos Profissionais</h2>
              <img src={rectangle} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam animi tempore veniam illum adipisci provident esse
                atque?
              </p>
            </StyledCourses>
          </StyledCourse>
          <img src={ilustration} alt="Ilustration" data-aos="fade-up" />
        </StyledDivCourse>
      </motion.div>
    </StyledMain>
  );
};

export default Main;
