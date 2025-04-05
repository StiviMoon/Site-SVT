import React from 'react';
import Image from 'next/image';
import { FileText, Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1fr_450px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1">
                <CheckCircle className="mr-1 h-4 w-4" />
                Solución para PYMES
              </Badge>
              
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-700 bg-clip-text text-transparent">
                Propuesta Técnica y Económica
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Solución de Software Personalizada
              </h2>
              
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                SVT Ofrece una solución integral de software diseñada para optimizar los procesos de inventario y
                mejorar la eficiencia operativa de su organización.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://github.com/StiviMoon" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <FileText className="mr-2 h-5 w-5" />
                    Ver Propuesta Completa
                  </Button>
                </a>
                <Button
                  onClick={() => window.print()}
                  variant="outline"
                  size="lg"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar PDF
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                  Equipo Certificado
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                  Soporte 24/7
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                  Garantía 100%
                </div>
              </div>
            </div>
          </div>

          
          {/* Image Column - Completely clean implementation */}
          <div className="w-full">
            <div className="rounded-2xl  shadow-lg overflow-hidden bg-white dark:bg-gray-800">
              <div className="relative">
                
                <Image
                  src="/2.png"
                  alt="Hero Image"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0"></div>
                
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-sm font-medium">Desarrollado por</div>
                  <div className="text-xl font-bold">SVT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;