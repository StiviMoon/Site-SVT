import React from 'react';
import Image from 'next/image';
import { 
  ClipboardList, 
  LineChart, 
  Target, 
  ChevronRight,
  BoxSelect,
  BarChart3,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ContextSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center space-y-4 text-center">
          <Badge variant="outline" className="px-3 py-1 mb-4 text-sm font-medium border-blue-200 text-blue-700 bg-blue-50">
            Fase 1: Análisis y Comprensión
          </Badge>
          
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 pb-1">
            Contexto del Proyecto
          </h2>
          
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed">
            Entendiendo las necesidades y objetivos del cliente para ofrecer la mejor solución.
          </p>
        </div>
        
        {/* Main content with tabs */}
        <div className="mx-auto max-w-[72rem] mt-12">
          <Tabs defaultValue="cards" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="cards">Visión General</TabsTrigger>
                <TabsTrigger value="details">Detalles Específicos</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="cards" className="space-y-8">
              {/* Cards Layout */}
              <div className="grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
                <Card className="overflow-hidden border-muted shadow-lg hover:shadow-xl transition-all duration-200 group">
                  
                  <div className="h-2 bg-red-500"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <ClipboardList className="mr-2 h-5 w-5 text-red-500" />
                        Descripción del Problema
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">Crítico</Badge>
                    </div>
                    <CardDescription>Situación actual</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      El cliente enfrenta dificultades en la gestión de inventario y seguimiento de productos, lo que resulta
                      en pérdidas de eficiencia y precisión en sus operaciones diarias. Los sistemas actuales están
                      fragmentados y no permiten una visión unificada del negocio.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2 border-t flex justify-between items-center">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <BoxSelect className="h-3 w-3 mr-1" />
                      Sistemas fragmentados
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Más <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="overflow-hidden border-muted shadow-lg hover:shadow-xl transition-all duration-200 group">
                 
                  <div className="h-2 bg-amber-500"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <LineChart className="mr-2 h-5 w-5 text-amber-500" />
                        Justificación del Proyecto
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">Estratégico</Badge>
                    </div>
                    <CardDescription>Valor de implementación</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      La implementación de un sistema integrado permitirá centralizar la información, automatizar procesos
                      manuales y proporcionar análisis en tiempo real, lo que se traducirá en una mejora significativa en
                      la toma de decisiones y eficiencia operativa.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2 border-t flex justify-between items-center">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <BarChart3 className="h-3 w-3 mr-1" />
                      ROI esperado: Alto
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Más <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="overflow-hidden border-muted shadow-lg hover:shadow-xl transition-all duration-200 group">
                  
                  <div className="h-2 bg-green-500"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Target className="mr-2 h-5 w-5 text-green-500" />
                        Objetivo General
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">Prioritario</Badge>
                    </div>
                    <CardDescription>Meta a alcanzar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Desarrollar e implementar una solución de software empresarial que integre los procesos de
                      inventario y análisis de datos, permitiendo una gestión eficiente y proporcionando
                      información valiosa para la toma de decisiones estratégicas.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2 border-t flex justify-between items-center">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      Plazo: 6 meses
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Más <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="mt-16 relative">
                {/* Círculo decorativo */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-50 rounded-full opacity-20 blur-2xl"></div>

                {/* Contenedor principal */}
                <div className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-green-600 p-8">
                  {/* Capa de gradiente oscura */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                  {/* Contenido */}
                  <div className="relative z-10 text-white space-y-3">
                    <div className="text-sm uppercase font-bold tracking-widest text-white">Análisis sectorial</div>
                    <div className="text-2xl font-semibold max-w-md">
                      Implementación de tecnologías para optimización de procesos empresariales modernos
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-100">
                      <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-2v13M9 6L3 4v13l6 2m0-13v13" />
                      </svg>
                      Tecnología e Innovación
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 relative">
                
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/5.png"
                    alt="Context Image"
                    width={6000}
                    height={400}
                    className="w-full   h-auto object-cover"

                  />
                
              </div>
              </div>

            </TabsContent>
            
            <TabsContent value="details">
              <Card className="border shadow-lg">
                <CardHeader>
                  <CardTitle>Detalles Específicos del Proyecto</CardTitle>
                  <CardDescription>Información detallada sobre la situación actual y la solución propuesta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Análisis de la situación actual</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Sistemas de gestión fragmentados que no se comunican entre sí</li>
                      <li>Procesos manuales que consumen tiempo y son propensos a errores</li>
                      <li>Falta de visibilidad en tiempo real de inventario y ventas</li>
                      <li>Dificultad para obtener informes consolidados para la toma de decisiones</li>
                      <li>Alto costo operativo debido a ineficiencias en los procesos</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Beneficios esperados</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Centralización de datos en una única plataforma integrada</li>
                      <li>Automatización de procesos repetitivos para reducir errores</li>
                      <li>Reportes y análisis en tiempo real para mejor toma de decisiones</li>
                      <li>Reducción de costos operativos en aproximadamente un 30%</li>
                      <li>Mejora en la satisfacción del cliente final</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Objetivos específicos</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Implementar un sistema integral de gestión de inventario</li>
                      <li>Desarrollar un módulo de seguimiento de stock en tiempo real</li>
                      <li>Crear un dashboard analítico para KPIs principales</li>
                      <li>Integrar con sistemas existentes para migración gradual</li>
                      <li>Capacitar al personal en el uso del nuevo sistema</li>
                      
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t flex justify-end">
                  <Button  size="sm" className="mr-2">Descargar PDF</Button>
                  
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        
        
       
      </div>
    </section>
  );
};

export default ContextSection;