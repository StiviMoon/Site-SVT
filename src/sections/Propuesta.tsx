
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export default function PropuestaTecnica() {
  return (
    
      <div className="">
        
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Propuesta Técnica y Económica Final
          </h2>
          <p className="max-w-[70%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Detalles finales de la solución, costos y condiciones.
          </p>
        </div>
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-7xl mt-8">
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>Alcance de la Solución</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h4 className="font-bold mb-2">Módulos Incluidos</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gestión de inventario y almacenes</li>
            <li>Gestión de clientes y proveedores</li>
            <li>Reportes y análisis de datos</li>
            <li>Panel de administración y configuración</li>
            <li>Aplicación móvil para consultas rápidas</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Integraciones</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sistemas contables existentes</li>
            <li>Sistemas de Scaner de Productos</li>
            <li>Sistemas de inteligencia Artificial</li>
            
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Entregables</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Software completamente funcional según especificaciones</li>
            <li>Documentación técnica y manuales de usuario</li>
            <li>Capacitación para administradores y usuarios finales</li>
            <li>Garantía de 12 meses sobre el funcionamiento</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>Costos Actualizados y Cronograma</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        <div className="overflow-x-auto">
          <h4 className="font-bold mb-2">Desglose de Costos</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Concepto</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead className="text-right">Costo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Hardware</TableCell>
                <TableCell>Servidores, equipos y dispositivos</TableCell>
                <TableCell className="text-right">$8,000.000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Software</TableCell>
                <TableCell>Licencias y suscripciones</TableCell>
                <TableCell className="text-right">$400,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Desarrollo</TableCell>
                <TableCell>Personalización e implementación</TableCell>
                <TableCell className="text-right">$2,800.500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Capacitación</TableCell>
                <TableCell>Formación de usuarios y administradores</TableCell>
                <TableCell className="text-right">$400.000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Soporte (1er año)</TableCell>
                <TableCell>Mantenimiento y asistencia técnica</TableCell>
                <TableCell className="text-right">$545.000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium ">Total</TableCell>
                <TableCell></TableCell>
                <TableCell className="text-right font-bold">$12,145.000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div>
          <h4 className="font-bold mb-2">Cronograma de Implementación</h4>
          <div className="rounded-lg border p-4">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <h5 className="font-medium">Fase 1: Análisis y Diseño</h5>
                  <p className="text-sm text-muted-foreground">Requisitos detallados y arquitectura</p>
                </div>
                <span className="text-sm">4 semanas</span>
              </div>
              <div className="h-2 w-full bg-muted">
                <div className="h-full w-[100%] bg-primary rounded-full"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <h5 className="font-medium">Fase 2: Desarrollo Base</h5>
                  <p className="text-sm text-muted-foreground">Implementación de módulos principales</p>
                </div>
                <span className="text-sm">8 semanas</span>
              </div>
              <div className="h-2 w-full bg-muted">
                <div className="h-full w-[75%] bg-primary rounded-full"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <h5 className="font-medium">Fase 3: Integraciones</h5>
                  <p className="text-sm text-muted-foreground">Conexión con sistemas existentes</p>
                </div>
                <span className="text-sm">4 semanas</span>
              </div>
              <div className="h-2 w-full bg-muted">
                <div className="h-full w-[50%] bg-primary rounded-full"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <h5 className="font-medium">Fase 4: Pruebas</h5>
                  <p className="text-sm text-muted-foreground">Validación y correcciones</p>
                </div>
                <span className="text-sm">3 semanas</span>
              </div>
              <div className="h-2 w-full bg-muted">
                <div className="h-full w-[25%] bg-primary rounded-full"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <h5 className="font-medium">Fase 5: Implementación</h5>
                  <p className="text-sm text-muted-foreground">Despliegue y capacitación</p>
                </div>
                <span className="text-sm">3 semanas</span>
              </div>
              <div className="h-2 w-full bg-muted">
                <div className="h-full w-[10%] bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>Términos y Condiciones</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-bold mb-2">Forma de Pago</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>30% al inicio del proyecto</li>
              <li>30% al finalizar la fase de desarrollo base</li>
              <li>40% a la entrega final del proyecto</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Garantía y Soporte</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Garantía de 12 meses sobre el funcionamiento del software</li>
              <li>Soporte técnico 8x5 incluido durante el primer año</li>
              <li>Actualizaciones de seguridad sin costo adicional</li>
              <li>Tiempo de respuesta garantizado según severidad del incidente</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Propiedad Intelectual</h4>
          <p className="text-sm">
            El cliente adquiere los derechos de uso perpetuo del software desarrollado. El código fuente será
            entregado al finalizar el proyecto y el cliente tendrá derechos completos sobre el mismo para
            futuras modificaciones o adaptaciones.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Confidencialidad</h4>
          <p className="text-sm">
            Toda la información proporcionada por el cliente será tratada con estricta confidencialidad. Se
            firmará un acuerdo de no divulgación (NDA) antes de iniciar el proyecto para proteger la información
            sensible del cliente.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
  
  
  
</div>
      </div>

  )
}

