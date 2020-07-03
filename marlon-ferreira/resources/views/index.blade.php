<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css">
    <title>Desafio Desenvolvedor - City Connect</title>

    <style>
        td button { all: initial; }
        td button:focus { all: initial; }
    </style>
  </head>
  <body>
    <div class="container-fluid mt-5">
        <div class="container">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h5 class="m-0">Lista de Usuários</h5>
                </div>
                <div class="card-body">
                    <button class="btn btn-success d-block ml-auto mb-3" data-toggle="modal" data-target="#new-user">Cadastrar</button>
                    <table id="users-table" class="table table-striped table-bordered" style="width:100%">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Data de Nascimento</th>
                                <th>Sexo</th>
                                <th>Data de Cadastro</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($users as $user)
                                <tr>
                                    <td>{{ $user->id }}</td>
                                    <td>{{ $user->name }}</td>
                                    <td>{{ $user->getBirthday() }}</td>
                                    <td>{{ $user->genre }}</td>
                                    <td>{{ $user->getCreatedAt() }}</td>
                                    <td>
                                        <button class="edit-button" data-url="{{ url("/user/$user->id") }}">
                                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-pencil-square text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                                        </button>
                                        <button class="delete-button" data-url="{{ url("/user/delete/$user->id") }}">
                                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                                        </button>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="new-user" tabindex="-1" role="dialog" aria-labelledby="new-user-label" aria-hidden="false">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">@if(isset($user)) Cadastrar @else Cadastrar @endif Usuário</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="form-user" method="post" action="{{ url('user/create') }}">
                        @csrf
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input id="name" name="name" class="form-control" type="text" required>
                        </div>
                        <div class="form-group">
                            <label for="birthday">Data de Nascimento</label>
                            <input id="birthday" name="birthday" class="form-control" type="date" required>
                        </div>
                        <div class="form-group">
                            <label for="genre">Sexo</label>
                            <select id="genre" name="genre" class="form-control" required>
                                <option></option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Não se aplica">Não se aplica</option>
                            </select>
                        </div>

                        @if(isset($errors) && count($errors)>0)
                            <div class="text-center mx-4 p-2 alert-danger">
                                @foreach($errors->all() as $error)
                                    {{ $error }}<br/>
                                @endforeach
                            </div>
                        @endif

                        <div class="form-group d-flex justify-content-end">
                            <button type="button" class="btn btn-danger mr-2" data-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-success">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"></script>
    <script>
        $(document).ready( function () {
            $('#users-table').DataTable();
        });

        $('.edit-button').on('click', function(e) {
            e.preventDefault();

            $.ajax({
                url: $(this).data('url'),
                type: 'GET',
            })
            .done(function (data) {
                if(data) {
                    $('#form-user').attr('action', `{{ url('user/edit/${data.id}') }}` );
                    $('#name').val(data.name);
                    $('#birthday').val(data.birthday);
                    $('#genre').val(data.genre);
                    $('#new-user').modal('show');
                }
            })
            .fail(function () {
                console.log('Failed');
            });
        });

        $('.delete-button').on('click', function(e) {
            e.preventDefault();

            $.ajax({ url: $(this).data('url'), type: 'GET' }).done(function() { location.reload() });
        });
    </script>
  </body>
</html>
