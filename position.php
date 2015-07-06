<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

function my_autoload($class){
    include_once $class.'.php';
}
spl_autoload_register('my_autoload');

$position1 = PositionData::getInstance();
if (isset($_POST['attr']) && !empty($_POST['attr'])){
     //добавить $u_id="", $accuracy=""
    $position1->addData($_POST['attr'][0], $_POST['attr'][1]);
}
var_dump($position1->listData());
