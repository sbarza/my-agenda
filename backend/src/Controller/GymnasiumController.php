<?php

namespace App\Controller;

use App\Entity\Gymnasium;
use App\Entity\PersonalTrainer;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_')]
class GymnasiumController extends AbstractController
{
    #[Route('/registerGymnasium', name: 'registerGymnasium', methods: "POST")]
    public function index(ManagerRegistry $doctrine, Request $request, UserPasswordHasherInterface $passwordHasher): Response
    {
        $em = $doctrine->getManager();
        $data = json_decode($request->request->get('data'), true);
        $files = $request->files->get('photos');

        $user = new User();
        $user->setAddress($data['address']);
        $user->setCountry($data['country']);
        $user->setState($data['state']);
        $user->setCity($data['city']);
        $user->setZipCode($data['zipCode']);
        $user->setFirstName($data['name']);

        $plaintextPassword = $data['password'];
        $email = $data['email'];

        $user->setEmail($data['email']);
        $user->setUsername($email);
        $user->setRoles(["ROLE_GYMNASIUM"]);
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );
        $user->setPassword($hashedPassword);

        $personal = new Gymnasium();
        $personal->setNif($data['nif']);
        $personal->setUser($user);

        $em->persist($personal);
        $em->flush();
        return $this->json(['message' => 'Gymnasium Registered Successfully']);
    }
}
