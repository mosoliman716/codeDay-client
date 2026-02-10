import { Plus } from "lucide-react";
import CertificateCard from "../components/certificates/CertificateCard";
import AddCertificate from "../components/certificates/AddCertificate";
import { useState, useEffect } from "react";
import { api } from "../configs/api";



export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [showAddCertificate, setShowAddCertificate] = useState(false);
  const [newCertificate, setNewCertificate] = useState({
    title: "",
    category: "Frontend",
    provider: "",
    issueDate: "",
    url: "",
  });

  const addCertificate = async () => {
    try {
      const response = await api.post("/certificates/add", newCertificate, {
        withCredentials: true,
      });
      console.log("Certificate added:", response.data);
      setShowAddCertificate(false);
      setCertificates([...certificates, response.data]);
    } catch (error) {
      console.error("Error adding certificate:", error);
    }
  };

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await api.get("/certificates/get", {
            withCredentials: true,
        });
        setCertificates(response.data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <div className="space-y-8 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Certificates</h1>
          <p className="text-white mt-1">Showcase your achievements</p>
        </div>
        <button className="bg-[#06b6d4] text-primary-foreground hover:bg-[#06b6d4]/90 px-4 py-2 rounded-md flex items-center" onClick={() => setShowAddCertificate(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Certificate
        </button>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6">
        <div className="glass-card px-6 py-4 bg-gray-800 rounded-lg">
          <p className="text-2xl font-bold text-[#06b6d4]">{certificates.length}</p>
          <p className="text-sm text-white">Total Certificates</p>
        </div>
        <div className="glass-card px-6 py-4  bg-gray-800 rounded-lg">
          <p className="text-2xl font-bold text-[#06b6d4]">{[...new Set(certificates.map(c => c.provider))].length}</p>
          <p className="text-sm text-white">Providers</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
        {/* Add Certificate Modal */}
        {showAddCertificate && (
          <AddCertificate
            newCertificate={newCertificate}
            setNewCertificate={setNewCertificate}
            setShowAddCertificate={setShowAddCertificate}
            addCertificate={addCertificate}
        />)}
    </div>
  );
}
