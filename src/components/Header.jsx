import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 text-center">
        <img
          src="/public/avatar.jpg"
          alt="Davi Silva da Cruz Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300"
        />
        <h1 className="text-4xl font-bold text-gray-800">Davi Silva da Cruz</h1>
        <p className="text-lg text-gray-600">Student</p>
        <nav className="mt-4">
          <Link to="/" className="text-blue-600 hover:underline mx-4">
            Curriculum
          </Link>
          <Link
            to="/publications"
            className="text-blue-600 hover:underline mx-4"
          >
            Publications
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
