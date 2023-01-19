export default function Footer() {
  return (
    <footer className=" text-center lg:text-left text-base w-full bottom-0 fixed bg-slate-900 bg-opacity-30 ">
    <div className="text-white text-center p-3 flex justify-center cursor-default">
      Copyright &copy; {new Date().getFullYear()}{" "} 
      <p className="text-blue-500 hover:text-blue-700 ">{" <NIU/>"}</p>
    </div>
  </footer>
  );
}
