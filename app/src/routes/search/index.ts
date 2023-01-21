
export async function submitForm(formData: {query: string}){
    const query: string = formData.query
    let sitemaps: string[] = []

    const res = await fetch(
        "https://0z8fpdntzj.execute-api.ap-northeast-2.amazonaws.com/crawler/cwl/stmap",{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                "Access-Control-Allow-Headers": "Content-Type",
                },
            body: JSON.stringify({'url': query})
        }
    )

    sitemaps = await res.json()
    console.log(sitemaps)
    
    return sitemaps
}