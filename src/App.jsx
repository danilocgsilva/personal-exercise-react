import Table from "./Components/Table"
import Form from "./Components/Form"
import { useState } from "react"

export default function App() {
    const [ tableDatas, setTableData ] = useState([
        {
            "tableName": "Clients",
            "count": 14
        },
        {
            "tableName": "Orders",
            "count": 45
        },
        {
            "tableName": "OrderItems",
            "count": 102
        }
    ])

    function addTableEntry(tablesData, tableName, count) {
        const newTablesData = tablesData.slice()
        newTablesData.push({
            "tableName": tableName,
            "count": count
        })
        setTableData(newTablesData)
    }

    function removeTableEntry(tablesData) {
        const newTablesData = tablesData.slice(1)
        setTableData(newTablesData)
    }
    
    return (
        <>
            <Table
                tablesData={ tableDatas }
                removeTableEntry={ removeTableEntry }
            />
            <Form
                tablesData={ tableDatas }
                addTableEntry={ addTableEntry }
            />
        </>
    )
}