<?php

namespace App\Controller;

use stdClass;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ApplicationController extends AbstractController
{
    /**
     * @Route("/", name="application")
     */
    public function index()
    {
        $variablePourJS = "bonjour je suis une variable envoyée de la vue au javascript Webpack !";

        $objet = new stdClass();
        $objet->attributUn = "test";
        dump($objet);

        return $this->render('application/index.html.twig', [
            'variablePourJs' => $variablePourJS,
            'objetPourJs' => $objet,
            'controller_name' => 'ApplicationController',
        ]);
    }
}
