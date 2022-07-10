import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import { useEffect, useState } from "react"
import useTableOrForms from "./useTableOrForms"

export default function useClients() {
    const repo: ClientRepository = new ClientCollection()

    const { visibleTable, displayForms, displayTable } = useTableOrForms()

    const [client, setClient] = useState<Client>(Client.void())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            displayTable()
        })
    }

    function selectClient(client: Client) {
        setClient(client)
        displayForms()
    }
    async function deleteClient(client: Client) {
        await repo.delete(client)
        getAll()
    }

    function newClient() {
        setClient(Client.void())
        displayForms()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    return {
        client,
        clients,
        getAll,
        selectClient,
        deleteClient,
        newClient,
        saveClient,
        visibleTable,
        displayTable
    }
}