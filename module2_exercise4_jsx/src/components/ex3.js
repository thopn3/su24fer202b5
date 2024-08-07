const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
    name: "Costas",
    address: {
        street: "Lalaland 12"
    }
};

const Ex31 = () => {
    return (
        <div>
            <h3>List of Company name</h3>
            <ol>
            {
                companies?.map(c => (
                    <li key={c.name}>{c.name}</li>
                ))
            }
            </ol>
        </div>
    )
}

const Ex33 = () => {
    const result = companies?.filter(c => c.category==="Retail")
    return (
        <div>
            <h3>List of Company name - Category = Retail</h3>
            <table style={{border:"1px solid black"}}>
                {
                    result?.map(c => (
                        <tr key={c.name}>
                            <td>{c.name}</td>
                            <td>{(c.start+1)}</td>
                            <td>{c.end}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

const Ex34 = () => {
    companies.sort((a,b) => b.end - a.end);
    return (
        <div>
            <h3>List of Companies - Sorted by End date</h3>
            <table>
                {
                    companies?.map(c => (
                        <tr key={c.name}>
                            <td>{c.name}</td>
                            <td>{c.start}</td>
                            <td>{c.end}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

// Sort by category - ASC
const Ex35 = () => {
    companies.sort((a,b) => {
        const catA = a.category.toUpperCase();
        const catB = b.category.toUpperCase();
        if(catA < catB)
            return -1;
        if(catA > catB)
            return 1;
        return 0;
    });
    return (
        <div>
            <h3>List of Companies - Sorted by Category</h3>
            <table>
                {
                    companies?.map(c => (
                        <tr key={c.name}>
                            <td>{c.name}</td>
                            <td>{c.category}</td>
                            <td>{c.start}</td>
                            <td>{c.end}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}


export {Ex31, Ex33, Ex34, Ex35};