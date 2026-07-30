import { useEffect, useState } from "react";
import API from "../../Services/api";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const serverBaseURL = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace("/api", "")
    : "http://localhost:5000";

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await API.get("/careers");
      if (response.data.success) {
        setApplications(response.data.data);
      }
    } catch (error) {
      console.error("Fetch Applications Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteApplication = async (id) => {
    if (!window.confirm("Delete this application?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      const response = await API.delete(`/careers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setApplications(applications.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error("Delete Application Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Career Applications
      </h1>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Position</th>
                <th className="p-4">Experience</th>
                <th className="p-4">Resume</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((item) => {
                const cleanResumePath = item.resume
                  ? item.resume.replace(/\\/g, "/")
                  : "";
                return (
                  <tr key={item._id} className="border-b hover:bg-blue-50">
                    <td className="p-4 text-gray-900">{item.fullName}</td>
                    <td className="p-4 text-gray-700">{item.email}</td>
                    <td className="p-4 text-blue-600">{item.position}</td>
                    <td className="p-4 text-gray-700">{item.experience}</td>
                    <td className="p-4">
                      {cleanResumePath ? (
                        <a
                          href={`${serverBaseURL}/${cleanResumePath}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 font-semibold underline"
                        >
                          View Resume
                        </a>
                      ) : (
                        <span className="text-gray-400">No Resume</span>
                      )}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => deleteApplication(item._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}