// L'adresse de l'API vient du fichier .env (ou de Vercel en production)
const API_URL = import.meta.env.VITE_API_URL;

async function lireReponse(response) {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}

// Lire tous les clients
export async function getClients() {
  const response = await fetch(API_URL);
  return lireReponse(response);
}

// Créer un client
export async function createClient(client) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(client),
  });
  return lireReponse(response);
}

// Modifier un client
export async function updateClient(id, modifications) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifications),
  });
  return lireReponse(response);
}

// Supprimer un client
export async function deleteClient(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return lireReponse(response);
}
