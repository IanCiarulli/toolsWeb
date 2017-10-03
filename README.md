# toolsWeb

//cuando se hace click fuera del cartel (sin preguntas) se cierra


<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Plataforma Desarrollo Web</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/css.css">

    <!-- Fuentes -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Revalia" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <!-- Fuentes -->
</head>

<body>
    <script src="jquery/jquery.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="js/js.js"></script>
    <header>
        <nav class="navbar navbar-inverse" role="navigation">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><div class="titulo_blanco"><h1>Plataforma</h1></div></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                <!-- Solo para usuarios previamente Logeados  -->
                   <!--  <ul class="nav navbar-nav">
                        <li><a href="#">Articulo 1</a></li>
                        <li><a href="#">Articulo 2</a></li>
                    </ul> -->
                    <!-- Solo para usuarios previamente Logeados  -->
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active" ><a href="#" class="login"><span class="glyphicon glyphicon-log-in"></span> Inicio Sesion</a></li>
                        <li><a class="signup" id="signup" href="#"><span class="glyphicon glyphicon-user"></span> Registro</a></li>
                        <!-- <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Acciones <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>  DROPDOWN  -->
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
        </nav>
    </header>

    <script>

         $("#signup").click(function(e){
            e.preventDefault();
            $("#advertencia_home").fadeOut("fast");
            $("#footer_id").fadeOut("Fast");
            $("#panel_login").fadeOut("fast", function(){
                $("#modal_registro").modal("show");
            });
        });

        $(document).on('hidden.bs.modal', '#modal_registro', function (event) {
            $("#panel_login").fadeIn('fast');
            $("#advertencia_home").fadeIn("fast");
            $("#footer_id").fadeIn("Fast");
        });


    </script>
    

    <div class="modal fade" id="modal_registro">
	<div class="modal-dialog">
		<div class="modal-content modal_registro_style">
			<div class="modal-header modal_registro_header">
				
				<h4 class="modal-title">Registro de usuario</h4>
			</div>

<div class="modal-body">
				
		
			<form action="" method="POST" role="form">
				
			<div class="row">

				<div class="col-sm-12">
					<div class="form-group">
					<label for="">Usuario</label>
                <input type="text" class="form-control" id="" placeholder="Usuario" required="required">
                <br>
                <label for="">Contraseña</label>
                <input type="password" class="form-control" id="" placeholder="Contraseña" required="required">
                <br>
                <label for="">Verifique su contraseña</label>
                <input type="password" class="form-control" id="" placeholder="Contraseña" required="required">
                <br>
				<label for="">Email</label>
                <input type="email" class="form-control" id="" placeholder="Email@ejemplo" required="required">
                <br>
				</div>
				</div>
			</div>
				
					</div>	
			<div class="modal-footer modal_registro_footer">
				<button type="submit" class="btn btn-primary btn_registro_modal" data-dismiss="modal">Submit</button>
			</div>
		</div>

		</form>
	</div>
</div>


    <br>
    <div class="container-fluid" id="mensaje_sesion">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8"><p class="text-center" id="advertencia_home"><i class="fa fa-info" aria-hidden="true"></i>Recuerda que debes iniciar sesion en el sitio para poder acceder a su contenido</p></div>
            <div class="col-sm-2"></div>
        </div>
    </div>
    <div class="login_menu">
    <div class="container" id="panel_login">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 col-xs-2"></div>
                <form class="form-horizontal" action="" method="GET" role="form">
                    <div class="col-sm-6 col-xs-8">
                        <legend>
                            <h3 class="text-center">Inicio Sesion</h3></legend>
                        <div class="form-group">
                            <label for="">Usuario</label>
                            <input type="text" class="form-control" id="" placeholder="Asd123321" required="required">
                            <br>
                            <label for="">Contraseña</label>
                            <input type="password" class="form-control" id="" placeholder="Asd123123" required="required">
                            <br>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox"><b>No cerrar sesión</b>
                                </label>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-success" style="float: right;">Aceptar</button>
                        </div>
                </form>
                <div class="col-sm-3 col-xs-2"></div>
                </div>
            </div>
        </div>
        </div>
            <br><br>


<div class="center_all">
        <div class="container-fluid">

                <div class="row bandeja_titulo"><span class="bandeja_titulo_texto">Lorem ipsum dolor</span></div>
                

            <div class="row bandeja_menu">
                <div class="col-sm-12">
                    <div class="col-sm-4">
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            <span class="bandeja_heading_style">Lorem ipsum dolor.</span>
                        </div>
                        <div class="panel-body">
                            <span class="bandeja_text_style">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste totam dignissimos adipisci dolorem, quos minus fugit. Cumque tempore voluptas, aperiam harum, iusto vero, dignissimos ex natus facilis eos aliquam nostrum.</span>
                        </div>
                    </div></div>
                    <div class="col-sm-4"><div class="panel panel-default">
                        <div class="panel-heading">
                            <span class="bandeja_heading_style">Lorem ipsum dolor.</span>
                        </div>
                        <div class="panel-body">
                            <span class="bandeja_text_style">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda explicabo exercitationem itaque error culpa nisi placeat magnam. Labore repellat nam non ducimus a maxime, pariatur eum delectus, perspiciatis provident explicabo!</span>
                        </div>
                    </div></div>
                    <div class="col-sm-4"><div class="panel panel-default">
                        <div class="panel-heading">
                            <span class="bandeja_heading_style">Lorem ipsum dolor.</span>
                        </div>
                        <div class="panel-body">
                            <span class="bandeja_text_style">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, doloremque qui et temporibus similique, omnis commodi fugiat, accusamus ut iste ab! Numquam hic nam minus deserunt laborum quae magni. Iste!</span>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>

</div>


<footer class="footer-basic-centered" id="footer_id">

    <p class="footer-company-motto">Lorem ipsum dolor sit amet.</p>

    <p class="footer-links">
                <a href="#">Home</a>
                ·
                <a href="#">Blog</a>
                ·
                <a href="#">Pricing</a>
                ·
                <a href="#">About</a>
                ·
                <a href="#">Faq</a>
                ·
                <a href="#">Contact</a>
            </p>


      <p class="footer-company-name">Company Name &copy; 2015</p>

</footer>

<div class="container" style=" height: 150px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi inventore iste nesciunt modi non culpa voluptate explicabo, ipsum dolorem suscipit natus quidem ex vel eum asperiores ipsam facilis recusandae. Ut aut quam officia vero nobis cupiditate. Atque tempore cumque eaque eveniet inventore vero maiores ratione error cum, veritatis dolores id.</div>


</body>

</html>




  html,
  body {
      padding: 0px;
      margin: 0px;
      background-image: url(../img/background.jpg);
      background-repeat: no-repeat;
      display: relative;
    }

  legend,
  h3 {
      color: white;
      font-size: 26px;
  }

  .navbar,
  .navbar-inverse {
      border-radius: 0px;
  }

  .navbar,
  .navbar-inverse,
  a {
      font-family: 'Orbitron', sans-serif;
  }

  .navbar-inverse,
  .navbar-inverse,
  .navbar-form {
      background-color: rgba(0, 0, 0, 0.4);
      border-width: 0px;
  }

  .titulo_blanco{
    color: white;
  }
.titulo_blanco, h1{
    margin: 0px;
    font-size: 20px;
}

  .login_menu .container{
      background-color: rgba(0, 0, 0, 0);
      padding-top: 28px;
      margin-bottom: 0px;
  }

  .form-horizontarl,
  .col-sm-6,
  .form-group {
      font-size: 18px;
      color: white;
      font-family: 'Orbitron', sans-serif;
  }

  .login {
      color: rgb(33, 174, 239) !important;
      font-size: 16px;
  }

  .signup {
      color: rgb(25, 214, 19) !important;
      font-size: 16px;
  }

  .container-fluid,
  .row,
  .col-sm-8,
  p {
      color: white !important;
      font-size: 18px;
      font-family: 'Orbitron', sans-serif;

  }

  p,
  .text-center {
      margin-bottom: 0px !important;
  }

  .fa,
  .fa-info {
      margin-right: 10px !important;
      font-size: 21px;
      color: rgb(18, 199, 209);
  }

  .form-group, .btn{
	margin-right: 35px;
  }

  .navbar-inverse .navbar-nav>.active>a{
    background-color: white !important;
    opacity: 0.750;
  }

  .modal-backdrop
{
  background-color: rgba(132, 171, 115, 0.3);
}

.modal_registro_header{
border-bottom:none;
}
.modal label{
  color: black;
  font-weight: normal;
}

.modal-header .modal_registro_header, h4{
  text-align: center;
  font-family: 'Orbitron', sans-serif; 
  font-size: 26px;
  font-weight: 700;
}

.modal_registro_footer{
  border-top: none;
}

.modal-body .row .col-sm-12 .form-group{
	margin-right: 0px;
}

.modal_registro_style{
	background-color: rgba(35, 194, 195, 0.4);
	margin-top: 85px;
	z-index: 1050;
}

.btn_registro_modal{
	background-color: rgba(255, 255, 255, 0.87);
	border:none;
	color: black;
  font-family: 'Orbitron', sans-serif;

}

.btn_registro_modal:hover{
	background-color: rgba(255, 255, 255, 0.87);
  color: black;
}


.btn-primary:active{
    background-color: rgba(255, 255, 255, 0.87)!important;
     color: black!important;
}

.bandeja_menu{
  padding-top: 15px;
  background-color: rgba(208, 216, 215, 0.5);
  font-family: 'Orbitron', sans-serif;
}

.bandeja_text_style{
color:black!important;
font-size: 14px!important;
}

.bandeja_heading_style{

   font-size: 22px;

}

.center_all{
  text-align: center!important;
}

.bandeja_titulo{
  background-color: rgba(255,255,255,0.1);
  height: 50px;
}
.bandeja_titulo_texto{
  font-size: 32px;
text-shadow:6px 3px 15px #cbd1b3;
}

#footer_id{
  display: absolute!important;
  bottom: 0;
}

.footer-basic-centered{
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  font: normal 18px sans-serif;
 

  padding: 45px;
  margin-top: 80px;
}

.footer-basic-centered .footer-company-motto{
  color:  #8d9093;
  font-size: 24px;
  margin: 0;
}

.footer-basic-centered .footer-company-name{
  color:  #8f9296;
  font-size: 14px;
  margin: 0;
}

.footer-basic-centered .footer-links{
  list-style: none;
  font-weight: bold;
  color:  #ffffff;
  padding: 35px 0 23px;
  margin: 0;
}

.footer-basic-centered .footer-links a{
  display:inline-block;
  text-decoration: none;
  color: inherit;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 600px) {

  .footer-basic-centered{
    padding: 35px;
  }

  .footer-basic-centered .footer-company-motto{
    font-size: 18px;
  }

  .footer-basic-centered .footer-company-name{
    font-size: 12px;
  }

  .footer-basic-centered .footer-links{
    font-size: 14px;
    padding: 25px 0 20px;
  }

  .footer-basic-centered .footer-links a{
    line-height: 1.8;
  }
}

/* 

.navbar-header .navbar-brand:hover{
	
}
*/ 


  /*
  font-family: 'Orbitron', sans-serif; 
  font-family: 'Revalia', cursive;
  font-family: 'Montserrat', sans-serif;

  */
