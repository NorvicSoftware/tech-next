import React from 'react'
import UserLayout from '@/Layouts/UserLayout'

export default function Project() {
  return (
    <UserLayout>
<head>
<title>Listado de Carreras</title>
</head>
<body>

<h1 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">Listado de Carreras</h1>

<ul>
  <li ><label  for="career1" class="career-label">Ingeniería de Sistemas</label></li>
  <li><label for="career2" class="career-label">Administración de Empresas</label></li>
  <li><label for="career3" class="career-label">Diseño Gráfico</label></li>
  <li><label for="career4" class="career-label">Turismo y Hotelería</label></li>
</ul>

</body>

    </UserLayout>
  );
}