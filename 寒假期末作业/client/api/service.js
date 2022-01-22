function ajax(url, data = {}, type = 'get') {
    return new Promise(async(resolve, reject) => {
        let result
        if (type === 'get') {
            result = await axios.get(url, {
                params: data
            })
        } else {
            result = await axios.post(url, data)
        }
        resolve(result)
    })
}