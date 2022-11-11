export const indexHtml = (projeto: string) => {
  const rawProject = projeto.split('-')
  let project: string
  if (rawProject.length >= 2) {
    project = rawProject.toString().replaceAll(',', ' ')
  }
  project = projeto

  return `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${project}</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
  `
}