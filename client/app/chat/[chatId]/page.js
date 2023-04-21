import Navbar from "../../../component/navbar";
import Sidebar from "../../../component/sidebar";
export default function page(params) {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-4 col-md-2 bg-primary">
          <Sidebar />
        </div>
        <div className="col-8 col-md-10 p-0">
          <p className="bg-dark text-white"> hello world </p>
        </div>
      </div>
    </>
  );
}
