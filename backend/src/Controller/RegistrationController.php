<?php

namespace App\Controller;

use App\Entity\PersonalTrainer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\User;

#[Route('/api', name: 'api_')]
class RegistrationController extends AbstractController
{
    #[Route('/registerPersonalTrainer', name: 'registerPersonalTrainer', methods: "POST")]
    public function index(ManagerRegistry $doctrine, Request $request, UserPasswordHasherInterface $passwordHasher): Response
    {
        $em = $doctrine->getManager();
        $data = $request->toArray();

        $user = new User();
        $user->setAddress($data['address']);
        $user->setCountry($data['country']);
        $user->setState($data['state']);
        $user->setCity($data['city']);
        $user->setZipCode($data['zipCode']);
        $user->setFirstName($data['firstName']);
        $user->setLastName($data['lastName']);

        $plaintextPassword = $data['password'];
        $email = $data['email'];

        $user->setEmail($data['email']);
        $user->setUsername($email);
        $user->setRoles(["ROLE_PERSONAL"]);
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );
        $user->setPassword($hashedPassword);

        $personal = new PersonalTrainer();
        $personal->setNif($data['nif']);
        $personal->setUser($user);

        $em->persist($personal);
        $em->flush();
        return $this->json(['message' => 'Registered Successfully']);
    }
}