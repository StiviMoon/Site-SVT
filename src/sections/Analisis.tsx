"use client"
import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  BarChart3, 
  CheckCircle, 
  TrendingDown, 
  Award, 
  Clock, 
  ShieldCheck,
  ArrowDown,
  ArrowUp,
  Check
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// Define types for TypeScript
type VendorId = 'A' | 'B' | 'C';

interface VendorInfo {
  name: string;
  hardware: number;
  software: number;
  implementation: number;
  support: number;
  total: number;
  color: string;
  hoverColor: string;
  textColor: string;
  height: string;
  pros: string[];
  cons: string[];
}

interface VendorData {
  [key: string]: VendorInfo;
}

const VendorComparisonSection: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<VendorId>('C');
  
  const vendorData: VendorData = {
    A: {
      name: 'Proveedor Lenovo',
      hardware: 4500000, // Lenovo IdeaPad Slim 3 (Core i7, 16GB RAM, 1TB SSD)
      software: 1150000, // Windows 10 Pro (~600k) + IntelliJ IDEA Ultimate (~550k)
      implementation: 0,
      support: 150000, // Mantenimiento básico anual
      total: 5800000,
      color: 'bg-blue-500',
      hoverColor: 'group-hover:bg-blue-600',
      textColor: 'text-blue-500',
      height: 'h-[190px]',
      pros: [
        'Buena relación precio/rendimiento',
        'Compatibilidad total con entornos Windows',
        'Fácil mantenimiento y repuestos locales'
      ],
      cons: [
        'Batería de duración media',
        'Construcción menos premium'
      ]
    },
    B: {
      name: 'Proveedor HP',
      hardware: 4800000, // HP Pavilion 15 (Core i7, 16GB RAM, 1TB SSD)
      software: 1150000, // Windows 11 Pro + IntelliJ Ultimate
      implementation: 0,
      support: 200000,
      total: 6150000,
      color: 'bg-purple-500',
      hoverColor: 'group-hover:bg-purple-600',
      textColor: 'text-purple-500',
      height: 'h-[192px]',
      pros: [
        'Buena pantalla y rendimiento',
        'Mayor disponibilidad en Colombia',
        'Soporte oficial HP'
      ],
      cons: [
        'Precio un poco más elevado',
        'Más pesado que otros modelos'
      ]
    },
    C: {
      name: 'Proveedor Dell',
      hardware: 5100000, // Dell Inspiron 15 (Core i7, 16GB RAM, 1TB SSD)
      software: 1200000, // Windows 11 Pro + JetBrains Suite
      implementation: 0,
      support: 200000,
      total: 6500000,
      color: 'bg-green-500',
      hoverColor: 'group-hover:bg-green-600',
      textColor: 'text-green-500',
      height: 'h-[195px]',
      pros: [
        'Alta durabilidad y rendimiento estable',
        'Soporte técnico directo Dell',
        'Buena integración con entornos empresariales'
      ],
      cons: [
        'Precio más alto',
        'Actualizaciones de BIOS y drivers lentas'
      ]
    },
    D: {
      name: 'Proveedor Apple',
      hardware: 7000000, // MacBook Air M3 (8GB RAM, 512GB SSD)
      software: 850000, // Parallels Desktop (~400k) + JetBrains (~450k)
      implementation: 0,
      support: 300000, // AppleCare o técnico autorizado
      total: 8150000,
      color: 'bg-pink-500',
      hoverColor: 'group-hover:bg-pink-700',
      textColor: 'text-pink-500',
      height: 'h-[200px]',
      pros: [
        'Gran rendimiento con chip M3',
        'Excelente batería y pantalla',
        'macOS trae herramientas de desarrollo como Xcode gratis'
      ],
      cons: [
        'Alto costo total',
        'No compatible con algunos entornos Windows sin emulación',
        'RAM no ampliable'
      ]
    }
  };
  

  const vendorsArray = Object.entries(vendorData).map(([key, data]) => ({
    id: key as VendorId,
    ...data
  }));

  const handleVendorSelect = (id: VendorId): void => {
    setSelectedVendor(id);
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-background to-muted/30">
    <div className="container px-4 md:px-6">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8 md:mb-12">
        <Badge className="px-3 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-100">
          Análisis de Mercado
        </Badge>
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Análisis Comparativo de Proveedores
        </h2>
        <p className="max-w-[95%] md:max-w-[85%] text-muted-foreground text-sm md:text-xl/relaxed">
          Evaluación detallada de las opciones disponibles para seleccionar la mejor solución.
        </p>
      </div>
      
      <div className="mx-auto max-w-full md:max-w-[72rem]">
        <Tabs defaultValue="comparison" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="grid w-full max-w-xs md:max-w-md grid-cols-2">
              <TabsTrigger value="comparison">Comparativa</TabsTrigger>
              <TabsTrigger value="selection">Selección Final</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="comparison" className="space-y-6 md:space-y-8">
            {/* Cost Comparison Table Card - Versión móvil optimizada */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                      <TrendingDown className="h-4 w-4 md:h-5 md:w-5 text-indigo-700" />
                      Tabla Comparativa de Costos
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Análisis desglosado de los costos por proveedor
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-white self-start md:self-auto">Comparativa Detallada</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Tabla optimizada para móvil */}
                <div className="overflow-x-auto">
                  <div className="min-w-full rounded-md overflow-hidden">
                    {/* Encabezados de tabla para tabletas y escritorio */}
                    <div className="hidden md:grid grid-cols-7 bg-muted/50 text-left text-sm font-medium p-3">
                      <div className="col-span-1">Proveedor</div>
                      <div className="col-span-1">Hardware</div>
                      <div className="col-span-1">Software</div>
                      <div className="col-span-1">Implementación</div>
                      <div className="col-span-1">Soporte Anual</div>
                      <div className="col-span-1">Total</div>
                      <div className="col-span-1 text-center">Acción</div>
                    </div>
                    
                    {/* Vista de tarjetas para móvil */}
                    <div className="md:divide-y">
                      {vendorsArray.map((vendor) => (
                        <div key={vendor.id}>
                          {/* Vista móvil (card style) */}
                          <div className={`block md:hidden p-4 ${
                            selectedVendor === vendor.id 
                              ? 'bg-indigo-50/50' 
                              : ''
                            }`}>
                            <div className="flex justify-between items-center mb-3">
                              <div className={`font-medium flex items-center gap-2 ${
                                selectedVendor === vendor.id 
                                  ? 'text-indigo-700' 
                                  : ''
                                }`}>
                                <div className={`${
                                  selectedVendor === vendor.id 
                                    ? 'h-4 w-4 ring-2 ring-offset-1 ring-indigo-300' 
                                    : 'h-3 w-3'
                                  } rounded-full ${vendor.color}`}></div>
                                {vendor.name}
                              </div>
                              <Button 
                                variant={selectedVendor === vendor.id ? "default" : "outline"} 
                                size="sm"
                                className={`transition-all ${
                                  selectedVendor === vendor.id 
                                    ? "bg-indigo-600 hover:bg-indigo-700 shadow-md" 
                                    : "hover:border-indigo-300 hover:text-indigo-600"
                                }`}
                                onClick={() => handleVendorSelect(vendor.id)}
                              >
                                {selectedVendor === vendor.id ? (
                                  <span className="flex items-center">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Seleccionado
                                  </span>
                                ) : "Seleccionar"}
                              </Button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex justify-between pr-2">
                                <span className="text-muted-foreground">Hardware:</span>
                                <span>{formatCurrency(vendor.hardware)}</span>
                              </div>
                              <div className="flex justify-between pr-2">
                                <span className="text-muted-foreground">Software:</span>
                                <span>{formatCurrency(vendor.software)}</span>
                              </div>
                              <div className="flex justify-between pr-2">
                                <span className="text-muted-foreground">Implementación:</span>
                                <span>{formatCurrency(vendor.implementation)}</span>
                              </div>
                              <div className="flex justify-between pr-2">
                                <span className="text-muted-foreground">Soporte:</span>
                                <span>{formatCurrency(vendor.support)}</span>
                              </div>
                              <div className="col-span-2 flex justify-between pt-2 mt-2 border-t font-bold">
                                <span>Total:</span>
                                <span className={selectedVendor === vendor.id ? vendor.textColor : ''}>{formatCurrency(vendor.total)}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Vista escritorio/tablet (tabla) */}
                          <div 
                            className={`hidden md:grid grid-cols-7 p-3 text-sm group transition-colors ${
                              selectedVendor === vendor.id 
                                ? 'bg-indigo-50/50' 
                                : 'hover:bg-muted/20'
                            }`}
                          >
                            <div className={`col-span-1 font-medium flex items-center gap-2 transition-all duration-200 ${
                              selectedVendor === vendor.id 
                                ? 'text-indigo-700 scale-105 transform' 
                                : ''
                            }`}>
                              <div className={`${
                                selectedVendor === vendor.id 
                                  ? 'h-4 w-4 ring-2 ring-offset-1 ring-indigo-300' 
                                  : 'h-3 w-3'
                              } rounded-full ${vendor.color} transition-all duration-200`}></div>
                              {vendor.name}
                            </div>
                            <div className="col-span-1">{formatCurrency(vendor.hardware)}</div>
                            <div className="col-span-1">{formatCurrency(vendor.software)}</div>
                            <div className="col-span-1">{formatCurrency(vendor.implementation)}</div>
                            <div className="col-span-1">{formatCurrency(vendor.support)}</div>
                            <div className={`col-span-1 font-bold transition-all duration-200 ${
                              selectedVendor === vendor.id 
                                ? `${vendor.textColor} text-lg` 
                                : ''
                            }`}>
                              {formatCurrency(vendor.total)}
                            </div>
                            <div className="col-span-1 text-center">
                              <Button 
                                variant={selectedVendor === vendor.id ? "default" : "outline"} 
                                size="sm"
                                className={`transition-all duration-200 ${
                                  selectedVendor === vendor.id 
                                    ? "bg-indigo-600 hover:bg-indigo-700 shadow-md" 
                                    : "hover:border-indigo-300 hover:text-indigo-600"
                                }`}
                                onClick={() => handleVendorSelect(vendor.id)}
                              >
                                {selectedVendor === vendor.id ? (
                                  <span className="flex items-center">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Seleccionado
                                  </span>
                                ) : "Seleccionar"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Visual Comparison - Grid responsivo */}
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2">
              {/* Chart Card */}
              <Card className="border shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
                    Gráfico Comparativo
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm">Visualización de costos totales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col">
                    <div className="flex justify-end mb-2 text-xs text-muted-foreground">
                      <div className="w-full text-right  pb-10">
                        Escala de costos (COP)
                      </div>
                    </div>
                    <div className="flex items-end justify-around h-[200px] md:h-[250px] pt-4 md:pt-8 pb-4 px-2 md:px-4">
                      {vendorsArray.map((vendor) => (
                        <TooltipProvider key={vendor.id}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div 
                                className={`group flex flex-col items-center w-16 md:w-20 cursor-pointer transition-all duration-300 ${
                                  selectedVendor === vendor.id ? 'scale-110 transform' : 'hover:scale-105'
                                }`}
                                onClick={() => handleVendorSelect(vendor.id)}
                              >
                                
                                <div className={`w-12 md:w-16 ${vendor.height} relative rounded-t-md transition-all duration-300 ${vendor.color} ${
                                  selectedVendor === vendor.id 
                                    ? 'ring-2 md:ring-4 ring-offset-1 md:ring-offset-2 ring-indigo-400/50 shadow-md shadow-indigo-300/20' 
                                    : vendor.hoverColor
                                }`}>
                                  
                                  {/* Selection indicator */}
                                  {selectedVendor === vendor.id && (
                                    <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2">
                                      <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-indigo-600 bg-white rounded-full" />
                                    </div>
                                  )}
                                </div>
                                <div className="text-[10px] text-muted-foreground mt-2">
                                  {formatCurrency(vendor.total)}
                                </div>
                                <div className="flex flex-col items-center mt-2">
                                  <span className={`text-xs md:text-sm transition-all text-center duration-200 ${
                                    selectedVendor === vendor.id 
                                      ? 'text-indigo-700 font-bold text-sm md:text-base' 
                                      : 'font-medium '
                                  }`}>
                                    Prov. {vendor.id}
                                  </span>
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="p-0 overflow-hidden">
                              <div className="p-3 bg-black">
                                <div className="font-semibold mb-1">{vendor.name}</div>
                                <div className="space-y-1 text-xs">
                                  <div className="flex justify-between gap-6">
                                    <span>Hardware:</span>
                                    <span>{formatCurrency(vendor.hardware)}</span>
                                  </div>
                                  <div className="flex justify-between gap-6">
                                    <span>Software:</span>
                                    <span>{formatCurrency(vendor.software)}</span>
                                  </div>
                                  <div className="flex justify-between gap-6">
                                    <span>Implementación:</span>
                                    <span>{formatCurrency(vendor.implementation)}</span>
                                  </div>
                                  <div className="flex justify-between gap-6">
                                    <span>Soporte:</span>
                                    <span>{formatCurrency(vendor.support)}</span>
                                  </div>
                                  <div className="pt-1 mt-1 border-t flex justify-between gap-6 font-medium">
                                    <span>Total:</span>
                                    <span>{formatCurrency(vendor.total)}</span>
                                  </div>
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-around pb-2 pt-4 border-t gap-2">
                      <div className="flex items-center gap-1 text-xs">
                        <div className="h-2 w-2 bg-green-200 bg-opacity-10"></div>
                        <span>Hardware</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <div className="h-2 w-2 bg-blue-200 bg-opacity-20"></div>
                        <span>Software</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <div className="h-2 w-2 bg-purple-200 bg-opacity-30"></div>
                        <span>Otros</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Pros and Cons Card */}
              <Card className="border shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <Award className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
                    Pros y Contras
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    {vendorData[selectedVendor].name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold flex items-center text-green-600">
                        <ArrowUp className="h-4 w-4 mr-1" />
                        Ventajas
                      </h3>
                      <ul className="space-y-2">
                        {vendorData[selectedVendor].pros.map((pro, index) => (
                          <li key={index} className="flex items-start text-xs md:text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5 shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold flex items-center text-red-600">
                        <ArrowDown className="h-4 w-4 mr-1" />
                        Desventajas
                      </h3>
                      <ul className="space-y-2">
                        {vendorData[selectedVendor].cons.map((con, index) => (
                          <li key={index} className="flex items-start text-xs md:text-sm">
                            <span className="h-4 w-4 mr-2 text-red-500 flex items-center justify-center shrink-0">
                              &#8722;
                            </span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    *Basado en análisis y entrevistas
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 text-xs md:text-sm"
                  >
                    Ver detalles completos
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="selection" className="space-y-6 md:space-y-8">
            {/* Selection Rationale */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center ${vendorData[selectedVendor].color}`}>
                    <Award className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl">Conclusión y Selección</CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      {vendorData[selectedVendor].name} ha sido seleccionado
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 md:pt-6">
                <p className="mb-4 text-sm md:text-base">
                  Tras un análisis exhaustivo de los tres proveedores, hemos seleccionado al{" "}
                  <strong className={vendorData[selectedVendor].textColor}>
                    {vendorData[selectedVendor].name}
                  </strong>{" "}
                  como la opción más adecuada para este proyecto por las siguientes razones:
                </p>
                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-base md:text-lg font-medium flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
                      Criterios de selección clave
                    </h3>
                    <ul className="space-y-2 list-disc pl-5 text-sm">
                      <li>Mejor relación calidad-precio en la solución global</li>
                      <li>Hardware con especificaciones que cumplen todos los requisitos técnicos</li>
                      <li>Licencias de software más flexibles y adaptables a futuras necesidades</li>
                      <li>Soporte técnico con mejor tiempo de respuesta garantizado</li>
                      <li>Experiencia demostrada en proyectos similares en el sector</li>
                    </ul>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-base md:text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
                      Próximos pasos
                    </h3>
                    <ul className="space-y-2 list-disc pl-5 text-sm">
                      <li>Reunión inicial con el proveedor para definir detalles del proyecto</li>
                      <li>Elaboración del cronograma detallado de implementación</li>
                      <li>Firma del contrato y acuerdos de nivel de servicio (SLA)</li>
                      <li>Preparación de la infraestructura necesaria</li>
                      <li>Formación del equipo interno para la transición</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t flex flex-col md:flex-row justify-between py-4 gap-3 items-start md:items-center">
                <span className="text-xs md:text-sm text-muted-foreground">
                  Fecha estimada de inicio: 15/05/2025
                </span>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                  Aprobar selección
                </Button>
              </CardFooter>
            </Card>
            
            {/* Technology Stack */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Code className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
                  Stack Tecnológico Seleccionado
                </CardTitle>
                <CardDescription className="text-xs md:text-sm">Tecnologías y herramientas que compondrán la solución</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-3 md:p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30">
                    <Code className="h-6 w-6 md:h-8 md:w-8 text-indigo-600" />
                    <h3 className="text-base md:text-xl font-bold text-center">Lenguajes</h3>
                    <p className="text-center text-xs md:text-sm text-muted-foreground">JavaScript/TypeScript, HTML5, CSS3</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-3 md:p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30">
                    <Server className="h-6 w-6 md:h-8 md:w-8 text-indigo-600" />
                    <h3 className="text-base md:text-xl font-bold text-center">Base de Datos</h3>
                    <p className="text-center text-xs md:text-sm text-muted-foreground">PostgreSQL, Redis para caché</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-3 md:p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30">
                    <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-indigo-600" />
                    <h3 className="text-base md:text-xl font-bold text-center">Frontend</h3>
                    <p className="text-center text-xs md:text-sm text-muted-foreground">React, Next.js, TailwindCSS</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-3 md:p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/30">
                    <Server className="h-6 w-6 md:h-8 md:w-8 text-indigo-600" />
                    <h3 className="text-base md:text-xl font-bold text-center">Backend</h3>
                    <p className="text-center text-xs md:text-sm text-muted-foreground">Node.js, Python, GraphQL</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t flex justify-center pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800 w-full md:w-auto"
                >
                  Ver documentación técnica
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </section>
  );
};

export default VendorComparisonSection;