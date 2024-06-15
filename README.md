**Modelo de Predicción de Zonas de Riesgo de Accidentes de Tráfico y congestión vehicular en la localidad de Kennedy, con un enfoque espacio - temporal**

Este proyecto se propone como una oportunidad para analizar la movilidad en la localidad de Kennedy, abordando de manera integral la problemática de la congestión 
y accidentalidad vehicular. A través de un enfoque analítico y basado en datos, se busca identificar cuáles son situaciones desfavorables en 
la movilidad de la zona, mediante la aplicación de metodologías predictivas, 
llegar a identificar oportunidades para que las personas puedan antelar vías alternas, evitar congestión vehicular, y/o conocer zonas con mayor accidentalidad.

Proyecto que consta de una arquitectura de microservicios la cual se basa en un api echa en Flask la cual retornara 
las coordenadas en formato json al front end para ser renderizadas en un mapa de Google Maps.

Se debe tener en ceunta que el roceso se llevo a cabo conconexión a drive, donde se leen archivos y donde se cargar y se vuelven a leer segun el proceso, lo archivos van anexos en formato excel ya que asi se estabelcen en el drive. Por ende para poder ejecutar el proyecto, se debe establecer inicialmente la ruta del drive con el archivo inicial "historico_siniestros_kennedy_zonas.xlsx"
