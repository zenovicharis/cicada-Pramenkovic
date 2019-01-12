<?php

require "vendor/autoload.php";

use Pramenkovic\Application;
use Pramenkovic\Controllers\MainController;
use Symfony\Component\HttpFoundation\Request;
// die('heel');    
// function getProtocol()
// {
//     $isSecure = false;
//     if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
//         $isSecure = true;
//     } elseif (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https' || !empty($_SERVER['HTTP_X_FORWARDED_SSL']) && $_SERVER['HTTP_X_FORWARDED_SSL'] == 'on') {
//         $isSecure = true;
//     }
//     return $isSecure ? 'https' : 'http';
// }
// $app = new Application($_SERVER['HOME'], 'main', getProtocol().'://'.$_SERVER['HTTP_HOST'])
$app = new Application();


// $logInController = new LogInController($app['twig'], $app['logInService']);
$mainController = new MainController($app['twig']);

$app->get('/', [ $mainController, 'index']);

$app->get('/projects', [ $mainController, 'projects']);
// $app->post('/log-in', [ $logInController, 'login']);

// $app->get('/log-out', [ $mainController, 'logOut']);

$app->exception(function(Exception $e, Request $request) {
    print_r($e->getMessage());
    throw $e;
});


$app->run();