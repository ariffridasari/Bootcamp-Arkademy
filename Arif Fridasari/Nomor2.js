<form method="post" action="aksi.php" onsubmit="return validasi_input(this)">
<p>Username: <input name="username" type="text"></p>
<p><input name="" type="submit" value="Submit"></p>
</form>

<script type="text/javascript">
function validasi_input(form){
   pola_username=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[_])(?=.*\d)[A-Za-z_\d]{8,}$/
 
   if (!pola_username.test(form.username.value)){
      alert ('Username Salah!');
      form.username.focus();
      return false;
   }
return (true);
}
</script>