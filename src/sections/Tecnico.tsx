import React from 'react';
import { Code, Database, Layers, GitBranch, Server, Settings, Users, Zap, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ModeloConceptualSoftware = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="px-3 py-1 border-blue-200 bg-blue-50 text-blue-700 mb-4">
            Modelo Conceptual
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Arquitectura del Sistema</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Representación técnica de los componentes, relaciones y estructura del sistema de software propuesto.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Diagrama de arquitectura */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <Layers className="mr-2 h-5 w-5 text-blue-600" />
              Diagrama UML de Clases 
            </h2>
            
            <div className="relative aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden mb-4">
              <Image
                src="/6.png"
                alt="Diagrama de arquitectura del sistema"
                fill
                className="object-contain rounded-lg"
              />
            </div>


            
            <div className="text-sm text-gray-500 mb-4">
              Diagrama UML de clases principales del sistema de inventarios.
            </div>
            
            <div className="flex justify-end">
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                UML <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Componentes principales del sistema */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Componentes Principales</h2>
              
              <div className="space-y-4">
                <div className="flex items-start p-3 rounded-lg bg-blue-50">
                  <Server className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-blue-800">Backend API</h3>
                    <p className="text-sm text-gray-600">Servicios RESTful desarrollados en Node.js con Express, gestionando la lógica de negocio y acceso a datos.</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg bg-purple-50">
                  <Code className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-purple-800">Frontend</h3>
                    <p className="text-sm text-gray-600">Interfaz de usuario desarrollada con React y Material UI, implementando arquitectura basada en componentes.</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg bg-green-50">
                  <Database className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-green-800">Base de Datos</h3>
                    <p className="text-sm text-gray-600">PostgreSQL para almacenamiento relacional con MongoDB para datos no estructurados con alta escalabilidad.</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg bg-orange-50">
                  <Settings className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-orange-800">Servicios Auxiliares</h3>
                    <p className="text-sm text-gray-600">Microservicios independientes para procesamiento asíncrono, notificaciones y tareas programadas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Especificaciones técnicas */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Especificaciones Técnicas</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center mb-2">
                    <GitBranch className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">Control de Versiones</span>
                  </div>
                  <p className="text-xs text-gray-600">Git + GitHub con flujo Gitflow</p>
                </div>
                
                <div className="p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Zap className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">Rendimiento</span>
                  </div>
                  <p className="text-xs text-gray-600">Optimizado para +1000 usuarios concurrentes</p>
                </div>
                
                <div className="p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">Autenticación</span>
                  </div>
                  <p className="text-xs text-gray-600">OAuth 2.0 + JWT con roles jerárquicos</p>
                </div>
                
                <div className="p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Server className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">Infraestructura</span>
                  </div>
                  <p className="text-xs text-gray-600">Docker + Kubernetes en AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Flujo de datos y procesos */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Casos de Uso</h2>
          <div className="relative aspect-video bg-gray-50 rounded-lg overflow-hidden mb-4 flex">
            <div className="relative w-1/2 h-full">
              <Image
                src="/11.png"
                alt="Diagrama de flujo de datos del sistema 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-1/2 h-full">
              <Image
                src="/12.png"
                alt="Diagrama de flujo de datos del sistema 2"
                fill
                className="object-contain"
              />
            </div>
          </div>


          
          <div className="text-sm text-gray-600 mb-4">
            El diagrama ilustra el flujo de información entre los diferentes componentes del sistema, 
            destacando la integración entre módulos y el procesamiento de datos.
          </div>
          
          <div className="flex justify-center mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
             Diagramas de caso de uso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModeloConceptualSoftware;