window.renderOrgChart = (data) => {
    var chart = new OrgChart(document.getElementById("orgChartContainer"), {
        nodes: data,
        nodeBinding: {
            field_0: "name",
            field_1: "title"
        }
    });
};

window.getOrgChartExampleData = () => {
    return [
        { id: 1, name: "John Doe", title: "CEO" },
        { id: 2, pid: 1, name: "Jane Smith", title: "CTO" },
        { id: 3, pid: 1, name: "William Johnson", title: "CFO" },
        { id: 4, pid: 2, name: "Emily Davis", title: "Lead Developer" },
        { id: 5, pid: 2, name: "Michael Brown", title: "QA Manager" }
    ];
};
