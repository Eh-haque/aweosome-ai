export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-center text-white py-8 px-4 flex flex-col items-center">
      <div className=" text-base">
        <p>&copy; {currentYear} Awesome AI Platform, All right reserved.</p>
      </div>
      <div className="flex space-x-4">
        <a className="text-gray-400 hover:text-white " href="#">
          Privacy Policy
        </a>
        <a className="text-gray-400 hover:text-white " href="#">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
