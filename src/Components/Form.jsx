export default function Form({ addTableEntry, tablesData }) {

    function handleSubmit(tablesData) {
        const tableNameInput = document.getElementById("table_name")
        const countInput = document.getElementById("table_count")

        if (tableNameInput.value == "" || countInput.value == "") {
            alert("Put a table name and a value!")
            return
        }

        addTableEntry(tablesData, tableNameInput.value, parseInt(countInput.value))
        tableNameInput.value = ""
        countInput.value = ""
    }

    return (
        <div className="fixed-bottom form-highlight myfooter">
            <div className="container">
                <div className="form-group row form-group-custom">
                    <label htmlFor="table_name" className="col-sm-2">Table name</label>
                    <div className="col-sm-10">
                        <input type="text" name="table_name" id="table_name" className="form-control" />
                    </div>
                </div>
                <div className="form-group form-group-custom row">
                    <label htmlFor="table_count" className="col-sm-2">Table count</label>
                    <div className="col-sm-5">
                        <input type="number" name="table_count" id="table_count" className="form-control" />
                    </div>
                    <div className="col-sm-5 my-submit" align="center">
                        <button className="btn btn-primary btn-lg" onClick={() => handleSubmit(tablesData)}>Add entry</button>
                    </div>
                </div>
            </div>
        </div>
    )
}