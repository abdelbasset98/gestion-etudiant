# Mon CRM — MERN (MongoDB Atlas + Express + React + Node) 

Application de gestion de clients (TP 2 — CRM MERN) : ajout, liste, recherche,
changement de statut (prospect / client / inactif) et suppression.

## Structure

```
backend/   API REST Express + Mongoose  (déployée sur Vercel : crm-backend)
frontend/  Interface React (Vite)       (déployée sur Vercel : crm-frontend)
```

## Installation et lancement

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env     # puis remplir MONGODB_URI
npm run dev              # http://localhost:4000
```

### 2. Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev              # http://localhost:3000
npm run build            # version de production (dossier dist/)
```

## Variables d'environnement

| Variable        | Où       | En local                            | Sur Vercel                                   |
|-----------------|----------|-------------------------------------|----------------------------------------------|
| `MONGODB_URI`   | backend  | URI Atlas (avec `/crm`)             | URI Atlas                                    |
| `FRONTEND_URL`  | backend  | `http://localhost:3000`             | adresse du frontend Vercel (sans `/` final)  |
| `PORT`          | backend  | `4000`                              | à ne pas définir                             |
| `VITE_API_URL`  | frontend | `http://localhost:4000/api/clients` | adresse du backend Vercel + `/api/clients`   |

> Ne jamais publier `backend/.env` : il contient le mot de passe de la base.

## API

| Méthode | Route              | Action             | Succès |
|---------|--------------------|--------------------|--------|
| GET     | `/api/clients`     | Lire tous          | 200    |
| GET     | `/api/clients/:id` | Lire un client     | 200    |
| POST    | `/api/clients`     | Créer              | 201    |
| PATCH   | `/api/clients/:id` | Modifier           | 200    |
| DELETE  | `/api/clients/:id` | Supprimer          | 200    |

Erreurs : 400 (champ/statut/identifiant invalide), 404 (introuvable), 409 (email existant), 500.

## Déploiement Vercel

1. Projet **crm-backend** : Root Directory `backend`, variable `MONGODB_URI`.
2. Projet **crm-frontend** : Root Directory `frontend`, variable `VITE_API_URL`.
3. Retour sur crm-backend : ajouter `FRONTEND_URL`, puis **Redeploy**.
