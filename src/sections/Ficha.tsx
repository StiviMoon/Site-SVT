"use client";
import React, { useState } from 'react';
import { CheckCircle, Server, Database, Code, Globe, Shield, Cpu } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const TechnicalSpecsSection = () => {
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  
  const techSpecs = [
    { 
      component: 'Servidor', 
      spec: 'Intel Xeon E5-2680 v4, 32GB RAM', 
      description: 'Servidor principal para la aplicación y base de datos',
      icon: <Server className="h-4 w-4" />
    },
    { 
      component: 'Almacenamiento', 
      spec: 'SSD 1TB en RAID 10', 
      description: 'Almacenamiento rápido y redundante para datos críticos',
      icon: <Database className="h-4 w-4" />
    },
    { 
      component: 'Sistema Operativo', 
      spec: 'Linux Ubuntu Server 22.04 LTS', 
      description: 'SO estable y seguro para entornos empresariales',
      icon: <Shield className="h-4 w-4" />
    },
    { 
      component: 'Base de Datos', 
      spec: 'PostgreSQL 15', 
      description: 'SGBD relacional de alto rendimiento',
      icon: <Database className="h-4 w-4" />
    },
    { 
      component: 'Lenguaje Backend', 
      spec: 'Node.js, Python  LTS', 
      description: 'Entorno de ejecución para aplicaciones escalables',
      icon: <Code className="h-4 w-4" />
    },
    { 
      component: 'Framework Frontend', 
      spec: 'React 18 con Next.js 14', 
      description: 'Framework para interfaces modernas y responsivas',
      icon: <Globe className="h-4 w-4" />
    }
  ];
  
  // Solo mostrar 4 elementos si no está expandido
  const visibleSpecs = expandedSpecs ? techSpecs : techSpecs.slice(0, 4);
  
  const functionalRequirements = [
    {
      title: 'Gestión de Inventario',
      description: 'Control de stock, alertas de nivel bajo, seguimiento de productos',
      badge: 'Core'
    },
    {
      title: 'Gestion de Productos',
      description: 'Registro de productos, categorías, precios y proveedores',
      badge: 'Core'
    },
    {
      title: 'Gestión de Clientes',
      description: 'Base de datos de clientes, historial de compras, segmentación',
      badge: 'Core'
    },
    {
      title: 'Reportes y Análisis',
      description: 'Informes personalizables, dashboards, análisis de tendencias',
      badge: 'Business Intelligence'
    },
    {
      title: 'Gestión de Usuarios',
      description: 'Control de acceso, roles y permisos, auditoría de actividades',
      badge: 'Seguridad'
    },
    {
      title: 'Integración con Sistemas',
      description: 'APIs para conectar con sistemas de contabilidad, CRM y otros',
      badge: 'Integración'
    },
    
  ];

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-background to-muted/30">
  <div className="container px-4 md:px-6">
    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 md:space-y-4 text-center mb-8 md:mb-12">
      <Badge className="px-2 md:px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100 text-xs md:text-sm">
        Especificaciones
      </Badge>
      <h2 className="text-2xl  font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Ficha Técnica y Requisitos
      </h2>
      <p className="max-w-[95%] md:max-w-[85%] text-sm md:text-xl/relaxed text-muted-foreground">
        Especificaciones técnicas y requisitos funcionales para la implementación del sistema.
      </p>
    </div>
    
    <div className="mx-auto max-w-full md:max-w-[72rem]">
      <Tabs defaultValue="specs" className="w-full">
        <div className="flex justify-center mb-6 md:mb-8">
          <TabsList className="grid w-full max-w-xs md:max-w-md grid-cols-2">
            <TabsTrigger value="specs" className="text-xs md:text-sm">Ficha Técnica</TabsTrigger>
            <TabsTrigger value="requirements" className="text-xs md:text-sm">Requisitos Funcionales</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="specs" className="space-y-4 md:space-y-6">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <Cpu className="h-4 w-4 md:h-5 md:w-5 text-blue-700" />
                    Ficha Técnica
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    Especificaciones detalladas de la infraestructura propuesta
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-white self-start md:self-auto text-xs md:text-sm">Enterprise Grade</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Tabla responsiva */}
              <div className="rounded-md overflow-hidden">
                {/* Vista desktop - tabla tradicional */}
                <div className="hidden md:block w-full border-b">
                  <div className="grid grid-cols-12 bg-muted/50 text-left text-sm font-medium p-3">
                    <div className="col-span-3">Componente</div>
                    <div className="col-span-4">Especificación</div>
                    <div className="col-span-5">Descripción</div>
                  </div>
                </div>
                
                <div className="divide-y">
                  {visibleSpecs.map((item, index) => (
                    <div key={index}>
                      {/* Vista móvil - formato de tarjeta */}
                      <div className="block md:hidden p-4 text-sm space-y-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.component}</span>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div className="text-xs text-muted-foreground">Especificación:</div>
                          <div className="font-mono text-xs">{item.spec}</div>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div className="text-xs text-muted-foreground">Descripción:</div>
                          <div className="text-xs">{item.description}</div>
                        </div>
                      </div>

                      {/* Vista desktop - fila de tabla */}
                      <div 
                        className={`hidden md:grid grid-cols-12 p-3 text-sm ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
                      >
                        <div className="col-span-3 font-medium flex items-center gap-2">
                          <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">
                            {item.icon}
                          </div>
                          {item.component}
                        </div>
                        <div className="col-span-4 font-mono text-sm">{item.spec}</div>
                        <div className="col-span-5">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            {techSpecs.length > 4 && (
              <CardFooter className="flex justify-center py-3 border-t">
                <Button 
                  variant="ghost" 
                  onClick={() => setExpandedSpecs(!expandedSpecs)}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs md:text-sm"
                >
                  {expandedSpecs ? "Ver menos especificaciones" : "Ver todas las especificaciones"}
                </Button>
              </CardFooter>
            )}
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-8">
            <Card className="shadow-md border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 p-4">
                <CardTitle className="text-sm md:text-base">Rendimiento Estimado</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-muted-foreground">Tiempo de respuesta</span>
                    <span className="font-medium text-xs md:text-sm">{'<'} 200ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-muted-foreground">Usuarios concurrentes</span>
                    <span className="font-medium text-xs md:text-sm">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-muted-foreground">Disponibilidad</span>
                    <span className="font-medium text-xs md:text-sm">99.9%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 p-4">
                <CardTitle className="text-sm md:text-base">Escalabilidad</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-muted-foreground">Arquitectura</span>
                    <span className="font-medium text-xs md:text-sm">Microservicios</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-muted-foreground">Balanceo de carga</span>
                    <span className="font-medium text-xs md:text-sm">Automático</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-muted-foreground">Crecimiento proyectado</span>
                    <span className="font-medium text-xs md:text-sm">300% en 2 años</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="requirements">
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {functionalRequirements.map((req, index) => (
              <Card key={index} className="transition-all duration-200 hover:shadow-md border-muted">
                <CardHeader className="pb-2 p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base md:text-lg font-semibold">{req.title}</CardTitle>
                    <Badge variant="secondary" className="text-[10px] md:text-xs">{req.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground">{req.description}</p>
                </CardContent>
                <CardFooter className="border-t pt-3 p-4 flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                  Incluido en propuesta base
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 md:mt-8 bg-blue-50 rounded-lg p-4 md:p-6 border border-blue-100">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base md:text-lg font-medium text-blue-800">¿Necesita requisitos adicionales?</h3>
                <p className="text-xs md:text-sm text-blue-700">Podemos adaptar la solución a sus necesidades específicas</p>
              </div>
              <Button className="bg-blue-700 hover:bg-blue-800 text-xs md:text-sm w-full md:w-auto">
                Solicitar funcionalidades personalizadas
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</section>
  );
};

export default TechnicalSpecsSection;