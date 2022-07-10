import Button from "../components/Button"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Forms from "../components/Forms"
import useClients from "../hooks/useClients"

export default function Home() {

  const {
    client,
    clients,
    selectClient,
    deleteClient,
    newClient,
    saveClient,
    visibleTable,
    displayTable
  } = useClients()
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-600
      text-white
    `}>
      <Layout title="Simple Registration">
        {visibleTable ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" fromColor='from-green-400' toColor='to-green-700'
                onClick={newClient}>New Client
              </Button>
            </div>
            <Table client={clients}
              selectedClient={selectClient}
              deletedClient={deleteClient} />
          </>
        ) : (
          <Forms
            client={client}
            clientChanged={saveClient}
            cancelled={displayTable} />
        )}
      </Layout>
    </div>
  )
}
