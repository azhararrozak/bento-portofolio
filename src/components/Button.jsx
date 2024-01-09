import { GoArrowUpRight } from "react-icons/go";
import textContent from "../data/textContent";
import { Link } from "react-router-dom";

const Button = ({ language, linkWeb }) => {
  return (
    <Link to={linkWeb}>
      <div className="flex items-center rounded-full border px-4 py-2">
        <p className="text-sm mr-[0.1rem]">
          {textContent.project[language].web}
        </p>
        <GoArrowUpRight />
      </div>
    </Link>
  );
};

export default Button;
