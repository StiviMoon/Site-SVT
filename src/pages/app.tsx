"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, FileText, BarChart3, CheckCircle, ArrowUp, Home, Linkedin, Github, Mail } from "lucide-react"
import Header from "@/components/Header"
import HeroSection from "@/sections/Hero"
import ContextSection from "@/sections/Contex"
import TechnicalSpecsSection from "@/sections/Ficha"
import VendorComparisonSection from "@/sections/Analisis"
import ModeloConceptual from "@/sections/Tecnico"
import PropuestaTecnica from "@/sections/Propuesta"
import { useState, useEffect } from "react"

export default function HomePage() {
  // Estado para controlar la visibilidad del botón "volver arriba"
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Efecto para detectar el scroll y mostrar/ocultar el botón
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para volver al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header fijo en la parte superior */}
      <Header />

      <main className="flex-1">
        {/* Hero Section - Altura completa en pantalla */}
        <section id="hero" className="w-full min-h-[calc(100vh-4rem)] flex items-center bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <HeroSection />
          </div>
        </section>
      
        {/* Sección de Contexto con espaciado optimizado */}
        <section id="contexto" className="w-full py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <ContextSection />
          </div>
        </section>

        {/* Ficha Técnica con fondo diferenciado y padding consistente */}
        <section id="ficha-tecnica" className="w-full py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <TechnicalSpecsSection />
          </div>
        </section>

        {/* Análisis Comparativo con animación de entrada gradual */}
        <section id="analisis" className="w-full py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <VendorComparisonSection />
          </div>
        </section>

        {/* Modelo Conceptual y Técnico con fondo diferenciado */}
        <section id="modelo" className="w-full py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <ModeloConceptual />
          </div>
        </section>

        {/* Propuesta Técnica - ahora con estructura consistente */}
        <section id="propuesta" className="w-full py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <PropuestaTecnica />
          </div>
        </section>
      
        {/* CTA final antes del footer */}
        <section id="cta" className="w-full py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">¿Listo para comenzar?</h2>
              <p className="text-muted-foreground max-w-[85%] md:max-w-[60%]">
                Contáctanos hoy mismo para discutir cómo podemos implementar esta solución para tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="gap-2" onClick={() => window.print()}>
                  <Download className="h-5 w-5" />
                  Descargar propuesta completa
                </Button>
                

                
              </div>
            </div>
          </div>
        </section>
      </main>
{/* Footer rediseñado y responsivo */}
<footer className="w-full border-t bg-background py-10">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      
      {/* Marca */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold tracking-tight">SVT</h3>
        <p className="text-sm text-muted-foreground">
          Soluciones de vanguardia para empresas en crecimiento.
        </p>
      </div>

      {/* Soluciones */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold uppercase">Soluciones</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sistemas ERP</Link></li>
          <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Digitalización</Link></li>
          <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Consultoría IT</Link></li>
        </ul>
      </div>

      {/* Empresa */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold uppercase">Empresa</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sobre nosotros</Link></li>
          <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Clientes</Link></li>
          <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Casos de éxito</Link></li>
        </ul>
      </div>

      {/* Legal */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold uppercase">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Términos</Link></li>
          <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacidad</Link></li>
          <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</Link></li>
        </ul>
      </div>
    </div>

    {/* Línea inferior */}
    <div className="flex flex-col md:flex-row items-center justify-between border-t pt-6 space-y-4 md:space-y-0">
      <p className="text-xs text-muted-foreground text-center">
        © 2025 SVT. Todos los derechos reservados.
      </p>
      <p className="text-xs text-muted-foreground text-center">
        Desarrollado por <span className="font-medium text-foreground">Johan Steven Rodriguez Lopez</span> — Código: <span className="font-mono">3061140</span>
      </p>
      <div className="flex gap-4">
        <Link
          href="https://www.linkedin.com/in/johan-steven-rodriguez-lopez/"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
        </Link>
        <Link
          href="https://github.com/StiviMoon"
          aria-label="GitHub"
          className="text-muted-foreground hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
        </Link>
        <Link
          href="mailto:johansteven.dev@gmail.com"
          aria-label="Email"
          className="text-muted-foreground hover:text-foreground"
        >
          <Mail size={20} />
        </Link>
      </div>
    </div>
  </div>
</footer>

      {/* Botón flotante para volver arriba - aparece al hacer scroll */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Barra de navegación sticky para móvil */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg z-40">
        <div className="flex justify-around items-center p-3">
          <Link href="#hero" className="flex flex-col items-center text-xs">
            <Home className="h-5 w-5" />
            <span>Inicio</span>
          </Link>
          <Link href="#ficha-tecnica" className="flex flex-col items-center text-xs">
            <FileText className="h-5 w-5" />
            <span>Ficha</span>
          </Link>
          <Link href="#analisis" className="flex flex-col items-center text-xs">
            <BarChart3 className="h-5 w-5" />
            <span>Análisis</span>
          </Link>
          <Link href="#propuesta" className="flex flex-col items-center text-xs">
            <CheckCircle className="h-5 w-5" />
            <span>Propuesta</span>
          </Link>
        </div>
      </div>
    </div>
  )
}