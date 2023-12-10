# Treidi

- Alfaro Dominguez Patricio
- Perez Osorio Luis Eduardo

[Demostración del proyecto](https://drive.google.com/file/d/1vyPUgDNFS7LU842-MRSEzlpLvYfABhOB/view)

---

## Requisitos

 - npm
 - LocalStack
 - Docker
 - Docker Compose
 - AWS CLI (pip) ademas del wrapper [AWS CLI local](https://docs.localstack.cloud/user-guide/integrations/aws-cli/#localstack-aws-cli-awslocal)

---

## Instrucciones

- Posicionarse en la carpeta del proyecto
- Crear el contenedor de localstack
<code>docker-compose up -d</code>

- Inicializar el contenido de labase de datos DynamoDB
<code>./initAWS.bat</code>

- Instalar dependencias:
<code>npm install</code>

- Iniciar proyecto:
 <code>npm run dev</code>
