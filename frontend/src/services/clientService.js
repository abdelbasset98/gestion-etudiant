// Configure VITE_API_URL in frontend/.env; this default supports local development.
const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000/api/clients")
  .replace(/\/$/, "");

async function lireReponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || `Erreur HTTP ${response.status}`);
  }
  return data;
}

async function appelerApi(url, options) {
  try {
    return await lireReponse(await fetch(url, options));
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(`API inaccessible (${API_URL}). Vérifiez que le backend est démarré.`);
    }
    throw error;
  }
}

// Lire tous les clients
export async function getClients() {
  return appelerApi(API_URL);
}

// Créer un client
export async function createClient(client) {
  return appelerApi(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(client),
  });
}

// Modifier un client
export async function updateClient(id, modifications) {
  return appelerApi(`${API_URL}/${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifications),
  });
}

// Supprimer un client
export async function deleteClient(id) {
  return appelerApi(`${API_URL}/${encodeURIComponent(id)}`, { method: "DELETE" });
}
