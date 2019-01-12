<?php

namespace Pramenkovic\Controllers;

use Pramenkovic\Application;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class MainController
{
    /** @var \Twig_Environment $twig */
    private $twig;

    public function __construct($twig)
    {
        $this->twig = $twig;
    }

    public function index(){
        return $this->twig->render('index.twig');
    }

    public function projects(){
        return $this->twig->render('projects.twig');
    }
}