import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  FileText,
  Euro,
  Receipt,
  ShoppingCart,
  Briefcase,
  AlertTriangle,
  Folder,
} from "lucide-react";

interface DashboardSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
}

const dashboardSections: DashboardSection[] = [
  {
    id: "planos",
    title: "Mis Planos",
    icon: FileText,
    description: "Planos técnicos y esquemas",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "nominas",
    title: "Nóminas",
    icon: Euro,
    description: "Gestión de nóminas",
    color: "from-green-500 to-green-600",
  },
  {
    id: "facturas",
    title: "Facturas",
    icon: Receipt,
    description: "Facturación y cobros",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "compras",
    title: "Compras",
    icon: ShoppingCart,
    description: "Pedidos y suministros",
    color: "from-green-500 to-green-600",
  },
  {
    id: "informes",
    title: "Informes de Trabajo",
    icon: Briefcase,
    description: "Reportes y seguimiento",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "incidencias",
    title: "Incidencias",
    icon: AlertTriangle,
    description: "Avisos y alertas",
    color: "from-red-500 to-red-600",
  },
  {
    id: "documentos",
    title: "Documentos",
    icon: Folder,
    description: "Archivos y certificados",
    color: "from-green-500 to-green-600",
  },
];

const DashboardCard = ({ section }: { section: DashboardSection }) => {
  const Icon = section.icon;

  return (
    <Card
      className={cn(
        "relative overflow-hidden cursor-pointer transition-all duration-300 ease-out",
        "bg-gray-900/50 border-gray-800 hover:border-gray-700",
        "hover:scale-105 hover:shadow-2xl",
        "group touch-manipulation",
        "dashboard-card",
      )}
      onClick={() => {
        // Here you would implement navigation to the specific section
        console.log(`Navigating to ${section.id}`);
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            section.color,
            "opacity-10",
          )}
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-lg" />
      </div>

      <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full min-h-[200px] relative z-10">
        <div
          className={cn(
            "mb-6 p-4 rounded-2xl transition-all duration-300",
            "bg-gradient-to-br",
            section.color,
            "group-hover:scale-110 group-hover:shadow-lg",
          )}
        >
          <Icon className="h-12 w-12 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {section.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {section.description}
        </p>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  BERPALUX
                </h1>
                <p className="text-gray-400 text-sm">
                  Instalaciones Eléctricas
                </p>
              </div>
            </div>

            <div className="text-right">
              <h2 className="text-xl font-semibold text-white">
                Panel de Control
              </h2>
              <p className="text-gray-400 text-sm">Gestión Integral</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Bienvenido al Panel de Control
          </h2>
          <p className="text-gray-400 text-lg">
            Accede a todas las herramientas y recursos de tu empresa
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {dashboardSections.map((section) => (
            <DashboardCard key={section.id} section={section} />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Estado del Sistema
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Conexión</span>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Última sincronización</span>
                  <span className="text-white text-sm">Hace 2 minutos</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Proyectos activos</span>
                  <span className="text-cyan-400 font-semibold">12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Accesos Rápidos
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">
                  📋 Crear nuevo proyecto
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">
                  📊 Ver estadísticas del mes
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">
                  ⚙️ Configuración del sistema
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
