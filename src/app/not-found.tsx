import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center px-4">
      <h1 className="text-9xl font-extrabold text-alfa-orange">404</h1>
      <h2 className="text-4xl font-bold text-alfa-blue mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button
        type="button"
        className="bg-indigo-corporate text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-alfa-blue bg-alfa-orange transition duration-300 flex items-center space-x-2"
      >
        <Link href={"/"}>
          <span className="text-xl pr-3">←</span>
          <span>Return to Homepage</span>
        </Link>
      </button>
    </div>
  );
}

export default NotFoundPage;
