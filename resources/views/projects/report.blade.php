@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Reporte de Proyectos</h1>

        <table class="table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Nota Final</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($goodProjects as $project)
                    <tr>
                        <td>{{ $project->title }}</td>
                        <td>{{ $project->description }}</td>
                        <td>{{ $project->grade }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
