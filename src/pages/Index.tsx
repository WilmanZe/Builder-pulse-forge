import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">BERPALUX</h1>
        <p className="text-xl text-slate-600 mb-8">
          Instalaciones Eléctricas - Sistema de Gestión
        </p>
        <Link to="/dashboard">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-semibold px-8 py-3"
          >
            Acceder al Panel de Control
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
