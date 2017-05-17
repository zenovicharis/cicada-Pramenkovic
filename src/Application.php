<?php

namespace Pramenkovic;

// use ShopwooDashboard\Services\LogInService;
use Twig_Environment;
use Twig_Loader_Filesystem;
use Twig_SimpleFunction;


class Application extends \Cicada\Application
{
    public function __construct()
    {

        parent::__construct();
        // session_start();
        // $this->setupEnvironment($domain);
        // $this->configure($configPath, $environment);
        // $this->setupServices();
        $this->setupTwig();
        // $this->configureDatabase($environment);
        // $this->setupSessionContainer();

//        $this->registerRaven();
    }

    private function setupSessionContainer(){
        $this['user_id'] = null;
    }

    private function setupServices() {
        $this['logInService'] = function () {
            return new LogInService();
        };
    }

    protected function configure($configPath, $environment) {
        $this['config'] = function () use ($configPath, $environment) {
            return new Configuration($configPath, $environment);
        };
    }

    private function setupEnvironment($domain) {
        $this['domain'] = $domain;
    }

    protected function configureDatabase($environment)
    {
        $dbConfig = $this['config']->getDbConfig($environment);
        \ActiveRecord\Config::initialize(function (\ActiveRecord\Config $cfg) use ($dbConfig) {
            $cfg->set_model_directory('src/Models');
            $cfg->set_connections([
                'main' => sprintf('mysql://%s:%s@%s/%s',
                    $dbConfig['user'], $dbConfig['password'], $dbConfig['host'], $dbConfig['name']
                )
            ]);
            $cfg->set_default_connection('main');
        });
    }
    private function setupTwig() {
        $this['twig'] = function() {
            $loader = new \Twig_Loader_Filesystem('front-end/templates');
            $twig = new  \Twig_Environment($loader, array(
//                'cache' => 'cache',
            ));

            $pathFunction = function ($name, $params = []) {
                /** @var Route $route */
                $route = $this['router']->getRoute($name);
                return $route->getRealPath($params);
            };
            $twig->addFunction(new Twig_SimpleFunction('path', $pathFunction));

            return $twig;
        };
    }

    private function registerRaven() {
        $client = new Raven_Client('https://817637e1ebf740c3b33a22c32fdfda0f:1e154f585ce94634b04a1ac6099b6635@sentry.io/152299');
        $this['raven'] = function() use ($client) {
            return $client;
        };
        $error_handler = new Raven_ErrorHandler($client);
        $error_handler->registerExceptionHandler();
        $error_handler->registerErrorHandler();
        $error_handler->registerShutdownFunction();
        $this['raven']->install();
    }
}