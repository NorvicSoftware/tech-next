<form action="{{ route('import.projects') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="file" name="file">
    <button type="submit">Import Projects</button>
</form>

<form action="{{ route('import.persons') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="file" name="file">
    <button type="submit">Import Persons</button>
</form>
