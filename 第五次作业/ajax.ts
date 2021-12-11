type IHeaders = {
    name: string
    value: string
}

 interface Options {
    data: string,
    headers: IHeaders,
    success: () => void
    error: () => void
}
class Ajax {
    data: string
    headers: IHeaders
    success: () => void
    error: () => void
    constructor(options:Partial<Options>) {
        this.data = options.data
        this.headers = options.headers
        this.success = options.success
        this.error = options.error
    }
   private httpReq(url: string, methods: string, options:Partial<Options>) {
        let xhr = new XMLHttpRequest()
        xhr.setRequestHeader(options.headers.name, options.headers.value)
        if (methods === 'get') {
            xhr.open('get', `url?${options.data}`, true)
            xhr.send()
        } else {
            xhr.open('post', url, true);
            xhr.send(`${options.data}`)
        }
        return xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                options.success()
                return xhr.responseText
            } else {
                options.error()
            }
        }
    }
    get(url: string, options: Partial<Options>) {
        let result = this.httpReq(url, 'get', options)
        return result
    }
    post(url: string, options:Partial<Options>) {
        let result = this.httpReq(url, 'get', options)
        return result
    }
}

