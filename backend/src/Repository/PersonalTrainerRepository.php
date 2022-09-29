<?php

namespace App\Repository;

use App\Entity\PersonalTrainer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PersonalTrainer>
 *
 * @method PersonalTrainer|null find($id, $lockMode = null, $lockVersion = null)
 * @method PersonalTrainer|null findOneBy(array $criteria, array $orderBy = null)
 * @method PersonalTrainer[]    findAll()
 * @method PersonalTrainer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PersonalTrainerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PersonalTrainer::class);
    }

    public function save(PersonalTrainer $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PersonalTrainer $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PersonalTrainer.php[] Returns an array of PersonalTrainer.php objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PersonalTrainer.php
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
