import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from 'react';
import { useForm } from "@inertiajs/react";

const Create = ({ auth, persons, careers }) => {
  const { data, setData, post, errors, reset } = useForm({
    title_project: '',
    note: '',
    year: '',
    manager: '',
    person_id: '',
    career_id: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('projects.store'));
  };

  return (
    <AuthenticatedLayout user={auth} Header="Proyectos">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-white">Crear Proyecto</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-white">Título</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
            {errors.title && (
              <span className="text-red-500">{errors.title}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-white">Calificación</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              value={data.qualification}
              onChange={(e) => setData('qualification', e.target.value)}
            />
            {errors.qualification && (
              <span className="text-red-500">{errors.qualification}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-white">Año</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={data.year}
              onChange={(e) => setData('year', e.target.value)}
            />
            {errors.year && (
              <span className="text-red-500">{errors.year}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-white">Tutor</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={data.manager}
              onChange={(e) => setData('manager', e.target.value)}
            />
            {errors.manager && (
              <span className="text-red-500">{errors.manager}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-white">Autor</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={data.person_id}
              onChange={(e) => setData('person_id', e.target.value)}
            >
              <option value="">Select Person</option>
              {persons.map((person) => (
                <option key={person.id} value={person.id}>{`${person.first_name} ${person.last_name}`}</option>
              ))}
            </select>
            {errors.person_id && (
              <span className="text-red-500">{errors.person_id}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-white">Career:</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={data.career_id}
              onChange={(e) => setData('career_id', e.target.value)}
            >
              <option value="">Select Career</option>
              {careers.map((career) => (
                <option key={career.id} value={career.id}>{career.name}</option>
              ))}
            </select>
            {errors.career_id && (
              <span className="text-red-500">{errors.career_id}</span>
            )}
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create</button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default Create;