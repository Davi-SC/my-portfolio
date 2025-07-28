import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaResearchgate,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto px-4">
        <p>Email: cruzdavi001@gmail.com</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://github.com/Davi-SC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/davi-silva-da-cruz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
