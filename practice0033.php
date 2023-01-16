require_once 'login.php'

$connection = new mysqli($un,$db);
if ($connection->connect_error) die ("Fatal Error");

$query = "SELECT * FROM test_inventory";
$result = $connection->query($query);

if (!$result) die ("result - query error");

$rows = $result->num_rows;

for ($j=0; $j<$rows; ++$j) 
{
   $row = 
}
