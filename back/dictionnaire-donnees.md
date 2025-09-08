# Dictionnaire de données

1. Table **users**
*Description : Gère les utilisateurs de l’application (même si MVP = mono-utilisateur, utile pour scalabilité).*

| Colonne          | Type         | Description                       | Contraintes      |
| ---------------- | ------------ | --------------------------------- | ---------------- |
| id               | SERIAL (PK)  | Identifiant unique utilisateur    | PK               |
| firstname        | VARCHAR(100) | Prénom complet de l’utilisateur   | NOT NULL         |
| lastname         | VARCHAR(100) | Nom complet de l’utilisateur      | NOT NULL         |
| email            | VARCHAR(150) | Email de connexion/utilisateur    | UNIQUE, NOT NULL |
| password         | TEXT         | Hash du mot de passe              | NOT NULL         |
| created_at       | TIMESTAMP    | Date de création du compte        | Défaut = NOW()   |
| updated_at       | TIMESTAMP    | Dernière mise à jour du profil    | Défaut = NOW()   |

2. Table **contacts**
*Description : Stocke les informations sur les prospects et clients.*

| Colonne          | Type         | Description                              | Contraintes                                 |
| ---------------- | ------------ | ---------------------------------------- | ------------------------------------------- |
| id               | SERIAL (PK)  | Identifiant unique du contact            | PK                                          |
| user_id          | INT (FK)     | Référence vers `users.id`                | NOT NULL, FK → users(id), ON DELETE CASCADE |
| statut           | VARCHAR(20)  | Statut du contact : `prospect`, `client` | NOT NULL, CHECK                             |
| firstname        | VARCHAR(100) | Prénom complet de l’utilisateur          | NOT NULL                                    |
| lastname         | VARCHAR(100) | Nom complet de l’utilisateur             | NOT NULL                                    |
| email            | VARCHAR(150) | Email du contact                         | NULLABLE                                    |
| telephone        | VARCHAR(50)  | Numéro de téléphone                      | NULLABLE                                    |
| societe          | VARCHAR(150) | Nom de la société                        | NULLABLE                                    |
| created_at       | TIMESTAMP    | Date d’ajout du contact                  | Défaut = NOW()                              |
| updated_at       | TIMESTAMP    | Dernière mise à jour du contact          | Défaut = NOW()                              |

3. Table **interactions**
*Description : Historique des échanges avec un contact (appels, emails, rendez-vous).*

| Colonne           | Type        | Description                                  | Contraintes                                    |
| ----------------- | ----------- | -------------------------------------------- | ---------------------------------------------- |
| id                | SERIAL (PK) | Identifiant unique                           | PK                                             |
| contact_id        | INT (FK)    | Référence vers `contacts.id`                 | NOT NULL, FK → contacts(id), ON DELETE CASCADE |
| type              | VARCHAR(20) | Type d’interaction : `appel`, `email`, `rdv` | NOT NULL, CHECK                                |
| note              | TEXT        | Notes libres liées à l’interaction           | NULLABLE                                       |
| date_interaction  | TIMESTAMP   | Date de l’interaction                        | Défaut = NOW()                                 |
| created_at        | TIMESTAMP   | Date d’enregistrement dans le CRM            | Défaut = NOW()                                 |


4. Table **opportunities**
*Description : Gère les opportunités commerciales liées à un contact.*

| Colonne         | Type          | Description                                                                    | Contraintes                                    |
| --------------- | ------------- | ------------------------------------------------------------------------------ | ---------------------------------------------- |
| id              | SERIAL (PK)   | Identifiant unique                                                             | PK                                             |
| contact_id      | INT (FK)      | Référence vers `contacts.id`                                                   | NOT NULL, FK → contacts(id), ON DELETE CASCADE |
| statut          | VARCHAR(30)   | Statut : `prospecte`, `en_discussion`, `proposition_envoyee`, `gagne`, `perdu` | NOT NULL, CHECK                                |
| estimated_value | NUMERIC(12,2) | Montant estimé de l’opportunité                                                | NULLABLE                                       |
| creation_date   | TIMESTAMP     | Date de création de l’opportunité                                              | Défaut = NOW()                                 |
| closing_date    | TIMESTAMP     | Date de clôture (si gagné/perdu)                                               | NULLABLE                                       |
| created_at      | TIMESTAMP     | Date d’enregistrement dans le CRM                                              | Défaut = NOW()                                 |

5. Table **tasks**
*Description : Stocke les tâches et rendez-vous liés à un contact.*

| Colonne        | Type         | Description                               | Contraintes                                     |
| -------------- | ------------ | ----------------------------------------- | ----------------------------------------------- |
| id             | SERIAL (PK)  | Identifiant unique                        | PK                                              |
| contact_id     | INT (FK)     | Référence vers `contacts.id`              | NULLABLE, FK → contacts(id), ON DELETE SET NULL |
| title          | VARCHAR(255) | Description de la tâche ou RDV            | NOT NULL                                        |
| type           | VARCHAR(20)  | Type : `tache`, `rdv`                     | NOT NULL, CHECK                                 |
| due_date       | TIMESTAMP    | Date prévue de la tâche ou du rendez-vous | NULLABLE                                        |
| day_reminder   | INT          | Délai de rappel automatique (en jours)    | Défaut = 0                                      |
| statut         | VARCHAR(20)  | État : `a_faire`, `fait`                  | Défaut = `a_faire`, CHECK                       |
| created_at     | TIMESTAMP    | Date d’ajout de la tâche                  | Défaut = NOW()                                  |
