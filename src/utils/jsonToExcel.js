import xlsx from 'json-as-xlsx';

export default function jsonToExcel(json, fileName) {

    // transforma o json em um array de titulos das colunas
    const dataColumn = Object.keys(json[0]);
    
    const settings = {
        fileName: `${new Date().toLocaleDateString()} - ${fileName}`,	
    };

    const data = [
        {
            sheet: fileName,
            columns: dataColumn.map(column => ({ label: column, value: column })),
            content: json
        }
    ]
    xlsx(data, settings, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const link = document.createElement('a');
        link.download = `${fileName}.xlsx`;
        link.href = data;
        link.click();
    });
}
