<?php // practice0041.php
  echo <<<_END 
    <HTML> <HEAD> <TITLE> PRACTICE PHP 0041 </TITLE> </HEAD>
    <BODY> 
      <FORM method='post' action='practice0041.php' enctype='multipart/form-data'>
        File to upload: <input tyupe='file' name='filename' size='`0>
        <input type='submit' value='Upload'>
      </FORM>
  _END;

  if ($_FILES) {
    $name = $_FILES['filename']['name'];
    move_uploaded_file($_FILES['filename']['tmp_name'], $name);
    echo "Uploaeded image '$name'<br><img src='$name'>";
  }
  </FORM>
