import { Award, Download, ExternalLink, Calendar } from "lucide-react";


function CertificateCard({ certificate }) {
  return (
    <div className="glass-card p-6 transition-all group animate-fade-in bg-gray-900 rounded-lg flex flex-col h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-xl bg-[#06b6d4]/30 flex items-center justify-center">
            <Award className="w-7 h-7 text-[#06b6d4]" />
          </div>
          <span className="text-xs text-[#06b6d4] font-medium px-2 py-1 rounded-full bg-[#06b6d4]/20">
            {certificate.category}
          </span>
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 text-white">{certificate.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 text-white/70">{certificate.provider}</p>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/20">
          <div className="flex items-center gap-2 text-xs text-[#06b6d4]">
            <Calendar className="w-4 h-4" />
            <span>{certificate.issueDate}</span>
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {certificate.certificateUrl && (
              <>
                <button className="h-8 w-8 text-white">
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="h-8 w-8 text-white">
                  <Download className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;